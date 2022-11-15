import React from 'react'

 function Search({searchFilms, handleSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Films:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange= {handleSearch}
        value={searchFilms}
      />
    </div>
  )
}

export default Search
