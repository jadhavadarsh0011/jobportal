
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './Home.css'
import { FaSearch } from "react-icons/fa";
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { FaLocationArrow } from "react-icons/fa6";
import alldata from '../Service/alldata'

const Home = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [search, setSerach] = useState("")
  // const [location, setLocation] = useState("")

  const handleSearch = (e) => {
    e.preventDefault();
    const found = alldata.find(
      (item) =>
        item.role?.toLowerCase().trim() ===
        search.toLowerCase().trim()
    );
    if (found) {
      navigate(`/newpage/${found.id}`);
    } else {
      alert("Not Found Job");
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("Itsoftware.json"
      )
      const result = await api.json()
      setData(result)
    }

    fetchData()
  }, [])
  return (
    <>

      <Navbar />
      <div className='cantainer' >
        <div className='headding'>Find Your <i style={{ color: '#ffffff' }}>Dream Job</i>
          <p style={{ fontSize: '18px' }}>Explore thousands of job opportunities from top companies</p>
          <p style={{ fontSize: '18px' }}>Bulid your career, achieve your goals.</p>
          <div className='serachjob'>
            <form onSubmit={handleSearch} >
              <FaSearch style={{ fontSize: "20px" }} />

              <input type="text" placeholder="Job role e.g. Java Developer"
                value={search} onChange={(e) => setSerach(e.target.value)}
              />
              {/* <div>

             
              {/* 
              <select value={location} onChange={(e) => setLocation(e.target.value)} >
                <option value="">All Locations</option>
                <option value="Pune, Maharashtra">Pune, Maharashtra</option>
                <option value="Mumbai, Maharashtra">Mumbai, Maharashtra</option>
                <option value="Bangalore, Karnataka">Bangalore, Karnataka</option>
                <option value="Hyderabad, Telangana">Hyderabad, Telangana</option>
                <option value="Ahmedabad, Gujarat">Ahmedabad, Gujarat</option>
                <option value="New Delhi, Delhi">New Delhi, Delhi</option>
                <option value="Gurugram, Haryana">Gurugram, Haryana</option>
              </select> 
              </div> */}
              <button type='submit'>Search Jobs</button>
            </form>
          </div>
        </div>
        <div>
          <img src="manimg.png" alt="" />
        </div>
      </div>

      <h4 style={{ marginTop: '30px', marginLeft: '20px' }}>
        Popular Categories
      </h4>
      <div className='categories'>
        <div className='categories_nav' onClick={() => navigate('/it_soft')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDH2MgaEyWz2fQUAT4QM8TzKIaTKojAWSV9-al1QWjA&s=10" alt="" />
          <p >It & software</p>
        </div>
        <div className='categories_nav' onClick={() => navigate('/marketing')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRemlYmu9KaVACBdmQnwf25D6MUKOTl92Gjc_gl6bTiw&s=10" alt="" />
          <p>Marketing</p>
        </div>
        <div className='categories_nav' onClick={() => navigate('/design')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrRbqOMbTJGHdvc9IlsCG1M6Y-3MWkGAO1dR8Ne_aWA&s=10" alt="" />
          <p>Design</p>
        </div>
        <div className='categories_nav' onClick={() => navigate('/finance')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfueLKaEDx9UHCV8LIvaWRq3FaSo641QMWVSRJW1LCWA&s=10" alt="" />
          <p>finance</p>
        </div>
        <div className='categories_nav' onClick={() => navigate('/seles')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShAV09xNHEnTaAXmgU_sfKR54A6uXq7urcwgN1-6Rp-w&s=10" alt="" />
          <p>Seles</p>
        </div>
        <div className='categories_nav' onClick={() => navigate('/healthcare')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLV5Ndc0B9ispf1PMUIVvb7lfDYEgMocXf0caqdC0Akw&s=10" alt="" />
          <p>Healthcare</p>
        </div>
        <div className='categories_nav' onClick={() => navigate('/hr')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWDa9lnv1Ylr5yFTXhGa_-GiMIBtljtuBKxvkWnWJTA&s=10" alt="" />
          <p>HR</p>
        </div>
        <div className='categories_nav' onClick={() => navigate('/education')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPage_XxoWOP7KF4LFttijHOr_WmUGNv6upUOGbUFc0w&s=10" alt="" />
          <p>Education</p>
        </div>


      </div>

      <h4 style={{ marginTop: '30px', marginLeft: '20px' }}>
        Featured Jobs
      </h4>
      {data.slice(0, 1).map((user) => (
        <div className='jobs' key={user.companyName}>


          <div className='job_cat'>
            <div className='info'>
              <div>
                <img src="data:image/png;base64,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" alt="" />
              </div>
              <div>
                <p>Frontend developer <br />
                  <i> {user.companyName}  </i>
                </p>
              </div>

            </div>
            <div className='loc_time'>
              <p>{user.location}</p>
              <p> {user.mode}</p>
            </div>
            <p> {user.packageLpa}LPA</p>
            <button ><FaLocationArrow /><a href="https://forms.gle/PjbCS3iMWhUMxsoaA"> Apply Now</a></button>

          </div>

          <div className='job_cat'>
            <div className='info'>
              <div>
                <img src="data:image/png;base64,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" alt="" />
              </div>
              <div>
                <p>Java developer <br />
                  <i> {user.companyName}  </i>
                </p>
              </div>

            </div>
            <div className='loc_time'>
              <p>{user.location}</p>
              <p> {user.mode}</p>
            </div>
            <p>  {user.packageLpa}LPA</p>
            <button ><FaLocationArrow /><a href="https://forms.gle/PjbCS3iMWhUMxsoaA"> Apply Now</a></button>
          </div>

          <div className='job_cat'>
            <div className='info'>
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7f4qvRUysS9-DDDVJtdn-ylYINxb_-4VvXPrAMc0-Q&s=10" alt="" />
              </div>
              <div>
                <p>Full Stack Developer <br />
                  <i> {user.companyName} </i>
                </p>
              </div>

            </div>
            <div className='loc_time'>
              <p>{user.location}</p>
              <p> {user.mode}</p>
            </div>
            <p>  {user.packageLpa}LPA</p>
            <button ><FaLocationArrow /><a href="https://forms.gle/PjbCS3iMWhUMxsoaA"> Apply Now</a></button>

          </div>

          <div className='job_cat'>
            <div className='info'>
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRemlYmu9KaVACBdmQnwf25D6MUKOTl92Gjc_gl6bTiw&s=10" alt="" />
              </div>
              <div>
                <p>Marketing <br />
                  <i> {user.companyName} </i>
                </p>
              </div>

            </div>
            <div className='loc_time'>
              <p>{user.location}</p>
              <p> {user.mode}</p>
            </div>
            <p>  {user.packageLpa}LPA</p>
            <button ><FaLocationArrow /><a href="https://forms.gle/PjbCS3iMWhUMxsoaA"> Apply Now</a></button>

          </div>

          <div className='job_cat'>
            <div className='info'>
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9RX7c3XMBanGz8tL-WgIjchpFKxFjTO0sStkgtT8aw&s=10" alt="" />
              </div>
              <div>
                <p>Data analytics<br />
                  <i> {user.companyName} </i>
                </p>
              </div>

            </div>
            <div className='loc_time'>
              <p>{user.location}</p>
              <p> {user.mode}</p>
            </div>
            <p>  {user.packageLpa}LPA</p>
            <button ><FaLocationArrow /><a href="https://forms.gle/PjbCS3iMWhUMxsoaA"> Apply Now</a></button>

          </div>

        </div>
      ))

      }
      <Footer />

    </>
  )
}

export default Home
