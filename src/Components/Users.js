import { useState } from "react";
const User=({name,location})=>{
    const [count]=useState(0);
    const [count1]=useState(1);
    useEffect(()=>{
        // Api Calls
    }, []);
    return(
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count:{count}</h1>
            <h1>Count1:{count1}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @prityroy</h4>
        </div>
    )
};
export default User;