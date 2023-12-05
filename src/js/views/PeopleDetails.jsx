import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import darthVader from "../../img/darthVader.jpeg";

export const PeopleDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  actions.getPeopleDetails(params.idPeople);

  return (
    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
    <div class="container-fluid py-5">
      <img src={darthVader} alt="..." />
      <h1 class="display-5 fw-bold">{store.userProperties.name}</h1>
      <p class="col-md-8 fs-4">
      Altura: {store.userProperties.height}
      </p>
      <p class="col-md-8 fs-4">Color de Cabello: {store.userProperties.hair_color}</p>
      <p class="col-md-8 fs-4">Color de Ojos: {store.userProperties.eye_color}</p>
      <p class="col-md-8 fs-4">
      Color de Piel: {store.userProperties.skin_color}
      </p>
      <p class="col-md-8 fs-4">
      Genero: {store.userProperties.gender}
      </p>
      <p class="col-md-8 fs-4">
      {store.userDetail.description}
      </p>
    </div>
    </div>
  );
};