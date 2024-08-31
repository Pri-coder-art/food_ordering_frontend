import React, {Suspense, lazy, useEffect, useState} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";
// import Grocery from "./Components/Grocery";

// Chunking
// Code splitting
// Dynamic bundling
// Lazy loading
// On demand loading
// dynamic import

const Grocery = lazy(()=> import("./Components/Grocery"));
const About=lazy(()=> import("./Components/About"))
const StyleCard={
  backgroundColor:"brown"
}
const AppLayout = () =>{
  const [userName,setUserName]=useState();

  // authentication
  useEffect(()=>{
    // Make an API call and send username and password
    const data={
      name:"prity kumari",
    };
    setUserName(data.name);

  }, []);
  return (
    <Provider store={appStore}>
    <userContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div className="app">
    <Header/>
    <Outlet/>
  </div>
  </userContext.Provider>
  </Provider>
  )};

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}>
          <Grocery/>
          </Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
