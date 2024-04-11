import imageRickMorty from "./assets/img/rick-morty.png";
import "./App.css";
import Characters from "./components/Characters";
import FilterForm from "./components/FilterForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkToken } from "./validators/middleware";

function App() {
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  });

  useEffect(() => {
    console.log(filters);
    reqApi();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!checkToken()) {
      navigate("/");
    }
  });

  const reqApi = async () => {
    let apiUrl = "https://rickandmortyapi.com/api/character";
    const filterParams = new URLSearchParams(filters).toString();
    if (filterParams) {
      apiUrl += `?${filterParams}`;
    }

    const api = await fetch(apiUrl);
    const characterApi = await api.json();

    if (characterApi.results != undefined) {
      setError(false);
      setCharacters(characterApi.results);
    } else {
      setError(true);
    }
  };

  return (
    <div className="App">
      <main className="m-10">
        <title className="flex justify-center items-center font-bold">
          <h1 className="text-[#738f93] text-[40px] mb-0 font-sans">
            Rick & Morty
          </h1>
        </title>
        {error ? (
          <>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-center mx-auto animate-fadeIn max-w-[600px] mt-8">
              <p>No characters were found</p>
            </div>

            <FilterForm
              filters={filters}
              handleFilterChange={handleFilterChange}
            />
            <Characters characters={characters} setCharacters={setCharacters} />
          </>
        ) : characters ? (
          <>
            <FilterForm
              filters={filters}
              handleFilterChange={handleFilterChange}
            />
            <Characters characters={characters} setCharacters={setCharacters} />
          </>
        ) : (
          <>
            <picture
              className="flex justify-center items-center mb-4"
              id="fondo"
            >
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
                Search characters
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
