import React from 'react'

import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Sign Up")
    return (
        <div className='loginPopup'>
            <form className='loginPopupContainer'>
                <div className='loginPopupTitle'>
                    <h2>{currentState}</h2>

                    <img src={assets.cross_icon} alt="cross-icon" onClick={() => { setShowLogin(false) }} />
                </div>
                <div className='loginPopupInput'>
                    {currentState === "Login" ? <></> : <input type='text' placeholder='Your Name' required />}

                    <input type='email' placeholder="Your Email" required />
                    <input type='password' placeholder='Password' required />
                </div>

                <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className='loginPopupCondition'>
                    <input type='checkbox' required />
                    <p>By Continuing,I agree to the terms of use and privacy policy.</p>
                </div>
                {currentState === "Login" ? <p>Create a new Account?<span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p> : <p>Already have an account?<span onClick={() => setCurrentState("Login")}>Login here</span></p>}


            </form>
        </div>
    )
}

export default LoginPopup