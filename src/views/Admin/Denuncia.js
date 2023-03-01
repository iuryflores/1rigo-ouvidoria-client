import React, { useState, useEffect } from "react";
import api from "../../utils/api.utils";
import { useNavigate, useParams } from "react-router-dom";
import { NavbarAdmin, FooterAdmin, MsgSucess } from "../../components/index.js";
import { ButtonFinalizar } from "../../components/ButtonFinalizar";

import loadingGif from "../../imgs/loading-state.gif";
import { Button, Modal, Toast, Form, InputGroup } from "react-bootstrap";

import "../css/AdminHome.css";

export const Denuncia = ({ loading, setLoading, message, setMessage }) => {
  const { id } = useParams();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleCloseFinalizar = () => setFinalizar(false);
  const handleShow = () => setShow(true);
  const handleShowFinalizar = () => setFinalizar(true);

  const [denuncia, setDenuncia] = useState();

  const [assumir, setAssumir] = useState();
  const [finalizar, setFinalizar] = useState();

  let userId = sessionStorage.getItem("userId");
  let status;

  const [messageUser, setMessageUser] = useState("");

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

    const getAuditById = async () => {
      try {
        const data = await api.getAuditById(id);
        if (data[0].responsible_id !== undefined) setAssumir(false);
      } catch (error) {
        console.log(error, "Error to get Audit");
      }
    };
    getAuditById();
  }, [loading, setLoading, id, userId]);

  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  }, [message, setMessage]);

  const handleAssumir = async (e) => {
    const userId = sessionStorage.getItem("userId");

    try {
      const newAudit = await api.addAudit(id, userId);
      navigate(`/admin/denuncia/${id}`);

      return newAudit;
    } catch (error) {
      console.log(error);
      setMessage(error);
    }
  };
  const handleFinalizar = async (e) => {
    const userId = sessionStorage.getItem("userId");

    const tipo = e.target.innerText;

    try {
      const newAudit = await api.endAudit(id, userId, { tipo });
      if (newAudit) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setMessage(error);
    }
  };
  const handleSendMessage = async (e) => {
    setMessageUser(messageUser);
    console.log(messageUser);
    try {
      const newMessage = await api.sendMessage(id, { messageUser });
      console.log(newMessage);
      navigate(`/admin/denuncia/${id}`);
    } catch (error) {
      console.log(error);
      setMessage(error);
    }
  };
  return (
    <div>
      <NavbarAdmin />
      {message && <MsgSucess>{message}</MsgSucess>}
      {!loading ? (
        denuncia?.map((denuncia, index) => {
          const now = new Date(); // Data de hoje
          const past = new Date(denuncia.createdAt); // Outra data no passado
          const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
          const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

          if (denuncia.status === "pendente") status = "warning";
          if (denuncia.status === "finalizado") status = "secondary";
          if (denuncia.status === "em-andamento") status = "info";

          if (days >= 7 && denuncia.status !== "finalizado") {
            status = "danger";
            denuncia.status = `Pendente à ${days} dias`;
          }

          return (
            <div key={index}>
              <div className="mx-3">
                <h4>
                  <i className="bi bi-megaphone-fill"></i> Visualização da
                  denúncia de protocolo nº {denuncia.protocolo_id}
                </h4>
              </div>
              <hr />

              <div className="d-flex w-100 justify-content-end  px-3">
                {denuncia.status.slice(0, 10) !== "finalizado" ? (
                  assumir === undefined ? (
                    <Button
                      className="mx-3"
                      variant="primary"
                      onClick={handleShow}
                    >
                      Assumir
                    </Button>
                  ) : (
                    <Button
                      className="mx-3"
                      variant="primary"
                      onClick={handleShowFinalizar}
                    >
                      Finalizar
                    </Button>
                  )
                ) : (
                  <></>
                )}
                <span className={`btn btn-${status}`}>
                  {denuncia.status.toUpperCase()}
                </span>
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
                                minute: "2-digit"
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
                            <b>{denuncia.involved}</b>
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
              {denuncia.status === "em-andamento" ? (
                <div className="align-mobile auditoria d-flex">
                  <div className="card w-100 m-3">
                    <div className="d-flex card-header justify-content-between align-items-center">
                      <h5 className=" mb-0 w-100 text-center">Mensagens</h5>
                    </div>
                    <div className="card-body">
                      {denuncia?.messages_id.map((message, index) => {
                        return (
                          <Toast key={index}>
                            <Toast.Header closeButton={false}>
                              <i className="bi bi-person-circle"> </i>
                              <strong className="me-auto mx-2">
                                {" "}
                                {message.userName}
                              </strong>
                              <small>
                                {new Date(
                                  message.createdAt.slice(0, -1)
                                ).toLocaleDateString("pt-br", {
                                  day: "numeric",
                                  month: "numeric",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit"
                                })}
                              </small>
                            </Toast.Header>
                            <Toast.Body>{message.descricao}</Toast.Body>
                          </Toast>
                        );
                      })}
                      {denuncia.etapa === "ouvidoria" ? (
                        <form>
                          <InputGroup className="mb-3">
                            <Form.Control
                              as="textarea"
                              atial-label="Message"
                              value={messageUser}
                              onChange={(e) => setMessageUser(e.target.value)}
                            />
                            <button
                              className="btn btn-primary"
                              onClick={handleSendMessage}
                            >
                              <i className="bi bi-send-fill"></i>
                            </button>
                          </InputGroup>
                        </form>
                      ) : (
                        <>Aguardando resposta do reclamante.</>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="align-mobile auditoria d-flex">
                <div className="card w-100 m-3">
                  <div className="d-flex card-header justify-content-between align-items-center">
                    <h5 className=" mb-0 w-100 text-center">Auditoria</h5>
                  </div>
                  <div className="card-body">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th>DATA</th>
                          <th className="no-mobile">OPERAÇÃO</th>
                          <th>DESCRIÇÃO</th>
                          <th>USUÁRIO</th>
                        </tr>
                      </thead>
                      <tbody>
                        {denuncia.audits.map((audit, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                {new Date(
                                  audit.createdAt.slice(0, -1)
                                ).toLocaleDateString("pt-br", {
                                  day: "numeric",
                                  month: "numeric",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit"
                                })}
                              </td>
                              <td className="no-mobile">{audit.operacao}</td>
                              <td>{audit.descricao}</td>
                              <td>{audit.userName}</td>
                            </tr>
                          );
                        })}
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
                <form onSubmit={handleAssumir}>
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
                            year: "numeric"
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
                    <button className="btn btn-primary" type="submit">
                      Sim
                    </button>
                    <Button variant="secondary" onClick={handleClose}>
                      Não
                    </Button>
                  </Modal.Footer>
                </form>
              </Modal>
              <Modal
                style={{ marginTop: "20%" }}
                show={finalizar}
                onHide={handleCloseFinalizar}
                aria-labelledby="example-modal-sizes-title-lg"
                size="lg"
              >
                <form onSubmit={handleFinalizar}>
                  <Modal.Header closeButton>
                    <h6>Deseja finalizar esta denúncia?</h6>
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
                            year: "numeric"
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
                    <ButtonFinalizar
                      tipo="Procedente"
                      handleFinalizar={handleFinalizar}
                    />
                    <ButtonFinalizar
                      tipo="Improcedente"
                      handleFinalizar={handleFinalizar}
                    />
                    <ButtonFinalizar
                      tipo="Dados Insuficientes"
                      handleFinalizar={handleFinalizar}
                    />
                    <Button variant="secondary" onClick={handleCloseFinalizar}>
                      Não Finalizar
                    </Button>
                  </Modal.Footer>
                </form>
              </Modal>
            </div>
          );
        })
      ) : (
        <div className="d-flex justify-content-center">
          <img style={{ width: "100px" }} src={loadingGif} alt="Loading gif" />
        </div>
      )}
      <hr className="espacamento-100" />
      <FooterAdmin />
    </div>
  );
};
