import React, { useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
       
    const [install,setInstall]=useState([]);
   
    const handleInstall=(singleApp)=>{
        setInstall([...install,singleApp]);
    }

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