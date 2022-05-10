import React from "react";
import Footer from "../components/footer";
import { Card, CardGroup, Container, Row, Col, Table } from "react-bootstrap";
import App from "../containers/App";
import email1 from "../components/images/email1.png";
import email2 from "../components/images/email2.png";
import "./email.css";

const email = () => (
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
          <p className="email-titulo">E-mail Institucional</p>
        </Col>
      </Row>
    </Container>
    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="email-subtitulo">
            E-mail Institucional (@fatec.sp.gov.br)
          </p>
          <p className="email-p2">Endereço de acesso do e-mail:</p>
          <p className="email-p">
            <a
              id="cor2"
              target="_blank"
              href="http://www.fatec.sp.gov.br/view/Default.aspx"
            >
              http://www.fatec.sp.gov.br
            </a>
          </p>
          <hr />
          <p className="email-p2" style={{ marginTop: "50px" }}>
            Quem poderá possuir uma conta de e-mail da Fatec?
          </p>
          <p className="email-p">
            Todos os alunos, professores e funcionários vinculados à Fatec
            poderão ter uma conta institucional.
          </p>
          <p className="email-p2" style={{ marginTop: "50px" }}>
            Como faço para obter uma conta?
          </p>
          <p className="email-p">
            Ao ingressar na Fatec você será automaticamente registrado para
            receber uma conta institucional. <br />
            Quando a conta for criada o sistema enviará no e-mail pessoal
            cadastrado o seu usuário e a senha.
          </p>
          <p className="email-p2" style={{ marginTop: "50px" }}>
            Como faço para saber qual é a minha conta?
          </p>
          <p className="email-p">
            Acesse a página{" "}
            <a
              id="cor2"
              target="_blank"
              href="http://www.fatec.sp.gov.br/view/Default.aspx"
            >
              www.fatec.sp.gov.br
            </a>
            , clique no ícone "E-mail institucional", depois em "Qual é o meu
            e-mail?" e informe seu CPF. O sistema enviará uma mensagem para o
            seu e-mail pessoal com os dados de acesso. Fique atento à caixa de
            lixo eletrônico.
          </p>
        </Col>
        <Col
          md={{ span: 12 }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img className="email-imagens" src={email1}></img>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="email-p2" style={{ marginTop: "50px" }}>
            Esqueci a minha senha de acesso. Como faço para recuperá-la?
          </p>
          <p className="email-p">
            Acesse a página{" "}
            <a
              id="cor2"
              target="_blank"
              href="http://www.fatec.sp.gov.br/view/Default.aspx"
            >
              www.fatec.sp.gov.br
            </a>
            , clique no ícone "E-mail institucional" e depois em "Redefinir
            senha". Informe seu CPF e e-mail institucional. O sistema enviará
            uma mensagem para o seu e-mail pessoal com os dados de acesso. Fique
            atento à caixa de lixo eletrônico.
          </p>
        </Col>
        <Col
          md={{ span: 12 }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img className="email-imagens" src={email2}></img>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="email-p2" style={{ marginTop: "50px" }}>
            [TUTORIAL] Como acessar a Loja de Softwares da Microsoft
          </p>
          <p className="email-p">
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/arquivos/tutoriais/email/tutorial_download_softwares.pdf"
              style={{ marginRight: "5px" }}
            >
              Veja aqui
            </a>
            o passo a passo de como acessar a Loja de Softwares da Microsoft.
          </p>
        </Col>
      </Row>
    </Container>
    <Footer />
  </App>
);

export default email;
