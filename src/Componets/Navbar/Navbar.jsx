import React from 'react';
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/Logo.png'


function Navbar() {
    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Blog', path: '/blog' },
        { title: 'CAREERS', path: '/carres' },
        { title: 'Service', path: '/servic' },
        { title: 'Product', path: '/product' }

    ];

    let navlink = navLinks.map((link, index) => (
        <li key={index}>
            <Link className='link' to={link.path}>{link.title}</Link>
        </li>
    ))

    return (
        <>

            <header className='window_header'>
                <div className='container'>
                    <div className=' wrapper'>
                        <div className='logo'>
                            <NavLink to={'/'}><img src={logo} alt="" /></NavLink>
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

            <header className="header mobilni">
                <NavLink to={'/'}><img src={logo} alt="" /></NavLink>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    {navlink}
                </ul>
            </header>


        </>
    );
}

export default Navbar;
