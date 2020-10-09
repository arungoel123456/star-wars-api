import React, { useState } from "react";
import SpecieDetail from "./SpecieDetail";

export default function Species(props) {
  const [allSpecies, setSpecies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [next_prev, setPages] = useState({
    next: null,
    prev: null,
  });

  //   React.useEffect(() => {
  //     fetch("https://swapi.dev/api/species/").then(async (respone) => {
  //       const data = await respone.json();
  //       setSpecies(data.results);
  //       setPages({ next: data.next, prev: data.previous });
  //       setLoading(false);
  //     });
  //   }, []);

  function pageChange(url) {
    setLoading(true);
    console.log("In page Change");
    fetch(url).then(async (response) => {
      const data = await response.json();
      setSpecies(data.results);
      setPages({ next: data.next, prev: data.previous });
      setLoading(false);
    });
  }
  //   console.log("Species.js");
  //   console.log(props);
  return (
    <>
      <h1>Species</h1>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <ul className="filmList">
            {allSpecies.map((specie, id) => (
              <li key={id}>
                {" "}
                <SpecieDetail
                  name={specie.name}
                  url={specie.url}
                  size="small"
                  {...props}
                />{" "}
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={pageChange(next_prev.prev)}
              disabled={next_prev.prev === null}
            >
              Prev
            </button>
            <button
              onClick={pageChange(next_prev.next)}
              disabled={next_prev.next === null}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
