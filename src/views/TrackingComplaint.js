import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api.utils";
import { useState } from "react";

export const TrackingComplaint = ({ loading, setLoading }) => {
  const { protocolo_id, pass_protocolo } = useParams();

  const [dataAPI, setDataAPI] = useState([]);

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

  return !loading ? (
    <div>
      {dataAPI.map((complaint, index) => {
        let category = complaint.complaint_ID.category;

        if (category === "moral_harassment") {
          category = "Assédio Moral";
        }

        return (
          <div className="container d-flex flex-column" key={index}>
            <div className="card mb-3">
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
                    <>Denúncia Anônima</>
                  )}
                </p>
              </div>
            </div>
            <div className="card">
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
            <hr className="espacamento-100" />
          </div>
        );
      })}
    </div>
  ) : (
    <>Loading...</>
  );
};
