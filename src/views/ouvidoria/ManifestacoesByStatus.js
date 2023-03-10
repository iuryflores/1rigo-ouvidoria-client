import React, { useState, useEffect } from "react";
import api from "../../utils/api.utils";
import { useParams, useNavigate } from "react-router-dom";
import { NavbarAdminOuvidoria } from "../../components/NavAdminOuvidoria";
import { FooterAdmin } from "../../components/FooterAdmin";

import "../css/AdminHome.css";
export const ManifestacoesByStatus = ({ loading, setLoading, loadingGif }) => {
  const { status } = useParams();

  const [ouvidorias, setOuvidorias] = useState([]);

  const navigate = useNavigate();

  const goToManifestacao = (ouvidoriaId) => {
    navigate(`/admin/ouvidoria/${ouvidoriaId}/`);
  };

  useEffect(() => {
    const getOuvidoriaByStatus = async () => {
      try {
        const data = await api.getOuvidoriaByStatus(status);
        setOuvidorias(data);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error, "Error to get Ouvidoria");
      }
    };
    getOuvidoriaByStatus();
  }, [loading, setLoading, status]);
  let count = 0;
  return (
    <div>
      <NavbarAdminOuvidoria />
      <div className="container">
        <h4>
          Manifestações com status: <b>"{status.replace("-", " ")}"</b>
        </h4>
      </div>
      <hr />
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Data</th>
              <th scope="col">Protocolo</th>

              <th scope="col" className="no-mobile">
                Tipo
              </th>
              <th scope="col" className="no-mobile">
                Manifestante
              </th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              ouvidorias?.map((ouvidoria, index) => {
                count++;
                return (
                  <tr
                    key={index}
                    className="clickable"
                    onClick={() => goToManifestacao(ouvidoria._id)}
                  >
                    <th scope="row">{count}</th>
                    <td>
                      {new Date(
                        ouvidoria.createdAt.slice(0, -1)
                      ).toLocaleDateString("pt-br", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td>{ouvidoria.protocolo_id}</td>
                    <td className="no-mobile">
                      {ouvidoria.tipo[0].toUpperCase() +
                        ouvidoria.tipo.substring(1).replace("-", " ")}
                    </td>
                    <td className="no-mobile">{ouvidoria.name || "Anônimo"}</td>
                    <td>
                      {ouvidoria.status[0].toUpperCase() +
                        ouvidoria.status.substring(1)}
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
