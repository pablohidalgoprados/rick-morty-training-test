import imageRickMorty from "./assets/img/rick-morty.png";
import "./App.css";
import Characters from "./components/Characters";
import FilterForm from "./components/FilterForm";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState({ name: "", status: "", species: "", type: "", gender: "" });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };


  const reqApi = async () => {
    let apiUrl = "https://rickandmortyapi.com/api/character";
    const filterParams = new URLSearchParams(filters).toString();
    if (filterParams) {
      apiUrl += `?${filterParams}`;
    }

    const api = await fetch(apiUrl);
    const characterApi = await api.json();

    if (characterApi.results != undefined) {
      setError(false)
      setCharacters(characterApi.results);
    } else {
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    reqApi();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {error ? (
          <>
            <p className="text-red-500">No characters was found</p>
            <FilterForm filters={filters} handleFilterChange={handleFilterChange} handleSubmit={handleSubmit} />
            <Characters characters={characters} setCharacters={setCharacters}/>
          </>
          
        ) :characters ? (
          <>
            <FilterForm filters={filters} handleFilterChange={handleFilterChange} handleSubmit={handleSubmit} />
            <Characters characters={characters} setCharacters={setCharacters}/>
          </>
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <br></br>
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
