import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

getSeason();

const SeasonDisplay = (props) => {
  //April <-> September = Summer
  //January <-> March OR October <-> December = Winter
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === "winter" ? "Burr, it is chilly!" : "Let's hit the beach";
  const icon =
    season === "winter" ? "massive snowflake icon" : "massive sun icon";

  return (
    <div>
      <div>
        <i className={icon}></i>
        <h1>{text}</h1>
        <i className={icon}></i>
      </div>
    </div>
  );
};

export default SeasonDisplay;
