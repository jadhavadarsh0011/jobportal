import React from 'react'
import './Footer.css'
import { FaShoppingBag } from "react-icons/fa"
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
const Footer = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <div className='footer_text'>
          <p>
            <h2>Why Choose Us?</h2>
            We help you connect with the right opprtunities <br />
            and grow your career.
          </p>
          <p>
            <h4>Trusted Companies</h4>
            work with top and <br />
            reputed companies
          </p>
          <p>
            <h4>Secure & Safe</h4>
            your data is always <br /> portected with us.
          </p>
          <p>
            <h4>Easy Application</h4>
            Applay in just a few <br /> clicks.
          </p>
          <p>
            <h4>Career Growth</h4>
            Get better opportunities <br /> and reach your goals.
          </p>
        </div>
{/* Footer */}
        <div className='footer_info'>
          <div className='footer_info2'>
            <div>
              <h1><FaShoppingBag />Job<a style={{ color: "rgb(0, 119, 255)" }}>Portal</a></h1>
              find Your Dream Job
              <p>We connect talented individuals with great
                companies.<br /> Explore  thousands of job opportunities
                and take the <br /> next step in your career </p>
              <i style={{ fontSize: "18px" }}>Your career <br />    our Priority</i>
            </div>
            <div>
              <h3>Quick Links</h3>
              <p onClick={()=>navigate("/home")}><FaHome /> Home</p>
              <p><FaSearch /> Jobs</p>
              <p onClick={()=>navigate("/about")}> <FcAbout /> About Us</p>
              {/* <p><IoMdContact /> Contact</p> */}
            </div>
            <div>
              <h3>For Job Seekers</h3>
              <p onClick={()=>navigate("/"  )}> Login</p>
              <p onClick={()=>navigate("/register")}>Register</p>
            </div>
            <div>
              <h3>Contact Us</h3>
              <p> <MdEmail /> support@jobportal.com</p>
              <p> <FaPhoneAlt /> 7620197601</p>
              <p> < FaLocationDot /> Pune,Maharashtra,<br />India</p>
              <p >
                Follow Us <br />
                <p style={{ gap: '25px' ,display:'flex'}}>
                  <a href='https://www.instagram.com/mr_adarsh_jadhav_001?exln=dm1wMWU1aDRyamNj'><GrInstagram /></a>
                  <a href='https://github.com/jadhavadarsh0011?tab=repositories'><FaGithub /></a>
                  <a href='https://www.linkedin.com/in/adarshjadhav0011/?isSelfProfile=true'><FaLinkedin /></a>
                </p>

              </p>
            </div>
          </div>
          <p className='copyright'><FaRegCopyright /> 2026 JobPortal. All Rights Reserved</p>
        </div>

      </div>

    </>
  )
}

export default Footer