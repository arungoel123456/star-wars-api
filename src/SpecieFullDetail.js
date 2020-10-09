import React from "react";
import { withRouter } from "react-router-dom";

export default function SpecieFullDetail(props) {
  const [state, setState] = React.useState({
    loading: true,
    detail: null,
  });
  console.log("FullDetail.js");
  console.log(props);

  return (
    <>
      <h1>Hello</h1>
      <h1>Hello</h1>
    </>
  );
}
