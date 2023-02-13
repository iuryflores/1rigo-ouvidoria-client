import React, { useState, useEffect } from "react";
import api from "../../utils/api.utils";
import { useParams } from "react-router-dom";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { FooterAdmin } from "../../components/FooterAdmin";
import "../css/AdminHome.css";
export const Categoria = ({ loading, setLoading }) => {
  const { categoria } = useParams();
  let newCategoria = categoria;
  if (categoria === "assedio-moral") {
    newCategoria = "Assédio Moral";
  }
  if (categoria === "assedio-sexual") {
    newCategoria = "Assédio Sexual";
  }
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
  let count = 0;
  return !loading ? (
    <div>
      <NavbarAdmin />
      <div className="container">
        <h4>Denúncias de {newCategoria}</h4>
      </div>
      <hr />
      <div className="container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Data</th>
              <th scope="col">Setor</th>
              <th scope="col">Categoria</th>
              <th scope="col">Protocolo</th>
              <th scope="col">Status</th>
              <th className="text-center" scope="col">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {denuncias.map((denuncia, index) => {
              if (denuncia.category === categoria) {
                count++;
                return (
                  <>
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
                      <td>{denuncia.sector}</td>
                      <td>{newCategoria}</td>
                      <td>{denuncia.protocolo_id}</td>
                      <td>{denuncia.status}</td>
                      <td className="text-center">
                        <i className="bi bi-eye-fill"></i>
                      </td>
                    </tr>
                  </>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <FooterAdmin />
    </div>
  ) : (
    <>Loading...</>
  );
};
