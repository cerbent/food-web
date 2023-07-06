import {dispatchStore} from "../index";
import {getDel, getOrder} from "../orderSlice/orderSlice";


export const AdtooOrderSuccess = (bas:any) => async (dispatch:dispatchStore) => {
    const baskets: any = localStorage.getItem("order")
    let tasks = JSON.parse(baskets) || []
    const foundBas = tasks.find((el:any) => el.id === bas.id)
    if (foundBas) {
        tasks = tasks.map((el: any) => el.id === foundBas.id ? {...el,quantity:el.quantity + 1}:el)
    }else {
        tasks = [...tasks, {...bas}]
    }
    localStorage.setItem("order",JSON.stringify(tasks))
    dispatch(getOrder(bas))
}


export const getDelSuccess = (del:any) => async (dispatch:dispatchStore) => {
    const orderDel:any =  localStorage.getItem("order")
    let task = JSON.parse(orderDel) || []
    task = task.filter((el:any) => el.id !== del.id)
    localStorage.setItem("order",JSON.stringify(task))
    dispatch(getDel(del))
}


