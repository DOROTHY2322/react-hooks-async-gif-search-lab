import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=&q=cheeseburgers&limit=25&offset=5&rating=g&lang=en`
      );
      const data = await response.json();
      setGifs(data.data.slice(0, 3));
    }
    fetchData();
  }, [searchQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.search.value);
  };

  return (
    <div>
      <GifSearch handleSubmit={handleSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
