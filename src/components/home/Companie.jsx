import companie from '../Service/companie'
import Footer from './Footer'
import Navbar from './Navbar'
import './Companie.css'

const Companie = () => {
  return (
    <>
      <Navbar />
      <div className='companie'>
        {
          companie.map((user) => (
            <div key={user} className='comp_info'>
              <div className='comp_info2'>
                <img src={user.logo} alt="" />
                {user.companyName} <br /> <br /> 
                {user.location}
              </div>
              <div>
              <p className='descripation'>{user.description}</p>
              <p >
                Website:{" "}
                <a href={user.website} target="_blank" rel="noreferrer" style={{ color: 'blue' }}>
                  {user.website}
                </a>
              </p>
              </div>
            </div>
          ))
        }
      </div>
      <Footer />
    </>
  )
}

export default Companie
