import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
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
    
    

    return (
        <div>
          <Navbar></Navbar>
          <Outlet context={{install,setInstall,handleInstall}}></Outlet>
          <Footer></Footer>
          <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;