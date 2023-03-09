import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1RIGO from "../imgs/logorigo (1).png";

import "./NavAdminOuvidoria.css";

export const NavbarAdminOuvidoria = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    navigate("/admin/login");
  };
  return (
    <>
      <nav className="nav-ouvidoria-admin">
        <div className="container">
          <div className="logo-1rigo">
            <img src={logo1RIGO} alt="Logotipo 1RIGO" />
          </div>
          <div className="top-name">
            <Link to="/"> Ouvidoria 1RIGO</Link>
          </div>
          <ul className="justify-content-end">
            <Link to="/admin/denuncias/home/" className="link no-mobile">
              <i className="bi bi-house-door-fill"></i>
              <span>HOME</span>
            </Link>
            <Link
              to="/admin/denuncias/manifestacoes/"
              className="link no-mobile"
            >
              <i className="bi bi-chat-right-quote-fill"></i>
              <span>DENÚNCIAS</span>
            </Link>
            <Link to="/admin/denuncias/users/" className="link no-mobile">
              <i className="bi bi-people-fill"></i>
              <span>USUÁRIOS</span>
            </Link>
            <Link
              to="/admin/denuncias/login"
              onClick={logout}
              className="link no-mobile"
            >
              <i className="bi bi-box-arrow-right"></i>
              <span>SAIR</span>
            </Link>
          </ul>
        </div>
      </nav>
      <div className="container d-flex justify-content-end w-100 p-3">
        <i className="bi bi-person-circle"> </i> &nbsp;
        <span> Iury Flores </span>
      </div>
    </>
  );
};
