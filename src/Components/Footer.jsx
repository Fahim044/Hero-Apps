import React from 'react';
import logoImg from '../assets/logo.png';
import twittLogo from '../assets/twitterLogo.png';
import fbLogo from '../assets/fbLogo.png';
import youtLogo from '../assets/youtubeLogo.png';
import { Copyright } from 'lucide-react';
const Footer = () => {
    return (
        <>
        <div className=' w-full text-white bg-purple-950 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center p-20 gap-4 text-center border-b-2 ' >
            <div className='space-y-3'>
                <img className='w-[50px] mx-auto' src={logoImg} alt="" />
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
           
            <div className='flex gap-4 items-center mx-auto'>
                
                    <img className='w-[30px]' src={fbLogo} alt="" />
                
                    <img className='w-[30px]' src={youtLogo} alt="" />

                    <img className='w-[30px]' src={twittLogo} alt="" />
            </div>
        </div>
        <div className='text-center bg-purple-950 flex items-center mx-auto justify-center p-2'>
           <Copyright /> 
           <p>All Rights Resevred</p>
        </div>
        </>
    );
};

export default Footer;