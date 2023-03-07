import React, { useState, useEffect } from "react";
import api from "../../utils/api.utils";
import { Link, useNavigate } from "react-router-dom";
import "../css/LoginPage.css";
import logo1RIGO from "../../imgs/logo.png";

import { MsgSucess, MsgError } from "../../components/Shared";

export const AdminLogin = ({ message, setMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.login({ email, password });
      navigate("/admin/home");
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
        <h4>Bem vindo</h4>
        <h5 className="d-flex flex-column align-items-center">
          <span className="mb-3">
            <i className="bi bi-chat-quote "></i> Gerenciador de denúncia
          </span>
          <img
            className="logo-1rigo mt-3 mb-3"
            alt="logomarca 1RIGO"
            src={logo1RIGO}
          />
        </h5>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column align-items-center w-75"
        >
          {message !== null && <MsgSucess>{message}</MsgSucess>}
          {error !== null && <MsgError>{error}</MsgError>}

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
          <p className="mt-3">
            Não possui uma conta? <Link to="/admin/signup">Criar</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
