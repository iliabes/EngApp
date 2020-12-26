import React, { useState,useEffect } from 'react';
import './navbarAside.sass'





export default function NavbarSide(props){
    // const [visible, setVisible] = useState(true);
    const [visible, setVisible] = useState(() => {
        const initialState = true;
        return initialState;
      });
      //допис функци закрытия с кнопки
    function changeVisible(){
        setVisible(false)
        console.log(visible)
    };
    let classForNavAside = 'navbarAside w0'
    console.log('bla')
    useEffect(() => {
        if(props.vis){
            console.log('true')
            setVisible(false)
        }else{
            console.log('false')
            setVisible(true)
        }
        console.log(props.vis)
      });

    if(visible){
        return (
            <>
                <div className='navbarAside w'>
                    <ul>
                        <li>Список слов</li>
                        <li>Синонимы</li>
                        <li>Слово-изображение</li>
                        <li onClick={changeVisible}>-></li>
                    </ul>
                </div>
            </>
    )
    }else{
        return (
            <>
                <div className='navbarAside w0' >
                    <ul>
                        <li>Список слов</li>
                        <li>Синонимы</li>
                        <li>Слово-изображение</li>
                        <li onClick={changeVisible}>-></li>
                    </ul>
                </div>
            </>
    )
    }





}