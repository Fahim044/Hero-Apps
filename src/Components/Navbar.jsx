import React from 'react';
import logoImg from '../assets/logo.png';
import gitIcon from '../assets/github icon.svg';
import { Link, NavLink, useLocation } from 'react-router';
import '../navbar.css';
const Navbar = () => {
    const location=useLocation();
    return (
        <div className="navbar bg-base-100 shadow-sm max-w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow navSections">
        <li><NavLink to="/home" className={({isActive})=>(isActive || location.pathname==="/")?"active":""}>Home</NavLink></li>
      <li><NavLink to="/apps"><a>Apps</a></NavLink></li>
      <li><NavLink to="/installation"><a>Installation</a></NavLink></li>
      </ul>
    </div>
    <Link to="/"><a className="flex items-center cursor-pointer gap-2 text-xl font-bold ">
        <img className='w-[50px]' src={logoImg} alt="" />
        <h2>HERO.IO</h2>
    </a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 navSections">
      <li><NavLink to="/home" className={({isActive})=>(isActive || location.pathname==="/")?"active":""}><a>Home</a></NavLink></li>
      <li><NavLink to="/apps"><a>Apps</a></NavLink></li>
      <li><NavLink to="/installation"><a>Installation</a></NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="https://github.com/Fahim044" target='_blank'><a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-lg font-semibold p-3">
        <img className='w-[30px]' src={gitIcon} alt="" />
        <h3>Contribute</h3>
    </a></Link>
  </div>
</div>
    );
};

export default Navbar;