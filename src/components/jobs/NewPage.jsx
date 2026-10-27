
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import alldata from "../Service/alldata";
import "./Jobs.css"
// import { Fajobs } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser, FaWifi } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
const NewPage = () => {
  const { id } = useParams();

  const found = alldata.filter(
    (item) => String(item.id) === String(id)
  );
  const [activeCard, setActiveCard] = useState(null);
  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <div className="filds">
        {found.length > 0 ? (
          found.map((jobs, index) => (
            <div className="filds_info" key={index}>
              <p className='com_name'><FaBuilding className='logo' /> {jobs.companyName}</p>
              <hr />
              <p className='role'><FaUser className='logo' /> role: {jobs.role}</p>
              <p><MdLocationCity className='logo' /> interview Place : {jobs.interviewPlace}</p>
              <p><IoBagHandleSharp className='logo' /> package : {jobs.packageLpa} Lpa</p>
              <p><FaLocationDot className='logo' /> location: {jobs.location}</p>
              <p><FaWifi className='logo' /> mode: {jobs.mode}</p>
              <button ><FaLocationArrow /><a href="https://forms.gle/PjbCS3iMWhUMxsoaA"> Apply Now</a></button>
            </div>
          ))
        ) : (
          <h2>Job not Found</h2>
        )}
      </div>
      <Footer />
    </>
  )
}

export default NewPage
