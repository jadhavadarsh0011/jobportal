import React, { useState } from 'react'
import './Login.css'
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Login = () => {
  const navigate = useNavigate();
  const [email,setEmailValue] =useState("")
  const [password,setPasswordValue] =useState("")

  const setEmail =(e)=>{
    setEmailValue(e.target.value);
  }
  const setPassword=(e)=>{
      setPasswordValue(e.target.value);
  }
  
  const handleSubmit =async (e)=>{
    e.preventDefault()
    // console.log("email"+email +"password"+password)
    //create an obect with email and password
    const data={
      "email":email,
      "password":password
    }
    try{
      const response = await axios.post("http://localhost:8080/loginUser",data);
      if(response.data === false || response.data === "false"){
        alert("Invalid User email or password");
      }
      else{
        alert("Login Successfull");
        navigate("/home")
      }
    }catch(error){
      console.error(error);
    }
  }
  return (
    <>
      <div className='login_contant'>

        <div className='login'>
          <form action="" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <FaUser />
            <input type="text" placeholder='Enter Email,Number' onChange={setEmail} />
            <br />
            <RiLockPasswordLine /><input type="password" placeholder='Enter Password' onChange={setPassword} />
            <br />
            <button>Submit</button>
            <p>Don`t have any account? <i onClick={() => navigate("/register")}>Signup now</i></p>
          </form>
        </div>


        <div className='login1'>

          <img src="https://motionarray.imgix.net/1666255-3VvVbNw7xQ-high_0004.jpg?w=660&q=60&fit=max&auto=format" alt="" />

        </div>


      </div>

    </>
  )
}

export default Login
