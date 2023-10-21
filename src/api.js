import axios from 'axios';

import axiosKey from './apiKeys';



const searchImages = async (searchTerm) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',
        {
            headers:{
                Authorization: `Client-ID ${axiosKey}`
            },
            params:{
                query: searchTerm
            }
        }
    );
    return response.data.results;
} 

export default searchImages;