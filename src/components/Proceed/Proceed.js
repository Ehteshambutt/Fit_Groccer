import React, { useEffect, useState } from "react";
import { Removecart } from "./../../Redux/Action/actions";
import axios from 'axios'
import {  useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { proceeds } from "../../instance";
import CheckoutForm from "./checkoutForm";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { Link } from "react-router-dom";
const stripePromise = loadStripe('pk_test_51MaOSqE6HtvcwmMAdMy883aTXdyWTHnC8vQEIODCdn8OSGY8ePIRmlyGibnWuS9WYw1vqLYLRns32dQHzlmDVFr200yWroca7l');
const Proceed = () => {
  const [product, setProduct] = useState("");
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [type, setSerivce] = useState("");
  const [controllingTime, setControllingTime] = useState([]);
  const [timeCheck,setTimeCheck]=useState(false)
  const navigate=useNavigate()

  const { cartItems } = useSelector((reducers) => reducers.cartReducer);
console.log(cartItems,'cartItems')
  const item = cartItems;
  useEffect(()=>{
 try {
     

       


      axios.get("http://localhost:5000/checkout")
      .then(data=>{
        
        
        setControllingTime(data);

      })
      .catch(error=>{
        console.log(error)
      })
    }
    catch (ex){
      console.log(ex)
    }
  },[])
  console.log(time,"==========>time")
  console.log(controllingTime,"check=========>data")

  const totals = item
    .map((item) => Number(item?.price))
    .reduce((prev, curr) => prev + curr, 0);
    const sending_data = {
        firstName:firstName,
        lastName:lastName,
        Phone: Phone,
        email:email,
        address:address,
        city:city,
        total:'',
        country:country,
        cartItems:cartItems,
        time:time
      }
 console.log(cartItems,"cardData")
  let handleSubmit = async (e) => {
    e.preventDefault();
     setTimeCheck(false);
    
   
    try {
      const data_order = {
        firstName:firstName,
        lastName:lastName,
        Phone: Phone,
        email:email,
        address:address,
        city:city,
        total:'',
        country:country,
        cartItems:cartItems,
        time:time
      }
     
 
      
 
  axios.post("http://localhost:5000/checkout",data_order)
      .then(data=>{
        console.log(data_order)
        console.log(data,"=============>data")
if(data?.data?.message==="checkout saved"){
alert("Address submitted successfully Submitted")
}if(data?.data?.message==="time change"){
  alert("please select another time")
}
      })
      .catch(error=>{
        console.log(error)
      })
}
     
    
    catch (ex){
      console.log(ex)
    }
  }

  // useEffect(() => {
  //   proceeds.get('checkout')
  //           .then(res => {
  //             setProduct(res.data)
  //             console.log("checkout",res)
  //           })
  //           .catch(err => {
  //               if (err.response.data.error) {
  //                   console.log(err.response.data.error)
  //               }
  //           })
  // }, [])
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
      <div className="container">
        <main>
          <div className="py-5 text-center">
          
            <h2 style={{fontFamily: 'Poppins',
fontSize: '25px',
fontWeight: '600',
lineHeight: '38px',
letterSpacing: '0em',
textAlign: 'left',
}}>My Bucket</h2>
         
          </div>

          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Total Items</span>  
               
                <span className="badge bg-primary rounded-pill">
                  {cartItems.length}
                </span>
              </h4>

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (Rs)</span>
                <strong>Rs.{totalPrice}</strong>
              </li>
            </div>
          
          </div>
        </main>



        <div
        style={{ width: "100%" }}
        className="row gx-4 gx-lg-5 row-cols-2  row-cols-md-1 mt-5 ml-3 mr-3
                row-cols-xl-1 justify-content-start "
      >
                {uniqueCartItems.map((service,i) => ( // add this "products &&" before products.map
                  <div key={i}>
                  <div className="card mb-3 ml-5 mr-5" style={{ maxWidth: "100%" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        {/* <Link to={{pathname:`/service/${service._id}`, obj:{service}}}> */}
                          {/* {console.log("I am Console", id)} */}
                               <img
                            className="card-img-top"
                            src={service?.img}
                            width="100%"
                            height="200"
                            alt="..."
                          />
                        {/* </Link> */}
                        {" "}
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          {" "}
                          <div className="card-body p-4 pb-0">
                            <div className="text-left ">
                              <h5 className="title sname">
                                <span className="subtitle d-flex">{service?.title} </span>
                                <span className="prc d-flex justify-content-end " style={{color:'#E74C1B'}}>
                                  {" "}
                                   $.<span className="currency" style={{color:'#000000'}}>
                                   {service?.price}
                                  </span>{" "}
                                </span>
                              </h5>
                              <span className="prc d-flex justify-content-start " style={{color: '#A1A1A1'
}}>
                                  {" "}
                                  Quantity.<span className="currency" style={{color: '#A1A1A1'
}}>
                                   {service?.count}
                                  </span>{" "}
                                </span>

                              <div className="d-flex justify-content-between">
                                {/* <p>
                                  Quantity <span> Unit</span>
                                </p>
                                <p className="rounded-pill border px-2">category</p> */}
                              </div>
                            </div>
                          </div>
                   
                          <div className="card-footer margin-b p-1 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                     
                      </div>
                    </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                    
                ))}
            </div>
            <br/>
            <div class="position-relative">
            <div class="position-absolute top-0 start-50 translate-middle">

            <button type="button" class="btn btn-lg text-light"
            onClick={()=>navigate('/CheckoutFrom')}
            style={{
  background: '#E74C1B',
  width: '155px',
  height: '62px',
  top: '812px',

  padding: '12px 24px',
  borderRadius: '50px',
}}>Checkout</button>
            </div>

           
</div>


        <footer className="my-5 pt-5 text-muted text-center text-small">
          <p className="mb-1">&copy; 2017–2021: Fit Grocery</p>
          <ul className="list-inline"></ul>
        </footer>
      </div>
    </>
  );
};

export default Proceed;
