import { useState, useEffect } from "react";
// import API_KEY from "./keys";

const useGoogleSearch = (term, searchType) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyCG3yX6Bx6OonkWEBC0nVKngQmaGhH04FY&cx=1811a08d64a23ba01&q=${term}`;

    let imageUrl = `https://www.googleapis.com/customsearch/v1?key=AIzaSyCG3yX6Bx6OonkWEBC0nVKngQmaGhH04FY&cx=1811a08d64a23ba01&q=${term}&searchType=${searchType}`;

    const fetchData = async (isImages) => {
      if (!isImages) {
        fetch(url)
          .then((res) => res.json())
          .then((results) => {
            setData(results);
          });
      } else {
        let IMAGE_RESULTS = undefined;

        [0, 11, 21, 31, 41].forEach(async (index, idx) => {
          let newUrl = imageUrl + `&start=${index}`;

          let res = await fetch(newUrl);
          let imageResults = await res.json();

          if (!IMAGE_RESULTS) IMAGE_RESULTS = imageResults;
          else
            Array.prototype.push.apply(IMAGE_RESULTS.items, imageResults.items);

          if (idx === 4) return setData(IMAGE_RESULTS);
        });
      }
    };

    if (!searchType) fetchData(false);
    else {
      fetchData(true);
    }
  }, [term, searchType]);

  return { data };
};

export default useGoogleSearch;
