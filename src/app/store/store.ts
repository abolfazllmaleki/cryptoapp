import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import dataSlice from './coins-data/index'

export const store = configureStore({
    reducer: {
        data:dataSlice,
        
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()