import React from "react";
import ReactDOM  from "react-dom/client";
/**
 * Header
 * - Logo
 * - Nav items
 * Body
 * - Search
 * - RestaurantContainer
 *  - Restaurantcard
 *     -images
 *     -name of Res, star rating, cuisine, delivery time. 
 * Footer
 * - copyright
 * - Link
 * - address
 * - contact
 */

const [listOfRestaurants, setlistOfRestraunt]= useState([
  {
    "info": {
      "id": "636894",
      "name": "Chinese Wok",
      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 3.8
    }
  },
  {
    "info": {
      "id": "636895",
      "name": "KFC",
      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Fast Food",
        "Chicken"
      ],
      "avgRating": 4.6
    }
  },
  {
    "info": {
      "id": "636897",
      "name": "Dominoz",
      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Fast Food",
        "Chicken"
      ],
      "avgRating": 4.2
    }
  }

])
const reslist= [{
  "info": {
  "id": "636894",
  "name": "Chinese Wok",
  "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
  "locality": "Mouje Chagispur",
  "areaName": "CG Road",
  "costForTwo": "₹250 for two",
  "cuisines": [
    "Chinese",
    "Asian",
    "Tibetan",
    "Desserts"
  ],
  "avgRating": 4.3,
  "veg": true,
  "parentId": "61955",
  "avgRatingString": "4.3",
  "totalRatingsString": "1K+",
  "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 4.4,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "4.4 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-03-25 01:00:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "pureveg",
              "imageId": "v1695133679/badges/Pure_Veg111.png"
            }
          }
        ]
      },
      "textBased": {
        
      },
      "textExtendedBadges": {
        
      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹179"
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
  "restaurantOfferPresentationInfo": {
    
  }
},
"analytics": {
  "context": "seo-data-46206bf6-e684-4d5c-8d59-c32a53afcb74"
},
"cta": {
  "link": "https://www.swiggy.com/restaurants/chinese-wok-mouje-chagispur-cg-road-ahmedabad-636894",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
// {

//   "info": {
//    "id": "105268",
//   "name": "UBQ By Barbeque Nation",
//   "cloudinaryImageId": "nengejcwr1mhpjjgladx",
//   "locality": "NEXUS AHMEDABAD ONE MALL",
//   "areaName": "SARKARI VASAHAT ROAD",
//   "costForTwo": "₹300 for two",
//   "cuisines": [
//     "Barbecue",
//     "Biryani",
//     "Kebabs",
//     "Mughlai",
//     "Desserts"
//   ],
//   "avgRating": 4.2,
//   "parentId": "10804",
//   "avgRatingString": "4.2",
//   "totalRatingsString": "5K+",
//   "sla": {
//     "deliveryTime": 26,
//     "lastMileTravel": 1.7,
//     "serviceability": "SERVICEABLE",
//     "slaString": "25-30 mins",
//     "lastMileTravelString": "1.7 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-03-24 23:30:00",
//     "opened": true
//   },
//   "badges": {
    
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
        
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "aggregatedDiscountInfoV3": {
//     "header": "50% OFF",
//     "subHeader": "UPTO ₹100"
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-46206bf6-e684-4d5c-8d59-c32a53afcb74"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-nexus-one-mall-sarkari-vasahat-road-ahmedabad-105268",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "info": {
//   "id": "773472",
//   "name": "Pizza Hut",
//   "cloudinaryImageId": "978358a0d0caba4f4555b8e2147b467d",
//   "locality": "Vastrapur Lake",
//   "areaName": "Nexus mall",
//   "costForTwo": "₹350 for two",
//   "cuisines": [
//     "Pizzas"
//   ],
//   "avgRating": 4.4,
//   "parentId": "721",
//   "avgRatingString": "4.4",
//   "totalRatingsString": "100+",
//   "sla": {
//     "deliveryTime": 25,
//     "lastMileTravel": 1.5,
//     "serviceability": "SERVICEABLE",
//     "slaString": "20-25 mins",
//     "lastMileTravelString": "1.5 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-03-25 03:00:00",
//     "opened": true
//   },
//   "badges": {
    
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
        
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "aggregatedDiscountInfoV3": {
//     "header": "ITEMS",
//     "subHeader": "AT ₹179"
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "isNewlyOnboarded": true,
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-46206bf6-e684-4d5c-8d59-c32a53afcb74"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/pizza-hut-vastrapur-lake-nexus-mall-ahmedabad-773472",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "info": {
//   "id": "852502",
//   "name": "Wow! Momo",
//   "cloudinaryImageId": "eb76366de339c6ed5005b814a05d9472",
//   "locality": "Vastrapur",
//   "areaName": "Alfa One Mall",
//   "costForTwo": "₹300 for two",
//   "cuisines": [
//     "Tibetan",
//     "Healthy Food",
//     "Asian",
//     "Chinese",
//     "Snacks",
//     "Continental",
//     "Desserts",
//     "Beverages"
//   ],
//   "avgRating": 4.3,
//   "parentId": "1776",
//   "avgRatingString": "4.3",
//   "totalRatingsString": "4",
//   "sla": {
//     "deliveryTime": 25,
//     "lastMileTravel": 1.6,
//     "serviceability": "SERVICEABLE",
//     "slaString": "25-30 mins",
//     "lastMileTravelString": "1.6 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-03-24 23:00:00",
//     "opened": true
//   },
//   "badges": {
    
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
        
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "aggregatedDiscountInfoV3": {
//     "header": "60% OFF",
//     "subHeader": "UPTO ₹120"
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "isNewlyOnboarded": true,
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-46206bf6-e684-4d5c-8d59-c32a53afcb74"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/wow-momo-vastrapur-alfa-one-mall-ahmedabad-852502",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "info": {
//   "id": "803267",
//   "name": "Chicago pizza",
//   "cloudinaryImageId": "4f9afba9112485d52b7c706ff07d0b97",
//   "locality": "Sola",
//   "areaName": "Science City",
//   "costForTwo": "₹400 for two",
//   "cuisines": [
//     "Pizzas",
//     "Pastas"
//   ],
//   "avgRating": 4.1,
//   "parentId": "60277",
//   "avgRatingString": "4.1",
//   "totalRatingsString": "10+",
//   "sla": {
//     "deliveryTime": 31,
//     "lastMileTravel": 4.6,
//     "serviceability": "SERVICEABLE",
//     "slaString": "30-35 mins",
//     "lastMileTravelString": "4.6 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-03-25 02:00:00",
//     "opened": true
//   },
//   "badges": {
    
//   },
//   "isOpen": true,
//   "aggregatedDiscountInfoV2": {
    
//   },
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
        
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "isNewlyOnboarded": true,
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-46206bf6-e684-4d5c-8d59-c32a53afcb74"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/chicago-pizza-sola-science-city-ahmedabad-803267",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "info": {
//   "id": "446079",
//   "name": "Rotlo Gujarati Rasthal",
//   "cloudinaryImageId": "dakuhyxzy3pspapgv4ye",
//   "locality": "Himalaya Arcade",
//   "areaName": "Vastrapur",
//   "costForTwo": "₹300 for two",
//   "cuisines": [
//     "Gujarati",
//     "Thalis",
//     "North Indian"
//   ],
//   "avgRating": 4.3,
//   "veg": true,
//   "parentId": "268417",
//   "avgRatingString": "4.3",
//   "totalRatingsString": "1K+",
//   "sla": {
//     "deliveryTime": 20,
//     "lastMileTravel": 2.1,
//     "serviceability": "SERVICEABLE",
//     "slaString": "15-20 mins",
//     "lastMileTravelString": "2.1 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-03-24 14:55:00",
//     "opened": true
//   },
//   "badges": {
//     "imageBadges": [
//       {
//         "imageId": "v1695133679/badges/Pure_Veg111.png",
//         "description": "pureveg"
//       }
//     ]
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
//         "badgeObject": [
//           {
//             "attributes": {
//               "description": "pureveg",
//               "imageId": "v1695133679/badges/Pure_Veg111.png"
//             }
//           }
//         ]
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "aggregatedDiscountInfoV3": {
//     "header": "₹125 OFF",
//     "subHeader": "ABOVE ₹249",
//     "discountTag": "FLAT DEAL",
//     "discountCalloutInfo": {
//       "message": "Free Delivery",
//       "logoCtx": {
//         "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//       }
//     }
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-46206bf6-e684-4d5c-8d59-c32a53afcb74"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/rotlo-gujarati-rasthal-himalaya-arcade-vastrapur-ahmedabad-446079",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "info": {
//   "id": "38230",
//   "name": "Shivam Bhojnalay",
//   "cloudinaryImageId": "dryrg4zspcdmpbzdvtfp",
//   "locality": "Gurukul",
//   "areaName": "Ahmedabad",
//   "costForTwo": "₹200 for two",
//   "cuisines": [
//     "Thalis",
//     "Punjabi",
//     "Gujarati",
//     "Rajasthani",
//     "Desserts"
//   ],
//   "avgRating": 4,
//   "parentId": "183566",
//   "avgRatingString": "4.0",
//   "totalRatingsString": "10K+",
//   "sla": {
//     "deliveryTime": 18,
//     "lastMileTravel": 1.7,
//     "serviceability": "SERVICEABLE",
//     "slaString": "15-20 mins",
//     "lastMileTravelString": "1.7 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-03-25 00:00:00",
//     "opened": true
//   },
//   "badges": {
//     "imageBadges": [
//       {
//         "imageId": "v1695133679/badges/Pure_Veg111.png",
//         "description": "pureveg"
//       }
//     ]
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
//         "badgeObject": [
//           {
//             "attributes": {
//               "description": "pureveg",
//               "imageId": "v1695133679/badges/Pure_Veg111.png"
//             }
//           }
//         ]
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "aggregatedDiscountInfoV3": {
//     "header": "60% OFF",
//     "discountTag": "FLAT DEAL"
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-46206bf6-e684-4d5c-8d59-c32a53afcb74"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/shivam-bhojnalay-gurukul-ahmedabad-ahmedabad-38230",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "info": {
//   "id": "37694",
//   "name": "McDonald's",
//   "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
//   "locality": "Himalaya Mall",
//   "areaName": "Memnagar",
//   "costForTwo": "₹400 for two",
//   "cuisines": [
//     "Burgers",
//     "Beverages",
//     "Cafe",
//     "Desserts"
//   ],
//   "avgRating": 4.5,
//   "parentId": "630",
//   "avgRatingString": "4.5",
//   "totalRatingsString": "10K+",
//   "sla": {
//     "deliveryTime": 14,
//     "lastMileTravel": 1.1,
//     "serviceability": "SERVICEABLE",
//     "slaString": "10-15 mins",
//     "lastMileTravelString": "1.1 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-03-24 23:59:00",
//     "opened": true
//   },
//   "badges": {
//     "imageBadges": [
//       {
//         "imageId": "Rxawards/_CATEGORY-Burger.png",
//         "description": "Delivery!"
//       }
//     ]
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
//         "badgeObject": [
//           {
//             "attributes": {
//               "description": "Delivery!",
//               "imageId": "Rxawards/_CATEGORY-Burger.png"
//             }
//           }
//         ]
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "aggregatedDiscountInfoV3": {
//     "header": "FREE ITEM"
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-46206bf6-e684-4d5c-8d59-c32a53afcb74"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/mcdonalds-himalaya-mall-memnagar-ahmedabad-37694",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "info": {
//   "id": "37941",
//   "name": "KFC",
//   "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
//   "locality": "Vastrapur",
//   "areaName": "Vastrapur",
//   "costForTwo": "₹400 for two",
//   "cuisines": [
//     "Burgers",
//     "Biryani",
//     "American",
//     "Snacks",
//     "Fast Food"
//   ],
//   "avgRating": 4.3,
//   "parentId": "547",
//   "avgRatingString": "4.3",
//   "totalRatingsString": "5K+",
//   "sla": {
//     "deliveryTime": 18,
//     "lastMileTravel": 1.5,
//     "serviceability": "SERVICEABLE",
//     "slaString": "15-20 mins",
//     "lastMileTravelString": "1.5 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-03-25 03:00:00",
//     "opened": true
//   },
//   "badges": {
    
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
        
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "aggregatedDiscountInfoV3": {
//     "header": "20% OFF",
//     "subHeader": "UPTO ₹50"
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {
    
//   }
// },
// "analytics": {
//   "context": "seo-data-46206bf6-e684-4d5c-8d59-c32a53afcb74"
// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/kfc-vastrapur-ahmedabad-37941",
//   "text": "RESTAURANT_MENU",
//   "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
//     "info": {
//       "id": "37941",
//       "name": "KFC",
//       "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
//       "locality": "Vastrapur",
//       "areaName": "Vastrapur",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Biryani",
//         "American",
//         "Snacks",
//         "Fast Food"
//       ],
//       "avgRating": 4.3,
//       "parentId": "547",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "5K+",
//       "sla": {
//         "deliveryTime": 18,
//         "lastMileTravel": 1.5,
//         "serviceability": "SERVICEABLE",
//         "slaString": "15-20 mins",
//         "lastMileTravelString": "1.5 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-03-25 03:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "20% OFF",
//         "subHeader": "UPTO ₹50"
//       },
//       "orderabilityCommunication": {
//         "title": {
          
//         },
//         "subTitle": {
          
//         },
//         "message": {
          
//         },
//         "customIcon": {
          
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
//       "context": "seo-data-46206bf6-e684-4d5c-8d59-c32a53afcb74"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/kfc-vastrapur-ahmedabad-37941",
//       "text": "RESTAURANT_MENU",
//       "type": "WEBLINK"
//     },
//     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//           "id": "37941",
//           "name": "KFfC",
//           "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
//           "locality": "Vastrapur",
//           "areaName": "Vastrapur",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Burgers",
//             "Biryani",
//             "American",
//             "Snacks",
//             "Fast Food"
//           ],
//           "avgRating": 4.3,
//           "parentId": "547",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "5K+",
//           "sla": {
//             "deliveryTime": 18,
//             "lastMileTravel": 1.5,
//             "serviceability": "SERVICEABLE",
//             "slaString": "15-20 mins",
//             "lastMileTravelString": "1.5 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-03-25 03:00:00",
//             "opened": true
//           },
//           "badges": {
            
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "20% OFF",
//             "subHeader": "UPTO ₹50"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
//           "context": "seo-data-46206bf6-e684-4d5c-8d59-c32a53afcb74"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/kfc-vastrapur-ahmedabad-37941",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//         }]
]



const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" 
        src="https://marketplace.canva.com/EAFowsrK6x8/1/0/1600w/canva-red-and-yellow-catering-flat-illustrative-food-place-logo-rYbQJ_qtaz8.jpg"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  )
}
const StyleCard={
  backgroundColor:"brown"
}
const Restaurantcard=(props)=>{
  const{resData}=props;
  const{
    cloudinaryImageId,
    name,
    cuisines, 
    costForTwo,
    avgRating,
    deliveryTime
  }=resData?.info
  return(
    <div className="res-card" style={{backgroundColor:"#D3D3D3"}}>
      <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
     </div>
  )
}

const Body=()=>{
  return(
  <div>
     <div className="search">Search</div>
    <div className="restaurant-container">
      {reslist.map((restaurant)=>(
        <Restaurantcard key={restaurant.info.id} resData={restaurant}/>
      ))}
    </div>
  </div>
  )
}
const AppLayout=()=>{
  return <div className="app">
    <Header/>
    <Body/>
  </div>
}

 const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

// Normal JS variable
  // let listOfRestaurants2 = [
  //   {
  //     "info": {
  //       "id": "636894",
  //       "name": "Chinese Wok",
  //       "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
  //       "costForTwo": "₹250 for two",
  //       "cuisines": [
  //         "Chinese",
  //         "Asian",
  //         "Tibetan",
  //         "Desserts"
  //       ],
  //       "avgRating": 3.8
  //     }
  //   },
  //   {
  //     "info": {
  //       "id": "636895",
  //       "name": "KFC",
  //       "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
  //       "costForTwo": "₹250 for two",
  //       "cuisines": [
  //         "Fast Food",
  //         "Chicken"
  //       ],
  //       "avgRating": 4.6
  //     }
  //   },
  //   {
  //     "info": {
  //       "id": "636897",
  //       "name": "Dominoz",
  //       "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
  //       "costForTwo": "₹250 for two",
  //       "cuisines": [
  //         "Fast Food",
  //         "Chicken"
  //       ],
  //       "avgRating": 4.2
  //     }
  //   }
  // ];