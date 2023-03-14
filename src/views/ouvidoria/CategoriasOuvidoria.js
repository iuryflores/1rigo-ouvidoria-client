import React, { useState, useEffect } from "react";
import api from "../../utils/api.utils";
import { Link, useParams } from "react-router-dom";
import { NavbarAdminOuvidoria } from "../../components/NavAdminOuvidoria";
import { FooterAdmin } from "../../components/FooterAdmin";

import "../css/AdminHome.css";
export const CategoriasOuvidorias = ({ loading, setLoading, loadingGif }) => {
  const { categoria } = useParams();
  let newCategoria = categoria;
  if (categoria === "elogios") {
    newCategoria = "Elogios";
  }
  if (categoria === "reclamacao") {
    newCategoria = "Reclamações";
  }
  if (categoria === "sugestao") {
    newCategoria = "Sugestão";
  }
  if (categoria === "outros") {
    newCategoria = "Outros";
  }
  
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
  let count = 0;
  console.log(ouvidorias)
  return (
    <div>
      <NavbarAdminOuvidoria />
      <div className="container">
        <h4>Denúncias de {newCategoria}</h4>
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
              <th className="text-center" scope="col">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              ouvidorias.map((denuncia, index) => {
                if (denuncia.tipo === categoria) {
                  count++;
                  return (
                    <tr key={index}>
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
                      <td className="no-mobile">
                        {denuncia.name || "Anônimo"}
                      </td>
                      <td>{denuncia.status}</td>
                      <td className="text-center">
                        <Link to={`/admin/denuncia/${denuncia._id}/`}>
                          <i className="bi bi-eye-fill"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                }
                return "";
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
