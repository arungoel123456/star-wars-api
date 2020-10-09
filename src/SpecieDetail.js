import React from "react";
import { withRouter } from "react-router-dom";

export default function SpecieDetail(props) {
  const [state, setState] = React.useState({
    loading: true,
    detail: null,
  });

  console.log("specieDetail.js");
  console.log(props);
  React.useEffect(() => {
    fetch(props.url).then(async (response) => {
      const data = await response.json();
      setState({ loading: false, detail: data });
    });
  }, []);
  return (
    <>
      <div className="box">
        {state.loading ? (
          <div>Loading</div>
        ) : (
          <div
            onClick={() => {
              props.history.push({
                pathname: "/specieFullDetail",
                state: { url: state.detail.url },
              });
            }}
          >
            <div className="box-content">
              <h3> Name: {state.detail.name}</h3>
              <h3> Classification: {state.detail.classification}</h3>
              <h3>Average Height : {state.detail.average_height}</h3>
              <h3>Average Lifespan: {state.detail.average_lifespan}</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
