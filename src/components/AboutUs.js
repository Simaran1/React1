
// import {Component} from "react";

// class AboutUs extends Component{

//     render() {
//         return(
//             <div className="aboutus">
//                 <p>This is about us</p>
//             </div>
//         )
//     }
// }
import React,{ useState} from 'react';
function AboutUs (){
    const [state,setState]=useState({count:4, theme:'blue'}) 
    // const[theme,setTheme]=useState("blue")
    const count=state.count
    const theme=state.theme
    function decrementCount(){
        setState(prevState => {
            return {...prevState, count: prevState.count-1}
        })
        
    }

    function incrementCount(){
      setState(prevCount =>{
          return{...prevCount, count:prevCount.count+1}
      }) 
        
 }


    return(
        <div className="aboutus">
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

 export default AboutUs;