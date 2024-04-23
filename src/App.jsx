import './App.css'
import Footer from './Componets/Footer/Footer';
import Navbar from './Componets/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

import Home from './Componets/Page/Home/Home';
import Blog from './Componets/Page/Blog/Blog';
import About from './Componets/Page/About/About';
import Carrers from './Componets/Page/Carresrs/Carrers';
import Service from './Componets/Page/Service/Service';

function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/carres' element={<Carrers />} />
                <Route path='/servic' element={<Service />} />
            </Routes>
     <Footer/>
    </>
  )
}

export default App;
