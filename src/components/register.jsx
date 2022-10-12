import '../styles/regis.css'
import FormHook from "./formHook";


export default function Regis(submitForm) {

    const {handleChange, handleSubmit, errors, correct, value} = FormHook(submitForm);

    return (
        <>
        <div className="body"></div>
        <div className="formcont">
            <h2 className="title">Create Account</h2>
            <div className="form">
                <form action="" className="formcontent">
                    <div className="fname">
                    <label htmlFor="" className="labels">First Name</label> 
                    {correct.firstname && <img src={correct.firstname} alt='' className='coimg'/>}
                    <br />
                    <input type="text" className="input" name="firstname" value={value.firstname}
                    onChange={handleChange} placeholder='Your firstname'/>
                    {errors.firstname && <p className="error"><span><sup>*</sup>{errors.firstname}</span></p>}
                    </div>
                    <div className="lname">
                    <label htmlFor="" className="labels">Last Name</label>
                    {correct.lastname && <img src={correct.lastname} alt='' className='coimg'/>}
                    <br />
                    <input type="text" className="input" name="lastname" value={value.lastname}
                    onChange={handleChange} placeholder='Your lastname'/>
                    {errors.lastname && <p className="error"><span><sup>*</sup>{errors.lastname}</span></p>}
                    </div>
                    <div className="username">
                    <label htmlFor="" className="labels">Username</label>
                    {correct.username && <img src={correct.username} alt='' className='coimg'/>}
                    <br />
                    <input type="text" className="input" name="username" value={value.username}
                    onChange={handleChange}/>
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
                    onChange={handleChange}/>
                    {errors.password && <p className="error"><span><sup>*</sup>{errors.password}</span></p>}
                    </div>
                    <p id="instruct"><span id='passins'><sup id="star">*</sup></span>Password must contains Alphabet, number, and special character</p>
                </form>
                <button id="submitBtn" onClick={handleSubmit}>Create Account</button>
                <div className='login'>
                   <p>Already have an account?<span><a href="/login" id='loglink'> Log in here.</a></span></p>
                   </div>
            </div>
            </div>
        </>
    )
}