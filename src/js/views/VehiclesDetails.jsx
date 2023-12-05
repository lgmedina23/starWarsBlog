import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import vehiclesImage from "../../img/vehiclesStarWar.jpeg";

export const VehiclesDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  actions.getVehiclesDetails(params.idVehicles);

  return (
    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <img src={vehiclesImage} alt="..." />
        <h1 class="display-5 fw-bold">{store.vehiclesProperties.name}</h1>
        <p class="col-md-8 fs-4">
          Manufacturer: {store.vehiclesProperties.manufacturer}
        </p>
        <p class="col-md-8 fs-4">Model: {store.vehiclesProperties.model}</p>
        <p class="col-md-8 fs-4">Crew: {store.vehiclesProperties.crew}</p>
        <p class="col-md-8 fs-4">
          Passengers: {store.vehiclesProperties.passangers}
        </p>
        <p class="col-md-8 fs-4">
          Cargo Capacity: {store.vehiclesProperties.cargo_capacity}
        </p>
        <p class="col-md-8 fs-4">
          Cost: ${store.vehiclesProperties.cost_in_credits}
        </p>
      </div>
    </div>
  );
};