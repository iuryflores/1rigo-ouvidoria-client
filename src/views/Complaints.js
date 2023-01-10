import React from "react";
import { Link } from "react-router-dom";

export const Complaints = () => {
  return (
    <div className="mb-5 pb-5">
      <section className="container ">
        <p className="p">Bem-vindos ao Canal de Denúncias 1RIGO</p>
        <p>
          Este é um canal exclusivo do Registro de Imóveis da 1ª Circunscrição
          de Goiânia-GO para comunicação segura e, se desejada, anônima, de
          condutas consideradas antiéticas ou que violem os princípios do Código
          de Conduta e/ou a legislação vigente.
        </p>
        <p>
          As informações aqui registradas serão recebidas pelo comitê de ética,
          assegurando sigilo absoluto e o tratamento adequado de cada situação
          pela alta administração do 1RIGO, sem conflitos de interesses.
        </p>
        <p>
          Para realizar um relato, por favor, escolha uma das opções abaixo:
        </p>
      </section>
      <section className="container denuncias-index">
        <div>
          <Link to="/relationship">
            <i className="bi bi-chat-right-quote"></i>
            <p>Denúncias sobre Relacionamentos</p>
          </Link>
        </div>
        <div>
          <a href="corrupcao.php">
            <i className="bi bi-chat-right-quote"></i>
            <p>Denúncias sobre Fraudes, Corrupção, Atividades ilícitas</p>
          </a>
        </div>
        <div>
          <a href="relacionamento.php">
            <i className="bi bi-chat-right-quote"></i>
            <p>
              Denúncias sobre Saúde, Segurança, Meio Ambiente e Riscos
              Operacionais
            </p>
          </a>
        </div>
        <div>
          <a href="relacionamento.php">
            <i className="bi bi-chat-right-quote"></i>
            <p>Consultas</p>
          </a>
        </div>
      </section>
    </div>
  );
};
