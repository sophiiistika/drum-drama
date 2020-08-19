import React, { useState, useEffect } from "react";

function GifViewer() {
  const [gifData, setGifData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query !== "") {
      fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_GIPHY_API}&limit=25&rating=g`
      )
        .then((r) => r.json())
        .then((resp) => setGifData(resp.data));
    } else {
      fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API}&limit=25&rating=g`
      )
        .then((r) => r.json())
        .then((resp) => setGifData(resp.data));
    }
  }, [query]);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <React.Fragment>
      <div>
        Type something fun:
        <input
          type="text"
          className="searchbar"
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />
      </div>
      <div className="allgifs">
        {gifData.map((gif) => (
          <span>
            <img src={gif.images.downsized.url} alt={gif.title} />
          </span>
        ))}
      </div>
    </React.Fragment>
  );
}

export default GifViewer;
