import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Coins{
    data:object[]|undefined;
    loading: boolean;
    error: string | null;

  }
  

const initialState:Coins={
    data:[],
    loading:false,
    error:null,

}

export  const fetchUsers = createAsyncThunk(
    "fetch",
    async(_, thunkAPI) =>{ 
        try{
        // const {data} =await axios.get('https://api.coinranking.com/v2/coins');
        // return(data.data);
        const response = await fetch("https://api.coinranking.com/v2/coins");
        const coins = await response.json().then((actualData) => {return(actualData.data)});
        


        return coins;
        }catch(error){
            return thunkAPI.rejectWithValue("Failed to fetch issues.");
        }
    });

const dataSlice=createSlice({
    name:"coinsdata",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchUsers.pending,(state)=>{
                state.loading=true,
                state.error=null
            })
            .addCase(fetchUsers.rejected,(state,action)=>{
                state.loading=false,
                state.error=action.error.message || 'Something went wrong';
            })
            .addCase(fetchUsers.fulfilled,(state,action)=>{
                state.loading=true,
                state.data=(action.payload.coins)

            })

    }

});
export default dataSlice.reducer