import React from 'react'
import "./Carrers.css"
import Card from '../../Card/Card'
import sevice_img from '../../../assets/img/Image (6).png'


const Carrers = () => {
    return (
       <>
      <div className='container '>
        <div className='about_flex_div margin'  >
          <div className='text_content'>
            <h1>We hired people who are very passionate about what they do</h1>
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

export default Carrers;