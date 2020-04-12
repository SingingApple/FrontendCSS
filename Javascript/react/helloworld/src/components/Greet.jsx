import React from "react";

const Greet = (props) => {
  const name = props.name;
  const heroname = props.heroName;
  return (
    <div>
      <h1>Hello {name}</h1>
      {heroname}a
    </div>
  );
};

export default Greet;
