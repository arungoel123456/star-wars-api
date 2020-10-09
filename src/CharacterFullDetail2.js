import React, { useState } from "react";
import FilmShortDetail from "./FilmShortDetail";
import StarshipShortDetail from "./StarshipShortDetail";
import VehicleShortDetail from "./VehicleShortDetail";

const CharacterFullDetail2 = (props) => {
  const [loading, changeLoading] = useState(true);
  const [characterDetail, changeCharacterDetail] = useState(null);

  console.log(props);
  return <h1>Hello</h1>;
};

export default CharacterFullDetail2;
