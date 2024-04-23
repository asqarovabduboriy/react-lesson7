import './App.css'
import Footer from './Componets/Footer/Footer';
import Navbar from './Componets/Navbar/Navbar';

function App() {
  

  return (
    <>
     <Navbar/>
     <Footer/>
     <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/carres' element={<Carrers />} />
                <Route path='/servic' element={<Service />} />
            </Routes>
    </>
  )
}

export default App;
