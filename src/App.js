import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/page/Login';
import Register from './components/page/Register';
import Home from './components/home/Home';
import Api from './components/Service/Api';
import It_soft from './components/jobs/It_soft';
import Hr from './components/jobs/Hr'
import Design from './components/jobs/Design'
import Seles from './components/jobs/Seles'
import Marketing from './components/jobs/Marketing'
import Education from './components/jobs/Education'
import Finanse from './components/jobs/Finanse'
import Helthcare from './components/jobs/Healthcare'
import About from './components/home/About';
import Farm from './components/page/Farm'
import NewPage from './components/jobs/NewPage';
import Companie from './components/home/Companie';
const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/api' element={<Api />} />
        <Route path='/it_soft' element={<It_soft />} />
        <Route path='/hr' element={<Hr />} />
        <Route path='/design' element={<Design />} />
        <Route path='/seles' element={<Seles />} />
        <Route path='/marketing' element={<Marketing />}/>
        <Route path='/education' element={<Education />}/>
        <Route path='/finance' element={<Finanse/>}/>
        <Route path='/healthcare' element={<Helthcare/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/farm' element={<Farm />} />
        <Route path="/newpage/:id" element={<NewPage />} />
        <Route path='/companie' element={<Companie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
