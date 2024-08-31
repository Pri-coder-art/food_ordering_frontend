import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useEffect, useState } from "react";


const RestaurantMenu =()=>{
    // const [resInfo, setResInfo]=useState(null); 

    const {resId}= useParams();
    const dummy ="Dummy Data";
    const resInfo=useRestaurantMenu(resId);

    const [showIndex, setShowIndex]=useState(null);
    

    // useEffect(()=>{
    //     fetchMenu();
    // }, []);
    // const fetchMenu = async()=>{
    //     const data =await fetch(MENU_API + resId);
    //     const json= await data.json(); 
    //     console.log(json);
    //     setResInfo(json.data);

// };
if(resInfo=== null) return <Shimmer/>;
const {name, cuisines, costForTwoMessage}=
resInfo?.cards[2]?.card?.card?.info;

const {itemCards} 
= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
// console.log(itemCards);
// console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
const categories = 
resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=> 
     c.card?.["card"]?.["@type"]=== 
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
// console.log(categories);
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold">{cuisines.join(" ")} - {costForTwoMessage}</p>
            {/* <h2>Menu</h2>
             <ul>
                {itemCards.map((item) =>(
                    <li key={item.card.info.id}>
                    {item.card.info.name} -{"Rs "}
                     {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                ))}
                 </ul> */}
                {/* {itemCards.map()} */}
                {/* <li>{itemCards[0]?.card?.info?.name}</li>
                <li>{itemCards[1]?.card?.info?.name}</li>
                <li>{itemCards[2]?.card?.info?.name}</li>
                <li>{itemCards[3]?.card?.info?.name}</li>
                <li>{itemCards[4]?.card?.info?.name}</li> */}

                {/* categories accordions */}
                {categories.map((category,index)=>(
                    // controlled component
                <RestaurantCategory 
                key={category?.card?.card.title} 
                data={category?.card?.card}
                showItems={index===showIndex ? true:false}
                setShowIndex={()=> setShowIndex(index)}
                dummy={dummy}
                />))}
           
            
        </div>
    )
};
export default RestaurantMenu;