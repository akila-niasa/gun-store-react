import React from 'react';
import './Navbar.css'
import { BsFillCartFill  } from "react-icons/bs";
import Modals from '../Modals/Modals';
const Navbar = (props) => {
    console.log(props.cart);
    const {toggleModal}=props
    // console.log(toggleModal);
    return (
        <div className='navbar'>
            <h1>GUN STORE</h1>
            <div className='cart-counter' onClick={toggleModal}>
                
            <BsFillCartFill color='#fff'/>
            <span>{props.cart.length}</span>
            </div>
            
        </div>
    );
};

export default Navbar;