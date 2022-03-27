import React from "react";
import Footer from "../components/footer";
import App from "../containers/App";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import logo_cadi from "../components/images/logo_cadi.jpg";
import logo_fatec from "../components/images/logo.png";
import logo_parque from "../components/images/logo_parque_tecnologico_sjc.png";
import logo_fapg from "../components/images/logo_fapg.png";
import logo_api from "../components/images/logo_api.png";
import foto_parque from "../components/images/foto_parque_tecnologico_sjc.png";
import foto_cadi from "../components/images/foto_cadi_0001.jpg";
import "./cadi.css";

const cadi = () => (
  <App>
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "50px",
      }}
    >
      <Row>
        <Col>
          <img src={logo_cadi}></img>
        </Col>
      </Row>
    </Container>
    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }}>
          <p>
            O CADI (Centro de Aprendizagem em Desenvolvimento e Integração) é um
            Projeto de parceria entre a Fatec São José dos Campos, Parque
            Tecnológico de São José dos Campos e FAPG – Fundação de Apoio à
            Pesquisa de Pós-graduandos.
          </p>
        </Col>
      </Row>
      <Row style={{ margin: "30px" }}>
        <Col>
          <img className="imagens" src={logo_fatec}></img>
        </Col>
        <Col>
          <img className="imagens" src={logo_parque}></img>
        </Col>
        <Col>
          <img className="imagens" src={logo_fapg}></img>
        </Col>
      </Row>
      <Row style={{ marginBottom: "60px" }}>
        <Col md={{ span: 12 }}>
          <p>
            O Projeto CADI tem por objetivo a conjugação de esforços entre as
            partes para ações visando a conexão de pessoas, conhecimentos e
            instituições com a Fatec São José dos Campos, para apoiar o
            desenvolvimento do Ecossistema de inovação e consequentemente
            estimular a aprendizagem dos alunos e o desenvolvimento de recursos
            humanos capazes de inovar e atender as demandas da comunidade e do
            mercado regional.
          </p>
        </Col>
        <Col md={{ span: 12 }}>
          <p>Dentre os principais objetivos do CADI, destacam-se:</p>
          <div style={{ marginLeft: "20px" }}>
            <p>
              a) Aplicação das metodologias de ensino desenvolvidas dentro do
              CADI;
            </p>
            <p>
              b) Aproximação das Empresas e na aceleração de inovação por meio
              de um fluxo eficiente de disseminação de pessoas altamente
              capacitadas para a solução de problemas complexos de interesse do
              mercado;
            </p>
            <p>
              c) Divulgação dos conceitos envolvidos no Ecossistema de Inovação
              4.0 visando a valorizar a colaboração muito mais que concorrência
              ou simples cooperação;
            </p>
            <p>
              d) Contribuir para o desenvolvimento de recursos humanos com
              competências, habilidades e experiências em diversas áreas do
              Ecossistema de Inovação 4.0;
            </p>
            <p>
              e) Construir e implementar um novo modelo de relacionamento do
              Ecossistema com as Instituições de Ensino;
            </p>
            <p>
              f) Promover e integrar efetivamente os envolvidos, buscando como
              efeito, fortalecer o sentido e relevância dos cursos ministrados
              nas Instituições de Ensino, potencializando sua missão de preparar
              recursos humanos de forma ágil e através do desenvolvimento de
              projetos relevantes e inovadores.
            </p>
          </div>
        </Col>
      </Row>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2>Aprendizagem por Projetos Integrados</h2>
        </Col>
        <Col md={10}>
          <p>
            A API (Aprendizagem por Projetos Integrados) é uma metodologia em
            desenvolvimento, dentro do escopo do CADI e, para sua melhor
            compreensão, acessar o link:<br></br>
            <a className="link">
              https://fatecsjc-prd.azurewebsites.net/aprendizagem-por-projetos-integrados.php
            </a>
          </p>
        </Col>
        <Col md={2}>
          <img src={logo_api} width={100} height={100}></img>
        </Col>
      </Row>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2>Sala de Atendimentos no Parque Tecnológico</h2>
        </Col>
        <Col md={{ span: 12 }}>
          <p>
            Contamos com uma Sala de apoio para Reuniões, Atendimentos e
            Capacitações no seguinte endereço:<br></br>{" "}
            <p style={{ fontStyle: "italic" }}>
              Parque Tecnológico São José dos Campos - Centro Empresarial II –
              Sala 2207<br></br> Estrada Dr. Altino Bondensan, 500 – Distrito
              Eugênio de Melo, São José dos Campos - SP, CEP 12210-131
            </p>
          </p>
        </Col>
        <Col md={{ span: 6 }}>
          <img style={{ maxWidth: "600px" }} src={foto_parque}></img>
        </Col>
        <Col md={{ span: 6 }}>
          <img style={{ maxWidth: "535px" }} src={foto_cadi}></img>
        </Col>
      </Row>
    </Container>
    <Footer />{" "}
  </App>
);

export default cadi;
