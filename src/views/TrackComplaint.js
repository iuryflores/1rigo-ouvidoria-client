import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../utils/api.utils";

export const TrackComplaint = ({
  message,
  setMessage,
  loading,
  setLoading,
}) => {
  const navigate = useNavigate();

  const [protocolo, setProtocolo] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await api.checkPassword(protocolo, senha);
      console.log(data);
      // navigate(`/track-complaint/${protocolo}/${senha}`);
    } catch (error) {
      setMessage(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
    }, 15000);
  });
  return (
    <div className="container d-flex flex-column align-items-center">
      <h3>Acompanhe sua denúncia</h3>
      <form onSubmit={handleSubmit} className='d-flex flex-column w-75'>
        {message !== null && <div>{message}</div>}
        <input
        className="form-control mb-3"
          type="number"
          name="protocolo"
          value={protocolo}
          placeholder='Digite o número do protocolo'
          onChange={(e) => {
            setProtocolo(e.target.value);
          }}
        />
        <input className="form-control mb-3"
          type="text"
          name="senha"
          value={senha}
          placeholder='Digite a senha do protocolo'
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />
        <button className="button btn btn-success" type="submit">
          Consultar
        </button>
      </form>
    </div>
  );
};
