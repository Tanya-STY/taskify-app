import React from "react";
import './sign_in.css';
import { useState } from "react";
//import {useNavigate} from 'react-router-dom';

//text data to verify email and password
import textData from '../Data/data.txt';

//photos needed
import image_right_side from '../../image/image_right_side_signin.png' ; 


function Sign_in () {

    //const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fileContent, setFileContent] = useState(textData);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
      };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
      };
    
    const handleSubmit = () => {

        console.log('clicked button');
        console.log('email: ' + email + ' password: ' + password);
        console.log('fileContent: ' + fileContent);

        fetch(fileContent)
        .then(row => row.text())
        .then(text => {
            console.log('text inside then : ' + text);
            console.log("text.includes(email + ' ' + password) : " + text.includes(email + ' ' + password))

            if (text.includes(email + ' ' + password)) {
            console.log('Email and password found ');
            //navigate('/Home');
            
            } else {
            console.log('Email and/or password not found.');
            }


            console.log('text:', text);
        });
    }

    return (
        <div className="full_screen">
            <div className="left_side_form_section">
                <div className="title_text">Taskify</div>
                <div className="form_section">
                    <div className="welcome_back_message">Welcome Back!</div>
                    <label className='label_email' htmlFor="email">Email Address</label>
                    <input className='input_email' type='email' name='email' placeholder="enter your email" value={email} onChange={handleChangeEmail}/>
                    <label className='label_password' htmlFor="password">Password</label>
                    <input className='input_password' type='password' name='password' placeholder="enter your password" value={password} onChange={handleChangePassword}/>
                    <div className="button_container"><button className="button_signin" onClick={handleSubmit}>Sign in</button></div>
                    <div className="bottom_text" >Don't have an account? Sign Up!</div>
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