import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css'
import logo from '/logo-dark.svg'

function Header() {

    const toggleSubMenu = (e) => {
        let dropdown = e.target.nextElementSibling;
        dropdown.classList.toggle('show-dropdown-menu');
        document.querySelector(".navlinks").classList.toggle('navlinks-sub-active');
    }
    const location = useLocation();

    useEffect(() => {

        document.body.classList.remove('menu-open');
        document.querySelector(".navlinks").classList.remove('navlinks-sub-active');
    }, [location]);

    return (
        <header className='container-fluid d-flex align-items-center p-0'>
            <div className="container d-flex justify-content-start align-items-center py-md-3">
                <div className="logo me-auto">
                    <img src={logo} alt="Transvaal Infotech" />
                </div>
                <div className='navMob '>
                    <ul className="navlinks h-100 d-flex justify-content-center flex-xl-row flex-column align-items-xl-center align-items-start p-5 p-xl-0 gap-4">
                        <li className="navlink">
                            <NavLink className={({ isActive }) =>`nav-link-a ${isActive ? 'active' : ''}`} to="/">Home</NavLink>
                        </li>
                        <li className="navlink">
                            <NavLink className={({ isActive }) =>`nav-link-a ${isActive ? 'active' : ''}`} to="/about">About</NavLink>
                        </li>
                        <li className="navlink">
                            <NavLink className={({ isActive }) =>`nav-link-a ${isActive ? 'active' : ''}`} to="/service">Service</NavLink>
                            <div className="show-dropdown" onClick={(e)=> toggleSubMenu(e)}></div>
                            <div className="drop-down p-4 rounded-3">  
                                <ul className='d-flex flex-column gap-4'>
                                    <li><NavLink to="/test" className={({ isActive }) => `nav-link-a ${isActive ? 'active' : ''}` }>Web Development</NavLink></li>
                                    <li><NavLink to="/test" className={({ isActive }) => `nav-link-a ${isActive ? 'active' : ''}` }>Mobile Development</NavLink></li>
                                    <li><NavLink to="/test" className={({ isActive }) => `nav-link-a ${isActive ? 'active' : ''}` }>Digital Marketing</NavLink></li>
                                    <li><NavLink to="/test" className={({ isActive }) => `nav-link-a ${isActive ? 'active' : ''}` }>UI/UX Deignig</NavLink></li>
                                </ul>
                            </div>
                        </li>
                        <li className="navlink">
                            <NavLink className={({ isActive }) =>`nav-link-a ${isActive ? 'active' : ''}`} to="/blog">Blog</NavLink>
                        </li>
                        <li className="navlink">
                            <NavLink className={({ isActive }) =>`nav-link-a ${isActive ? 'active' : ''}`} to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='d-flex justify-content-center align-items-center ms-xl-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 14l2.5 2.5m-.067 2.025a1.48 1.48 0 1 1 2.092-2.092l3.042 3.042a1.48 1.48 0 1 1-2.092 2.092zM16 9A7 7 0 1 0 2 9a7 7 0 0 0 14 0" color="currentColor" /></svg>
                </div>
                <button class="follow-btn me-xl-3 d-none d-xl-block ms-4">
                    <span>Follow Us</span><span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.37 5.85l2.54-4.06a1.09 1.09 0 0 1 .94-.52h0A1.11 1.11 0 0 1 8 2.37v2.91h4.39a1.15 1.15 0 0 1 1.1 1.32l-.8 5.16a1.14 1.14 0 0 1-1.13 1H5a2 2 0 0 1-.9-.21l-.72-.36m-.01-6.34v6.31M1 5.85h2.37v6.31h0H1a.5.5 0 0 1-.5-.5V6.35a.5.5 0 0 1 .5-.5Z" /></svg>
                    </span>
                    <ul>
                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4c0-1 .5-1 1-1h.6a.75.75 0 0 0 .76-.76V1.3a.76.76 0 0 0-.77-.76L8.17.52a2.86 2.86 0 0 0-2.95 3.2v1.45h-.79a.76.76 0 0 0-.76.76v.94a.76.76 0 0 0 .76.76h.79V13a.5.5 0 0 0 .5.5h1.81A.5.5 0 0 0 8 13V7.63h.88a.76.76 0 0 0 .76-.76v-.94a.76.76 0 0 0-.76-.76H8Z" /></svg></a>
                        </li>
                        <li>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z" /></svg></a>
                        </li>
                        <li>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M7 10v7m4-4v4m0-4a3 3 0 1 1 6 0v4m-6-4v-3M7.008 7h-.009" /><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" /></g></svg></a></li></ul></button>

                <button className='d-flex d-xl-none menu ms-4'></button>
                {/* <div className=' d-flex justify-content-center align-items-center nav-btn'>
                    <button className='btn custom-btn px-xl-3'>
                        <svg className='d-block d-xl-none' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m2.6 13.083l3.452 1.511L16 9.167l-6 7l8.6 3.916a1 1 0 0 0 1.399-.85l1-15a1.002 1.002 0 0 0-1.424-.972l-17 8a1.002 1.002 0 0 0 .025 1.822M8 22.167l4.776-2.316L8 17.623z" /></svg>
                        <span className='d-none d-xl-block'>Get Started</span>
                    </button>

                </div> */}
            </div>
        </header>
    )
}

export default Header