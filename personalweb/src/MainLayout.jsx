import React from 'react'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footnote from './components/Footnote';


const MainLayout = () => {
    return (
        
            <div className='bg-zinc-800'>
                    <Navbar/>
                    <Outlet/>
                    <Footnote/>
            </div>
        
    );
};

export default MainLayout