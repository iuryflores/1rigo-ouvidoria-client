import React, { useEffect, useState } from "react";
import { MsgError } from "../components/Shared";
import { useNavigate, useParams } from "react-router";

import api from "../utils/api.utils.js";

export const AddForm = ({ message, setMessage }) => {
  const [error, setError] = useState("");

  const { category } = useParams();
  console.log(category);
  const navigator = useNavigate();

  //INPUTS
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sector, setSector] = useState("");
  const [involved, setInvolved] = useState("");
  const [witness, setWitness] = useState("");
  const [talkedAbout, setTalkedAbout] = useState("");
  const [details, setDetails] = useState("");
  const [previousComplaint, setPreviousComplaint] = useState("");
  const [agreement, setAgreement] = useState("");

  //SECTORS
  let optionsSectors = [
    "Selecione um departamento",
    "Atendimento",
    "Análise",
    "Conferência",
    "Incorporação",
    "Ofício I",
    "Ofício II",
    "Treinamento",
    "Telefone/Ouvidoria",
    "Administrativo",
    "Certidão",
    "CEDOC",
    "Contraditório/Finalização",
    "Financeiro",
    "Supervisão/Coordenação",
    "Direção",
    "Tecnologia da Informação",
  ];

  //HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.addComplaint(
        {
          name,
          role,
          email,
          telephone,
          category,
          sector,
          involved,
          witness,
          talkedAbout,
          details,
          previousComplaint,
          agreement,
        },
        category
      );
      setMessage("Criado!");
    } catch (error) {
      showMessage(error);
    }
  };

  const showMessage = (error) => {
    setError(error);
    setTimeout(() => {
      setError(error);
    }, 3000);
  };

  useEffect(() => {
    showMessage(error);
  });

  return (
    <div>
      <section className="container mb-5 pb-5">
        {error !== "" && <MsgError>{error}</MsgError>}
        <p className="p">Realizar Denúncia - Identificação</p>
        <form onSubmit={handleSubmit} method="post">
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
              type="text"
              name="funcao"
              id="funcao"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              placeholder="Função (caso seja colaborador)"
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
          <p className="p">Detalhamento</p>
          <p>
            Nos campos abaixo você deve descrever a situação de descumprimento
            do Código de Conduta, outros documentos internos ou leis que deseja
            relatar.
          </p>
          <p>
            É importante que a descrição seja suficientemente completa de forma
            a permitir que a empresa tenha os dados necessários para apurar os
            fatos:
          </p>
          <ul>
            <li>O quê (descrição da situação)</li>
            <li>Quem (nome das pessoas envolvidas, inclusive testemunhas)</li>
            <li>
              Quando (data em que aconteceu, acontece ou acontecerá a situação)
            </li>
            <li>Onde (local do relato)</li>
            <li>Por que (a causa ou motivo)</li>
            <li>Quanto (se for possível medir)</li>
            <li>Provas (se elas existem e onde podem ser encontradas)</li>
          </ul>
          <p>
            Para acompanhar o andamento da sua denúncia, após finalizar seu
            registro você receberá um número de protocolo. Posteriormente,
            utilize a opção “Acompanhar Denúncia” e entre com esse número. Lá
            você encontrará informação sobre o estágio de investigação do relato
            (não iniciado, em andamento ou finalizado).
          </p>
          <p>Agradecemos sua iniciativa e confiança.</p>
          <div className="mb-3">
            <select
              className="form-select"
              name="departamento"
              id="departamento"
              aria-label="Default select example"
              value={sector}
              onChange={(e) => {
                setSector(e.target.value);
              }}
            >
              {optionsSectors.map((opt, id) => {
                return (
                  <option key={id} value={opt}>
                    {opt}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="envolvidos">
              Quem são os envolvidos?
              <span style={{ fontSize: "0.7rem" }}>
                Nome, sobrenome, cargo, gerência, área, localidade, e-mail, etc.
              </span>
            </label>
            <textarea
              className="form-control"
              name="envolvidos"
              id="envolvidos"
              cols="30"
              rows="5"
              value={involved}
              onChange={(e) => {
                setInvolved(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="witness">
              Quem presenciou o ocorrido?
              <span style={{ fontSize: "0.7rem" }}>
                Dados de testemunhas: Nome, sobrenome, cargo, gerência, área,
                localidade, e-mail, etc.
              </span>
            </label>
            <textarea
              className="form-control"
              name="witness"
              id="witness"
              cols="30"
              rows="5"
              value={witness}
              onChange={(e) => {
                setWitness(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="talkedAbout">
              Você já conversou com alguém sobre essas informações? Se sim, com
              quem?
            </label>
            <textarea
              className="form-control"
              name="talkedAbout"
              id="talkedAbout"
              cols="30"
              rows="5"
              value={talkedAbout}
              onChange={(e) => {
                setTalkedAbout(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="details">
              Detalhamento da Denúncia (descreva em detalhe a situação,
              informando datas, locais, quantias e possíveis fatos que comprovem
              o relato)
            </label>
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
            <label htmlFor="previousComplaint">
              Se esta denúncia está relacionada a uma denúncia anterior, informe
              abaixo o número do protocolo da denúncia anterior:
            </label>
            <input
              className="form-control"
              type="number"
              name="previousComplaint"
              id="previousComplaint"
              value={previousComplaint}
              onChange={(e) => {
                setPreviousComplaint(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Se você quiser anexar arquivos como fotos e documentos,
              adicione-os aqui. O tamanho máximo do conjunto de arquivos é de
              100 MB.
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>

          <div className="mb-3">
            <p>
              Todas as informações aqui registradas serão recebidas pelo comitê
              de ética, assegurando sigilo absoluto e o tratamento adequado de
              cada situação pelo Canal de Denúncias do 1RIGO.
            </p>
            <p>
              A captação dessas informações tem por finalidade a apuração de
              possíveis condutas que violem o Código de Conduta, as normas
              vigentes ou a legislação aplicável.
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
                setAgreement(e.target.value);
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
          <div className="mb-3">
            <button type="button" className="btn btn-primary">
              Enviar denúncia
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
