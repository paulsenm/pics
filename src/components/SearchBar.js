import {axios} from axios;
import searchImages from "../api";

let images = searchImages();

function SearchBar() {
    return (
        <div>
            Search Bar
            {images[0]}
        </div>
    )
}

export default SearchBar;