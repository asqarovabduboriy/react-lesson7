import React from 'react'
import "./Service.css"
import sevice_img from '../../../assets/img/Image (5).png'
import Card from '../../Card/Card'

const Service = (props) => {
  return (
    <>
      <div className='container '>
        <div className='about_flex_div margin'  >
          <div className='text_content'>
            <h1>We serve clients with ground breaking solutions</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
            <button>Work With Us</button>
          </div>
          <div className='img_wrapper_about'>
            <img src={sevice_img} alt="" />
            <div className='rektangle_about'></div>
          </div>
        </div>
      </div>
      <Card/>
    </>
  )
}

export default Service;