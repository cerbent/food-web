import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../types/Hooks";
import {IProduct} from "../types/food";
import {getOrder} from "../store/Redicer/orderSlice/orderSlice";
import {AdtooOrderSuccess} from "../store/Redicer/ActionCreators";

const Menu = () => {
    const dispatch = useAppDispatch()
    const {product} = useAppSelector(state => state.food)
    const getToOrder = (el:IProduct) => {
      dispatch(AdtooOrderSuccess(el))
    }
    console.log(product)
    return (
        <div className={'container flex justify-between'}>
            {
                product.map((el:any)=> (
                    <div className={'flex flex-col items-center'}>
                        <img src={el.img} width={200} alt=""/>
                        <h1>{el.title}</h1>
                        <h2>{el.price}$</h2>
                        <button className={'w-[100px] h-[50px] bg-yellow-500 rounded-3xl text-white'} onClick={() => getToOrder(el)}>To order</button>
                    </div>
                ))
            }
            </div>
    );
};

export default Menu;