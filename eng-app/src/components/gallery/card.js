import React from "react";



export default function Card(props){
    return (
        <React.Fragment>
            <div className='card'>
                <div className='front'>
                    <div className='img-cont'>
                         <img src={props.img}/>
                    </div>
                    <div className='word'>
                        <p>{props.word}</p>
                    </div>
                </div>
                <div className='back'>
                    <div className='translate'>
                        <p className='example'>Pranslate:</p>
                        <p>​{props.translate}</p>
                    </div>
                    <div className='translate'>
                        <p className='example' >example:</p>
                        <p>​​{props.example}</p>
                    </div>
                    <div className='translate'>
                        <p className='example'>synonym:</p>
                        <p>​​{props.synonym}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}