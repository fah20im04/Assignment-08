import React, { useEffect, useState } from 'react';
import dwnld from '../../../assets/fi_9131795.png';
import star from '../../../assets/fi_1828884.png';
import { Link } from 'react-router';
import noApp from '../../../assets/App-Error.png'

const AllApps = () => {
    const [apps, setApps] = useState([]);
    const [searchApp, setSearchApp] = useState('');


    useEffect(() => {
        const fetchApps = async () => {
            try {
                const res = await fetch('/apps30.json');
                const data = await res.json();
                setApps(data);
            } catch (error) {
                console.error('Failed to fetch apps:', error);
            }
        };

        fetchApps();
    }, []);

    const filteredApps = apps.filter(app => app.title.toLowerCase().includes(searchApp.toLowerCase()));

    return (
        <div className='max-w-[1280px] mx-auto '>

            <div className='text-center p-8'>
                <h1 className='font-bold text-4xl'> Our All Application</h1>
                <p className='text-md text-gray-300'>Explore All Apps on the Market developed by us. We code for Millions</p>

                <div className='flex justify-between mt-8 items-center'>
                    <h3 className='font-bold text-2xl'>
                        ({filteredApps.length}) Apps found
                    </h3>

                    <input
                        type="text"
                        placeholder="Search Here..."
                        value={searchApp}
                        onChange={(e) => setSearchApp(e.target.value)}
                        className="input border-1 border-[#632EE3]"
                    />
                </div>


                {filteredApps.length === 0 && (
                    <div className="flex flex-col items-center justify-center mt-10">
                        <img
                            src={noApp}
                            alt="No results found"
                            className="w-64 h-64"
                        />
                        <p className="text-gray-500 mt-4 text-lg font-semibold">
                            No apps found matching your search 😢
                        </p>
                    </div>
                )}



            </div>

            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {filteredApps.map(app => (
                    <Link key={app.id} to={`/appsDetails/${app.id}`}>
                        <div className='shadow-xl rounded-2xl p-2.5'>

                            <div className='bg-[#D9D9D9] rounded-2xl p-6'>
                                <img src={app.image} alt={app.title} />
                            </div>
                            <div className='p-2'>
                                <h3 className='font-semibold text-md'>{app.title}</h3>
                                <h3 ><small className='font-semibold text-md'>{app.description}</small></h3>
                            </div>

                            <div className="flex items-center justify-between text-sm text-gray-600 ">

                                <div className="flex items-center gap-1">
                                    <img src={dwnld} alt="" />
                                    <span>{(app.downloads)}M</span>
                                </div>


                                <div className="flex items-center gap-1">
                                    <img src={star} alt="" />
                                    <span>{app.ratingAvg}</span>
                                </div>
                            </div>


                        </div>
                    </Link>

                ))}



            </div>

        </div>

    );
};

export default AllApps;