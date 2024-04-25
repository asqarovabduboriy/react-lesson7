import React,{useEffect} from 'react'
import './Blog.css'
import sevice_img from '../../../assets/img/Header Image.png'

const Blog = () => {

  useEffect(()=>{
    
    window.scrollTo(0,0)

  },[])

  
  return (
    <div className='bg_color padding'>
      <div className='container '>
        <div className='about_flex_div margin'  >
          <div className='text_content'>
            <h1>Our internal process and longerm vision</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
            <button>Read more</button>
          </div>
          <div className='img_wrapper_about'>
            <img src={sevice_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog