import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import vehiclesImage from "../../img/vehiclesStarWar.jpeg";

export const Vehicles = (props) => {
  const { store, actions } = useContext(Context);
  store.vehiclesDetails = {};
  store.vehiclesProperties = {};

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {store.vehicles.map((item) => (
        <div key={item.uid} className="col">
          <div className="card " style={{ width: "18rem" }}>
            <img src={vehiclesImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <Link to={"/vehicles/" + item.uid}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
