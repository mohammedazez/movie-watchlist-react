import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Netflux</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Daftar Film</Link>
            </li>

            <li>
              <Link to="/watched">Sudah di tonton</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Tambahkan
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
