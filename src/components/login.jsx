import React from "react";
import '../styles/login.css'


export default function Login() {
    return(
        <>
        <div className="background">
        </div>
        <div className="containers">
            <h2 id="titles">Log in</h2>
            <div className="form">
                <div className="username">
                    <label htmlFor="username" className="labell">Username</label><br />
                    <input type="text" className="inputs" placeholder="Enter your username"/>
                </div>
                <div className="password">
                    <label htmlFor="password" className="labell">Password</label><br />
                    <input type="password" className="inputs" placeholder="Enter your passowrd"/>
                </div>
                <div className="rememberme">
                    <input type="checkbox" className="check"/><label htmlFor="rememberme" className="labelr">Remember me</label>
                </div>
                <button id="loginBtn" onClick={(e) => {
                    e.preventDefault()
                    window.location.href='/'
                }}>Log in</button>
                <p>Not a member? <a href="/create" id="createlink">Register here.</a></p>
            </div>
        </div>
        </>
    )
}