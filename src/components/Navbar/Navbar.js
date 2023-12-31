import { NavLink } from "react-router-dom";
import { useAuth } from "../auth";

import {  useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  const { cartItems } = useSelector((reducers) => reducers.cartReducer);
  const navigate = useNavigate();
  const auth = useAuth();

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "none",
    };
  };
  const handleLogout = () => {
    auth.logout();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar-sm  navbar-expand-lg navbar-light  bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav  me-auto fs-7 mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Mon - Sun : 09:00am - 09:00pm
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link text-light"
                  href="https://avish@monke-labs.xyz"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                  avish@monke-labs.xyz
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link text-light"
                  href="https://wa.me/3105321069"
                >
                  <i className="fa-brands fa-whatsapp"  ></i>+923105321069
                </a>
              </li>
            </ul>
            <div className="navbar-text pl-10px text-light">
              <a href="https://twitter.com/EhteshamButt6">
                <i className="f fa-brands fa-twitter-square fa-1x  bg-dark  text-light"></i>
              </a>
              <a href="https://www.instagram.com/ehteshambutt58">
                <i className="f fa-brands fa-instagram fa-1x text-white"></i>
              </a>
              <a href="https://web.facebook.com/ehtesham.but.35/">
                <i className="f fa fa-facebook-official fa-1x text-white"></i>
              </a>

              <a href="https://www.youtube.com/channel/UCRsYOE3gr6TlTcCmXp_cR1Q">
                <i className="f fa-brands fa-youtube-square text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top font-family-Nunito bg-White">
        <div className="container-fluid">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-dark"></span>
          </button>
          <div className="collapse navbar-collapse   " id="navbarTogglerDemo01">
            <Link className="navbar-brand   text-dark " to="/">
          

  <div class="card-body">
    <h5 class="card-title" style={{fontFamily: 'Poppins',
fontSize: '25px',
fontWeight: '600',
lineHeight: '38px',
letterSpacing: '0em',
textAlign: 'left',
}}>Hey Danyal👋</h5>
    <p class="card-text" style={{fontFamily: 'Poppins',
fontSize: '13px',
fontWeight: '400',
lineHeight: '20px',
letterSpacing: '0em',
textAlign: 'left',
}}>Its Dinner Time</p>
  </div>
            </Link>

            <ul className="navbar-nav m-2  d-flex me-auto mb-2 mb-lg-0  ">
              <li className="nav-item ">
                <NavLink to="/" className=" text-dark" style={navLinkStyles}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/product"
                  className=" text-dark"
                  style={navLinkStyles}
                >
                  Products
                </NavLink>
              </li>
           
              <li>
                <NavLink
                  className=" text-dark"
                  to="/contact"
                  style={navLinkStyles}
                >
                  Contact
                </NavLink>
              </li>
            



              {/* <NavLink to='/admin' style={navLinkStyles}>
        Admin
      </NavLink> */}


     {/* {!auths.users && (
        <NavLink to='/loginAdmin' style={navLinkStyles}>
          LoginAdmin
        </NavLink>
      )}  */}



              
            </ul>
            <div className="i">
              <button
                className="btn btn-dark btn-lg"
                onClick={() => navigate("/Proceed")}
              >
                My Bucket {cartItems.length}
              </button>
          
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
