import React, { use } from 'react';
import TopApps from './TopApps';

const TopAppsContainer = ({topAppsPromise}) => {
    const topApps=use(topAppsPromise);
    return (
        <div className='max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
       {
        topApps.map(app=><TopApps key={app.id} app={app}></TopApps>)
       }
        </div>
    );
};

export default TopAppsContainer;