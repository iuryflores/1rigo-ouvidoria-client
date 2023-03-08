import React, { useState, useEffect } from "react";
import api from "../../utils/api.utils";
import { useParams, useNavigate } from "react-router-dom";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { FooterAdmin } from "../../components/FooterAdmin";

import "../css/AdminHome.css";
export const DenunciaByStatus = ({ loading, setLoading, loadingGif }) => {
  const { status } = useParams();

  const [denuncias, setDenuncias] = useState([]);

  const navigate = useNavigate();

  const goToDenuncia = (denunciaId) => {
    navigate(`/admin/denuncia/${denunciaId}/`);
  };

  useEffect(() => {
    const getDenunciasStatus = async () => {
      try {
        const data = await api.getDenunciasByStatus(status);
        setDenuncias(data);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error, "Error to get Denuncias");
      }
    };
    getDenunciasStatus();
  }, [loading, setLoading, status]);
  let count = 0;
  return (
    <div>
      <NavbarAdmin />
      <div className="container">
        <h4>
          Denúncias com status: <b>"{status.replace("-", " ")}"</b>
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
              denuncias?.map((denuncia, index) => {
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
                    <td className="no-mobile">
                      {denuncia.category[0].toUpperCase() +
                        denuncia.category.substring(1).replace("-", " ")}
                    </td>
                    <td className="no-mobile">{denuncia.name || "Anônimo"}</td>
                    <td>
                      {denuncia.status[0].toUpperCase() +
                        denuncia.status.substring(1)}
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
