import React from 'react';
import appErr from '../assets/App-Error.png';
import { Link, useNavigate } from 'react-router';
const AppError = () => {
    const navigate=useNavigate();
    return (
        <div className='flex flex-col justify-center items-center gap-5 mx-auto'>
            <img src={appErr} alt="" />
            <h1 className='font-bold text-3xl'>OPPS!! APP NOT FOUND</h1>
            <p className='text-gray-500 font-semibold'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to="/apps">
            <button onClick={()=>navigate(-1)} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-lg font-semibold p-3'>Go Back</button>
            </Link>
        </div>
    );
};

export default AppError;