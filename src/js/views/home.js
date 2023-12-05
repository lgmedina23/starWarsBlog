import React from "react";
import "../../styles/home.css";
import { Planets } from "./Planets.jsx";
import { People } from "./People.jsx";
import { Vehicles } from "./Vehicles.jsx";

export const Home = () => {
  return (
    <div className="text-center mt-5">
      <div>
        <h1>People</h1>
        <People />
      </div>
      <div>
      <h1>Planets</h1>
        <Planets />
      </div>
      <div>
      <h1>Vehicles</h1>
        <Vehicles />
      </div>
    </div>
  );
};
