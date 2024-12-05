import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div>

            <header className='py-5 sticky top-0 z-10 backdrop-blur-2xl bg-opacity-55 bg-base-200'>

            <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;