import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../../types/food";

interface IOrder {
    order:IProduct[]
    product: any[]
    tovar:any[],
}

const task: any = localStorage.getItem("order")
const prod: any = localStorage.getItem("product")
const initialState:IOrder = {
    order:JSON.parse(task) || [],
    product: JSON.parse(prod) || [],
    tovar: [],
}

export const OrderReducer = createSlice({
    name: "ORDER",
    initialState,
    reducers: {
        getOrder(state,action: PayloadAction<any>){
                state.order = [...state.order,{...action.payload}]
        },
        getProductt(state,action){
            const found = state.tovar.find(el => el.id === action.payload.id)
            if (found){
                state.tovar = state.tovar.map(el => el.id === found.id ? {...el,id: el.id + 1}: el)
            }else {
                state.tovar = [...state.tovar,{...action.payload, id: 1}]
            }
        },
        getDelete(state,action) {
            state.tovar = state.tovar.filter(el => el.id !== action.payload.id)
        },
        getDel(state,action: PayloadAction<any>) {
            state.order = state.order.filter((el:any) => el.id !== action.payload.id)
        }
    }
})

export default OrderReducer.reducer

export const {getOrder,getDelete,getProductt,getDel} = OrderReducer.actions