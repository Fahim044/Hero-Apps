import React  from 'react';
import ShowApps from './ShowApps';
import AppError from './AppError';


const ShowAppsContainer = ({allApps,searchValue}) => {
    // console.log(allApps);
//    console.log(searchValue);
const filterApps= allApps.filter(app=>app.title.toLowerCase().includes(searchValue));
// console.log(filterApps);
// const state= (filterApps) || "No app found";
const dispApps=((searchValue===false)?allApps:filterApps);

    return (
        <>
        <div>{(filterApps.length===0)?<AppError></AppError>: ""}</div>
        <div className='max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3  '>
           
       {
        
        dispApps.map(app=><ShowApps key={app.id} app={app}></ShowApps>)
       }
        </div>
        
    </>
    );
};

export default ShowAppsContainer;