import React from "react";
import { Card, CardGroup, Container, Row, Col, Table } from "react-bootstrap";
import Footer from "../components/footer";
import App from "../containers/App";
import "./passe.css";

const passe = () => (
  <App>
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "50px",
        marginTop: "20px",
      }}
    >
      <Row>
        <Col style={{ marginTop: "30px" }}>
          <p className="passe-titulo">Passe Escolar</p>
        </Col>
      </Row>
    </Container>

    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="email-subtitulo">Transporte Intermunicipal (EMTU)</p>
          <p className="monitoria-p">
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/arquivos/2016-1/2016.05.19_instrucoes_emtu.pdf"
            >
              - Instruções
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/arquivos/2016-1/2016.05.19_autodeclaracao_baixa_renda.pdf"
            >
              - Autodeclaração de baixa renda
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/arquivos/2016-1/2016.05.19_declaracao_nao_exerce_atividade_remunerada.pdf"
            >
              - Declaração que não exerce atividade remunerada
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/arquivos/2016-1/2016.05.19_declaracao_menores_nao_exerce_atividade_remunerada.pdf"
            >
              - Declaração de menores que não exerce atividade remunerada
            </a>
          </p>
          <p className="email-subtitulo" style={{ marginTop: "70px" }}>
            Município de São José dos Campos
          </p>
          <p className="monitoria-p">
            <a
              id="cor2"
              target="_blank"
              href="https://www.consorcio123sistema.com.br/sce/?wicket:bookmarkablePage=:com.dataprom.sbe.sce.web.page.login.LoginPage"
            >
              - Acesso ao sistema de cadastro de estudantes
            </a>
          </p>
          <p className="email-subtitulo" style={{ marginTop: "70px" }}>
            Município de Caçapava
          </p>
          <p className="monitoria-p">
            A ficha de Requerimento para passe escolar deve ser retirada no
            guichê da Empresa
            <a
              style={{ marginLeft: "7px", marginRight: "7px" }}
              id="cor2"
              target="_blank"
              href="http://www.abcvale.com.br/"
            >
              ABC Transportes Coletivos
            </a>
            localizada no Terminal Rodoviário da cidade.
          </p>
          <p className="email-subtitulo" style={{ marginTop: "70px" }}>
            Viação Cometa
          </p>
          <p className="monitoria-p">
            <a
              id="cor2"
              target="_blank"
              href="https://www.viacaocometa.com.br/informacao-para-sua-viagem/estudante-professor"
            >
              - Instruções
            </a>
          </p>
          <p className="email-subtitulo" style={{ marginTop: "70px" }}>
            Pássaro Marrom (Viagens para São Paulo)
          </p>
          <p className="monitoria-p">
            <a
              id="cor2"
              target="_blank"
              href="https://www.passaromarron.com.br/estudantes-e-professores/"
            >
              - Instruções
            </a>
          </p>
          <p className="monitoria-p">
            <a
              id="cor2"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd2ezUxcBhv7nHHjewVQ7or_3ZBudEHA2N7TfM-LJ4IP-55zA/viewform"
            >
              - Ficha de cadastro
            </a>
          </p>
        </Col>
      </Row>
    </Container>
    <Footer />
  </App>
);

export default passe;
