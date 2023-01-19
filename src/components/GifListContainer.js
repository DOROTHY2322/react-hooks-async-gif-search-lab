import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`
      );
      const data = await response.json();
      setGifs(data.data.slice(0, 3));
    }
    fetchData();
  }, [searchQuery]);

  const handleSubmit = (event, searchQuery) => {
    event.preventDefault();
    setSearchQuery(searchQuery);
  };
  

  return (
    <div>
      <GifSearch handleSubmit={handleSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
