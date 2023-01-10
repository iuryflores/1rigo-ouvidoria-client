import React from "react";
import { Link } from "react-router-dom";

export const Relationship = () => {
  return (
    <div>
      <section className=" container ">
        <p className="p">Denúncias sobre Relacionamentos</p>
        <p>
          Confira abaixo situações que se enquadram na categoria
          “Relacionamentos” e, depois, selecione em qual dessas seu relato se
          encaixa.
        </p>
      </section>
      <section className="container denuncias-index">
        <div>
          <Link to="/moral_harassment">
            <i className="bi bi-chat-right-quote"></i>
            <div className="inside-denuncia">
              <p>Assédio Moral</p>
              <span>
                Ataques repetitivos por meio de palavras ou gestos grosseiros e
                inadequados, comentários maliciosos, insultos preconceituosos ou
                discriminatórios, bullying, intimidações, boatos e piadas
                inoportunas que acabam humilhando o empregado e, até mesmo,
                afastando-o das relações profissionais.
              </span>
            </div>
          </Link>
        </div>

        <div>
          <a href="assedio_moral.php">
            <i className="bi bi-chat-right-quote"></i>
            <div className="inside-denuncia">
              <p>Assédio Sexual</p>
              <span>
                Acontece quando uma pessoa se sente constrangida por alguém que
                busca obter vantagem ou favorecimento sexual, ou que a coloca em
                um contexto sexual não desejado. Ocorre por meio de avanços
                sexuais indevidos, comentários indecentes ou observações
                obscenas. Isso inclui prometer ou proporcionar emprego,
                promoção, remuneração ou tratamento especial em troca de favores
                sexuais. Também inclui toques inadequados ou indesejados, bem
                como a publicação ou o compartilhamento de imagens, objetos ou
                materiais obscenos.
              </span>
            </div>
          </a>
        </div>
        <div>
          <a href="assedio_moral.php">
            <i className="bi bi-chat-right-quote"></i>
            <div className="inside-denuncia">
              <p>Gestão inadequada de pessoas</p>
              <span>
                Declarações ou ações de gestores que não tenham a natureza de
                assédio, mas que infrinjam o Código de Conduta da Empresa e que
                sejam entendidas como incompatíveis com o local de trabalho.
              </span>
            </div>
          </a>
        </div>
        <div>
          <a href="assedio_moral.php">
            <i className="bi bi-chat-right-quote"></i>
            <div className="inside-denuncias">
              <p>Discriminação</p>
              <span>
                Declarações ou ações baseadas em função de etnia, origem,
                gênero, orientação sexual, crença religiosa, condição de
                sindicalização, convicção política, ideológica, classNamee social,
                condição de portador de deficiência, estado civil ou idade que
                sejam a base ou influenciem a tomada de decisões relativas ao
                vínculo empregatício do funcionário, promoção ou remuneração.
              </span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
