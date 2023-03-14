import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/AdminHome.css";
import api from "../../utils/api.utils";
import { FooterAdmin } from "../../components/FooterAdmin";
import { NavbarAdminOuvidoria } from "../../components/NavAdminOuvidoria";

export const OuvidoriaHome = ({ loading, setLoading, loadingGif }) => {
  const [ouvidoria, setOuvidoria] = useState([]);

  useEffect(() => {
    const getOuvidoria = async () => {
      try {
        const data = await api.getOuvidorias();
        setOuvidoria(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error, "Error to get ouvidoria");
      }
    };
    getOuvidoria();
  }, [loading, setLoading]);

  let totalPendentes = 0;
  let totalEmAndamento = 0;
  let totalFinalizadosProcedentes = 0;
  let totalFinalizadosImprocedentes = 0;
  let totalDadosInsuficientes = 0;

  ouvidoria?.forEach((denuncia) => {
    if (denuncia.status === "pendente") {
      return totalPendentes++;
    }
    if (denuncia.status === "em-andamento") {
      return totalEmAndamento++;
    }
    if (denuncia.status === "finalizada-procedente") {
      return totalFinalizadosProcedentes++;
    }
    if (denuncia.status === "finalizada-improcedente") {
      return totalFinalizadosImprocedentes++;
    }
    if (denuncia.status === "finalizada-dados-insuficientes") {
      return totalDadosInsuficientes++;
    }
  });

  return (
    <div className="admin-home">
      <NavbarAdminOuvidoria />
      <hr className="container" />
      {!loading ? (
        <section className="d-flex  justify-content-center">
          <div className="d-flex container flex-wrap row">
            <Link
              to="/admin/ouvidoria/status/pendente/"
              className="col-sm-12 col-md-4 col-lg-4 mt-3"
            >
              <div className="card-body">
                <i className="bi bi-p-circle number-stat-home"></i>
                <p className="p">Pendentes</p>
                <p className="number-stat-home">{totalPendentes}</p>
              </div>
            </Link>
            <Link
              to="/admin/ouvidoria/status/em-andamento/"
              className="col-sm-12 col-md-4 col-lg-4 mt-3"
            >
              <div className="card-body">
                <i className="bi bi-arrow-repeat number-stat-home"></i>
                <p className="p">Em andamento</p>
                <p className="number-stat-home">{totalEmAndamento}</p>
              </div>
            </Link>
            <Link
              to="/admin/ouvidoria/status/finalizada-procedente/"
              className="col-sm-12 col-md-4 col-lg-4 mt-3"
            >
              <div className="card-body">
                <i className="bi bi-check-circle number-stat-home"></i>
                <p className="p">Finalizadas procedentes</p>
                <p className="number-stat-home">
                  {totalFinalizadosProcedentes}
                </p>
              </div>
            </Link>
            <Link
              to="/admin/ouvidoria/status/finalizada-improcedente/"
              className="col-sm-12 col-md-4 col-lg-4 mt-3"
            >
              <div className="card-body">
                <i className="bi bi-x-circle number-stat-home"></i>
                <p className="p">Finalizadas improcedentes</p>
                <p className="number-stat-home">
                  {totalFinalizadosImprocedentes}
                </p>
              </div>
            </Link>
            <Link
              to="/admin/ouvidoria/status/finalizada-dados-insuficientes/"
              className="col-sm-12 col-md-4 col-lg-4 mt-3"
            >
              <div className="card-body">
                <i className="bi bi-folder-x number-stat-home"></i>
                <p className="p">Dados insuficientes</p>
                <p className="number-stat-home">{totalDadosInsuficientes}</p>
              </div>
            </Link>
            <Link
              to="/admin/ouvidoria/todas/"
              className="col-sm-12 col-md-4 col-lg-4 mt-3"
            >
              <div className="card-body">
                <i className="bi bi-box-seam number-stat-home"></i>
                <p className="p">Total de manifestações recebidas</p>
                <p className="number-stat-home">{ouvidoria.length}</p>
              </div>
            </Link>
          </div>
        </section>
      ) : (
        <div className="d-flex justify-content-center">
          <img style={{ width: "100px" }} src={loadingGif} alt="Loading gif" />
        </div>
      )}
      <FooterAdmin />
    </div>
  );
};
