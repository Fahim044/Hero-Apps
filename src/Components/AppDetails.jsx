import React, { use } from 'react';
import { useParams } from 'react-router';
import downIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import reviewIcon from '../assets/icon-review.png';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const AppDetails = ({appsPromise12}) => {
    const allApps=use(appsPromise12);
    // console.log(allApps);
    const {id}=useParams();
    // console.log(id);
    const appId=parseInt(id);
    // console.log(appId);
    const singleApp=allApps.find(app=>app.id===appId)
    // console.log(singleApp);
    const {image,title,companyName,description,size,reviews,ratingAvg,downloads,ratings}=singleApp;

    return (
        <div className='max-w-11/12 mx-auto py-3'>
            <div className='flex gap-7 flex-col md:flex-row border-b-1 border-gray-500'>
                <img src={image} alt="" />
                <div className='space-y-6'>
                    <h2 className='font-bold text-2xl'>{title}</h2>
                    <p className='text-gray-500 border-b-1 border-gray-500'>Developed By: {companyName}</p>
                    <div className='flex gap-20'>
                        <div>
                            <img src={downIcon} alt="" />
                            <p>Downloads</p>
                            <p>{downloads} M</p>
                        </div>
                        <div>
                            <img src={ratingIcon} alt="" />
                            <p>Average Rating</p>
                            <p>{ratingAvg}</p>

                        </div>
                        <div>
                            <img src={reviewIcon} alt="" />
                            <p>Total Reviews</p>
                            <p>{reviews}</p>
                        </div>
                    </div>
                    <button className='p-6 bg-green-600 btn text-xl font-bold'>Install ({size} MB)</button>


                </div>
            </div>

            <div className='mt-5 border-b-1 border-gray-500'>
                <ResponsiveContainer width="100%" height={400}>
                <BarChart layout='vertical' data={ratings} margin={{top:20,right:30,left:20,bottom:5}}>

            <CartesianGrid strokeDasharray="3 3"/>
        <XAxis type='number'></XAxis>
        <YAxis dataKey="name" type='category'></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="count" fill='orange'></Bar>
            
                </BarChart>
                </ResponsiveContainer>
            </div>

            <div className='mt-5 p-3'>
                <p><span className='font-bold text-xl'>Description: </span><span className='text-gray-500'>{description}</span></p>
            </div>
        </div>
    );
};

export default AppDetails;