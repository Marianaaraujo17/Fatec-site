import React from "react";
import { Card, CardGroup, Container, Row, Col, Table } from "react-bootstrap";
import Footer from "../components/footer";
import App from "../containers/App";
import "./moodle.css";

const moodle = () => (
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
          <p className="moodle-titulo">Moodle</p>
        </Col>
      </Row>
    </Container>

    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="moodle-subtitulo">Moodle</p>
          <p className="moodle-p2">Endereço de acesso do MOODLE:</p>
          <p className="moodle-p">
            <a
              id="cor2"
              target="_blank"
              href="http://fatecsjc-prd.azurewebsites.net/moodle/"
            >
              http://fatecsjc-prd.azurewebsites.net/moodle/
            </a>
          </p>
          <hr />
          <p className="moodle-p2" style={{ marginTop: "50px" }}>
            O que é?
          </p>
          <p className="moodle-p">
            O MOODLE é um ambiente de ensino a distância que oferece aos
            professores e alunos uma sala de aula virtual que pode ser acessada
            através de qualquer computador conectado à Internet. Nesta sala, o
            professor pode propor aos alunos uma série de atividades como fóruns
            de discussão, materiais de aula, discussões em tempo-real (chats),
            wikis (páginas para a edição colaborativa de conteúdo) e outros.
          </p>
          <p className="moodle-p2" style={{ marginTop: "50px" }}>
            Como faço para me cadastrar?
          </p>
          <p className="moodle-p">
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/arquivos/tutoriais/moodle/tutorial_criar_conta_moodle.pdf"
            >
              Clique aqui
            </a>{" "}
            e siga o tutorial com o passo-a-passo.
            <br /> Obs: para se cadastrar é necessário possuir um e-mail da
            Fatec (
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/email-institucional.php"
            >
              Clique aqui
            </a>{" "}
            para obter informações de como conseguir seu e-mail).
          </p>
          <p className="moodle-p2" style={{ marginTop: "50px" }}>
            Como faço para recuperar o usuário ou a senha de acesso?
          </p>
          <p className="moodle-p">
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/arquivos/tutoriais/moodle/tutorial_criar_conta_moodle.pdf"
            >
              Clique aqui
            </a>{" "}
            e siga o tutorial com o passo-a-passo.
            <br />
            Obs: caso você não saiba o seu usuário ou não se lembra da senha do
            seu e-mail institucional clique aqui para obter mais informações.
          </p>
          <p className="moodle-p2" style={{ marginTop: "50px" }}>
            Sou professor, como faço para cadastrar as disciplinas que estou
            lecionando?
          </p>
          <p className="moodle-p">
            Se você é professor, primeiramente faça seu cadastro no site do
            MOODLE. Depois envie um e-mail (com seu e-mail institucional) para
            <mark id="marca">f146.moodle@fatec.sp.gov.br</mark> solicitando a
            inclusão da(s) disciplina(s). Na mensagem informe o nome completo da
            disciplina, curso, período e turno (manhã / tarde / noite).
          </p>
          <p className="moodle-p2" style={{ marginTop: "50px" }}>
            Tutoriais para professores:
          </p>
          <p className="moodle-p">
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/arquivos/tutoriais/moodle/tutorial_permitir_acesso_visitante.pdf"
            >
              Habilitando o acesso para visitantes;
            </a>{" "}
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/suporte-moodle.php#:~:text=Inserindo%20uma%20senha%20de%20acesso%20para%20a%20disciplina%3B"
            >
              Inserindo uma senha de acesso para a disciplina;
            </a>
          </p>
        </Col>
      </Row>
    </Container>
    <Footer />
  </App>
);

export default moodle;
