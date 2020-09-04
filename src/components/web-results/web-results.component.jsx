import React from "react";

import "./web-results.style.css";

const WebResults = ({ data }) => {
  return (
    <div>
      {data?.items.map((item, idx) => (
        <div className="searchPage__result" key={idx}>
          <a className="searchPage__resultLink" href={item.link}>
            {item.pagemap?.cse_image?.length > 0 &&
              item.pagemap?.cse_image[0]?.src && (
                <img
                  className="searchPage__resultImage"
                  src={item.pagemap?.cse_image[0]?.src}
                  alt=""
                />
              )}
            {item.displayLink}
          </a>

          <a className="searchPage__resultTitle" href={item.link}>
            <h2>{item.title}</h2>
          </a>

          <p className="searchPage__resultSnippet">{item.snippet}</p>
        </div>
      ))}
    </div>
  );
};

export default WebResults;
