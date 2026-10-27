import './About.css'
import Navber from './Navbar'
import Footer from './Footer'
const About = () => {
    return (
        <>
            <Navber />
            <div>
                <div className='about'>
                    <div>
                        <h2 style={{ color: 'blue', marginLeft: '30px' }}>About Us</h2>
                        <h1 style={{ marginLeft: '30px' }}>Your Future, <i style={{ color: 'blue' }}> Our Mission</i></h1>
                        <p className='p'>
                            We are a dedicated job portal platform designed to connect <br />
                            taiented individuals with the right opportunites. Our goal is <br />
                            to make the job search process simple, fast and effective for <br />
                            everyone - from freshers to experienced professionals.
                            <br /><br />
                            We believe in the power of dreams and the right oppotunities. <br />
                            Thats why we are here - to help you find a, job build your career <br />
                            and achieve your goals.
                        </p>
                    </div>
                    <div>
                        <img src="manimg.png" alt="" />
                    </div>
                </div>
                <div className='about'>
                    <div>
                        <h2>Wide Job Listings</h2>
                        <p>
                            Explore jobs from top <br />
                            companies across various industries <br />
                            various industries.
                        </p>
                    </div>
                    <div>
                        <h2>Trusted Platform</h2>
                        <p>
                            We ensure genuine<br />
                            and verified job<br />
                            opportunities.
                        </p>
                    </div>
                    <div>
                        <h2>For Everyone</h2>
                        <p>
                            Whether you're a <br />
                            fresher or an experieneced <br />
                            professional, we;re here <br />for you.
                        </p>
                    </div>
                    <div>
                        <h2>Build your Career</h2>
                        <p>
                            Take the next step <br />
                            towards a brighter <br />
                            future with us.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
