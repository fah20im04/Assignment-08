import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToLS, getStoreApp } from './Utilities/Utilities';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const AppsDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const appId = parseInt(id);
    const app = data.find(app => app.id === appId);

    const [isDisabled, setIsDisabled] = useState(false);


    useEffect(() => {
        const installedApps = getStoreApp();
        if (installedApps.includes(appId)) {
            setIsDisabled(true);
        }
    }, [appId]);

    const handleClick = () => {
        addToLS(appId);
        setIsDisabled(true);
        alert('installed')

        Swal.fire("App installed succesfully");


    };

    return (
        <div className="max-w-[1280px] mx-auto p-6 rounded-b-xl shadow-md bg-gray-100">
            {app ? (
                <>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                        <img
                            className="w-[250px] md:w-[300px] lg:w-[350px] bg-white rounded-2xl shadow-sm"
                            src={app.image}
                            alt={app.title}
                        />

                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="font-bold text-3xl md:text-4xl">{app.title}</h1>
                            <h2 className="font-semibold text-sm md:text-md mt-2">
                                Developed by:{" "}
                                <span className="text-blue-600">{app.companyName}</span>
                            </h2>


                            <div className="mt-10 grid grid-cols-3 gap-4 text-md md:text-lg font-bold text-gray-700">
                                <div>
                                    <span className="text-black text-2xl md:text-3xl">
                                        {(app.downloads / 1000000).toFixed(1)}M
                                    </span>
                                    <p>Downloads</p>
                                </div>
                                <div>
                                    <span className="text-black text-2xl md:text-3xl">
                                        ⭐ {app.ratingAvg}
                                    </span>
                                    <p>Avg Rating</p>
                                </div>
                                <div>
                                    <span className="text-black text-2xl md:text-3xl">
                                        📝 {app.reviews.toLocaleString()}
                                    </span>
                                    <p>Reviews</p>
                                </div>
                            </div>


                            <button
                                onClick={handleClick}
                                disabled={isDisabled}
                                className={`mt-10 w-full py-3 px-6 rounded-xl font-semibold transition-all ${isDisabled
                                    ? 'bg-gray-400 cursor-not-allowed hover:bg-gray-400'
                                    : 'bg-blue-500 hover:bg-green-600 text-white'
                                    }`}
                            >
                                {isDisabled ? 'Installed' : `Install Now (${app.size} MB)`}
                            </button>
                        </div>
                    </div>


                    <div className="space-y-3 mt-10 mb-10 font-bold">
                        {app.ratings
                            .slice()
                            .reverse()
                            .map((rating) => {
                                const total = app.ratings.reduce(
                                    (sum, r) => sum + r.count,
                                    0
                                );
                                const percent = ((rating.count / total) * 100).toFixed(1);
                                return (
                                    <div key={rating.name}>
                                        <div className="flex justify-between text-sm text-gray-700 mb-1">
                                            <span>{rating.name}</span>
                                            <span>{rating.count}</span>
                                        </div>
                                        <div className="w-full bg-gray-300 rounded-full h-2">
                                            <div
                                                className="bg-yellow-400 h-2 rounded-full"
                                                style={{ width: `${percent}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>


                    <div className="text-gray-700 leading-relaxed text-lg md:text-2xl font-medium">
                        <span className="font-bold text-2xl md:text-3xl block mb-3">
                            Description:
                        </span>
                        {app.description}
                    </div>
                </>
            ) : (
                <p className="text-center text-gray-500 text-xl">App not found.</p>
            )}
        </div>
    );
};

export default AppsDetails;
