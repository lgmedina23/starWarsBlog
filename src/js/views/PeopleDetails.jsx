import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// creo el componente

// tengo que leer el parametro
// ejecutar el action(request fetch) con la url del personaje del cual quiero traer los datos
// muestras los datos de request

export const PeopleDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  actions.getPeopleDetails(params.idPeople);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="card " style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{store.userProperties.name}</h5>
          <h5 className="card-title">{store.userDetail.description}</h5>
        </div>
      </div>
    </div>
  );
};
