import "./css/HomePage.css";
import { Link } from "react-router-dom";
import { MsgSucess } from "../components/Shared";

export const HomePage = ({ message, setMessage }) => {
  return (
    <div className="wrap">
      {message && <MsgSucess>{message}</MsgSucess>}
      <section className="d-flex container wrap-site">
        <Link to="/complaints">
          <div className="card-body">
            <p>
              <i className="bi bi-chat-right-quote"></i>
            </p>
            <p className="p">Faça uma denúncia</p>
            <span className="span">
              Você pode utilizar nosso formulário eletrônico.
            </span>
          </div>
        </Link>
        <Link to="/track-complaint">
          <div className="card-body">
            <p>
              <i className="bi bi-folder-plus"></i>
            </p>
            <p className="p">Acompanhe sua denúncia</p>
            <span className="span">
              Veja as últimas atualizações através do número de protocolo.
            </span>
          </div>
        </Link>
        <Link to="/send-question">
          <div className="card-body">
            <p>
              <i className="bi bi-patch-question"></i>
            </p>
            <p className="p">Envie uma dúvida</p>
            <span className="span">
              Envie uma dúvida sobre o Código de Conduta.
            </span>
          </div>
        </Link>
      </section>
    </div>
  );
};
