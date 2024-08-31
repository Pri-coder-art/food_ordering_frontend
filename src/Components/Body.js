import Restaurantcard from "./Restaurantcard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
const Body= () =>{
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setlistOfRestaurants]= useState([]);
  const[filteredRestaurant, setFilteredRestaurant]= useState([]);
  const [searchText, setSearchText]=useState("");
 
  // whenever state variable update, react triggers areconciliatin cycle(re-renders the componenet)
  // console.log("Body Render", listOfRestaurants)
  useEffect(() =>{
    fetchData();
  }, []);

  const fetchData=async () =>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json= await data.json();
  console.log(json);
  // Optional chaining.
  setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false)
  return (
<h1>
  Looks like you're offline!! Please check your internet connection;
</h1>
);
const {loggedInUser, setUserName}=useContext(userContext);
  // Conditional rendering
  if(listOfRestaurants.length===0){
    return <h1><Shimmer/></h1>
  }
    return(
    <div className="body">
       <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" 
          className="border border-solid border-black py-1 cursor-pointer" 
          value={searchText}
          onChange={(e) =>{
            setSearchText(e.target.value);
          }}/>
          <button 
          className="px-4 py-1 bg-red-100 m-4 rounded-2xl"
          onClick={()=>{
            // Filter the restraunt cards and update the UI
            // searchText
            console.log(searchText)
            const filteredRestaurant=listOfRestaurants.filter((res)=> 
            res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredRestaurant);
          }}>Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button 
          className="px-4 py-2 bg-gray-300 border border-zinc-950 rounded-lg" 
        onClick={()=>{
          const filteredList= listOfRestaurants.filter(
            (res) =>res.info.avgRating > 4.4
          );
          setFilteredRestaurant(filteredList);
            }}>
            Top rated Restaurant
            </button>
            </div>
            {/* <div className="search m-4 p-4 flex items-center">
          <label>UserName:</label>
          <input className="border, border-black p-2"
          value={loggedInUser}
          onChange={(e)=> setUserName(e.target.value)}
          />
            </div> */}
        </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant)=>(
          <Link 
          key={restaurant?.info.id}
          to={"/restaurants/"+ restaurant?.info.id}>
            <Restaurantcard resData={restaurant}/>
            </Link>
        ))}
      </div>
    </div>
    )
  }
  export default Body;