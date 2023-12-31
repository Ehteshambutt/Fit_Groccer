import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import axios from 'axios';
import './proceed.css'
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Removecart } from "./../../Redux/Action/actions";

const CheckoutForm = (props) => {
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const { cartItems } = useSelector((reducers) => reducers.cartReducer);

     const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const filterUniqueItems = (cartItems) => {
        const uniqueItems = {};
        cartItems.forEach((item) => {
          if (!uniqueItems[item?.id]) {
            uniqueItems[item?.id] = { ...item, count: 1 }; // Create a new object with the count property
          } else {
            uniqueItems[item?.id].count += 1;
          }
        });
        return Object.values(uniqueItems);
      };
      
      // Apply the filtering function
      const uniqueCartItems = filterUniqueItems(cartItems);
      const totalPrice = uniqueCartItems.reduce((accumulator, item) => {
        return accumulator + item.price * item.count;
      }, 0);
      console.log(totalPrice, 'uniqueCartItems');

  return (
    <>
    <div class="position-relative">
    <div class="position-absolute top-0 start-50 translate-middle">  <h2 style={{fontWeight:'bold'}}>Checkout</h2>
</div>

  </div>
  <h2 style={{fontWeight:'bold'}}>Payment</h2>





  <div class="card mt-50 mb-50 bg-light body1">
       
            <form>
                <div class="row row-1 bg-light">
                    <div class="col-2"><img class="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png"/></div>
                    <div class="col-7">
                      <p style={{fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '500',
lineHeight: '21px',
letterSpacing: '0em',
textAlign: 'left',
color:'#000000',
fontWeight:'bold'
}}>Debit/Credit card</p>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <a href="#"><div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
 
</div>

</a>
                    </div>
                </div>
                <div class="row row-1 bg-light">
                    <div class="col-2"><img  class="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png"/></div>
                    <div class="col-7">
                    <p style={{fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '500',
lineHeight: '21px',
letterSpacing: '0em',
textAlign: 'left',
color:'#000000',
fontWeight:'bold'
}}>PayPal</p>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <a href="#"><div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
 
</div>

</a>
                    </div>
                </div>
                <div class="row row-1 bg-light">
                    <div class="col-2"><img class="img-fluid1" src="https://res.cloudinary.com/alpja/image/upload/v1704042171/Rectangle_54_b7n351.png"/></div>
                    <div class="col-7">
                    <p style={{fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '500',
lineHeight: '21px',
letterSpacing: '0em',
textAlign: 'left',
color:'#000000',
fontWeight:'bold'
}}>Payoneer</p>                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <a href="#"><div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
 
</div>

</a>
                    </div>
                </div>
            </form>
        </div>

<div className='ordr'>
Order details
</div>
<div class="d-flex justify-content-center align-items-center" style={{height: '25vh'}}>
  <div class="card border-0" style={{width: '18rem',background:'#F0F4FC'}}>
    <div class="card-body border-0">
    
      <p class="card-text">1x Green salad
1x fresh vegetable
1x Mixed salad</p>
     
    </div>
  </div>
</div>

        <div class="position-relative">
        <div class="position-absolute top-0 start-20">

<button type="button" class=""

style={{
width: '155px',
height: '62px',
top: '812px',

padding: '12px 24px',
borderRadius: '50px',
}}>Total :{totalPrice}</button>
</div>
            <div class="position-absolute top-0 start-50 translate-middle">

            <button type="button" class="btn btn-lg text-light"
            onClick={()=>navigate('/Congrat')}
            style={{
  background: '#E74C1B',
  width: '155px',
  height: '62px',
  top: '812px',

  padding: '12px 24px',
  borderRadius: '50px',
}}>Pay Now</button>
            </div>

           
</div>

      </>
  )
}

export default CheckoutForm