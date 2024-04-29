import { useState } from 'react';
import '../css/app.css'; // Import your CSS file
import {FaUser,FaKey } from 'react-icons/fa'
// import axios from axios;
// import {useNavigate, Link } from "react-router-dom";

function SignIn() {


    let [formData, setFormData] = useState({
        email: "",
        password: "",
        type:""
    });
 
    let handleInputChange = (event) => {
        console.log(formData.userName, formData.password)
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };

        });
    };
    let handlesigninsubmit = async (event) => {
        event.preventDefault();
        console.log(formData);

        try{
            console.log('sent data');
            const response=await fetch('http://localhost:3000/login', 
            {method: 'POST',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(formData)});
            console.log('sent to link');
            const data=await response.json();
        
        if(response.ok) {
            console.log('Authentication successful');
        }
        else {
            console.log('Authentication failed', data.error);
        }

        }
        catch(event){
            console.log(event);
        }
        
    };
    return (
        <div className="signin-container"> 
            <div className="signin-image-container"></div> 
            <div className="signin-formbox"> 
                <h1>Sign In</h1>
                <form onSubmit={handlesigninsubmit} >
                    <div className="signin-input_grp"> 
                        <div className="signin-input_feild"> 
                            <FaUser className="icons"/>
                            <input type="text" placeholder="Username or Email" name='email' value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div className="signin-input_feild"> 
                            <FaKey className='icons'/>
                            <input type="password" placeholder="Password" name='password' value={formData.password} onChange={handleInputChange} />
                        </div>
                        <div className="signin_input_feild">
                                <select name='type' onChange={handleInputChange} defaultValue=''>
                                    <option value="" disabled >type</option>
                                    <option value="user">User</option>
                                    <option value="escort">Escort</option>
                                </select>
                            </div>
                        <p><a href="#">Forgot Password?</a></p>
                        <p><a href='/signup'>Don't have an account</a></p>
                        <div className="signin-btn"> 
                            <button type="submit" >Sign In</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
