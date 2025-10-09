const getStoreApp = () => {
    const storeAppStr = localStorage.getItem('installList');
    if (storeAppStr) {
        return JSON.parse(storeAppStr);
    } else {
        return [];
    }
};
const removeFromLS = (id) => {
    const storedAppData = getStoreApp();
    const updatedList = storedAppData.filter(appId => appId !== id);
    localStorage.setItem('installList', JSON.stringify(updatedList));
};

const addToLS = (id) => {
    const storedAppData = getStoreApp();
    

    if (!storedAppData.includes(id)) {
        storedAppData.push(id);
    }

    localStorage.setItem("installList", JSON.stringify(storedAppData));
};

export { addToLS, getStoreApp ,removeFromLS};
