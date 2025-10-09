import React  from 'react';
import ShowApps from './ShowApps';


const ShowAppsContainer = ({allApps,searchValue}) => {
    // console.log(allApps);
//    console.log(searchValue);
const filterApps= allApps.filter(app=>app.title.toLowerCase().includes(searchValue));
console.log(filterApps);
const dispApps=((searchValue===false)?allApps:filterApps);
    return (
        <div className='max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
       {
        dispApps.map(app=><ShowApps key={app.id} app={app}></ShowApps>)
       }
        </div>
    );
};

export default ShowAppsContainer;