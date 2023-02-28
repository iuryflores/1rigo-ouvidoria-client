import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api.utils";
import { useState } from "react";
import { Toast, Form, InputGroup } from "react-bootstrap";

export const TrackingComplaint = ({
  loading,
  setLoading,
  message,
  setMessage,
}) => {
  const id = "";

  const { protocolo_id, pass_protocolo } = useParams();

  const [dataAPI, setDataAPI] = useState([]);
  /*const [denuncia, setDenuncias] = useState();*/
  const [messageUser, setMessageUser] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await api.trackComplaint(protocolo_id, pass_protocolo);
        setDataAPI(data);
        setLoading(false);
      } catch (error) {
        console.log(error, "Error to get data");
      }
    };
    getData();
  }, [setLoading, protocolo_id, pass_protocolo]);
  console.log(dataAPI);
  const handleSendMessage = async (e) => {
    setMessageUser(messageUser);
    console.log(messageUser);
    try {
      const newMessage = await api.sendMessage(id, { messageUser });
      console.log(newMessage);
    } catch (error) {
      console.log(error);
      setMessage(error);
    }
  };

  return !loading ? (
    <div className="d-flex justify-content-center w-100">
      {dataAPI.map((complaint, index) => {
        let category = complaint.complaint_ID.category;

        if (category === "moral_harassment") {
          category = "Assédio Moral";
        }

        return (
          <div className="w-100" key={index}>
            <div className="align-mobile d-flex flex-nowrap w-100" >
              <div className="card w-50 m-3">
                <div className="card-header">Dados do reclamante</div>
                <div className="card-body no-shadow">
                  <p className="card-text w-100 d-flex flex-column flex-start no-shadow">
                    {complaint.complaint_ID.name ? (
                      <>
                        <span>
                          <strong>Nome: </strong>
                          {complaint.complaint_ID.name}
                        </span>
                        <span>
                          <strong>E-mail: </strong>
                          {complaint.complaint_ID.email}
                        </span>
                        <span>
                          <strong>Telefone: </strong>
                          {complaint.complaint_ID.telephone}
                        </span>
                        <span>
                          <strong>Cargo: </strong>
                          {complaint.complaint_ID.role}
                        </span>
                      </>
                    ) : (
                      <>
                        <b>Denúncia Anônima</b>
                      </>
                    )}
                  </p>
                </div>
              </div>
              <div className="card w-50 m-3">
                <div className="card-header">Dados da manifestação</div>
                <div className="card-body no-shadow">
                  <p className="card-text w-100 d-flex flex-column no-shadow">
                    <span>
                      <strong>Data: </strong>
                      {new Date(
                        complaint.complaint_ID.createdAt.slice(0, -1)
                      ).toLocaleDateString("pt-br", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>
                      <strong>Protocolo n: </strong>
                      {complaint.protocolo_id}
                    </span>
                    <span>
                      <strong>Denúncia anterior n:</strong>
                      {complaint.complaint_ID.previousComplaint}
                    </span>
                    <span>
                      <strong>Categoria:</strong> {category}
                    </span>
                    <span>
                      <strong>Departamento: </strong>
                      {complaint.complaint_ID.sector}
                    </span>
                    <span>
                      <strong>Envolvidos: </strong>
                      {complaint.complaint_ID.involved}
                    </span>
                    <span>
                      <strong>Quem presenciou: </strong>
                      {complaint.complaint_ID.witness}
                    </span>
                    <span>
                      <strong>Conversou com: </strong>
                      {complaint.complaint_ID.talkedAbout}
                    </span>
                    <span>
                      <strong>Detalhes: </strong>
                      {complaint.complaint_ID.details}
                    </span>
                    <span>
                      <strong>Situação: </strong>
                      {complaint.complaint_ID.status}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {complaint.complaint_ID.status === "em-andamento" ? (
              <div className="align-mobile auditoria d-flex">
                <div className="card w-100 m-3">
                  <div className="d-flex card-header justify-content-between align-items-center">
                    <h5 className=" mb-0 w-100 text-center">Mensagens</h5>
                  </div>
                  <div className="card-body">
                    {complaint.complaint_ID?.messages_id.map(
                      (message, index) => {
                        return (
                          <Toast key={index}>
                            <Toast.Header closeButton={false}>
                              <i className="bi bi-person-circle"> </i>
                              <strong className="me-auto mx-2">
                                {" "}
                                {message.userName}
                              </strong>
                              <small>{message.createdAt}</small>
                            </Toast.Header>
                            <Toast.Body>{message.descricao}</Toast.Body>
                          </Toast>
                        );
                      }
                    )}
                    {complaint.complaint_ID?.etapa === "ouvidoria" ? (
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
              <>Loading...</>
            )}
          </div>
        );
      })}
    </div>
  ) : (
    <></>
  );
};
