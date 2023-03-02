import React from "react";
import { Link } from "react-router-dom";
import logoIHF from "../imgs/iury.png";
import logo1rigo from "../imgs/logo_white.png";

import "./Navbar.css";

export const NavbarOuvidoria = () => {
  return (
    <>
      <nav className="navOuvidoria">
        <div className="container">
          <div className="logo">
            <img src={logo1rigo} alt="Logotipo 1RIGO" />
          </div>
          <div className="logo">
            <img src={logoIHF} alt="Logotipo Iury" />
          </div>
          <div className="logo">
          <Link to="/">Ouvidoria 1RIGO</Link>
          </div>
        </div>
      </nav>
      <div className=" back backOuvidoria"></div>
      <div
        className=" nav-Ouvidoria mb-2"
        style={{ "--bs-breadcrumb-divider": ">" }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb breadcrumbOuvidoria">
          <li className="breadcrumb-item">
            <a href="./">Página Inicial</a>
          </li>
          <li
            className="breadcrumb-item active"
            aria-current="page"
            id="pageName"
          ></li>
        </ol>
      </div>
    </>
  );
};
