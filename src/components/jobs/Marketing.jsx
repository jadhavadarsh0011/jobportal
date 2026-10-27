import React, { useEffect, useState } from 'react'
import "./Jobs.css"
import { FaUser } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import { useNavigate } from 'react-router-dom';

const Marketing = () => {
    const [data, setData] = useState([])
    const navigate=useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch("Marketing.json")
            const result = await api.json()
            setData(result)
        }

        fetchData()
    }, [])

    return (
        <>
            <Navbar />
            <div style={{ backgroundColor: 'rgba(248, 255, 254, 0.86)' }}>
                <h1>Marketing</h1>

                {/* <h2>Total Users: {data.filter((user) => user.role === "Software Developer").length}</h2> */}

                <div className='filds'>
                    {data.map((user) => (
                        <div key={user.id} className='filds_info'>
                            {/* <h2>{user.name}</h2> */}
                            <p className='com_name'><FaBuilding className='logo' /> {user.companyName}</p>
                            <hr />
                            <p className='role'><FaUser className='logo' /> role: {user.role}</p>
                            <p><MdLocationCity className='logo' /> interview Place : {user.interviewPlace}</p>
                            <p><IoBagHandleSharp className='logo' /> package : {user.packageLpa} Lpa</p>
                            <p><FaLocationDot className='logo' /> location: {user.location}</p>
                            <p><FaWifi className='logo' /> mode: {user.mode}</p>
                            <button ><FaLocationArrow /><a href="https://forms.gle/PjbCS3iMWhUMxsoaA"> Apply Now</a></button>
                        </div>
                    ))}

                </div>
            </div>
        <Footer />
        </>
    )
}

export default Marketing
