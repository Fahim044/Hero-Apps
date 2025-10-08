import React from 'react';
import googleIcon from '../assets/Google play icon.png';
import appStoreIcon from '../assets/App Store icon.png';
import heroImg from '../assets/hero.png';
import { Link } from 'react-router';
const HomeStatic = () => {
    return (
        <>
        <div className='text-center max-w-11/12 mx-auto space-y-6'>
            <h1 className='font-bold text-6xl'>We Build <br />
        <span className='text-[#632EE3] '>Productive</span> Apps</h1>
    <p className='text-gray-500'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
    <div className='flex gap-4 items-center justify-center'>
       <Link to={`https://play.google.com/store/games`} target='_blank'> 
       <button className='btn'>
            <img src={googleIcon} alt="" />
            <p className='text-lg'>Google Play</p>
        </button>
      </Link>  
        <Link to={`https://www.apple.com/app-store/`} target='_blank'>
           <button className='btn'>
            <img src={appStoreIcon} alt="" />
            <p className='text-lg'>App Store</p>
        </button>
        </Link>
    </div>
    <img className='  mx-auto' src={heroImg} alt="" />
    </div>
    
    <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  p-20 text-center text-white space-y-5'>
        <h2 className='font-bold text-2xl'>Trusted by Millions, Built for You</h2>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
            <div>
                <p>Total Downloads</p>
                <h1 className='text-5xl'>29.6M</h1>
                <p>21% more than last month</p>
            </div>
            <div>
                <p>Total Reviews</p>
                <h1 className='text-5xl'>906K</h1>
                <p>46% more than last month</p>
            </div>
            <div>
                <p>Active Apps</p>
                <h1 className='text-5xl'>132+</h1>
                <p>31 more will Launch</p>
            </div>
        </div>
    </div>
    <div className='max-w-11/12 mx-auto p-4 space-y-4 text-center'>
        <h2 className='font-bold text-2xl'>Trending Apps</h2>
        <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
    </div>
        </>
    );
};

export default HomeStatic;