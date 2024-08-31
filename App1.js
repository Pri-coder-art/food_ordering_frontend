import React from "react";
import ReactDOM  from "react-dom/client";

// React.createElement => object => HTMLElement(render)

// const heading =React.createElement("h1",{id:"heading"},
// "React or Talk "); => Old method of writing react.

// JSX => HTML-like XML-like syntax.

//jsx => Babel transpile it to React.CreateElement => ReactElement -Js object => HTML Element render
//React Element
const Title= ()=> (
<h1 className="head" tabIndex="1">
 Hello react family of jsx
 </h1>)

 
// Functional Component
// This is component composition
 const HeadingComponent=()=>(
   <div id="header">
   <Title/>
   <Title></Title>
   {Title()}
    <h1>Functional component</h1>
    </div>
 )

 const HeadingComponent2=()=>(
 <h1 class="heading">Functional component</h1>
 ) // => In industry we are writing like this.

 // Both componenets are same.

 const resonj={"info": {
  "id": "812598",
  "name": "Cafe Amudham",
  "cloudinaryImageId": "e76fc212e4d3f5baf2119e1642463380",
  "locality": "Gandhinagar",
  "areaName": "Majestic",
  "costForTwo": "₹246 for two",
  "cuisines": [
    "South Indian",
    "Snacks"
  ],
  "avgRating": 4.6,
  "parentId": "396620",
  "avgRatingString": "4.6",
  "totalRatingsString": "100+",
  "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-03-25 00:45:00",
    "opened": true
  },
  "badges": {
    
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        
      },
      "textBased": {
        
      },
      "textExtendedBadges": {
        
      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
  },
  "orderabilityCommunication": {
    "title": {
      
    },
    "subTitle": {
      
    },
    "message": {
      
    },
    "customIcon": {
      
    }
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {
        
      },
      "video": {
        
      }
    }
  },
  "reviewsSummary": {
    
  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "isNewlyOnboarded": true,
  "restaurantOfferPresentationInfo": {
    
  }
},
"analytics": {
  "context": "seo-data-c22daa88-8522-48ff-9442-eccc8b838d03"
},
"cta": {
  "link": "https://www.swiggy.com/restaurants/cafe-amudham-gandhinagar-majestic-bangalore-812598",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
 }


 const Restaurantcard=(props)=>{
  const{resName,cuisines}=props;
  return(
    <div className="res-card" style={{backgroundColor:"#967969"}}>
      <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c9elzh8awx7jcx70cood"/>
      <h3>{resName}</h3>
      <h3>{resName}</h3>
      <h4>{cuisines}</h4>
      <h4>4.5 Stars</h4>
      <h4>38 minutes</h4>


    </div>
  )
}
const Body2=()=>{
  return(
  <div>
     <div className="search">Search</div>
    <div className="restaurant-container">
      <Restaurantcard resData={reslist[0]}/>
      <Restaurantcard resData={reslist[1]}/>
      <Restaurantcard resData={reslist[2]}/>
      <Restaurantcard resData={reslist[3]}/>
      <Restaurantcard resData={reslist[4]}/>
      <Restaurantcard resData={reslist[5]}/>
      <Restaurantcard resData={reslist[6]}/>
      <Restaurantcard resData={reslist[7]}/>
      <Restaurantcard resData={reslist[8]}/>
      
     
    </div>
  </div>
  )
}
const Restaurantcard2=(props)=>{
  const{resData}=props;
  return(
    <div className="res-card" style={{backgroundColor:"#D3D3D3"}}>
      <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId}/>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.deliveryTime}</h4>
     </div>
  )
}
const Body=()=>{
  return(
  <div>
     <div className="search">Search</div>
    <div className="restaurant-container">
      <Restaurantcard resData={resobj}
      resName="Cafe Amudham" 
      cuisines="Dosa, South Indian, asian"/>
      <Restaurantcard
      resName="Puliyogare Point" 
      cuisines="Dosa, South Indian, asian"
      />
      <Restaurantcard
       resName="Dominoz" 
       cuisines="Dosa, South Indian, asian"
       />
    </div>
  </div>
  )
}
 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

// {/* <ul>
//                 {/* {itemCards.map()} */}
//                 <li>{itemCards[0]?.card?.info?.name}</li>
//                 <li>{itemCards[1]?.card?.info?.name}</li>
//                 <li>{itemCards[2]?.card?.info?.name}</li>
//             </ul> */}

MENU_API + resId
class UserClass extends React.Component{
  constructor(props) {
      super(props);
      this.state={
          count:0,
      };
      console.log(this.props.name +"Child Constructor");
      }
      componentDidMount(){
          console.log(this.props.name +"Child Component Did Mount");
      }
  render(){
      const{name, location}= this.props;
      const{count}=this.state;
      console.log(this.props.name +"Child Render");

      return(
          <div className="user-card">
              <h1>Count:{count}</h1>
              <button
              onClick={()=>{
                  //NEVER UPDATE STATE VARIABLES DIRECTLY
                  this.setState({
                      count:this.state.count+1,
                  })
              }}>
                  Count Increase
              </button>
              <h2>Name:{name}</h2>
              <h3>Location:{location}</h3>
              <h4>Contact: @prityroy</h4>
          </div>
      )
  };

  }
export default UserClass;