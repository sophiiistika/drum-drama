import React, { useState, useEffect } from "react";

function GifViewer() {
  const [gifData, setGifData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API}&limit=25&rating=g`
    )
      .then((r) => r.json())
      .then((resp) => setGifData(resp.data));
  }, []);

  return (
    <div>
      {gifData.map((gif) => (
        <span>
          <img src={gif.images.downsized.url} alt={gif.title} />
        </span>
      ))}
    </div>
  );
}

export default GifViewer;
