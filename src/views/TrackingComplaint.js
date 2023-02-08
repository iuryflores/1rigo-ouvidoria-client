import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../utils/api.utils";
import { useState } from "react";

export const TrackingComplaint = () => {
  const navigate = useNavigate();
  const { protocolo_id, pass_protocolo } = useParams();

  const [dataAPI, setDataAPI] = useState("");

  console.log(protocolo_id, pass_protocolo);
  const getData = async () => {
    try {
      const data = await api.trackComplaint(protocolo_id, pass_protocolo);
      setDataAPI(data);
    } catch (error) {
      console.log(error);
    }
  };
  getData();

  return (
    <div>
      {dataAPI}
      TrackingComplaint
    </div>
  );
};
