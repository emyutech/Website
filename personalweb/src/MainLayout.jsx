import React from 'react'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footnote from './components/Footnote';


const MainLayout = () => {
    return (
        
        <div className='bg-zinc-800 flex flex-col min-h-screen'>
                <Navbar/>  
                <Outlet/>
                <div className='mt-auto' >
                <Footnote/>
                </div>
        </div>
        
    );
};

export default MainLayout