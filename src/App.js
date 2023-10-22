import SearchBar from "./components/SearchBar"; 


function App () {
    const handleSubmit = (searchTerm) => {
        console.log("Searching for: ", searchTerm);
    }
    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
        </div>
    ) 
}

export default App;