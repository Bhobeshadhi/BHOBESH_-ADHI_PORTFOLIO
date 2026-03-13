import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Aspiring Data Analyst",
          "Excel | SQL | Power BI",
          "Python for Data Analysis",
          "Data Visualization",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
