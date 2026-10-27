import React, { useState } from 'react'
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa6";
import axios from 'axios'

import './Login.css'
const Register = () => {
  const navigate = useNavigate()

  const [register, setRegister] = React.useState({
    name: "",
    email: "",
    mobile: "",
    password: ""
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(register);
    try {
      const response= await axios.post('http://localhost:8080/addUser',register)
      console.log(response.data);
      alert("User Register Successfully..!");
      navigate("/")
      
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className='login_contant'>

        <div className='login'>
          <form action="" onSubmit={handleSubmit}>
            <h3>Register</h3>
            <FaUser />
            <input type="text" placeholder='Enter your Name' name='name' value={register.name} onChange={handleChange} />
            <br />
            < MdEmail />
            <input type="text" placeholder='Enter your Email' name='email' value={register.email} onChange={handleChange} />
            <br />
            <FaMobile />
            <input type="text" placeholder='Enter your Number'  name='mobile' value={register.mobile} onChange={handleChange} />
            <br />
            <RiLockPasswordLine /><input type="password" placeholder='Enter Password' name='password' value={register.password} onChange={handleChange} />
            <br />
            <button >Submit</button>
            <p>You have any account to <i onClick={() => navigate("/")}>Login now</i></p>
          </form>
        </div>


        <div className='login1'>
          <img src="https://motionarray.imgix.net/1666255-3VvVbNw7xQ-high_0004.jpg?w=660&q=60&fit=max&auto=format" alt="" />
        </div>


      </div>
    </>
  )
}

export default Register
