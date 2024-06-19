import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { NavLink, useLocation } from 'react-router-dom';
import Warning from '../warning/Warning';

const Navbar = () => {
    const navParam = useLocation();
    const [currPage, setCurrPage] = useState(navParam.pathname);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openHamburger, setOpenHamburger] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        if (currPage === '/') {
            window.addEventListener('scroll', handleScroll);
        } else {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [currPage]);

    useEffect(() => {
        setCurrPage(navParam.pathname);
    }, [navParam]);

    return (
        <>
            <Warning />
            <div className={`${currPage === '/' ? (isScrolled ? "homePageSolidNav" : "homePageTransparentNav") : "containerSolid"}`}>
                <div className={`${!openHamburger ? "hamBurgerClose" : "hamBurger"}`}>
                    <h4>Sign In</h4>
                    <NavLink to='/shop'><h4 className='resNavItem' onClick={() => setCurrPage('shop')}>SHOP</h4></NavLink>
                    <NavLink to='/contact'><h4 className='resNavItem' onClick={() => setCurrPage('contact')}>CONTACT US</h4></NavLink>
                    <NavLink to='/blogs'><h4 className='resNavItem' onClick={() => setCurrPage('blogs')}>BLOGS</h4></NavLink>
                </div>
                <div className="nav">
                    <div className="navLeft">
                        <div className="logo">
                            <NavLink to='/'><img src={logo} alt="Skater's Hood Logo" onClick={() => setCurrPage('/')} /></NavLink>
                        </div>
                        <NavLink to="/about"><h4 className='navItem'>ABOUT US</h4></NavLink>
                        <NavLink to='/shop'><h4 className='navItem' onClick={() => setCurrPage('shop')}>SHOP</h4></NavLink>
                        <NavLink to='/contact'><h4 className='navItem' onClick={() => setCurrPage('contact')}>CONTACT US</h4></NavLink>
                        <NavLink to='/blogs'><h4 className='navItem' onClick={() => setCurrPage('blogs')}>BLOGS</h4></NavLink>
                    </div>
                    <div className="navRight">
                        <div className="cart">
                            <i className="ri-shopping-cart-line cart"></i>
                        </div>
                        <div className="hamburger" onClick={() => setOpenHamburger((prev) => !prev)}>
                            {openHamburger ? <i class="ri-close-line"></i> : <i class="ri-menu-line"></i>}
                        </div>
                        <button className='signInBtn'>Sign In</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
