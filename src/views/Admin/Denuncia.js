import React, { useState, useEffect } from "react";
import api from "../../utils/api.utils";
import { useParams } from "react-router-dom";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { FooterAdmin } from "../../components/FooterAdmin";
import loadingGif from "../../imgs/loading-state.gif";
import { Button, Modal } from "react-bootstrap";

import "../css/AdminHome.css";

export const Denuncia = ({ loading, setLoading }) => {
  const { id } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAssumir = () =>{
    setShow(false)
  }
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
  let status;

  return (
    <div>
      <NavbarAdmin />
      {!loading ? (
        denuncia?.map((denuncia, index) => {
          const now = new Date(); // Data de hoje
          const past = new Date(denuncia.createdAt); // Outra data no passado
          const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
          const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

          if (denuncia.status)
            if (denuncia.status === "pendente") {
              status = "warning";
            }
          if (days >= 7) {
            status = "danger";
            denuncia.status = `Pendente à ${days} dias`;
          }

          return (
            <div key={index}>
              <div className="container">
                <h4>
                  Visualização da denúncia de protocolo nº{" "}
                  {denuncia.protocolo_id}
                </h4>
              </div>
              <hr />
              <div className="d-flex w-100 justify-content-end  px-3">
                <Button className="mx-3" variant="primary" onClick={handleShow}>
                  Assumir
                </Button>
                <span className={`btn btn-${status}`}>{denuncia.status}</span>
              </div>
              <div className="align-mobile d-flex flex-nowrap">
                <div className="card w-50 m-3">
                  <div className="d-flex card-header justify-content-between align-items-center">
                    <h5 className=" mb-0">Dados da denúncia</h5>
                  </div>
                  <div className="card-body">
                    <table className="table table-borderless">
                      <tbody>
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
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card w-50 m-3">
                  <h5 className="card-header">Dados do(a) reclamante</h5>
                  <div className="card-body">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <td> Nome:</td>
                          <td>
                            <b>{denuncia.name || "Anônimo"}</b>
                          </td>
                        </tr>
                        <tr>
                          <td>Funcionário do departamento:</td>
                          <td>
                            <b>{denuncia.role}</b>
                          </td>
                        </tr>
                        <tr>
                          <td>Telefone:</td>
                          <td>
                            <b>{denuncia.telephone}</b>
                          </td>
                        </tr>
                        <tr>
                          <td>E-mail:</td>
                          <td>
                            <b>{denuncia.email}</b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Modal */}
              <Modal
                style={{ marginTop: "20%" }}
                show={show}
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <h6>Deseja assumir o controle desta denúncia?</h6>
                </Modal.Header>
                <Modal.Body>
                  <p className="d-flex flex-column">
                    <span>
                      Protocolo n. <b> {denuncia.protocolo_id}</b>
                    </span>
                    <span>
                      Data da denúncia:{" "}
                      <b>
                        {new Date(
                          denuncia.createdAt.slice(0, -1)
                        ).toLocaleDateString("pt-br", {
                          day: "numeric",
                          month: "numeric",
                          year: "numeric",
                        })}
                      </b>
                    </span>
                    <span>
                      Denúncia de <b> {denuncia.category}</b>
                    </span>
                    <span>
                      Reclamante: <b> {denuncia.name || "Anônimo"}</b>
                    </span>
                    <span>
                      Setor denunciado: <b> {denuncia.sector}</b>
                    </span>
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleAssumir}>
                    Sim
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Não
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          );
        })
      ) : (
        <div className="d-flex justify-content-center">
          <img style={{ width: "100px" }} src={loadingGif} alt="Loading gif" />
        </div>
      )}

      <FooterAdmin />
    </div>
  );
};
