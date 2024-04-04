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
    <main className="m-10">
      <title className="flex justify-center items-center font-bold">
        <h1 className="text-[#738f93] text-[40px] mb-0 font-sans">
          Rick & Morty
        </h1>
      </title>
      {characters ? (
        <Characters characters={characters} setCharacters={setCharacters} />
      ) : (
        <>
          <picture className="flex justify-center items-center mb-4" id="fondo">
            <img
              src={imageRickMorty}
              alt="Rick & Morty"
              className="w-[500px] p-[50px]"
            />
          </picture>
          <br></br>
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={reqApi}
              className="rounded-xl bg-[#1ba94c] text-white shadow-[0_4px_12px_rgb(27_169_76_/_50%)] text-[18.005px] min-h-[2.778em] cursor-pointer px-[1.528em] py-0 border-[none] hover:bg-[#F0F8FF] hover:border hover:text-[#1ba94c] hover:border-solid hover:border-[#1ba94c]"
            >
              Buscar personajes
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
