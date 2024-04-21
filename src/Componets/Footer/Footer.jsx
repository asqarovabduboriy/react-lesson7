import React from 'react';
import './Footer.css';
import { Link} from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import logo from '../../assets/img/Logo (4).png';


const Footer = () => {
    return (
        <footer className='footer_bg_color'>
            <div className='container'>
                <div className='flex_element_footer'>
                    <div className='logo_footer_text_content'>
                        <img src={logo} alt="" />
                        <h1>Bespoke software solutions</h1>
                        <div className='icon_container'>
                            <FaFacebookF />
                            <FaYoutube />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                    </div>
                    <div className='footer_link'>
                        <h3>Company</h3>
                        <ul className='ul_footer'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/carres'>Careers</Link></li>
                            <li><Link to='/servic'>Service</Link></li>
                        </ul>
                    </div>
                    <div className='conect'>
                         <h3>conect</h3> 
                         <p>hi@finsweet.com</p>
                         <p>+998 94 620 26 61</p>
                    </div>
                    <div className='input_container'>
                          <h3>Join Newsletter</h3>
                          <form className='footer_input'>
                            <input type="text" placeholder='Type email here' />
                            <button>Subscribe</button>
                          </form>
                    </div>
                </div>
                <div className='police'>
                    <p>© All rights reserved – Finsweet</p>
                    <div className='police_text'>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p> 
                    </div>   
                </div>
            </div>
        </footer>
    );
};

export default Footer;
