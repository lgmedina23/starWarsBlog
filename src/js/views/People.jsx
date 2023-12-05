import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import darthVader from "../../img/darthVader.jpeg";

export const People = (props) => {
  const { store, actions } = useContext(Context);
  store.userDetail = {};
  store.userProperties = {};

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {/* aqui hago el map  */}
      {store.users.map((item) => (
        <div key={item.uid} className="col">
          <div className="card " style={{ width: "18rem" }}>
            <img
              src={darthVader}
              className="card-img-top img-thumbnail"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <Link to={"/people/" + item.uid}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
