import axios from 'axios';
//import 'dotenv/config';

import axiosKey from './apiKeys';

//const envKey = 



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
    console.log(response.data.results);
    return response.data.results;
} 

export default searchImages;