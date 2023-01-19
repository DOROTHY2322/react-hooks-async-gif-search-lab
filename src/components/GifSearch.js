import React, { useState } from "react";

function GifSearch({ handleSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event, searchQuery)}>
      <label>
        Search for gifs:
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;
