import imageRickMorty from "./assets/img/rick-morty.png";
import "./App.css";
import Characters from "./components/Characters";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkToken } from "./validators/middleware";

function App() {
  const [characters, setCharacters] = useState(null);

  const navigate = useNavigate()
  useEffect(() => {
    if(!checkToken()){
      navigate("/");
   }
  })

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
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
