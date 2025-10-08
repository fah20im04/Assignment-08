import React from "react";
import GooGlePlay from '../../../assets/fi_16076057.png'
import AppStore from '../../../assets/fi_5977575.png'
import bannerImage from '../../../assets/hero.png';

const Banner = () => {
    return (
        <div>
            <div className=" max-w-[1280px] py-16 flex flex-col items-center text-center px-4">
                <h1 className="text-3xl font-bold">
                    We Build <span className="text-purple-500">Productive Apps</span>
                </h1>
                <p className="text-gray-600 mt-4 max-w-xl">
                    At HERO.IO, we craft innovative apps designed to make everyday life
                    simpler, smarter, and more exciting. Our goal is to turn your ideas
                    into digital experiences that truly make an impact.
                </p>

                <div className="flex gap-4 mt-6 font-semibold">
                    <a
                        href="https://play.google.com/store"

                        className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-green-300 transition"
                    >
                        <img src={GooGlePlay} alt="" /> GooglePlay

                    </a>
                    <a
                        href="https://www.apple.com/app-store/"

                        className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-green-300 transition"
                    >
                        <img src={AppStore} alt="" /> AppsStore


                    </a>
                </div>

                <div className="mt-20">
                    <img
                        src={bannerImage}
                        alt="App Preview"
                        className="w-[800px] mx-auto "
                    />
                </div>


            </div>

            <div className="max-w-[1280px] mx-auto">
                <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-8  mx-auto shadow-lg">

                    <h2 className="text-3xl font-bold text-center mb-6">
                        Trusted By Millions, Built For You
                    </h2>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

                        <div className="bg-opacity-10 p-6 rounded-lg">

                            <h3 className="text-6xl font-bold">29.6M</h3>
                            <p className="text-sm mt-1 text-gray-300">Total Downloads</p>
                            <p className="text-gray-300 text-xs mt-2"> 21% More Than Last Month</p>
                        </div>

                        <div className=" bg-opacity-10 p-6 rounded-lg">
                            <h3 className="text-6xl font-bold">906K</h3>
                            <p className="text-sm mt-1 text-gray-300">Total Reviews</p>
                            <p className="text-gray-300 text-xs mt-2">45% More Than Last Month</p>
                        </div>


                        <div className="bg-opacity-10 p-6 rounded-lg">
                            <h3 className="text-6xl font-bold">132+</h3>
                            <p className="text-sm mt-1 text-gray-300">Active Apps</p>
                            <p className="text-gray-300 text-xs mt-2">31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
