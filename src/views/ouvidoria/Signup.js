import React, { useState, useEffect } from "react";
import api from "../../utils/api.utils";
import { Link, useNavigate } from "react-router-dom";
import "../css/LoginPage.css";
import logo1RIGO from "../../imgs/logo.png";
import Cpf from "@react-br-forms/cpf-cnpj-mask";

import { MsgSucess, MsgError } from "../../components/Shared";

export const SignupOuvidoria = ({ message, setMessage }) => {
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const entidade = "ouvidoria";

  const [setMask] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.signup({ full_name, email, password, cpf, entidade });
      setMessage("Usuário criado com sucesso!");
      navigate("/admin/ouvidoria/login");
    } catch (error) {
      showMessage(error);
    }
  };
  const showMessage = (error) => {
    setError(error);
    setTimeout(() => {
      setError(null);
    }, 5000);
  };
  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  }, [message, setMessage]);

  return (
    <div className="screen">
      <div className="login">
        <h5 className="d-flex flex-column align-items-center">
          <img
            className="logo-1rigo mt-3 mb-3"
            alt="logomarca 1RIGO"
            src={logo1RIGO}
          />
          <span className="mb-3">
            <i className="bi bi-chat-quote "></i> Gerenciador Ouvidoria
          </span>
        </h5>
        <h6>Cadastro de usuário</h6>
        {message !== null && <MsgSucess>{message}</MsgSucess>}
        {error !== null && <MsgError>{error}</MsgError>}
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column align-items-center w-75"
        >
          <label>Nome completo:</label>
          <input
            className="input-login"
            type="text"
            name="full_name"
            value={full_name}
            onChange={(e) => setFull_name(e.target.value)}
          />
          <label>CPF:</label>
          <Cpf
            className="input-login"
            type="text"
            name="cpf"
            value={cpf}
            maxLength="14"
            onChange={(e, type) => {
              setCpf(e.target.value);
              setMask(type === "CPF");
            }}
          />
          <label>Email:</label>
          <input
            className="input-login"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Senha:</label>
          <input
            className="input-login"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <p className="mt-3 small">
            Já possui uma conta? <Link to="/admin/ouvidoria/login">Clique aqui!</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
