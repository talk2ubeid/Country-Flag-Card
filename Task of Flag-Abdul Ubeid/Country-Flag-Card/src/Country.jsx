import React from "react";

const Country = ({
  darkMode,
  population,
  region,
  capital,
  flag,
  name,
  code,

  showDetails,
}) => {
  // console.log(name);
  const showDetailshandler = () => {
    showDetails(code);
  };
  return (
    <div
      className={`country ${darkMode ? "darkMode" : ""}`}
      onClick={showDetailshandler}
    >
      <div className="flag_container">
        <img src={flag} alt="flage" />
      </div>

      <div className="details">
        <h3 className="name">{name}</h3>
        <p>
          {" "}
          Population:
          <span className={`values${darkMode ? "darkMode" : ""}`}>
            {population}
          </span>
        </p>

        <p>
          {" "}
          Region:
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {region}
          </span>
        </p>

        <p>
          {" "}
          Capital:
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {capital}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Country;
