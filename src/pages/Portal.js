// /src/pages/Portal.js
import React from "react";
import Footer from "../components/footer";
import App from "../containers/App";
import { Container, Row, Col } from "react-bootstrap";
import "./Portal.css";
const Portal = () => (
  <App>
    <div
      class="padlet-embed"
      style={{
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: "2px",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        backgroundColor: "#F4F4F4",
      }}
    >
      <p style={{ padding: 0, margin: 0 }}>
        <iframe
          src="https://padlet.com/embed/vt75pp1d5gkvky4z"
          frameborder="0"
          allow="camera;microphone;geolocation"
          style={{
            width: "100%",
            height: "608px",
            display: "block",
            padding: 0,
            margin: 0,
          }}
        ></iframe>
      </p>
      <div style={{ padding: "8px", textAlign: "right", margin: 0 }}>
        <a
          href="https://padlet.com?ref=embed"
          style={{
            padding: 0,
            margin: 0,
            border: "none",
            display: "block",
            lineHeight: 1,
            height: "16px",
          }}
          target="_blank"
        >
          <img
            src="https://padlet.net/embeds/made_with_padlet.png"
            width="86"
            height="16"
            style={{
              padding: 0,
              margin: 0,
              background: "none",
              border: "none",
              display: "inline",
              boxShadow: "none",
            }}
            alt="Criado com o Padlet"
          />
        </a>
      </div>
    </div>

    <Container
      style={{ marginBottom: "50px", textAlign: "justify", marginTop: "30px" }}
    >
      <Row>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="portal-p">Empresa Cadastre sua vaga</p>
          <a
            id="links"
            href="https://fatec.cis-web.com.br/cisweb/public/auth/preloginempresa"
            target="_blank"
          >
            <p>
              https://fatec.cis-web.com.br/cisweb/public/auth/preloginempresa
            </p>
          </a>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="portal-p">Aluno consulte todas as oportunidades</p>
          <a
            id="links"
            href="https://fatec.cis-web.com.br/cisweb/public/auth/preloginaluno"
            target="_blank"
          >
            <p>https://fatec.cis-web.com.br/cisweb/public/auth/preloginaluno</p>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <p id="cinzento">
            O Portal de Carreiras é uma plataforma criada para facilitar a
            comunicação entre empresas, alunos e instituição de ensino, em
            relação à oferta e procura por vagas de estágio/trabalho. Uma equipe
            da Fatec de São José dos Campos acompanha as atualizações feitas no
            Portal, a fim de garantir a convergência entre os interesses
            acadêmico-pedagógico e do ecossistema, e a formação contínua de
            pessoas.
          </p>
        </Col>
      </Row>
    </Container>

    <Footer />
  </App>
);

export default Portal;
