import User from "./Users";
import UserClass from "./UserClass";
import {Component} from "react";
import userContext from "../utils/userContext";

class About extends Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor")
    }
    componentDidMount(){
    // console.log("Parent Component Did Mount");
    }
    render(){
        // console.log("Parent render")
        return(
            <div>
                <h1>About</h1>
                <div>
                    LoggedIn User
                    <userContext.Consumer>
                        {({loggedInUser}) =>( <h1 className="text-xl font-bold">{loggedInUser}</h1>)}

                    </userContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>
                {/* <User name={"priti roy(function)"} location={"Ahemdabad (function)"}/> */}
    
                <UserClass name={"priti roy(class)"} location={"Ahemdabad (class)"}/>
            </div>
        )

    }
}
// const About= ()=>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             {/* <User name={"priti roy(function)"} location={"Ahemdabad (function)"}/> */}

//             <UserClass name={"priti roy(class)"} location={"Ahemdabad (class)"}/>
//         </div>
//     )
// };

export default About;