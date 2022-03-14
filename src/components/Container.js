import React, { useState, useEffect } from "react";
import Presentational from "./Presentational";
import useDogImages from "./../hooks/useDogImages";

export default function Container() {
  /* const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then((data) => setDogs(data.message));
  }, []); */
  const dogs = useDogImages();
  return <Presentational dogs={dogs} />;
}
