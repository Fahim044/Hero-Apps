import React, { Suspense } from 'react';
import TopAppsContainer from './TopAppsContainer';

const Apps = () => {
    const loadTopApps=()=>fetch("/appsData.json").then(res=>res.json());
    const topAppsPromise=loadTopApps();
    
    return (
        <div>
    <Suspense fallback={<div className='flex items-center justify-center'><span className="loading loading-dots loading-xl "></span></div>}>
            <TopAppsContainer topAppsPromise={topAppsPromise}></TopAppsContainer>
        </Suspense>
        </div>
    );
};

export default Apps;