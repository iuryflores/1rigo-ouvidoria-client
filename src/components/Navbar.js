import React from "react";
import { Link } from "react-router-dom";
import logo1RIGO from "../imgs/logo_white.png";
import logoIHF from "../imgs/iury.png";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={logo1RIGO} alt="Logotipo 1RIGO" />
            </Link>
          </div>
          <div>
            <img src={logoIHF} alt="Logotipo Iury" />
          </div>
          <div>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link to="/send-complaint" className="nav-link px-2 ">
                  Faça uma denúncia
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/track-complaint" className="nav-link px-2 ">
                  Acompanhe sua denúncia
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/send-question" className="nav-link px-2 ">
                  Envie uma dúvida
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container back"></div>
      <div
        className="container nav-user mb-2"
        style={{ "--bs-breadcrumb-divider": ">" }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb">
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
