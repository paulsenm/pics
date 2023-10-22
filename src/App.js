import {useState} from 'react';

import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar"; 


function App () {

    const [imageArray, setImageArray] = useState([]);

    const handleSubmit = async (searchTerm) => {
        console.log("Searching for: ", searchTerm);
        const result = await searchImages(searchTerm);
        await setImageArray(result);

    }
    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={imageArray}/>
        </div>
    ) 
}

export default App;