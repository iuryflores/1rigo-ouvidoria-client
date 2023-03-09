import React from "react";
import { Link } from "react-router-dom";
import logoIHF from "../imgs/iury.png";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="nav-denuncia-client">
        <div className="container">
          <div className="top-name">
            <Link to="/">Canal de Denúncias</Link>
          </div>
          <div className="logo">
            <img src={logoIHF} alt="Logotipo Iury" />
          </div>

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
      </nav>
      <div className="container back"></div>
      <div
        className="container nav-user mb-2"
        style={{ "--bs-breadcrumb-divider": ">" }}
        aria-label="breadcrumb"
      ></div>
    </>
  );
};
