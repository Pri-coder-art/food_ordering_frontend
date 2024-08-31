import { LOGO_URL } from "../utils/constants";
import { useEffect, useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header=()=>{
  const [btnNameReact, setBtnNameReact]= useState("Login");
  
  

  const onlineStatus=useOnlineStatus();
  const {loggedInUser}=useContext(userContext);
  console.log("loggedInUser:", loggedInUser);
  // if no dependency array => useeffect is called on every render
  // if dependency array is empty = []=> useEffect is called on initial render(just once)

  // Subscribing to the Store using a selector

  const cartItems = useSelector((store)=> store.cart.items);
  console.log(cartItems)

  
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Login');
    }

    return(
      <div className="flex justify-between bg-orange-600 shadow-lg sm:bg-green-50 lg:bg-orange-500">
        <div className="logo-container">
          <img className="w-44" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status:{onlineStatus? "!!!!":"~~~~"}
            </li>
            <li className="px-4">
            <Link to="/">Home</Link>
            </li>
            <li className="px-4">
            <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
            <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
            <Link to="/grocery">Grocery Us</Link>
            </li>
            <li className="px-4">
            <Link to="/login">Login</Link>
            </li>
            <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
            </li>
            {/* <button className="login"
            onClick={()=>{
              btnNameReact==="Login"
              ? setBtnNameReact("Logout")
              :setBtnNameReact("Login")
              }}>
                {btnNameReact}
              </button> */}
              {/* <button onClick={handleClick} className="px-4">
            Log Iniiiii
        </button> */}
              
              {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
          </ul>
        </div>
  
      </div>

    )
  }
  export default Header;