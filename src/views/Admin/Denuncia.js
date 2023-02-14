import React, { useState, useEffect } from "react";
import api from "../../utils/api.utils";
import { useParams } from "react-router-dom";
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
      <div className="container">
        <h4>Denúncias</h4>
      </div>
      <hr />
      <div className="container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Data</th>
              <th scope="col">Setor</th>
              <th scope="col" className="no-mobile">
                Categoria
              </th>
              <th scope="col">Protocolo</th>
              <th scope="col" className="no-mobile">
                Reclamante
              </th>
              <th scope="col">Status</th>
              <th className="text-center" scope="col">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              denuncia?.map((denuncia, index) => {
                return (
                  <tr key={index}>
                    <th scope="row"></th>
                    <td>
                      {new Date(
                        denuncia.createdAt.slice(0, -1)
                      ).toLocaleDateString("pt-br", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td>{denuncia.sector}</td>
                    <td className="no-mobile">{denuncia.name}</td>
                    <td>{denuncia.protocolo_id}</td>
                    <td className="no-mobile">{denuncia.name || "Anônimo"}</td>
                    <td>{denuncia.status}</td>
                    <td className="text-center">
                      <i className="bi bi-eye-fill"></i>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  <img
                    style={{ width: "100px" }}
                    src={loadingGif}
                    alt="Loading gif"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <FooterAdmin />
    </div>
  );
};
