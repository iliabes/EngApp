import React, { useState } from 'react';
import './navbar.sass'
import logo from '../../img/logo.png'
import NavbarSide from '../navbarAside/navbarSide'

export default function Navbar(){
    const [visibleNavbarAisde, setVisibleNavbarAisde] = useState(true);
    function changeVisible(){
        setVisibleNavbarAisde(!visibleNavbarAisde)
    }
    return (
        <>
            <div className='navbar'>
                <ul>
                    <li className='navbarItem li-logo'><img className='logo' src={logo}></img></li>
                    {/* <li className='navbarItem'><a >Главная</a></li> */}
                    <li className='navbarItem'><a onClick={changeVisible} >Учить слова</a></li>
                    <li className='navbarItem'><a >Добавить слово</a></li>
                </ul>
                </div>
                <NavbarSide vis={visibleNavbarAisde}/>
        </>
    )
}