// src/utils/getHash.js
const getHash = () => {
    return window.location.hash.slice(2).toLowerCase();
};

export default getHash;