import React from "react";
import './sign_in.css';

//photos needed
import image_right_side from '../../image/image_right_side_signin.png' ; 

function Sign_in () {
    return (
        <div className="full_screen">
            <div className="left_side_form_section">
                <div className="title_text">Taskify</div>
                <div className="form_section">
                    <div className="welcome_back_message">Welcome Back!</div>
                    <label className='label_email' htmlFor="email">Email Address</label>
                    <input className='input_email' type='email' name='email' placeholder="enter your email"/>
                    <label className='label_password' htmlFor="password">Password</label>
                    <input className='input_password' type='email' name='password' placeholder="enter your password"/>
                    <div className="button_container"><button className="button_signin">Sign in</button></div>
                    <div className="bottom_text">Don't have an account? Sign Up!</div>
                </div>
                <div className="empty_space_holder">

                </div>
                
            </div>
            <div className="right_side_image_section">
                <img src={image_right_side} alt='right_side_image'/>

            </div>

        </div>
    )
}
export default Sign_in;