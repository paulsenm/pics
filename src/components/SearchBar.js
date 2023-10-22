import {useState} from 'react';


function SearchBar({onSubmit}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
    };

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    };
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={searchTerm} onChange={handleInputChange} type="text"/>
            </form>
        </div>
    )
}

export default SearchBar;