import React, { Suspense, use } from 'react';
import { Link,  } from 'react-router';

import HomeStatic from './HomeStatic';
import AppsContainer8 from './AppsContainer8';
const Home = ({appsPromise8}) => {
    const topApps=use(appsPromise8);
    // console.log(topApps);
    
    return (
        <>
        <HomeStatic></HomeStatic>
        
            <AppsContainer8 topApps={topApps}></AppsContainer8>
        
        <Link to="/apps">
        <button className='btn text-center text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  mx-auto flex items-center my-3'>Show All</button>
        </Link>
        </>
    );
};

export default Home;