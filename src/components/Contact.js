
import {Component} from "react";

class Contact extends Component {
    
    render(){
        const {params}=this.props.match;
return(
    
        <div className="contact">
           
            <p> Contact us at abc@email.com</p>
            <h1>hello {params.id}</h1>
        </div>
)
    }
}
export default Contact; 