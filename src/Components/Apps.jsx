import React, { Suspense, use, useState } from 'react';

import { Search } from 'lucide-react';
import ShowAppsContainer from './ShowAppsContainer';

const Apps = ({appsPromise12}) => {
    const allApps=use(appsPromise12);
    // console.log(allApps);
    const [search,setSearch]=useState('');
    const handleSearch=(e)=>{
        e.preventDefault();
        // console.log(e.target.value);
        const inputValue=e.target.value;
        const searchValue=inputValue.trim().toLowerCase();
        console.log(searchValue);
        setSearch(searchValue);
        // console.log(search);

    }
    return (
        <div className='max-w-11/12 mx-auto'>
            <div className='mt-10 mb-6 space-y-5 '>
                <h1  className='text-center font-bold text-4xl'>Our All Applications</h1>
                <p className='text-center text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl'>({allApps.length}) Apps Found</h2>
                    <div className='flex items-center'>
                        <Search />
        <input type="text" onChange={handleSearch}  placeholder={`Search App`} />
                    </div>
                </div>
            </div>
    <Suspense fallback={<div className='flex items-center justify-center'><span className="loading loading-dots loading-xl "></span></div>}>
          <ShowAppsContainer allApps={allApps} searchValue={search}></ShowAppsContainer>
        </Suspense>
        </div>
    );
};

export default Apps;