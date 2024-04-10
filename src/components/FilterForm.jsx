import PropTypes from 'prop-types';

function CharacterFilter({ filters, handleFilterChange }) {

    CharacterFilter.propTypes = {
      filters: PropTypes.object.isRequired,
      handleFilterChange: PropTypes.func.isRequired    }


  return (
    <form className="p-4 bg-gray-100 rounded-lg flex flex-wrap">
  <div className="mb-4 w-1/4">
    <label className="block text-gray-700">Name:</label>
    <input type="text" name="name" value={filters.name} onChange={handleFilterChange} className="border border-gray-300 rounded-md p-2 w-full" />
  </div>
  <div className="mb-4 w-1/4">
    <label className="block text-gray-700">Status:</label>
    <div className="border border-gray-300 rounded-md p-2 w-full">
      <input type="radio" id="status_any" name="status" value="" onClick={handleFilterChange} checked={filters.status === ""} />
      <label htmlFor="status_any">Any</label>

      <input type="radio" id="status_alive" name="status" value="alive" onClick={handleFilterChange} checked={filters.status === "alive"} />
      <label htmlFor="status_alive">Alive</label>

      <input type="radio" id="status_dead" name="status" value="dead" onClick={handleFilterChange} checked={filters.status === "dead"} />
      <label htmlFor="status_dead">Dead</label>

      <input type="radio" id="status_unknown" name="status" value="unknown" onClick={handleFilterChange} checked={filters.status === "unknown"} />
      <label htmlFor="status_unknown">Unknown</label>
    </div>
  </div>
  <div className="mb-4 w-1/4">
    <label className="block text-gray-700">Specie:</label>
    <input type="text" name="species" value={filters.species} onChange={handleFilterChange} className="border border-gray-300 rounded-md p-2 w-full" />
  </div>
  <div className="mb-4 w-1/4">
    <label className="block text-gray-700">Gender:</label>
    <div className="border border-gray-300 rounded-md p-2 w-full">
      <input type="radio" id="gender_any" name="gender" value="" onClick={handleFilterChange} checked={filters.gender === ""} />
      <label htmlFor="gender_any">Any</label>

      <input type="radio" id="gender_female" name="gender" value="female" onClick={handleFilterChange} checked={filters.gender === "female"} />
      <label htmlFor="gender_female">Female</label>

      <input type="radio" id="gender_male" name="gender" value="male" onClick={handleFilterChange} checked={filters.gender === "male"} />
      <label htmlFor="gender_male">Male</label>

      <input type="radio" id="gender_genderless" name="gender" value="genderless" onClick={handleFilterChange} checked={filters.gender === "genderless"} />
      <label htmlFor="gender_genderless">Genderless</label>

      <input type="radio" id="gender_unknown" name="gender" value="unknown" onClick={handleFilterChange} checked={filters.gender === "unknown"} />
      <label htmlFor="gender_unknown">Unknown</label>
  </div>
  </div>
</form>
  );
}

export default CharacterFilter;