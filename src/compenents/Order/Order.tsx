import React from 'react';
import {useAppDispatch, useAppSelector} from "../types/Hooks";
import {getDelSuccess} from "../store/Redicer/ActionCreators";

const Order = () => {
    const {order} = useAppSelector(state => state.order)
    const dispatch = useAppDispatch()
    console.log(order)
    return (
        <div>
            {
            order.map(el => (
                <div className={'container'}>

                    <div className="relative overflow-x-auto my-10">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img width={100} src={el.img} alt=""/>
                                </th>
                                <td className="px-6 py-4">
                                    {el.title}
                                </td>
                                <td className="px-6 py-4">
                                    <span>{el.price}</span>
                                </td>
                                <td onClick={() => dispatch(getDelSuccess(el)) } className="px-6 py-4 cursor-pointer">
                                    delete
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>))
            }
        </div>
    );
};

export default Order;