import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreApp, removeFromLS } from '../AppsDetails/Utilities/Utilities';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Installations = () => {
    const [installList, setInstallList] = useState([]);
    const [sort, setSort] = useState('');
    const data = useLoaderData();


    useEffect(() => {
        const storedAppData = getStoreApp();
        const convertedStoredApps = storedAppData.map(id => parseInt(id));
        const filteredList = data.filter(app => convertedStoredApps.includes(app.id));
        setInstallList(filteredList);
    }, [data]);

    const handleSort = (type) => {
        setSort(type);
        if (type === 'size') {
            setInstallList(prev => [...prev].sort((a, b) => a.size - b.size));
        }
        if (type === 'downloads') {
            setInstallList(prev => [...prev].sort((a, b) => b.downloads - a.downloads));
        }
    };

    const handleUninstall = (id) => {
        removeFromLS(id);
        setInstallList(prev => prev.filter(app => app.id !== id));
        alert('uninstalled succesfully')


        Swal.fire("App unsinstalled succesfully");


    };

    return (
        <div className="max-w-[1280px] mx-auto bg-gray-100 p-5">
            <div className="mt-10 mx-auto text-center">
                <h3 className="font-bold text-7xl">Your Installed Apps</h3>
                <p className="font-semibold text-xl mt-5 text-gray-300">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="flex justify-between mt-10">
                <h3 className="font-bold text-xl">{installList.length} Apps Found</h3>
                <details className="dropdown">
                    <summary className="btn m-1">
                        Sort-By <small className="font-bold">v</small>
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSort('downloads')}>
                            <a>Downloads</a>
                        </li>
                        <li onClick={() => handleSort('size')}>
                            <a>Size</a>
                        </li>
                    </ul>
                </details>
            </div>

            {installList.length === 0 && (
                <p className="text-center text-gray-400 mt-10 text-xl font-semibold">
                    Fist install Our app than come here.....
                </p>
            )}

            {installList.map(app => (
                <div
                    key={app.id}
                    className="bg-white p-3 flex justify-between mb-4 shadow-xl rounded-2xl items-center"
                >
                    <div className="flex gap-3">
                        <img
                            className="rounded-xl bg-gray-300 w-[60px]"
                            src={app.image}
                            alt="installed app"
                        />
                        <div>
                            <h3 className="font-bold text-xl">{app.title}</h3>
                            <div className="flex">
                                <h3 className="text-black text-xl">
                                    {(app.downloads / 1000000).toFixed(1)}M
                                </h3>
                                <h3 className="text-black text-xl ml-4">⭐ {app.ratingAvg}</h3>
                                <h2 className="font-bold text-xl ml-4">{app.size}MB</h2>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => handleUninstall(app.id)}
                        className="btn bg-[#00D390] hover:bg-green-600 text-white"
                    >
                        Uninstall
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Installations;
