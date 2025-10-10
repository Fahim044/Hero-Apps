import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
       
    // const [install,setInstall]=useState([]);
    
    const [install,setInstall]=useState(()=>{
        const stored=localStorage.getItem("installationList");
return stored?JSON.parse(stored):[];
    });

    

    useEffect(()=>{
        localStorage.setItem("installationList",JSON.stringify(install));
    },[install]);
   
    const handleInstall=(singleApp)=>{
        if(!install.find(app=>app.id===singleApp.id)){
        setInstall([...install,singleApp]);
        }
    // return singleApp;    
    }
    // console.log(handleInstall());
    
    const navigation=useNavigation();

    return (
        <div>
          <Navbar></Navbar>
          <div className='relative min-h-[60vh]'>
            {
                navigation.state==="loading" && (
                    <div className='absolute inset-0  flex items-center justify-center bg-white/50 z-20'>
                        <span className='loading loading-dots loading-xl'></span>
                    </div>
                )
            }
          <Outlet context={{install,setInstall,handleInstall}}></Outlet>

          </div>
          {/* <Outlet context={{install,setInstall,handleInstall}}></Outlet> */}
          <Footer></Footer>
          <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;