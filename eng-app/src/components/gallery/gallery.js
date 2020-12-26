import React from 'react'
import Card from './card'
import './gallery.sass'

let massCard = [
    {word:'Unholy',translate:'dangerous; likely to be harmful;not respecting the laws of a religion',example:'an unholy alliance between the medical profession and the pharmaceutical industry',synonym:'impious,godless',img:'https://i.ytimg.com/vi/wcpy_3LAlgc/maxresdefault.jpg'},
    {word:'2',translate:'2; 2 2igion',example:'an unho2 pharmaceutical industry',synonym:'im2',img:'https://i.ytimg.com/vi/wcpy_3LAlgc/maxresdefault.jpg'},
    {word:'3',translate:'3;3',example:'an un3',synonym:'3',img:'https://i.ytimg.com/vi/wcpy_3LAlgc/maxresdefault.jpg'}

]



export default function Gallery(){
    const item = massCard.map(function(item){
        console.log(item)
        return <Card word={item.word} translate={item.translate} example={item.example} synonym={item.synonym} img={item.img}/>
    })
    return (
        <>
        <div className='card-wrapper'>
        <div className='slider'>
        {item}
        </div>
        </div>
        </>
        )
}

// import  React  from "react";
// export default function NavbarSide(){
//     return (
//         <>
//             <p>This is пфддукн</p>
//         </>
//     )
// }