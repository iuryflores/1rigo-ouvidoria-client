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
      {dataAPI.map((complaint) => {
        return (
          <>
            <p>Data: {complaint.complaint_ID.createdAt}</p>
            <p>Protocolo n: {complaint.protocolo_id}</p>
            <p>Categoria: {complaint.complaint_ID.category}</p>
            <p>Departamento: {complaint.complaint_ID.sector}</p>
          </>
        );
      })}
    </div>
  ) : (
    <>Loading...</>
  );
};
