import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import logo from '../logo.svg';

export default function Layout() {
    return(
        <>
        <header className='layout'>
            <img src={logo} height="80vmin" alt="logo" />
            <ul>
                <li>
                    <NavLink to='/react_labs'>Главная</NavLink>
                </li>
            </ul>
        </header>
        <Outlet />
        </>
    )
}