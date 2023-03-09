import React from "react";
import { Link } from "react-router-dom";
import logo1rigo from "../imgs/logo_white.png";

import "./NavbarOuvidoria.css";

export const NavbarOuvidoria = () => {
  return (
    <>
      <nav className="navOuvidoria nav-ouvidoria-admin">
        <div className="container">
          <div className="logo-maior">
            <img src={logo1rigo} alt="Logotipo 1RIGO" />
          </div>
          <div className="top-name">
            <Link to="/">Ouvidoria 1RIGO</Link>
          </div>
        </div>
      </nav>
      <div className=" back backOuvidoria"></div>
      <div
        className=" nav-Ouvidoria mb-2"
        style={{ "--bs-breadcrumb-divider": ">" }}
        aria-label="breadcrumb"
      ></div>
    </>
  );
};
