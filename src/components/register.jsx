import '../styles/regis.css'
import FormHook from "./formHook";
import { useState } from 'react';
import {MdOutlineDoubleArrow} from 'react-icons/md';


export default function Regis(submitForm) {
    const [clicked, setClicked] = useState(false)
    const pilihWarna = () => {
        alert("choose your fav color!");
        setClicked(true)
    }
    // passing validation props
    const {handleChange, handleSubmit, errors, correct, value, submitted} = FormHook(submitForm);

    return (
        <>
        <div className="body">
        {Object.keys(errors).length === 0 && submitted ? (<div className="success">
                <div className='signupcheck'>Signed Up successfully!</div>
                    <button id="startBtnup" onClick={(e) => {e.preventDefault()
                    window.location.href='/'}}>Start Reading! <MdOutlineDoubleArrow /></button>
                </div>):(<p id="alertup">Please fill in the form correctly!</p>)}
        </div>
        <div className="formcont">
            <h2 className="title">Create Account</h2>
            <div className="form">
                <form action="" className="formcontent">
                    <div className="fname">
                    <label htmlFor="" className="labels">First Name</label> 
                    {correct.firstname && <img src={correct.firstname} alt='' className='coimg'/>}
                    <br />
                    <input type="text" className="input" name="firstname" value={value.firstname}
                    onChange={handleChange} placeholder='Your first name'/>
                    {errors.firstname && <p className="error"><span><sup>*</sup>{errors.firstname}</span></p>}
                    </div>
                    <div className="lname">
                    <label htmlFor="" className="labels">Last Name</label>
                    {correct.lastname && <img src={correct.lastname} alt='' className='coimg'/>}
                    <br />
                    <input type="text" className="input" name="lastname" value={value.lastname}
                    onChange={handleChange} placeholder='Your last name'/>
                    {errors.lastname && <p className="error"><span><sup>*</sup>{errors.lastname}</span></p>}
                    </div>
                    <div className="username">
                    <label htmlFor="" className="labels">Username</label>
                    {correct.username && <img src={correct.username} alt='' className='coimg'/>}
                    <br />
                    <input type="text" className="input" name="username" value={value.username}
                    onChange={handleChange} placeholder='create username'/>
                    {errors.username && <p className="error"><span><sup>*</sup>{errors.username}</span></p>}
                    </div>
                    <div className="email">
                    <label htmlFor="" className="labels">Email</label> 
                    {correct.email && <img src={correct.email} alt='' className='coimg'/>}
                    <br />
                    <input type="email" className="input" name="email" value={value.email}
                    onChange={handleChange} placeholder='example@gmail.com'/>
                    {errors.email && <p className="error"><span><sup>*</sup>{errors.email}</span></p>}
                    </div>
                    <div className="password">
                    <label htmlFor="" className="labels">Password</label> 
                    {correct.password && <img src={correct.password} alt='' className='coimg'/>}
                    <br />
                    <input type="password" className="input" name="password" value={value.password}
                    onChange={handleChange} placeholder='Create password'/>
                    {errors.password && <p className="error"><span><sup>*</sup>{errors.password}</span></p>}
                    </div>
                    <p id="instruct"><span id='passins'><sup id="star">*</sup></span>Password must contains Alphabet, number, and special character</p>
                </form>
                <button id="submitBtn" onClick={handleSubmit}>Create Account</button>
                <div className='login'>
                   <p>Already have an account?<span><a href="/loginp" id='loglink'> Log in here.</a></span></p>
                   </div>
            </div>
            <button onClick={pilihWarna}>Choose color</button>
                {clicked ? (<div>
                    <label htmlFor="color">Choose color</label>
                    <input type="text" name="color"/>
                </div>) : (null)}
            </div>
        </>
    )
}