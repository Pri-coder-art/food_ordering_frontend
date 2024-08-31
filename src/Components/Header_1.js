// const Header=()=>{
//   const [btnNameReact, setBtnNameReact]= useState("Login");
//   console.log("Header render");

//   const onlineStatus=useOnlineStatus();
//   // if no dependency array => useeffect is called on every render
//   // if dependency array is empty = []=> useEffect is called on initial render(just once)

//     return(
//       <div className="flex">
//         <div className="logo-container">
//           <img className="w-8" src={LOGO_URL}/>
//         </div>
//         <div className="nav-items">
//           <ul>
//             <li>
//               Online Status:{onlineStatus? "!!!!":"~~~~"}
//             </li>
//             <li>
//             <Link to="/">Home</Link>
//             </li>
//             <li>
//             <Link to="/about">About Us</Link>
//             </li>
//             <li>
//             <Link to="/contact">Contact Us</Link>
//             </li>
//             <li>
//             <Link to="/grocery">Grocery Us</Link>
//             </li>
//             <li>Cart</li>
//             <button className="login"
//             onClick={()=>{
//               btnNameReact==="Login"
//               ? setBtnNameReact("Logout")
//               :setBtnNameReact("Login")
//               }}>
//                 {btnNameReact}
//               </button>
//           </ul>
//         </div>
  
//       </div>
//     )
//   }
//   export default Header;