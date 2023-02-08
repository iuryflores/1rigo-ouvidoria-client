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
        console.log(data);
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
          <div className="container bg-light d-flex flex-column" key={index}>
            <h5>Dados do reclamante</h5>
            {complaint.complaint_ID.name ? (
              <>
                {" "}
                <span>Nome: {complaint.complaint_ID.name}</span>
                <span>E-mail: {complaint.complaint_ID.email}</span>
                <span>Telefone: {complaint.complaint_ID.telephone}</span>
                <span>Cargo: {complaint.complaint_ID.role}</span>
              </>
            ) : (
              <>Denúncia Anônima</>
            )}

            <hr />
            <h5>Dados da reclamação</h5>
            <span>Data: {complaint.complaint_ID.createdAt}</span>
            <span>Protocolo n: {complaint.protocolo_id}</span>
            <span>
              Denúncia anterior n:
              {complaint.complaint_ID.previousComplaint}
            </span>
            <span>Categoria: {category}</span>
            <span>Departamento: {complaint.complaint_ID.sector}</span>
            <span>Envolvidos: {complaint.complaint_ID.involved}</span>
            <span>Quem presenciou: {complaint.complaint_ID.witness}</span>
            <span>Conversou com: {complaint.complaint_ID.talkedAbout}</span>
            <span>Detalhes: {complaint.complaint_ID.details}</span>
            <span>Situação: {complaint.complaint_ID.status}</span>
          </div>
        );
      })}
    </div>
  ) : (
    <>Loading...</>
  );
};
