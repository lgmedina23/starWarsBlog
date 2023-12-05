import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import planetImage from "../../img/planetStarWar.jpeg";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  store.planetsDetail = {};
  store.planetsProperties = {};

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {store.planets.map((item) => (
        <div key={item.uid} className="col">
          <div className="card " style={{ width: "18rem" }}>
            <img src={planetImage} className="card-img-top img-thumbnail" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <Link to={"/planets/" + item.uid}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
