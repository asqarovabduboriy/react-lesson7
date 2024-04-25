import React, {useEffect}from 'react'
import "./Home.css"
import home_logo from '../../../assets/img/Logo (3).png'
import home_logo1 from '../../../assets/img/Logo (2).png'
import home_logo2 from '../../../assets/img/Logo (1).png'
import img from '../../../assets/img/Image.png'
import Card from '../../Card/Card'



const Home = () => {

  useEffect(()=>{
    
    window.scrollTo(0,0)

  },[])

  return (
    <>
      <div className='bg_color'>
        <div className='container'>
          <div className='home_wrapper_flex'>
            <div className='home_text_content'>
              <h1>Prosper with our bespoke solutions</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
              <div className='btn_home'>
                <button>See our services</button>
                <p>See All Services </p>
              </div>
              <p className='home_p_text'>Worked with 100+ Companies</p>

              <div className='logo_container'>
                <div><img src={home_logo} alt="" /></div>
                <div><img src={home_logo1} alt="" /></div>
                <div><img src={home_logo2} alt="" /></div>
              </div>
            </div>
            <div className='home_img_container'>
               <img src={img} alt="" width={'800px'} height={'600px'} />
               <div className='rektangle'></div>
            </div>
          </div>
        </div>
      </div>
      <Card/>
    </>
  )
}

export default Home