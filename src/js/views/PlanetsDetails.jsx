import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import planetImage from "../../img/planetStarWar.jpeg";

export const PlanetsDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  actions.getPlanetsDetails(params.idPlanets);

  return (
    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <img src={planetImage} alt="..." />
        <h1 class="display-5 fw-bold">{store.planetsProperties.name}</h1>
        <p class="col-md-8 fs-4">
          Diameter: {store.planetsProperties.diameter}
        </p>
        <p class="col-md-8 fs-4">
          Population: {store.planetsProperties.population}
        </p>
        <p class="col-md-8 fs-4">climate: {store.planetsProperties.climate}</p>
        <p class="col-md-8 fs-4">
          Rotation Period: {store.planetsProperties.rotation_period} hrs
        </p>
        <p class="col-md-8 fs-4">Terrain: {store.planetsProperties.terrain}</p>
        <p class="col-md-8 fs-4">Gravity: {store.planetsProperties.gravity}</p>
      </div>
    </div>
  );
};
