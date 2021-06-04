import React from 'react';
import useForm from "./form1";

const Form = () => {
    const[values, handleChange] =useForm();
    const [name,setName] = useState("");
    const[handle,setHandle]= useState("");

    const register = e => {
        e.preventDefault();
        //console.log({name,handle});
    }
}
return (
    <form className="form"
    onSubmit={register}>
    <label>Name</label>
    <input
    value={values.name || ""}
    onChange={handleChange}
    name="name"
    type="text"
    placeholder="abc"
    />
    <label>Handle</label>
    <input
    value={values.handle || ""}
    onChange={handleChange}
    name="handle"
    type="text"
    placeholder="bcd"/>
    <button>Register</button>
    </form>
);
export default Form;