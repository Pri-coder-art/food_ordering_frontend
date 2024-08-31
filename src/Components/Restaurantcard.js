import { useEffect, useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";
const Restaurantcard=(props)=>{
    const{resData}=props;
    const {loggedInUser}=useContext(userContext);
    console.log("loggedInUser:", loggedInUser); 
     const{
      cloudinaryImageId,
      name,
      cuisines, 
      costForTwo,
      avgRating,
      deliveryTime,
    }=resData?.info
    return(
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
        <img className="rounded-lg" 
        alt="res-logo" 
        src={CDN_URL+cloudinaryImageId}/>
         {/* src={CDN_URL+ resData?.info.cloudinaryImageId} */}
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo} FOR TWO</h4>
        <h4>{avgRating} stars</h4>
        <h4> User:{loggedInUser}</h4>
        <h4>{deliveryTime} min</h4>
        
       </div>
    );
  }
  // export const withPromotedLabel=(Restaurantcard)=>{
  //   return (props) =>{
  //     return(
  //       <div>
  //         <label>Promoted</label>
  //         <Restaurantcard {...props}/>
  //       </div>
  //     )
  //   }
  // }
  export default Restaurantcard;