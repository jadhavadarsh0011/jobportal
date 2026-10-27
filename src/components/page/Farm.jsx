import { FaBuilding } from "react-icons/fa";
import './Farm.css'
const Farm = () => {
 
  return (
    <>
      <form className='form'>
        <h2> <FaBuilding  className="logo"/> Apply for this job</h2>
        <p>Fill in the details below to apply</p>

        <div >
          <h3>Personal Information</h3>
          <div className='form_info'>
            <label >Full Name</label>
            <input type="text" placeholder='Enter Full name' required />

            <label >Email Id</label>
            <input type="text" placeholder='Enter Email Id' required />
          </div>
          <br />
          <div className='form_info'>
            <label >mobile Number</label>
            <input type="text" placeholder='Enter Mobile Number' required />

            <label >Date Of Birth</label>
            <input type="date" placeholder='Enter Date of Birth' required />
          </div>

        </div>

        <div>
          <h3>Education Details</h3>
          <div className='form_info' >
          <label >Highest Qualification</label>
          <input type="text" placeholder='Enter Highest Qualification' required />
         
          <label >Specialization</label>
          <input type="text" placeholder='Enter Specialization' required />
          </div>
          <br />
          <div className='form_info'>
          <label >College / University </label>
          <input type="text" placeholder='Enter College / University' required />
       
          <label >Graduation Year</label>
          <input type="text" placeholder='Enter Specialization' required />
          </div>
          <div className='form_info'>
          <label >CGPA/Percentage</label>
          <input type="text" placeholder='Enter CGPA/Percentage' required />
          
          <label >Are you currently having any backlogs?</label><br />
          <select name="" id="">
            <option value="">No</option>
            <option value="">Yes</option>
          </select>
          </div>
        </div>
        <div>
          <h3>Work Experience</h3>
        <p> Relevant Experience(in years) </p>          
          <select name="">
            <option value="">6 months</option>
            <option value="">1 Year</option>
            <option value="">2 Year</option>
            <option value="">3 Year</option>
            <option value="">4 Year & More</option>
            <option value="">No Experience</option>
          </select>
        </div>
        <div>

          <h3>Resume Upload</h3>
           <p> Upload your latest Resume(PDF,DOC,DOCX) </p>
          <input type="file" style={{marginLeft:'10px'}}/>
        </div>
        <p>
          <input type="checkbox" required /> I agree to the Terms & Conditions and Privacy Policy
        </p>
        <button>Submit Application</button>
      </form>
    </>
  )
}

export default Farm
