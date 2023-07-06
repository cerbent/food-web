import React, {useState} from 'react';
import {getProduct} from "../store/Redicer/foodSlicce";
import {useAppDispatch, useAppSelector} from "../types/Hooks";
import {IProduct} from "../types/food";

const Admin = () => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState<string>("")
    const [price, setPrice] = useState<string>("")
    const [img, setImg] = useState<ArrayBuffer | string | any>("")
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
        setImg(fileReader.result)
    }
    const handleChangeUrl = (event : React.ChangeEvent<any>) => {
      fileReader.readAsDataURL(event.target.files[0])
    }
    const food:IProduct = {
        id: 1,
        title:value,
        price:price,
        img:img
    }
    const handleClick = (food:IProduct) => {
        let product:any = localStorage.getItem("product")
        let foods = JSON.parse(product) || []
        foods = [...foods,{...food}]
        localStorage.setItem("product",JSON.stringify(foods))
        dispatch(getProduct(food))

    }
    console.log(food)
    return (
        <div id={'admin'}>
            <div className={'container bg-blue-800'}>
                <h1>CREATE PRODUCT</h1>
                <div className={'admin flex items-center justify-around'}>
                  <div className={'flex flex-col'}>
                      <input type="file" onChange={(event) => handleChangeUrl(event)}/>
                      <input className={'my-10'} type="text" onChange={(event => setValue(event.target.value))}/>
                      <input type="number" onChange={(event => setPrice(event.target.value))}/>
                      <button className={'text-yellow-300'} onClick={() => handleClick(food)}>create</button>
                  </div>
                  <div className={'admin--block'}>
                      <h1 className={'flex items-center justify-center'}>place for a photo</h1>
                      <img src={img} width={200} alt=""/>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;