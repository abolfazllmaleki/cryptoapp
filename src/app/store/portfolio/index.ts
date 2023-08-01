import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Coins{
    transactions:object[];
    Revenue:number


}

  

const initialState:Coins={
    transactions:[{coin:'Bitcoin',amount:10,transactionType:'buy'}],
    Revenue:100,
}


const portfolioDataSlice=createSlice({
    name:"portfolioData",
    initialState,
    reducers:{
        add:(state,action:PayloadAction<object>)=>{
            state.transactions.push(action.payload)

        }
        
    },


});
export const{add}=portfolioDataSlice.actions;
export default portfolioDataSlice.reducer