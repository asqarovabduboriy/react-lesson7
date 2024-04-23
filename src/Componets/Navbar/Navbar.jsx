import React from 'react';
import "./Navbar.css";
import { Route, Routes, Link } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Blog from '../Page/Blog/Blog';
import About from '../Page/About/About';
import logo from '../../assets/img/Logo.png'
import Carrers from '../Page/Carresrs/Carrers';
import Service from '../Page/Service/Service';

function Navbar() {
    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Blog', path: '/blog' },
        { title: 'cAREERS', path: '/carres' },
        { title: 'Service', path: '/servic' }

    ];

    let navlink = navLinks.map((link, index) => (
        <li key={index}>
            <Link className='link' to={link.path}>{link.title}</Link>
        </li>
    ))

    return (
        <header><div className='container'>
            <div className=' wrapper'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <nav>
                    <ul className='nav_ul_link'>
                        {navlink}

                        <li><button>Clone project</button></li>
                    </ul>
                </nav>
            </div>
        </div>
        </header>
    );
}

export default Navbar;
