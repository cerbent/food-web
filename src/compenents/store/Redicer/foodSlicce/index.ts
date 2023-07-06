import {createReducer, createSlice} from "@reduxjs/toolkit";


interface IFoods {
    product: any[]
}



let product:any = localStorage.getItem("product")

const initialState:IFoods = {
    product:JSON.parse(product) || []
}



export const FoodReducer = createSlice({
    name: "FOOD",
    initialState,
    reducers: {
        getProduct(state,action){
            state.product = [...state.product,action.payload]
        }
    }
})


export default FoodReducer.reducer

export const {getProduct} = FoodReducer.actions