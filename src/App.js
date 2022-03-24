
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import { useEffect, useState } from 'react';
import Modals from './components/Modals/Modals';
// import Modal from 'react-modal/lib/components/Modal';
import Modal from 'react-modal';

import { CgCloseR } from "react-icons/cg";
Modal.setAppElement("#root");


function App() {
  const [guns,setGuns]=useState([])
  const [cart,setCart]=useState([])
  const handelAddToCart=(gun)=>{
    const newCart=[...cart,gun]
    setCart(newCart)
  }

  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setGuns(data))
  },[])
    
  const [modalIsOpen, setIsOpen] = useState(false);
const  openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "300px",
      width: "600px",
      // overflow: "auto",
    },
  };
  return (
    <div >
     <Navbar cart={cart} toggleModal={openModal} ></Navbar>
     {/* <Modals cart={cart}></Modals> */}
     <div className="card-container">
       {
         guns.map(gun=><Card key={gun.id} gun={gun} handelAddToCart={handelAddToCart} cart={cart}></Card>)
       }
     
     </div>
     <div>
     <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <button className='modal-close-button' onClick={closeModal}>
          <CgCloseR size={25} />
        </button>
        <div>
        {cart.length === 0 && (
          <div className='cart-warning'>
           <p> Cart is empty </p>
          </div>
        )}
        <div>
        {cart.map((item) =><Modals key={item.id}item={item}></Modals> )}
        </div>
           
        </div>
        
      </Modal>
    
     </div>
     
    </div>
  );
}

export default App;
