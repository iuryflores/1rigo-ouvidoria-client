import React, { useState, useEffect } from "react";
import api from "../../utils/api.utils";
import { useParams, Link } from "react-router-dom";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { FooterAdmin } from "../../components/FooterAdmin";
import loadingGif from "../../imgs/loading-state.gif";

import "../css/AdminHome.css";
export const Denuncia = ({ loading, setLoading }) => {
  const { id } = useParams();

  const [denuncia, setDenuncia] = useState();

  useEffect(() => {
    const getDenuncia = async () => {
      try {
        const data = await api.getDenuncia(id);
        setDenuncia(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error, "Error to get Denuncias");
      }
    };
    getDenuncia();
  }, [loading, setLoading, id]);

  return (
    <div>
      <NavbarAdmin />
      {!loading ? (
        denuncia?.map((denuncia, index) => {
          return (
            <div key={index}>
              <div className="container">
                <h4>
                  Visualização da denúncia de protocolo nº{" "}
                  {denuncia.protocolo_id}
                </h4>
              </div>
              <hr />
              <div className="container w-50">
                <div class="card">
                  <h5 class="card-header">Dados da denúncia</h5>
                  <div class="card-body">
                    <table className="table ">
                      <tr>
                        <td> Data da denúncia:</td>
                        <td>
                          <b>
                            {new Date(
                              denuncia.createdAt.slice(0, -1)
                            ).toLocaleDateString("pt-br", {
                              day: "numeric",
                              month: "numeric",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                            h
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <td>Setor:</td>
                        <td>
                          <b>{denuncia.sector}</b>
                        </td>
                      </tr>
                      <tr>
                        <td>Categoria:</td>
                        <td>
                          <b>{denuncia.category}</b>
                        </td>
                      </tr>
                      <tr>
                        <td>Envolvidos:</td>
                        <td>
                          <b>{denuncia.envolved}</b>
                        </td>
                      </tr>
                      <tr>
                        <td>Testemunhas:</td>
                        <td>
                          <b>{denuncia.witness}</b>
                        </td>
                      </tr>
                      <tr>
                        <td>Conversou sobre o ocorrido com:</td>
                        <td>
                          <b>{denuncia.talkedAbout}</b>
                        </td>
                      </tr>
                      <tr>
                        <td>Detalhes:</td>
                        <td>
                          <b>{denuncia.details}</b>
                        </td>
                      </tr>
                    </table>
                    <p class="card-text"> </p>
                    <p class="card-text"></p>
                    <Link to="#" class="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>

              {denuncia.name}
              {denuncia.protocolo_id}
              {denuncia.name || "Anônimo"}
              {denuncia.status}
              <i className="bi bi-eye-fill"></i>
            </div>
          );
        })
      ) : (
        <img style={{ width: "100px" }} src={loadingGif} alt="Loading gif" />
      )}

      <FooterAdmin />
    </div>
  );
};
