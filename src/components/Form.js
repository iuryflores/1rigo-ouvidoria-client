import React from "react";

export const Form = () => {
  return (
    <div>
      <section className="container mb-5 pb-5">
        <p className="p">Realizar Denúncia - Identificação</p>
        <form action="" method="post">
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="nome"
              id="nome"
              placeholder="Nome completo"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="funcao"
              id="funcao"
              placeholder="Função (caso seja colaborador)"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Melhor e-mail"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="phone"
              name="telefone"
              id="telefone"
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
            >
              <option selected="">Selecione um departamento</option>
              <option value="Atendimento">Atendimento</option>
              <option value="Atendimento">Análise</option>
              <option value="Atendimento">Conferência</option>
              <option value="Atendimento">Incorporação</option>
              <option value="Atendimento">Ofício I</option>
              <option value="Atendimento">Ofício II</option>
              <option value="Atendimento">Treinamento</option>
              <option value="Atendimento">Telefone/Ouvidoria</option>
              <option value="Atendimento">Administrativo</option>
              <option value="Atendimento">Certidão</option>
              <option value="Atendimento">CEDOC</option>
              <option value="Atendimento">Contraditório/Finalização</option>
              <option value="Atendimento">Financeiro</option>
              <option value="Atendimento">Supervisão/Coordenação</option>
              <option value="Atendimento">Direção</option>
              <option value="Atendimento">Tecnologia da Informação</option>
            </select>
          </div>
          <div className="mb-3">
            <label for="envolvidos">
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
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="envolvidos">
              Quem presenciou o ocorrido?
              <span style={{ fontSize: "0.7rem" }}>
                Dados de testemunhas: Nome, sobrenome, cargo, gerência, área,
                localidade, e-mail, etc.
              </span>
            </label>
            <textarea
              className="form-control"
              name="envolvidos"
              id="envolvidos"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="envolvidos">
              Você já conversou com alguém sobre essas informações? Se sim, com
              quem?
            </label>
            <textarea
              className="form-control"
              name="envolvidos"
              id="envolvidos"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="envolvidos">
              Detalhamento da Denúncia (descreva em detalhe a situação,
              informando datas, locais, quantias e possíveis fatos que comprovem
              o relato)
            </label>
            <textarea
              className="form-control"
              name="envolvidos"
              id="envolvidos"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="protocolo_anterior">
              Se esta denúncia está relacionada a uma denúncia anterior, informe
              abaixo o número do protocolo da denúncia anterior:
            </label>
            <input
              className="form-control"
              type="number"
              name="protocolo_anterior"
              id="protocolo_anterior"
              placeholder=""
            />
          </div>
          <div className="mb-3">
            <label for="formFile" className="form-label">
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
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
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
