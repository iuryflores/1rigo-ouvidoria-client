import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const TrackComplaint = () => {
  const navigate = useNavigate();

  const [protocolo, setProtocolo] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      navigate(`/track-complaint/${protocolo}/${senha}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      TrackComplaint
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="protocolo"
          value={protocolo}
          onChange={(e) => {
            setProtocolo(e.target.value);
          }}
        />
        <input
          type="text"
          name="senha"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />
        <button className="button" type="submit">
          Consultar
        </button>
      </form>
    </div>
  );
};
