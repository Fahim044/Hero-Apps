import React, { useState } from 'react';
import { useOutletContext } from 'react-router';
import ShowInstallation from './ShowInstallation';
import { toast } from 'react-toastify';

const Installation = () => {
    const {install,setInstall,setIsSelected}=useOutletContext();
    const handleUninstall=(id)=>{
        // console.log(id);
        const newInstall=install.filter(app=>app.id!==id);
        setInstall(newInstall);
// setIsSelected(false);        
        
        localStorage.setItem("installationList",JSON.stringify(newInstall));
        localStorage.removeItem(`installed app id: ${id}`);
        toast.success("App Successfully Uninstalled");
    }
    // console.log(install);
    const [sort,setSort]=useState("");
    const handleSort=(type)=>{
        setSort(type);
        if(type==="Low-High")
        {
            const sortedHighToLow=[...install].sort((a,b)=>a.downloads-b.downloads);
            setInstall(sortedHighToLow);
        }
        if(type==="High-Low")
        {
            const sortedLowToHigh=[...install].sort((a,b)=>b.downloads-a.downloads);
            setInstall(sortedLowToHigh);
        }
    }
    return (
        <div className='mt-5 max-w-11/12 mx-auto'>
            <div className='space-y-5'>
                <h1 className='font-bold text-3xl text-center'>Your Installed Apps</h1>
                <p className='text-center text-gray-500 font-semibold'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex justify-between items-center'>
                    <h3>{install.length} Apps Found</h3>
                    <details className="dropdown">
  <summary className="btn m-1">Sort By Downloads: {sort?sort:""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>handleSort("High-Low")}><a>High-Low</a></li>
    <li onClick={()=>handleSort("Low-High")}><a>Low-High</a></li>
  </ul>
</details>
                </div>
            </div>
            <div className=' space-y-4'>

            {
                install.map(app=><ShowInstallation key={app.id} app={app} handleUninstall={handleUninstall}></ShowInstallation>)
            }
               
            </div>
        </div>
    );
};

export default Installation;