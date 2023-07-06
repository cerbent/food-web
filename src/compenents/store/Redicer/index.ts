import {combineReducers} from "redux";
import FoodReducer from "./foodSlicce";
import {configureStore} from "@reduxjs/toolkit";
import OrderReducer from "./orderSlice/orderSlice";


export const rootState = combineReducers({
        food: FoodReducer,
        order:OrderReducer
})


export const setUpstore = () => {
    return configureStore({reducer:rootState})
}


export type foodStore = ReturnType<typeof rootState>
type appDispatch = ReturnType<typeof setUpstore>
export type dispatchStore = appDispatch["dispatch"]