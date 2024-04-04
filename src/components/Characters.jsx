import PropTypes from 'prop-types';

export default function Characters(props) {
  const { characters, setCharacters } = props;

  const resetCharacters = () => {
    setCharacters(null);
  };

  Characters.propTypes = {
    characters: PropTypes.array.isRequired,
    setCharacters: PropTypes.func.isRequired
  };

  return (
    <div className="p-[50px]">
      <h1 className="mt-0 text-4xl text-center">Personajes</h1>
      <button onClick={resetCharacters} className="mx-auto block rounded-xl bg-[#1ba94c] text-white shadow-[0_4px_12px_rgb(27_169_76_/_50%)] text-[18.005px] min-h-[2.778em] cursor-pointer px-[1.528em] py-0 border-[none] hover:bg-[#F0F8FF] hover:border hover:text-[#1ba94c] hover:border-solid hover:border-[#1ba94c] my-6">
        Volver al inicio
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
        {characters.map((character, index) => (
          <div className="bg-emerald-100 rounded-3xl shadow-md p-4" key={index}>
            <div>
              <img src={character.image} alt={character.name} className="rounded-xl w-full max-w-[200px] mx-auto" />
            </div>
            <div className="text-center mt-2">
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
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
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="">Especie: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={resetCharacters} className="mx-auto block rounded-xl bg-[#1ba94c] text-white shadow-[0_4px_12px_rgb(27_169_76_/_50%)] text-[18.005px] min-h-[2.778em] cursor-pointer px-[1.528em] py-0 border-[none] hover:bg-[#F0F8FF] hover:border hover:text-[#1ba94c] hover:border-solid hover:border-[#1ba94c] my-4">
        Volver al inicio
      </button>
    </div>
  )
}
