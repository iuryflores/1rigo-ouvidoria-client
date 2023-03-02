import React, { useEffect } from "react";
import { NavbarOuvidoria } from "../../components/NavbarOuvidoria";
import { Link } from "react-router-dom";
import { MsgSucess } from "../../components/Shared";

export const Ouvidoria = ({ message, setMessage }) => {
  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
    }, 1000000);
  }, [message, setMessage]);
  return (
    <div>
      <NavbarOuvidoria />
      <div className="wrap container pt-3">
        <div>{message && <MsgSucess>{message}</MsgSucess>}</div>
       
        <section className="d-flex container wrap-site row mt-3">
          <Link to="/ouvidoria/tipos" className="col-sm-12 col-md-5 col-lg-4">
            <div className="card-body">
              <p>
                <i className="bi bi-chat-right-quote"></i>
              </p>
              <p className="p">Envie uma manifestação</p>
              <span className="span">
                Você pode utilizar nosso formulário eletrônico.
              </span>
            </div>
          </Link>
          <Link to="/" className="col-sm-12 col-md-5 col-lg-4">
            <div className="card-body">
              <p>
                <i className="bi bi-folder-plus"></i>
              </p>
              <p className="p">Acompanhe sua manifestação</p>
              <span className="span">
                Veja as atualizações através do número de protocolo.
              </span>
            </div>
          </Link>
          <Link to="/" className="col-sm-12 col-md-4 col-lg-4">
            <div className="card-body">
              <p>
                <i className="bi bi-patch-question"></i>
              </p>
              <p className="p">Dúvidas frequentes</p>
              <span className="span">
                Consulte as dúvidas mais frequentes.
              </span>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};
