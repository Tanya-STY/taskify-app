import React from "react";

import image_right_side from '../Image/image_right_side_signin.png' ; 
import './sign_up.css';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Sign_up() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const navigate = useNavigate();

    const hadnleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleChangePassword2 = (event) => {
        setPassword2(event.target.value);
    };

    const handleSubmit = () => {
        if(email == 'i@hotmail.com'){
            if (password == '123'){
                if (password2 == '123'){
                    navigate('/Homepage')
                }
            }
        }    
    }


    return(

        <div className="whole_page1">
            <div className="left_side_form_section1">
                <div className="title_text1">Taskify</div>
                <div className="form_section1">
                    <div className="welcome_text1">Welcome Back!</div>
                    <label className="label_1">Name</label>
                    <input className="input_1" placeholder="enter your name" value={name} onChange={hadnleChangeName}></input>
                    <label className="label_1">Email address</label>
                    <input className="input_1" type='email' placeholder="enter your email" value={email} onChange={handleChangeEmail}></input>
                    <label className="label_1">Password</label>
                    <input className="input_1" type='password' placeholder="enter your password"  value={password} onChange={handleChangePassword}></input>
                    <label className="label_1">Retype Password</label>
                    <input className="input_1" type='password' placeholder="retype password" value={password2} onChange={handleChangePassword2}></input>
                    
                    <div className="container_button_agree1">
                        <button className="button_agree" type="checkbox"></button>
                        <label className="label_button_agree1">I agree to the terms & policy</label>
                    </div>
                    
                </div>
                <div className="lower_section1">
                    <div className="container_button_submit1"><button className="button_submit1" onClick={handleSubmit}>Sign Up</button></div>
                    <div className="message_already_account1">Already have an account? <Link to="/Sign_in">Log in!</Link></div>
                </div>
            </div>
            <div className="right_side_image_section">
                <img src={image_right_side} alt='image_right_side'/>

            </div>
        </div>

    )
}
export default Sign_up;