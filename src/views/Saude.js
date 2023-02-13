import React from "react";
import { Link } from "react-router-dom";

export const Saude = () => {
  return (
    <div>
      <section className=" container ">
        <p className="p">
          Denúncias sobre Saúde, Segurança, Meio Ambiente e/ou Riscos Operacionais
        </p>
        <p>
          Confira abaixo situações que se enquadram na categoria de “Saúde,
          Segurança, Meio Ambiente e Riscos Operacionais” e, depois, selecione
          em qual dessas seu relato se encaixa.
        </p>
      </section>
      <section className="container denuncias-index">
        <div>
          <Link to="/add-complaint/saude-seguranca-ocupacional">
            <i className="bi bi-chat-right-quote"></i>
            <div className="inside-denuncia">
              <p>Saúde e Segurança Ocupacional</p>
              <span>Saúde e Segurança Ocupacional</span>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/add-complaint/meio-ambiente">
            <i className="bi bi-chat-right-quote"></i>
            <div className="inside-denuncia">
              <p>Meio Ambiente</p>
              <span>Meio Ambiente</span>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/add-complaint/riscos-operacionais">
            <i className="bi bi-chat-right-quote"></i>
            <div className="inside-denuncia">
              <p>Riscos Operacionais</p>
              <span>Riscos Operacionais</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
