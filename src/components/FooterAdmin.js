import React from "react";
import { Link } from "react-router-dom";

import "./FooterAdmin.css";

export const FooterAdmin = () => {
  return (
    <>
      <nav className="nav2-admin">
        <ul className="container">
          <Link to="/admin/home/" className="link">
            <i className="bi bi-house-door-fill"></i>
            <span>HOME</span>
          </Link>
          <Link to="/admin/home/" className="link ">
            <i className="bi bi-chat-right-quote-fill"></i>
            <span>MANIFESTAÇÕES</span>
          </Link>
          <Link to="/admin/home/" className="link ">
            <i className="bi bi-people-fill"></i>
            <span>USUÁRIOS</span>
          </Link>
          <Link to="/admin/home/" className="link ">
            <i className="bi bi-box-arrow-right"></i>
            <span>SAIR</span>
          </Link>
        </ul>
      </nav>
    </>
  );
};
