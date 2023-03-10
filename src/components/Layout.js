import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import '../css/layout.css'

export default function Layout() {
    return(
        <>
        <header className='layout'>
            <img src={logo} width="77vmax" alt="logo" />
            <ul className='link-hover-center'>
                <li>
                    <NavLink to='/' id="main-link">Главная</NavLink>
                </li>
            </ul>
        </header>
        <Outlet />
        </>
    )
}