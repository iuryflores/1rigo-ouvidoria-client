import React from "react";
import logoIury from "../imgs/iury.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-around align-items-center  border-top">
      <p className=" mb-0 ">
        © 2022 Canal de Denúncias - 1RIGO | Desenvolvido por{" "}
        <a href="https://iuryflores.com.br" target="blank">
          Iury Flores
        </a>
      </p>

      <div className="logo">
        <img src={logoIury} alt="Logotipo 1RIGO" />
      </div>

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
      </ul>
    </footer>
  );
};

export default Footer;