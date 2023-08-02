import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Coins{
    transactions:object[];
    Revenue:number


}

  

const initialState:Coins={
    transactions:[{coin:'Bitcoin',amount:10,transactionType:'buy'}],
    Revenue:10000,
}


const portfolioDataSlice=createSlice({
    name:"portfolioData",
    initialState,
    reducers:{
        add:(state,action:PayloadAction<object>)=>{
            state.transactions.push(action.payload)

        },
        setRevenue:(state,action:PayloadAction<number>)=>{
            state.Revenue=action.payload
        }
        
    },


});
export const{setRevenue}=portfolioDataSlice.actions
export const{add}=portfolioDataSlice.actions;
export default portfolioDataSlice.reducer