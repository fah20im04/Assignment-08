import React from "react";
import GooGlePlay from '../../../assets/fi_16076057.png'
import AppStore from '../../../assets/fi_5977575.png'
import bannerImage from '../../../assets/hero.png';

const Banner = () => {
  return (
    <div className="bg-gray-50 py-16 flex flex-col items-center text-center px-4">
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
  );
};

export default Banner;
