import React from "react";
import { Link } from "react-router-dom";

export const Fraudes = () => {
  return (
    <div>
      <section className=" container ">
        <p className="p">
          Denúncias sobre Fraudes, Corrupção e Atividades ilícitas
        </p>
        <p>
          Confira abaixo situações que se enquadram na categoria de “Fraudes,
          Corrupção e/ou Atividades ilícitas” e, depois, selecione em qual dessas
          seu relato se encaixa.
        </p>
      </section>
      <section className="container denuncias-index">
        <div>
          <Link to="/add-complaint/fraude">
            <i className="bi bi-chat-right-quote"></i>
            <div className="inside-denuncia">
              <p>Fraude</p>
              <span>
                Qualquer ação deliberada para obter ganho pessoal injusto ou
                ilegal incluindo registros contábeis, indicadores de remuneração
                variável, despesas de viagem, atestados médicos, medições
                contratuais, favorecimentos indevidos, entre outros.
              </span>
            </div>
          </Link>
        </div>

        <div>
          <a href="/add-complaint/corrupcao">
            <i className="bi bi-chat-right-quote"></i>
            <div className="inside-denuncia">
              <p>Corrupção</p>
              <span>
                Acontece quando alguém dá, promete, oferece ou autoriza favores
                ou Algo de Valor, direta ou indiretamente, para influenciar uma
                decisão, para ganhar uma vantagem indevida ou para obter ou
                manter negócios, podendo ocorrer nas esferas pública ou privada.
              </span>
            </div>
          </a>
        </div>
        <div>
          <a href="/add-complaint/conflito-interesse">
            <i className="bi bi-chat-right-quote"></i>
            <div className="inside-denuncia">
              <p>Conflito de interesses</p>
              <span>
                Ocorre quando alguém age, influencia ou toma decisões de forma
                parcial, sendo motivado por interesses que não são os da Vale.
                Pode ser causado por relacionamentos de qualquer tipo, pela
                realização de atividades dentro e fora da empresa e por atos que
                resultem em benefício próprio ou de terceiros.
              </span>
            </div>
          </a>
        </div>
        <div>
          <a href="/add-complaint/atividades-ilicitas">
            <i className="bi bi-chat-right-quote"></i>
            <div className="inside-denuncias">
              <p>Atividades Ilícitas</p>
              <span>
                Qualquer atividade criminosa dentro das dependências da Empresa
                ou que afetem o patrimônio da Empresa.
              </span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
