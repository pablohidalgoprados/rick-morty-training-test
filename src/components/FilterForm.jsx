import PropTypes from 'prop-types';

function CharacterFilter({ filters, handleFilterChange, handleSubmit }) {

    CharacterFilter.propTypes = {
      filters: PropTypes.object.isRequired,
      handleFilterChange: PropTypes.func.isRequired,
      handleSubmit: PropTypes.func.isRequired
    }


  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg flex flex-wrap">
  <div className="mb-4 w-1/4">
    <label className="block text-gray-700">Name:</label>
    <input type="text" name="name" value={filters.name} onChange={handleFilterChange} className="border border-gray-300 rounded-md p-2 w-full" />
  </div>
  <div className="mb-4 w-1/4">
    <label className="block text-gray-700">Status:</label>
    <select name="status" value={filters.status} onChange={handleFilterChange} className="border border-gray-300 rounded-md p-2 w-full">
      <option value="">Any</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  </div>
  <div className="mb-4 w-1/4">
    <label className="block text-gray-700">Specie:</label>
    <input type="text" name="species" value={filters.species} onChange={handleFilterChange} className="border border-gray-300 rounded-md p-2 w-full" />
  </div>
  <div className="mb-4 w-1/4">
    <label className="block text-gray-700">Gender:</label>
    <select name="gender" value={filters.gender} onChange={handleFilterChange} className="border border-gray-300 rounded-md p-2 w-full">
      <option value="">Any</option>
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="genderless">Genderless</option>
      <option value="unknown">Unknown</option>
    </select>
  </div>
  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
    Apply Filters
  </button>
</form>
  );
}

export default CharacterFilter;