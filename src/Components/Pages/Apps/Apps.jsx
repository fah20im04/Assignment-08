import { Key } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import AllApps from '../AllApps/AllApps';
import dwnld from '../../../assets/fi_9131795.png';
import star from '../../../assets/fi_1828884.png';

const Apps = () => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        const fetchApps = async () => {
            try {
                const res = await fetch('/apps8.json');
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

            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

                {apps.map(app => (

                    <Link key={app.id} to={`/appsDetails/${app.id}`}>
                        <div className='shadow-xl rounded-2xl p-2.5'>

                            <div className='bg-[#D9D9D9] rounded-2xl p-6'>
                                <img src={app.image} alt={app.title} />
                            </div>
                            <div className='p-2'>
                                <h2 className='font-bold text-xl'>{app.title}</h2>
                                <h3 className='font-semibold text-sm'>{app.description}</h3>
                            </div>

                            <div className="flex items-center justify-between text-sm text-gray-600 ">

                                <div className="flex items-center gap-1">
                                    <img src={dwnld} alt="" />
                                    <span>{(app.downloads / 1000000).toFixed(1)}M</span>
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

            <div className="col-span-full flex justify-center mt-6">
                <Link to='/allApps'>
                    <button className="btn btn-primary">Show All Apps</button>
                </Link>
            </div>
        </div>

    );
};

export default Apps;
