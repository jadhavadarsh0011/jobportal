import React from 'react'
import './Navbar.css'
import { FaShoppingBag } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='container'>
                <p className='p'> <FaShoppingBag /> JobPortal</p>
                <div style={{ display: 'flex', marginLeft: '10%' }}>
                    <p onClick={() => navigate("/home")}>Home</p>
                    {/* <p>Job</p> */}
                    <p onClick={()=>navigate("/companie")}>Companies</p>
                    <p onClick={()=>navigate("/about")}>About</p>
                </div>
                <div>
                    <button className='btn' style={{marginLeft:'270px'}} onClick={() => navigate("/")}>Login</button>
                    <button className='btn' onClick={() => navigate("/register")}>Register</button>
                </div>

            </div>
        </>
    )
}

export default Navbar
