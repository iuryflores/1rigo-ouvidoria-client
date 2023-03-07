import React, { useState, useEffect } from "react";
import api from "../../utils/api.utils";
import { Link, useNavigate } from "react-router-dom";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { FooterAdmin } from "../../components/FooterAdmin";

import "../css/AdminHome.css";
export const AllDenuncias = ({ loading, setLoading, loadingGif }) => {
  const [denuncias, setDenuncias] = useState([]);

  const navigate = useNavigate();

  const goToDenuncia = (denunciaId) => {
    navigate(`/admin/denuncia/${denunciaId}/`);
  };

  useEffect(() => {
    const getAllDenuncias = async () => {
      try {
        const data = await api.getAllDenuncias();
        setDenuncias(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error, "Error to get Denuncias");
      }
    };
    getAllDenuncias();
  }, [loading, setLoading]);
  let count = 0;
  return (
    <div>
      <NavbarAdmin />
      <div className="container">
        <h4>Todas Denúncias</h4>
      </div>
      <hr />
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Data</th>
              <th scope="col">Protocolo</th>
              <th scope="col">Setor</th>
              <th scope="col" className="no-mobile">
                Categoria
              </th>
              <th scope="col" className="no-mobile">
                Reclamante
              </th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              denuncias.map((denuncia, index) => {
                let newCategoria;
                if (denuncia.category === "assedio-moral") {
                  newCategoria = "Assédio Moral";
                }
                if (denuncia.category === "assedio-sexual") {
                  newCategoria = "Assédio Sexual";
                }
                if (denuncia.category === "discriminacao") {
                  newCategoria = "Discriminação";
                }
                if (denuncia.category === "gestao-inadequada") {
                  newCategoria = "Gestão inadequada de pessoas";
                }
                if (denuncia.category === "fraude") {
                  newCategoria = "Fraude";
                }
                if (denuncia.category === "corrupcao") {
                  newCategoria = "Corrupção";
                }
                if (denuncia.category === "conflito-interesses") {
                  newCategoria = "Conflito de Interesses";
                }
                if (denuncia.category === "atividades-ilicitas") {
                  newCategoria = "Atividades Ilícitas";
                }
                if (denuncia.category === "saude-seguranca-ocupacional") {
                  newCategoria = "Sáude e Segurança Ocupacional";
                }
                if (denuncia.category === "meio-ambiente") {
                  newCategoria = "Meio Ambiente";
                }
                if (denuncia.category === "riscos-operacionais") {
                  newCategoria = "Riscos Operacionais";
                }
                count++;
                return (
                  <tr
                    key={index}
                    className="clickable"
                    onClick={() => goToDenuncia(denuncia._id)}
                  >
                    <th scope="row">{count}</th>
                    <td>
                      {new Date(
                        denuncia.createdAt.slice(0, -1)
                      ).toLocaleDateString("pt-br", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td>{denuncia.protocolo_id}</td>
                    <td>{denuncia.sector}</td>
                    <td className="no-mobile">{newCategoria}</td>
                    <td className="no-mobile">{denuncia.name || "Anônimo"}</td>
                    <td>{denuncia.status}</td>
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
