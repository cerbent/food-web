import React from 'react';
import logo from "../../img/image 2.svg"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div id={'Header'}>
            <div className={'container'}>
                <div className={'header flex items-center justify-between'}>
                    <img src={logo} alt=""/>
                    <div className={'mx-3'}>
                        <NavLink className={'mx-2'} to={'/'}>Menu</NavLink>
                        <NavLink className={'mx-2'} to={'/order'}>Order</NavLink>
                        <NavLink className={'mx-2'} to={'/admin'}>Admin</NavLink>
                        <NavLink className={'mx-2'} to={'/exam'}>Exam</NavLink>
                        <NavLink className={'mx-2'} to={'/accordion'}>accordion</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;