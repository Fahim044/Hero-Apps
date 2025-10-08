import React, { Suspense } from 'react';
import { Link,  } from 'react-router';
import TopAppsContainer from './TopAppsContainer';
import HomeStatic from './HomeStatic';
const Home = () => {
    const loadTopApps=()=>fetch("/topApps.json").then(res=>res.json());
    const topAppsPromise=loadTopApps();
    return (
        <>
        <HomeStatic></HomeStatic>
        <Suspense fallback={<div className='flex items-center justify-center'><span className="loading loading-dots loading-xl "></span></div>}>
            <TopAppsContainer topAppsPromise={topAppsPromise}></TopAppsContainer>
        </Suspense>
        <Link to="/apps">
        <button className='btn text-center text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  mx-auto flex items-center my-3'>Show All</button>
        </Link>
        </>
    );
};

export default Home;