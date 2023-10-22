import {useState} from 'react';

import './SearchBar.css';


function SearchBar({onSubmit}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted with term: ", searchTerm);
        onSubmit(searchTerm);
    };

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    };
    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Enter search term:</label>
                <input value={searchTerm} onChange={handleInputChange} type="text"/>
            </form>
        </div>
    )
}

export default SearchBar;