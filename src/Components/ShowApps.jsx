import React from 'react';

import downIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png'; 
const ShowApps = ({app}) => {
    // console.log(app);
    return (
        <div className='border max-w-64 p-3.5 rounded-lg'>
        <img src={app.image} alt="" /> 
           <p className='text-lg font-bold h-13'>{app.title}</p>
           <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center rounded-xl shadow p-1'>
                <img className='w-[20px]' src={downIcon} alt="" />
                <p>{app.downloads} M</p>
            </div>
        <div className='flex gap-2 items-center rounded-xl shadow p-1'>
            <img className='w-[20px]' src={ratingIcon} alt="" />
            <p>{app.ratingAvg}</p>
        </div>
           </div>
        </div>
    );
};

export default ShowApps;