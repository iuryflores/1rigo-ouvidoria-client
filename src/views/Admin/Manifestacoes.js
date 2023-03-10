import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/AdminHome.css";
import api from "../../utils/api.utils";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { FooterAdmin } from "../../components/FooterAdmin";

export const Manifestacoes = ({ loading, setLoading }) => {
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
      <div className="d-flex flex-column align-items-center">
        <p> Total de den??ncias: {denuncias.length}</p>
      </div>
      <hr />
      <section className="d-flex  justify-content-center">
        <div className="d-flex container flex-wrap row">
          <Link
            to="/admin/denuncias/assedio-moral/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">{totalAssedioMoral}</p>
              <p className="p">Ass??dio Moral</p>
            </div>
          </Link>
          <Link
            to="/admin/denuncias/assedio-sexual/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">{totalAssedioSexual}</p>
              <p className="p">Ass??dio Sexual</p>
            </div>
          </Link>
          <Link
            to="/admin/denuncias/gestao-inadequada/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">{totalGestao}</p>
              <p className="p">Gest??o inadequada de pessoas</p>
            </div>
          </Link>
          <Link
            to="/admin/denuncias/discriminacao/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">{totalDiscriminacao}</p>
              <p className="p">Discrimina????o</p>
            </div>
          </Link>
          <Link
            to="/admin/denuncias/fraude/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">{totalFraude}</p>
              <p className="p">Fraude</p>
            </div>
          </Link>
          <Link
            to="/admin/denuncias/corrupcao/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">{totalCorrupcao}</p>
              <p className="p">Corrup????o</p>
            </div>
          </Link>
          <Link
            to="/admin/denuncias/conflito-interesses/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">{totalConflito}</p>
              <p className="p">Conflito de Interesses</p>
            </div>
          </Link>
          <Link
            to="/admin/denuncias/atividades-ilicitas/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">{totalAtividadesIlicitas}</p>
              <p className="p">Atividades Il??citas</p>
            </div>
          </Link>
          <Link
            to="/admin/denuncias/saude-seguranca-ocupacional/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">{totalSaude}</p>
              <p className="p">Sa??de e Seguran??a Ocupacional</p>
            </div>
          </Link>
          <Link
            to="/admin/denuncias/meio-ambiente/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">{totalMeioAmbiente}</p>
              <p className="p">Meio Ambiente</p>
            </div>
          </Link>
          <Link
            to="/admin/denuncias/riscos-operacionais/"
            className="col-sm-12 col-md-4 col-lg-4 mt-3"
          >
            <div className="card-body">
              <p className="number-stat">{totalRiscos}</p>
              <p className="p">Riscos Operacionais</p>
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
