import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Plans from './Pages/Plans/Plans';
import Services from './Pages/Services/Services';
import Projects from './Pages/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Tools from './Pages/Tools/Tools';
import Contact from './Pages/Contact/Contact';



function App() {
  

  return (
    <div className='app-container'>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/projects" element={<Projects/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/plans&pricing" element={<Plans/>}></Route>
    <Route path="/tools" element={<Tools/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>

  </Routes>
  </BrowserRouter>
<Footer/>
    </div>
   )
}

export default App
