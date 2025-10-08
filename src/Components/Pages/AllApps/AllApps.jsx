import React, { useEffect, useState } from 'react';
import dwnld from '../../../assets/fi_9131795.png';
import star from '../../../assets/fi_1828884.png';
import { Link } from 'react-router';

const AllApps = () => {
    const [apps, setApps] = useState([]);

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

    return (
        <div>
            <Link to='/appsDetails'>
                <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                    {apps.map(app => (
                        <div key={app.id} className='shadow-xl rounded-2xl p-2.5'>

                            <div className='bg-[#D9D9D9] rounded-2xl p-6'>
                                <img src={app.image} alt={app.title} />
                            </div>
                            <div className='p-2'>
                                <h3 className='font-semibold text-md'>{app.description}</h3>
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

                    ))}



                </div>
            </Link>
        </div>

    );
};

export default AllApps;