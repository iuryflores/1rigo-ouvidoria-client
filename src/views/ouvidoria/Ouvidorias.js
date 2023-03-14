import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/AdminHome.css";
import api from "../../utils/api.utils";
import { NavbarAdminOuvidoria } from "../../components/NavAdminOuvidoria";
import { FooterAdmin } from "../../components/FooterAdmin";

export const Ouvidorias = ({ loading, setLoading }) => {
  const [ouvidorias, setOuvidorias] = useState([]);

  useEffect(() => {
    const getOuvidorias = async () => {
      try {
        const data = await api.getOuvidorias();
        setOuvidorias(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error, "Error to get Ouvidorias");
      }
    };
    getOuvidorias();
  }, [loading, setLoading]);

  let totalElogios = 0;
  let totalReclamacao = 0;
  let totalSugestao = 0;
  let totalOutros = 0;

  ouvidorias?.forEach((denuncia) => {
    if (denuncia.tipo === "elogios") {
      return totalElogios++;
    }
    if (denuncia.tipo === "reclamacao") {
      return totalReclamacao++;
    }
    if (denuncia.tipo === "sugestao") {
      return totalSugestao++;
    }
    if (denuncia.tipo === "outros") {
      return totalOutros++;
    }
  });

  return !loading ? (
    <div className="admin-home">
      <NavbarAdminOuvidoria />
      <div className="d-flex flex-column align-items-center">
        <p> Total de manifestações: {ouvidorias.length}</p>
      </div>
      <hr />
      <section className="d-flex  justify-content-center">
        <div className="d-flex container flex-wrap row">
          <Link
            to="/admin/ouvidoria/elogios/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">{totalElogios}</p>
              <p className="p">Elogios</p>
            </div>
          </Link>
          <Link
            to="/admin/ouvidoria/reclamacao/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">{totalReclamacao}</p>
              <p className="p">Reclamações</p>
            </div>
          </Link>
          <Link
            to="/admin/ouvidoria/sugestão/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">{totalSugestao}</p>
              <p className="p">Sugestão</p>
            </div>
          </Link>
          <Link
            to="/admin/ouvidoria/outros/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">{totalOutros}</p>
              <p className="p">Outros</p>
            </div>
          </Link>
        </div>
      </section>
      <hr className="espacamento-200" />
      <FooterAdmin />
    </div>
  ) : (
    <>Loading...</>
  );
};
