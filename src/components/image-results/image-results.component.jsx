import React from "react";

import "./image-results.style.css";

function ImageResults({ data }) {
  return (
    <div className="searchPage__imageResults">
      {data &&
        data.items.map((item, idx) => (
          <div className="searchPage__imageResult" key={idx} title={item.title}>
            <img src={item.link} alt={item.title} />
          </div>
        ))}
      {console.log("hey:", data)}
    </div>
  );
}

export default ImageResults;
