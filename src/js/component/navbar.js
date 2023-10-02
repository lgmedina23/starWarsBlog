import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/star-wars-logo-31.png"


export const Navbar = () => {


  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img src={starWarsLogo} />
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary m-4">Favorites</button>
        </Link>
      </div>
    </nav>
  );
};
