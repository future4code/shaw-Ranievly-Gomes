import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MatchStyle } from "./style";



const TelaMatch = () => {
  const [matchesList, setMatchesList] = useState([]);

  const matches = async () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Rani-Shaw/matches";
    try {
      const res = await axios.get(url);
      setMatchesList(res.data.matches);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    matches();
  }, []);

  const matchesMap = matchesList.map(function (item) {
    return <h2>{item.name}</h2>;
  });

  return <MatchStyle>{matchesMap}</MatchStyle>;
};
export default TelaMatch;
