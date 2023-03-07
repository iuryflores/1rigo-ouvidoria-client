import React, { useState } from "react";
import api from "../../utils/api.utils.js";
import { useNavigate, useParams } from "react-router-dom";
import { MsgError } from "../../components/Shared";
import { NavbarOuvidoria } from "../../components/NavbarOuvidoria";

export const OuvidoriaForm = ({ setMessage }) => {
  const [error, setError] = useState("");
  const [type, setType] = useState(false);

  const { tipo } = useParams();

  const navigate = useNavigate();
  //INPUTS
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const [details, setDetails] = useState("");
  const [prevProtocolo, setPrevProtocolo] = useState("");
  const [agreement, setAgreement] = useState(false);

  //HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let chars =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@$%^&*";
      let passwordLength = 10;
      let password = "";

      for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }

      const insert = await api.addOuvidoria(
        {
          name,
          email,
          telephone,
          tipo,
          details,
          prevProtocolo,
          agreement,
          password,
        },
        tipo
      );
    
      if (insert) {
        setMessage(
          `Sua manifestação foi enviada com sucesso! Entraremos em contato o mais breve possível. Acompanhe sua solicitação pelo número de protocolo: ${insert.protocolo_id} e a senha para acesso: ${password}`
        );
        navigate("/ouvidoria/");
      }
    } catch (error) {
      showMessage(error);
    }
  };

  const showMessage = (error) => {
    setError(error);
    setTimeout(() => {
      setError("");
    }, 6000);
  };
  const showID = () => {
    setType(true);
  };
  const closeID = () => {
    setType(false);
    setName(null);
  };

  return (
    <div className="">
      <NavbarOuvidoria />
      <section className="container mb-5 pb-5">
        <p className="p">Registre sua Manifestação - Identificação</p>
        <form onSubmit={handleSubmit}>
          <div>
            Deseja se identificar?{"   "}
            <p onClick={showID} className="btn btn-primary">
              Sim
            </p>{" "}
            <p onClick={closeID} className="btn btn-primary">
              Não
            </p>
          </div>
          {type ? (
            <>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  name="nome"
                  id="nome"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Nome completo"
                />
              </div>

              <div className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Melhor e-mail"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="phone"
                  name="telefone"
                  id="telefone"
                  value={telephone}
                  onChange={(e) => {
                    setTelephone(e.target.value);
                  }}
                  placeholder="Telefone de contato"
                />
              </div>
            </>
          ) : (
            <></>
          )}
          <hr />

          <div className="mb-3">
            <label htmlFor="details">Detalhamento da manifestação:</label>
            <textarea
              className="form-control"
              name="details"
              id="details"
              cols="30"
              rows="5"
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="prevProtocolo">
              Se houver informe o número do protocolo:
            </label>
            <input
              className="form-control"
              type="number"
              name="prevProtocolo"
              id="prevProtocolo"
              value={prevProtocolo}
              onChange={(e) => {
                setPrevProtocolo(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <p>
              Todas as informações aqui registradas serão recebidas pelo
              Ouvidoria, assegurando sigilo absoluto e o tratamento adequado de
              cada situação pelo Canal de Manifestações do 1RIGO.
            </p>

            <p>
              Clique aqui para ler o Termo com o detalhamento do tratamento de
              seus dados conforme a Lei Geral de Proteção de Dados.
            </p>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value={agreement}
              onChange={(e) => {
                setAgreement(!agreement);
              }}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <strong>
                Estou ciente que todos os dados relatados ou disponibilizados
                serão tratados nos termos descritos acima.
              </strong>
            </label>
          </div>
          <div className="mb-5">
            {error !== "" && <MsgError id="erroID">{error}</MsgError>}
            <button type="submit" className="btn btn-primary">
              Enviar sua manifestação
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
