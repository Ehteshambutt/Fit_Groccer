import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { addToCart,Removecart } from "./../../Redux/Action/actions";
import axios from "axios";
import instance from '../../instance'
// import "../App.css";
import { useParams } from "react-router-dom";
import ProductData from './ProductData'
import { ProductDetail } from "./ProductDetail";
export const Products = (props) => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const dispatch = useDispatch();

  const { id } = useParams();
  const [loadData, setLoadData] = useState(false);
  const [isLoad, setIsLoad] = useState(true);
  const [dataid, setbyId] = useState('');
  localStorage.setItem('dataid',dataid)
  console.log(dataid,'dataid')
  function setById(Data) {
    console.log(Data, 'data');
  }
  
console.log(dataid,'dataid')
  const [product, setProduct] = useState("");

  return (
    <>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {ProductData.map((Data, i) => (
        <div key={i} className="col mb-5">
          <div className="card1 margin-bit product-card1" onClick={() => { setbyId({ Data }); localStorage.setItem('Data', Data.img) }}>
            <Link to={`/product/${Data.id}`}>
              <img
                className="card1-img-top"
                src={Data.img}
                width="100%"
                height="200"
                alt="..."
              />
            </Link>
            <div className="card1-body p-4 pb-0">
              <div className="text-left h-all">
                <h5 className="title">
                  <span className="subtitle namet" style={{
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '24px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                  }}>{Data.title}</span>
                  <span className="d-flex justify-content-between">
                    <span className="currency text-danger mt-4">
                      <i className="fa-regular fa-heart"></i>
                    </span>
                    <span className="currency text-danger justify-content-start">
                     $ <span className="text-danger ">{Data.price}</span>
                    </span>
                  </span>
                </h5>
              </div>
            </div>
            <div className="btn-parent">
              <div className="card1-footer margin-b p-1 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <button
                  style={{color:'#E74C1B'}}
                    className="btn btn-block btn-outline-dark mt-auto custom-button-primary text-light"
                    onClick={() => {
                      dispatch(addToCart(Data));
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

      <Outlet />
    </>
  );
  return(
    <ProductDetail  />
  )
};
