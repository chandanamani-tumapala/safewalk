// import React from 'react';
import { useState } from 'react';
import '../css/app.css'; // Importing the CSS file
import { useNavigate } from 'react-router-dom';
import { FaUser, FaKey, FaMobileAlt, FaCalendarAlt, FaVenusMars } from 'react-icons/fa'
import axios from 'axios'
function UserSignUp() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobilenumber: "",
        password: "",
        dob: "",
        gender: "",
        emergcontact1: "",
        emergcontact2: ""
    });

    const handleInputChange = (event) => {
        console.log(formData)
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    const navigate = useNavigate();

    const handlesignupsubmit = async (event) => {
        event.preventDefault();
        console.log('form', formData);

        try {
            const response = await axios.post('http://localhost:3000/usersignup', formData);
            console.log(response.data);
            navigate('/');
        } catch (error) {
            console.error('Error signing up:', error);
        }

    };
        return (
            <div className="container">
                <div className="formbox">
                    <h1>Sign Up</h1>
                    <form onSubmit={handlesignupsubmit}>
                        <div className="input_grp">
                            <div className="input_feild">
                                <FaUser className='icons' />
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="name" name='name' value={formData.name} onChange={handleInputChange} />
                            </div>
                            <div className='input_feild'>
                                <input type='text' placeholder='Email' name='email' value={formData.email} onChange={handleInputChange} />
                            </div>
                            <div className="input_feild">
                                <FaMobileAlt className='icons' />
                                <i className="fas fa-mobile-alt"></i>
                                <input type="text" placeholder="Mobile Number or Email" name='mobilenumber' value={formData.mobilenumber} onChange={handleInputChange} />
                            </div>
                            <div className="input_feild">
                                <FaKey className='icons' />
                                <i className="fas fa-key"></i>
                                <input type="password" placeholder="Password" name='password' value={formData.password} onChange={handleInputChange} />
                            </div>
                            <div className="input_feild">
                                <FaCalendarAlt className='icons' />
                                <i className="fas fa-calendar-alt"></i>
                                <input type="date" placeholder="Date of Birth" name='dob' value={formData.dob} onChange={handleInputChange} />
                            </div>
                            <div className="input_feild">
                                <FaVenusMars className='icons' />
                                <i className="fas fa-venus-mars"></i>
                                <select name='gender' onChange={handleInputChange} defaultValue=''>
                                    <option value="" disabled >Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="input_feild">
                                <FaMobileAlt className='icons' />
                                <i className="fas fa-mobile-alt"></i>
                                <input type="text" placeholder="Emergency contact 1" name='emergcontact1' value={formData.emergcontact1} onChange={handleInputChange} />
                            </div>
                            <div className="input_feild">
                                <FaMobileAlt className='icons' />
                                <i className="fas fa-mobile-alt"></i>
                                <input type="text" placeholder="Emergency contact 2" name='emergcontact2' value={formData.emergcontact2} onChange={handleInputChange} />
                            </div>
                            <div className="btn">
                                <button type="submit">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    export default UserSignUp;
