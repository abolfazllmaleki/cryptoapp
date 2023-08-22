import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { stat } from "fs";

interface portfolioDataTypes{
    Asset:AssetTypes[],
    transactions:object[];
    Revenue:number;
    logo:string;
    amount:number;
  


}
interface AssetTypes{
    coin:string;
    amount:Number;
    logo:string;
    Symbol:string;
    uuid:string;


}

  

const initialState:portfolioDataTypes={
    Asset: [
        {coin: 'Ethereum', amount: 1, logo: 'https://cdn.coinranking.com/rk4RKHOuW/eth.svg', Symbol: 'ETH', uuid: 'razxDUgYGNAdQ'},
    
        {coin: 'BNB', amount: 4, logo: 'https://cdn.coinranking.com/B1N19L_dZ/bnb.svg', Symbol: 'BNB', uuid: 'WcwrkfNI4FUAe'},
    
        {coin: 'Tether USD', amount: 987, logo: 'https://cdn.coinranking.com/mgHqwlCLj/usdt.svg', Symbol: 'USDT', uuid: 'HIVsRcGKkPFtW'},
    ],
    transactions: [
         

    {coin: 'Ethereum', amount: 1, transactionType: 'buy', date: '4 Augus', logo: 'https://cdn.coinranking.com/rk4RKHOuW/eth.svg',uuid:"razxDUgYGNAdQ"}
    ],
    Revenue: 10000,
    logo: "",
    amount: 0,

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
        },
        setAsset:(state,action:PayloadAction<number[]>)=>{
            state.Asset[action.payload[0]].amount=Number(state.Asset[action.payload[0]].amount)+Number(action.payload[1])
        },
        addAsset:(state,action:PayloadAction<AssetTypes>)=>{
            state.Asset.push(action.payload)

        },

        
    },


});
export const{setRevenue}=portfolioDataSlice.actions
export const{add}=portfolioDataSlice.actions;
export const{setAsset}=portfolioDataSlice.actions;
export const{addAsset}=portfolioDataSlice.actions;
export default portfolioDataSlice.reducer