import React from "react";
import { Link } from "react-router-dom";
import "./css/AdminHome.css";
import { NavbarAdmin } from "../components/NavbarAdmin";
import { FooterAdmin } from "../components/FooterAdmin";

export const AdminHome = () => {
  return (
    <div className="admin-home">
      <NavbarAdmin />

      <div className="d-flex justify-content-end w-100 p-3">
        <i className="bi bi-person-circle"> </i> &nbsp;
        <span> Iury Flores </span>
      </div>
      <hr />
      <section className="d-flex  justify-content-center">
        <div className="d-flex container flex-wrap row">
          <Link to="/complaints" className="col-sm-12 col-md-5 col-lg-4 mt-3">
            <div className="card-body">
              <p className="number-stat">12</p>
              <p className="p">Denúncias</p>
            </div>
          </Link>
          <Link
            to="/track-complaint"
            className="col-sm-12 col-md-5 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">23</p>
              <p className="p">Reclamações</p>
            </div>
          </Link>
          <Link
            to="/send-question"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">05</p>
              <p className="p">Sugestões</p>
            </div>
          </Link>
          <Link
            to="/send-question"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">05</p>
              <p className="p">Elogios</p>
            </div>
          </Link>
        </div>
      </section>
      <hr className="espacamento-100" />
      <FooterAdmin />
    </div>
  );
};
