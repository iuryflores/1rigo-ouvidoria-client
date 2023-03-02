import React from "react";
import { Link } from "react-router-dom";
import { NavbarOuvidoria } from "../../components/NavbarOuvidoria";

export const Tipos = () => {
  return (
    <div>
      <NavbarOuvidoria />
      <div className="mb-5 pb-5">
        <section className="container ">
          <p className="p">Bem-vindos ao Canal de Ouvidoria do 1RIGO</p>
          <div className="mb-3">
            <p>
              A Ouvidoria é o canal de comunicação entre a serventia e seus
              usuários e colaboradores para o tratamento de elogio, reclamações
              e sugestões.
            </p>
            <p>
              A atuação da Ouvidoria é pautada na ética, imparcialidade,
              transparência, sigilo e defesa dos interesses legítimos do
              usuário.
            </p>
            <p>
              Proporcionar esse canal de relacionamento é reconhecer a
              importância do usuário e colaboradores na melhoria dos processos e
              serviços do Registro de Imóveis da 1ª Circunscrição de Goiânia.
            </p>
            <p>
              Para realizar uma manifestação, por favor, escolha uma das opções abaixo:
            </p>
          </div>
        </section>
        <section className="container denuncias-index denuncias-ouvidoria">
          <div>
            <Link to="/ouvidoria/tipos/elogios">
              <i className="bi bi-chat-right-quote"></i>
              <p>Elogios</p>
            </Link>
          </div>
          <div>
            <Link to="/ouvidoria/tipos/sugestoes">
              <i className="bi bi-chat-right-quote"></i>
              <p>Sugestões</p>
            </Link>
          </div>
          <div>
            <Link to="/ouvidoria/tipos/reclamacoes">
              <i className="bi bi-chat-right-quote"></i>
              <p>Reclamações</p>
            </Link>
          </div>
          <div>
            <Link to="/ouvidoria/tipos/outros">
              <i className="bi bi-chat-right-quote"></i>
              <p>Outros</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
