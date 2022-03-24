import React from 'react';
import './Modals.css'

const Modals = (props) => {
    console.log(props.item.name);
    return (
        <div className='modals'>
             <h1>{props.item.name}</h1>
            <img src={props.item.img} alt="" />
        </div>
    );
};

export default Modals;