import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../types/Hooks";
import {getDelete, getProductt} from "../store/Redicer/orderSlice/orderSlice";
import {removeListener} from "@reduxjs/toolkit";

const Exam = () => {
    const [img, setImg] = useState<ArrayBuffer | string | any>("")
    const [value,setValue] = useState<string>("")
    const [Email,setEmail] = useState<string>("")
    const {tovar} = useAppSelector(state => state.order)
    const [redu,setRedu] = useState(false)
    const [del,setdel] = useState(false)
    const ReaderFile = new FileReader()
    const dispatch = useAppDispatch()
    ReaderFile.onloadend = () => {
        setImg(ReaderFile.result)
    }

    const HandleClick = (event: React.ChangeEvent<any>) => {
        ReaderFile.readAsDataURL(event.target.files[0])
    }


    const HandleEmail = (event: React.ChangeEvent<any>) => {
        setEmail(event.target.value)
    }

    const HandleValue = (event: React.ChangeEvent<any>) => {
        setValue(event.target.value)
    }

    const food =  {
        id: 1,
        image: img,
        value: value,
        email: Email
    }
    const  Click = () => {
            dispatch(getProductt(food))
    }
    const Read = () => {
        setRedu(!redu)
    }

    console.log("Product",tovar)


    return (
        <div>


            <div className={'container  items center'}>
                <div className={'flex items-center flex-col'}>
                    <input onChange={(event) => HandleValue(event)} className={'bg-gray-300 w-[250px] h-[30px] my-2 px-2'} type="text"/>
                    <input onChange={(event) => HandleEmail(event)} className={'bg-gray-300  w-[250px] h-[30px] my-2 px-2'}  type="email"/>
                    <input onChange={(event) => HandleClick(event)} className={'bg-gray-300 w-[250px] h-[30px] my-2 px-2 placeholder-emerald-50'} type="file"/>
                        <button onClick={Click}>create</button>
                    <button onClick={Read}>read</button>
                </div>


            </div>
            <div>
                <div  style={{display: redu ? "block" : "none"}}>
                    <div className={"blocks"}>
                        {
                            tovar.map(el =>
                                <div className={'flex items-center justify-around bg-red-600 w-[300px] h-[auto] mx-[40%] my-[5%]'}>
                                    <img width={50} src ={el.image} alt=""/>
                                    <h1>{el.value}</h1>
                                    <h2 className={'text-white'}>{el.email}</h2>
                                    <button  onClick={() => dispatch(getDelete(food))}>delete</button>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Exam;