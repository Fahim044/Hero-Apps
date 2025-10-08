import React from 'react';
import logoImg from '../assets/logo.png';
import twittLogo from '../assets/twitterLogo.png';
import fbLogo from '../assets/fbLogo.png';
import youtLogo from '../assets/youtubeLogo.png';
const Footer = () => {
    return (
        <div className='border h-72 border-blue-600 w-full text-white bg-black grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center px-20' >
            <div className='space-y-3'>
                <img className='w-[50px]' src={logoImg} alt="" />
                <h4 className='font-bold'>Hero Apps</h4>
            </div>
            <div>
                <ul className='space-y-4'>
                    <li className='font-semibold'><a>COMPANY</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Jobs</a></li>
                    
                </ul>
            </div>
            <div>
                <ul className='space-y-4'>
                    <li className='font-semibold'><a>LEGAL</a></li>
                    <li><a>Terms and Conditions</a></li>
                    <li><a>Privacy Policy</a></li>
                    <li><a>Cookie Policy</a></li>
                    
                </ul>
            </div>
           
            <div className='flex gap-4 items-center '>
                
                    <img className='w-[30px]' src={fbLogo} alt="" />
                
                    <img className='w-[30px]' src={youtLogo} alt="" />

                    <img className='w-[30px]' src={twittLogo} alt="" />
            </div>
        </div>
    );
};

export default Footer;