import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkToken } from "../validators/middleware";
import { removeItem } from 'localforage';

export default function Characters({ characters, setCharacters }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (!checkToken()) {
      navigate('/');
    }
  }, []);

  const resetCharacters = () => {
    setCharacters(null);
    setSelectedCharacter(null);
  };

  const logout = () => {
    removeItem("token")
    navigate("/")
  }

  const navigate = useNavigate()
  useEffect(() => {
    if(!checkToken()){
      navigate("/");
   }
  })

  Characters.propTypes = {
    characters: PropTypes.array.isRequired,
    setCharacters: PropTypes.func.isRequired,
  };

  const showDetail = (character) => {
    setSelectedCharacter(character);
  };

  const hideDetail = () => {
    setSelectedCharacter(null);
  };

  const handleClickOutside = (event) => {
    if (detailsRef.current && !detailsRef.current.contains(event.target)) {
      hideDetail();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleImageClick = (event, character) => {
    event.stopPropagation(); // Detener la propagación del evento de clic
    showDetail(character);
  };

  return (
    <div onClick={handleClickOutside} className="p-[50px]">
      <h1 className="mt-0 text-4xl text-center">Characters</h1>
      <button
        onClick={resetCharacters}
        className="mx-auto block rounded-xl bg-[#1ba94c] text-white shadow-[0_4px_12px_rgb(27_169_76_/_50%)] text-[18.005px] min-h-[2.778em] cursor-pointer px-[1.528em] py-0 border-[none] hover:bg-[#F0F8FF] hover:border hover:text-[#1ba94c] hover:border-solid hover:border-[#1ba94c] my-6"
      >
        Home
      </button>
      <button onClick={logout} className="mx-auto block rounded-xl bg-[#ca2020] text-white shadow-[0_4px_12px_rgb(220_20_60_/_50%)] text-[18.005px] min-h-[2.778em] cursor-pointer px-[1.528em] py-0 border-[none] hover:bg-[#F0F8FF] hover:border hover:text-[#ea4444] hover:border-solid hover:border-[#ea4444] my-6">
        Sarte
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
        {characters.map((character, index) => (
          <div
            className="bg-emerald-100 rounded-3xl shadow-md p-4 cursor-pointer relative"
            key={index}
            onClick={() => showDetail(character)}
          >
            <img
              src={character.image}
              alt={character.name}
              className={`cat-img rounded-xl w-full max-w-[200px] mx-auto`}
              onClick={(event) => handleImageClick(event, character)} // Manejar el clic en la imagen
            />
            <div className="text-center mt-2">
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="status-icon alive inline-block w-3 h-3 rounded-full bg-green-500 mr-1" />
                    Alive
                  </>
                ) : character.status === "Dead" ? (
                  <>
                    <span className="status-icon dead inline-block w-3 h-3 rounded-full bg-red-500 mr-1" />
                    Dead
                  </>
                ) : (
                  <>
                  <span className="status-icon unknown inline-block w-3 h-3 rounded-full bg-neutral-500 mr-1" />
                  Unknown
                </>
                )}
              </h6>
              <p className="mt-2">
                <span className="">Gender: </span>
                <span>{character.gender}</span>
              </p>
            </div>
            {selectedCharacter && selectedCharacter.name === character.name && (
              <div className="cat-details fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <div ref={detailsRef} className="bg-white rounded-lg shadow-lg p-4">
                  <img
                    src={selectedCharacter.image}
                    alt={selectedCharacter.name}
                    className="rounded-xl w-full max-w-[200px] mx-auto"
                  />
                  
                  <div className="text-center mt-2">
                    <h3>{selectedCharacter.name}</h3>
                    <h6>
                      {selectedCharacter.status === 'Alive' ? (
                        <>
                          <span className="status-icon alive inline-block w-3 h-3 rounded-full bg-green-500 mr-1" />
                          Alive
                        </>
                      ) : (
                        <>
                          <span className="status-icon dead inline-block w-3 h-3 rounded-full bg-red-500 mr-1" />
                          Dead
                        </>
                      )}
                    </h6>
                    <p className="mt-2">
                      <span className="">Episodios: </span>
                      <span>{selectedCharacter.episode.length}</span>
                    </p>
                    <p>
                      <span className="">Especie: </span>
                      <span>{selectedCharacter.species}</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={resetCharacters} className="mx-auto block rounded-xl bg-[#1ba94c] text-white shadow-[0_4px_12px_rgb(27_169_76_/_50%)] text-[18.005px] min-h-[2.778em] cursor-pointer px-[1.528em] py-0 border-[none] hover:bg-[#F0F8FF] hover:border hover:text-[#1ba94c] hover:border-solid hover:border-[#1ba94c] my-4">
        Volver al inicio
      </button>
      <button onClick={logout} className="mx-auto block rounded-xl bg-[#ca2020] text-white shadow-[0_4px_12px_rgb(220_20_60_/_50%)] text-[18.005px] min-h-[2.778em] cursor-pointer px-[1.528em] py-0 border-[none] hover:bg-[#F0F8FF] hover:border hover:text-[#ea4444] hover:border-solid hover:border-[#ea4444] my-6">
        Sarte
      </button>
    </div>
  );
}
