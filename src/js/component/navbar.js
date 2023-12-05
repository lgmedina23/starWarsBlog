import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/star-wars-logo-31.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img src={starWarsLogo} />
      </Link>
      <div className="btn-group m-5">
        <button
          type="button"
          className="btn btn-danger dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item">item</li>
          <li className="dropdown-item">item2</li>
          <li className="dropdown-item">item3</li>
          <li className="dropdown-item">item4</li>
        </ul>
      </div>
    </nav>
  );
};
