import React from 'react';
import ShowApps from './ShowApps';

const AppsContainer8 = ({topApps}) => {
    // console.log(topApps);
    return (
         <div className='max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
       {
        topApps.map(app=><ShowApps key={app.id} app={app}></ShowApps>)
       }
        </div>
    );
};

export default AppsContainer8;