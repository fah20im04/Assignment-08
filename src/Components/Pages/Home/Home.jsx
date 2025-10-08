import React from 'react';

import Banner from '../Banner/Banner';
import Apps from '../Apps/Apps';

const Home = () => {
    return (
        <div className='max-w-[1280px] bg-gray-50 mx-auto items-center'>
            <Banner></Banner>


            <div className='max-w-[1280px] mx-auto text-center mt-10'>
                <h1 className='font-bold text-6xl'>Trending Apps</h1>
                <p className='text-sm text-gray-300 mt-4'>Explore All Trending Apps on the Market developed by us</p>

            </div>

            <Apps></Apps>



        </div>
    );
};

export default Home;