import axios from 'axios';
require('dotenv').config({path: '../.env'});

const apiKey = process.env.AXIOS_KEY;


const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos',
        {
            headers:{
                Authorization: `Client-ID ${apiKey}`
            },
            params:{
                query: 'cars'
            }
        }
    );
    return response;
} 

export default searchImages;