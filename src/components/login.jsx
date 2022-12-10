import {useState, useEffect} from "react";
import '../styles/login.css'
import {MdOutlineDoubleArrow} from 'react-icons/md';

const initialValue = {email: '', password: ''};

export default function Loginp() {
    const [logvalue, setLogvalue] = useState(initialValue);
    const [isSubmitted, setisSubmitted] = useState(false);
    const [logErrors, setlogErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLogvalue({...logvalue, [name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setlogErrors(validate(logvalue));
        setisSubmitted(true);
    }
    useEffect(() => {
        const logvalue = initialValue;
        const isSubmitted = false;
        if(Object.keys(logErrors).length === 0 && isSubmitted) {
            console.log(logvalue);
        };
    }, 
    [logErrors])

    const validate = (values) => {
        const errors = {};
        const regex = /\S+@\S+\.\S+/;
        if(!values.email) {
            errors.email = 'This field is required!'
        } else if(!regex.test(values.email)) {
            errors.email = 'This email is invalid!'
        };
        if(!values.password) {
            errors.password = 'This field is required!'
        } else if (values.password.length < 7) {
            errors.password = 'Wrong password!'
        };
        return errors;
    };

    return(
        <>
        <div className="background">
        </div>
        <div className="containers">
            <h2 id="titles">Log in</h2>
            <div className="form">
                <div className="email">
                    <label htmlFor="email" className="labell">Email</label><br />
                    <input type="email" className="inputs" name='email' placeholder="Enter your email" value={logvalue.email}
                    onChange={handleChange}/>
                    {logErrors.email && <p className="error"><span className="star">*</span>{logErrors.email}</p>}
                </div>
                <div className="password">
                    <label htmlFor="password" className="labell">Password</label><br />
                    <input type="password" className="inputs" name='password' placeholder="Enter your passowrd" value={logvalue.password}
                    onChange={handleChange}/>  
                    {logErrors.password && <p className="error"><span className="star">*</span>{logErrors.password}</p>}        
                </div>
                <div className="rememberme">
                    <input type="checkbox" className="check"/><label htmlFor="rememberme" className="labelr">Remember me</label>
                </div>
                <button id="loginBtn" onClick={handleSubmit}>Log in</button>
                {Object.keys(logErrors).length === 0 && isSubmitted ? (<div className="success">
                    <button id="startBtn" onClick={(e) => {e.preventDefault()
                    window.location.href='/'}}>Start Reading! <MdOutlineDoubleArrow /></button>
                </div>):(<p id="alert">Please fill in the form correctly!</p>)}
                <p id="reg">Not a member? <a href="/create" id="createlink">Register here.</a></p>
            </div>
        </div>
        </>
    )
}