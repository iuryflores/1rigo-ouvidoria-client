import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/AdminHome.css";
import api from "../../utils/api.utils";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { FooterAdmin } from "../../components/FooterAdmin";

export const AdminHome = ({ loading, setLoading }) => {
  const [denuncias, setDenuncias] = useState([]);

  useEffect(() => {
    const getDenuncias = async () => {
      try {
        const data = await api.getDenuncias();
        setDenuncias(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error, "Error to get Denuncias");
      }
    };
    getDenuncias();
  }, [loading, setLoading]);

  let totalAssedioMoral = 0;
  let totalAssedioSexual = 0;
  let totalGestao = 0;
  let totalDiscriminacao = 0;
  let totalFraude = 0;
  let totalCorrupcao = 0;
  let totalConflito = 0;
  let totalAtividadesIlicitas = 0;
  let totalSaude = 0;
  let totalMeioAmbiente = 0;
  let totalRiscos = 0;

  denuncias?.forEach((denuncia) => {
    if (denuncia.category === "assedio-moral") {
      return totalAssedioMoral++;
    }
    if (denuncia.category === "assedio-sexual") {
      return totalAssedioSexual++;
    }
    if (denuncia.category === "gestao-inadequada") {
      return totalGestao++;
    }
    if (denuncia.category === "discriminacao") {
      return totalDiscriminacao++;
    }
    if (denuncia.category === "fraude") {
      return totalFraude++;
    }
    if (denuncia.category === "corrupcao") {
      return totalCorrupcao++;
    }
    if (denuncia.category === "conflito-interesses") {
      return totalConflito++;
    }
    if (denuncia.category === "atividades-ilicitas") {
      return totalAtividadesIlicitas++;
    }
    if (denuncia.category === "saude-seguranca-ocupacional") {
      return totalSaude++;
    }
    if (denuncia.category === "meio-ambiente") {
      return totalMeioAmbiente++;
    }
    if (denuncia.category === "riscos-operacionais") {
      return totalRiscos++;
    }
  });

  return !loading ? (
    <div className="admin-home">
      <NavbarAdmin />
      <hr />
      <section className="d-flex  justify-content-center">
        <div className="d-flex container flex-wrap row">
          <Link
            to="/admin/complaints/assedio-moral/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <i class="bi bi-p-circle number-stat-home"></i>
              <p className="p">Pendentes</p>
              <p className="number-stat-home">{totalAssedioMoral}</p>
            </div>
          </Link>
          <Link
            to="/admin/complaints/assedio-sexual/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <i class="bi bi-arrow-repeat number-stat-home"></i>
              <p className="p">Em andamento</p>
              <p className="number-stat-home">{totalAssedioSexual}</p>
            </div>
          </Link>
          <Link
            to="/admin/complaints/gestao-inadequada/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <i class="bi bi-check-circle number-stat-home"></i>
              <p className="p">Finalizadas procedentes</p>
              <p className="number-stat-home">{totalGestao}</p>
            </div>
          </Link>
          <Link
            to="/admin/complaints/discriminacao/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <i class="bi bi-x-circle number-stat-home"></i>
              <p className="p">Finalizadas improcedentes</p>
              <p className="number-stat-home">{totalDiscriminacao}</p>
            </div>
          </Link>
          <Link
            to="/admin/complaints/fraude/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <i class="bi bi-folder-x number-stat-home"></i>
              <p className="p">Dados insuficientes</p>
              <p className="number-stat-home">{totalFraude}</p>
            </div>
          </Link>
          <Link
            to="/admin/complaints/corrupcao/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <i class="bi bi-box-seam number-stat-home"></i>
              <p className="p">Total de manifestações recebidas</p>
              <p className="number-stat-home">{denuncias.length}</p>
            </div>
          </Link>
        </div>
      </section>

      <FooterAdmin />
    </div>
  ) : (
    <>Loading...</>
  );
};
