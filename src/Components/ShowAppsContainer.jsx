import React  from 'react';
import ShowApps from './ShowApps';


const ShowAppsContainer = ({allApps}) => {
    // console.log(allApps);
   
    return (
        <div className='max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
       {
        allApps.map(app=><ShowApps key={app.id} app={app}></ShowApps>)
       }
        </div>
    );
};

export default ShowAppsContainer;