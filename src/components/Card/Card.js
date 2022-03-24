import React from 'react';
import './Card.css'
import { BsFillCartFill  } from "react-icons/bs";
const Card = (props) => {
   const {name,price,img,capacity,action,bullet}=props.gun
   const{handelAddToCart}=props
//    console.log(props.cart);
    return (
        <div className='card'>
            <div className='image-container'>
            <img  src={img} alt="" />
            </div>
            <div className='gun-info'>
            <h1>{name}</h1>
                <p>Bullet type:{bullet}</p>
                <p>Capacity:{capacity}</p>
                <p>Action:{action}</p>
            </div>
            <div className='add-to-cart'>
                <button onClick={()=>handelAddToCart(props.gun)}><BsFillCartFill className='icon'/></button>
                
                <h1>${price}</h1>
            </div>
        </div>
    );
};

export default Card;