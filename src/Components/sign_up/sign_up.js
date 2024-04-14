import React from "react";

import image_right_side from '../../image/image_right_side_signin.png' ; 
import './sign_up.css';

function Sign_up() {
    return(

        <div className="whole_page1">
            <div className="left_side_form_section1">
                <div className="title_text1">Taskify</div>
                <div className="form_section1">
                    <div className="welcome_text1">Welcome Back!</div>
                    <label className="label_1">Name</label>
                    <input className="input_1" placeholder="enter your name"></input>
                    <label className="label_1">Email address</label>
                    <input className="input_1" type='email' placeholder="enter your email"></input>
                    <label className="label_1">Password</label>
                    <input className="input_1" type='email' placeholder="enter your password"></input>
                    <label className="label_1">Retype Password</label>
                    <input className="input_1" type='email' placeholder="retype password"></input>
                    
                    <div className="container_button_agree1">
                        <button className="button_agree" type="checkbox"></button>
                        <label className="label_button_agree1">I agree to the terms & policy</label>
                    </div>
                    
                </div>
                <div className="lower_section1">
                    <div className="container_button_submit1"><button className="button_submit1">Sign Up</button></div>
                    <div className="message_already_account1">Already have an account? Log in!</div>
                </div>
            </div>
            <div className="right_side_image_section">
                <img src={image_right_side} alt='image_right_side'/>

            </div>
        </div>

    )
}
export default Sign_up;