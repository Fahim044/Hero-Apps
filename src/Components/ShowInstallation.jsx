import React from 'react';
import downIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
const ShowInstallation = ({app}) => {
    console.log(app);
    return (
        <div className='flex justify-between items-center shadow-xl'>
                 <div className='flex gap-2 items-center'>
                    <img className='w-16' src={app.image} alt="" />
                    <div>
                        <h3 className='font-bold text-lg'>{app.title}</h3>
                        <div className='flex gap-3.5 items-center font-semibold'>
                            <div className='flex gap-2 items-center'>
                                <img className='w-6' src={downIcon} alt="" />
                                <p>{app.downloads} M</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img className='w-6' src={ratingIcon} alt="" />
                                <p>{app.ratingAvg}</p>
                            </div>
                            <p>{app.size} MB</p>
                        </div>

                    </div>
                 </div>
                <button className='bg-green-600 text-white p-4 text-xl btn'>Uninstall</button>
               </div>
    );
};

export default ShowInstallation;