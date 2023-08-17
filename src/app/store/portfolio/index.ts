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

}

  

const initialState:portfolioDataTypes={
    Asset: [
        { coin: 'Ethereum', amount: 5, logo: 'https://cdn.coinranking.com/rk4RKHOuW/eth.svg', Symbol: 'ETH' },
        { coin: 'USDC', amount: 80, logo: 'https://cdn.coinranking.com/jkDf8sQbY/usdc.svg', Symbol: 'USDC' }
    ],
    transactions: [
        { coin: 'Bitcoin', amount: 10, transactionType: 'buy', date: '5 july', logo: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg' },


        { coin: 'Tether USD', amount: 10, transactionType: 'buy', date: '7 Augus', logo: 'https://cdn.coinranking.com/mgHqwlCLj/usdt.svg' },


        { coin: 'Tether USD', amount: 2, transactionType: 'sell', date: '7 Augus', logo: 'https://cdn.coinranking.com/mgHqwlCLj/usdt.svg' },


        { coin: 'XRP', amount: 8, transactionType: 'buy', date: '7 Augus', logo: 'https://cdn.coinranking.com/B1oPuTyfX/xrp.svg' }
    ],
    Revenue: 10000,
    logo: "",
    amount: 0
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

        }
        
    },


});
export const{setRevenue}=portfolioDataSlice.actions
export const{add}=portfolioDataSlice.actions;
export const{setAsset}=portfolioDataSlice.actions;
export const{addAsset}=portfolioDataSlice.actions;
export default portfolioDataSlice.reducer