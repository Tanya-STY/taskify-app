import React from "react";
import './sign_in.css';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
//text data to verify email and password
import textData from '../Data/data.txt';

//photos needed
import image_right_side from "../Image/image_right_side_signin.png"


function Sign_in () {

    const navigate = useNavigate();

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

        const data = {
            email: email,
            password: password
        };

        try{
            fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if(!response.ok) {
                    alert("Not Connected to Backend")
                }
                return response.json();
            })
            .then(res_data =>{
                if (res_data['error']){
                    alert("Something wrong with the backend. Error: " + res_data['error'])
                }
                else if (res_data['message'] == 'wrongPassword'){
                    alert('Wrong password, try again')
                }
                else if(res_data['message'] == 'notFound'){
                    alert('Not yet Signed Up')
                }
                else if (res_data['message'] == 'missing'){
                    alert('Not yet completed, please complete before trying to log in')
                }
                else if(res_data['message'] == 'ok'){
                    navigate('/Homepage')
                }
            })
            .catch(error => {
                alert("error with backend");
                console.log(error);
            })
        }
        catch(error) {
            alert("error produced, Error: " + error)
        }
    }

    //     console.log('clicked button');
    //     console.log('email: ' + email + ' password: ' + password);
    //     console.log('fileContent: ' + fileContent);

    //     fetch(fileContent)
    //     .then(row => row.text())
    //     .then(text => {
    //         console.log('text inside then : ' + text);
    //         console.log("text.includes(email + ' ' + password) : " + text.includes(email + ' ' + password))

    //         if (text.includes(email + ' ' + password)) {
    //         console.log('Email and password found ');
    //         navigate('/Homepage');
            
    //         } else {
    //         console.log('Email and/or password not found.');
    //         }


    //         console.log('text:', text);
    //     });
    // }

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
                    <div className="bottom_text" >Don't have an account? <Link to='/Sign_up'>Sign Up!</Link></div>
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