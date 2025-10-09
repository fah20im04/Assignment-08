import React, { useEffect, useState } from 'react';
import dwnld from '../../../assets/fi_9131795.png';
import star from '../../../assets/fi_1828884.png';
import { Link } from 'react-router';
import noApp from '../../../assets/App-Error.png';

const AllApps = () => {
    const [apps, setApps] = useState([]);
    const [searchApp, setSearchApp] = useState('');
    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        const fetchApps = async () => {
            setLoading(true);
            try {
                const res = await fetch('/apps30.json');
                const data = await res.json();
                setApps(data);
            } catch (error) {
                console.error('Failed to fetch apps:', error);
        } finally {
            setLoading(false);
            }
        };
        fetchApps();
    }, []);

    const handleSearchChange = (e) => {
        setSearchApp(e.target.value);
        setSearching(true);

        // simulate search delay
        setTimeout(() => {
            setSearching(false);
        }, 300); // 300ms delay to mimic loading
    };

    const filteredApps = apps.filter(app =>
        app.title.toLowerCase().includes(searchApp.toLowerCase())
    );

    return (
        <div className="max-w-[1280px] mx-auto p-4">
            <div className="text-center p-8">
                <h1 className="font-bold text-4xl">Our All Applications</h1>
                <p className="text-md text-gray-300">
                    Explore all apps on the Market developed by us. We code for Millions.
                </p>

                <div className="flex justify-between mt-8 items-center">
                    <h3 className="font-bold text-2xl">({filteredApps.length}) Apps found</h3>

                    <input
                        type="text"
                        placeholder="Search Here..."
                        value={searchApp}
                        onChange={handleSearchChange}
                        className="input border-1 border-[#632EE3] p-2 rounded"
                    />
                </div>
            </div>


            {searching && (
                <div className="flex flex-col items-center justify-center mt-10">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-600 mt-4 font-semibold">Searching...</p>
                </div>
            )}


            {!searching && (
                <>
                    {filteredApps.length === 0 ? (
                        <div className="flex flex-col items-center justify-center mt-10">
                            <img src={noApp} alt="No results found" className="w-64 h-64" />
                            <p className="text-gray-500 mt-4 text-lg font-semibold">
                                No apps found matching your search 😢
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                            {filteredApps.map((app) => (
                                <Link key={app.id} to={`/appsDetails/${app.id}`}>
                                  <div className="shadow-xl rounded-2xl p-2.5">
                                      <div className="bg-[#D9D9D9] rounded-2xl p-6">
                                          <img src={app.image} alt={app.title} />
                                      </div>
                                      <div className="p-2">
                                          <h3 className="font-semibold text-md">{app.title}</h3>
                                          <h3>
                                              <small className="font-semibold text-md">{app.description}</small>
                                          </h3>
                                      </div>
                                      <div className="flex items-center justify-between text-sm text-gray-600">
                                          <div className="flex items-center gap-1">
                                              <img src={dwnld} alt="" />
                                              <span>{app.downloads}M</span>
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
                    )}
                </>
            )}
        </div>
    );
};

export default AllApps;
