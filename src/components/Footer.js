import React from "react";
import logoIury from "../imgs/iury.png";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  let location = useLocation().pathname;
  let newLocation = location.slice(0, 7);
  return (
    <>
      <hr className="espacamento-100" />
      <footer className="d-flex flex-wrap justify-content-around align-items-center  border-top no-mobile">
        <p className=" mb-0">
          © 2022 - 2023 Canal de Denúncias - 1RIGO | Desenvolvido por{" "}
          <a href="https://iuryflores.com.br" target="blank">
            Iury Flores
          </a>
        </p>
        <div className="logo">
          <img src={logoIury} alt="Logotipo 1RIGO" />
        </div>
        {newLocation !== "/admin/" && (
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 ">
                Início
              </Link>
            </li>
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
             <li className="nav-item">
              <Link to="/admin/login" className="nav-link px-2 ">
                Painel Admin
              </Link>
            </li>
          </ul>
        )}
      </footer>
    </>
  );
};
