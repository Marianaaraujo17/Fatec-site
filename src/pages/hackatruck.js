import React from "react";
import Footer from "../components/footer";
import App from "../containers/App";
import { Card, CardGroup, Container, Row, Col, Table } from "react-bootstrap";
import caminhao from "../components/images/2018_caminhao.png";
import foto_parque from "../components/images/foto_parque_tecnologico_sjc.png";
import foto_cadi from "../components/images/foto_cadi_0001.jpg";
import { FaFacebookSquare, FaYoutube, FaInstagram } from "react-icons/fa";
import ReactYouTube from "../components/youtube/ReactYoutube";

import "./hackatruck.css";

const hackatruck = () => (
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
          <p className="hack-titulo">Projeto IBM HACKaTruck</p>
        </Col>
      </Row>
    </Container>
    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }}>
          <p className="hack-p">
            O HackaTruck MakerSpace é um projeto de capacitação profissional de
            estudantes de Instituições de Ensino Superior de Tecnologia da
            Informação. Como um projeto dinâmico e itinerante, o HackaTruck vem
            inspirado pelo conceito ‘maker’, tornando o laboratório móvel
            (caminhão) num “makerspace”, um espaço onde os alunos poderão criar
            e desenvolver protótipos de projetos relacionados aos temas
            estudados relacionados à Internet das Coisas (IoT).
          </p>
        </Col>
      </Row>
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
        <Row style={{ margin: "30px" }}>
          <Col md={{ span: 12 }}>
            <img className="hack-imagens" src={caminhao}></img>
          </Col>
        </Row>
      </Container>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="hack-h2">Projeto HACKaTruck MakerSpace 2018</h2>
        </Col>
        <Col style={{ marginBottom: "20px" }} md={12}>
          <text className="hack-p">
            <text style={{ fontWeight: "bold" }}>Descrição:</text>O Curso
            GRATUITO presencial terá duração de 3 semanas com carga horária de
            60 horas. Durante este período os alunos serão capacitados nas
            metodologias mais avançadas de desenvolvimento (DevOps, Agile, Scrum
            e Design Thinking). Além dos fundamentos de Indústria 4.0, eles
            terão a possibilidade de prototpação de suas ideias, no{" "}
            <text style={{ fontWeight: "bold" }}>
              Caminhão IBM HackaTruck MakerSpace presente no Estacionamento do
              Pq. Tecnológico de São José dos Campos.
            </text>
          </text>
        </Col>
        <Col>
          <p className="hack-p">
            Pré-Requisito: Aprovação nos Cursos EAD, com 70% do rendimento.
          </p>
        </Col>
      </Row>
      <Row style={{ marginBottom: "40px" }}>
        <Col md={{ span: 12 }}>
          <p className="hack-p" style={{ fontWeight: "bold" }}>
            Cronograma de Atividades:
          </p>
        </Col>
        <Col md={{ span: 10 }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Atividade</th>
                <th>Período</th>
                <th>Observações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Inscrições - Curso EAD Preparatório e Seletivo para o
                  HackaTruck MakerSpace (Lógica de Programação, Orientação a
                  Objetos, JavaScript e Restful APIs).
                </td>
                <td>12/07 a 31/07/2018</td>
                <td>
                  <text>
                    Podem se inscrever alunos da Fatec São José dos Campos, de
                    qualquer curso, sem limite de número de inscrições.<br></br>
                    Inscrições no site: hackatruck.com.br <br></br>Devem usar o
                    Promocode: FATECSJC18HTMS
                  </text>
                </td>
              </tr>
              <tr>
                <td>Suporte de Instrutor para Curso EAD Preparatório</td>
                <td>25/07, 26/07, 01/08 e 02/08/2018</td>
                <td>
                  Instrutor Profissional do Projeto IBM Hackatruck MakerSpace
                  presente em Laboratório da Fatec São José dos Campos para
                  suporte às dúvidas dos alunos
                </td>
              </tr>
              <tr>
                <td>
                  Palestra Motivacional sobre Projeto IBM Hackatruck MakerSpace
                </td>
                <td>02/08/2018, em dois horários: 10h00 e 19h40</td>
                <td>Tema de interesse na área de IoT e universo Maker</td>
              </tr>
              <tr>
                <td>
                  Validação das Inscrições, por parte da Equipe Gestora da Fatec
                  São José dos Campos
                </td>
                <td>06/08 a 08/08/2018</td>
                <td>Serão 56 vagas (28 vagas a Tarde e 28 vagas a noite)</td>
              </tr>
              <tr>
                <td>
                  Curso Presencial no Hackatruck MakerSpace – Práticas de
                  CloudService usando Node
                </td>
                <td>
                  13/08 a 31/08/2018, em duas turmas: Tarde – 13h00-17h00 Noite
                  – 18h30-22h30
                </td>
                <td>
                  Serão 56 vagas (28 vagas a Tarde e 28 vagas a noite), 3
                  semanas, 4 horas por dia, sendo frequência mínima de 75%
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="hack-h2">Conheça o projeto:</h2>
        </Col>
        <Col md={{ span: 12 }}>
          <a
            target="_blank"
            href="https://hackatruck.com.br"
            className="hack-a"
          >
            <text className="hack-cor">www.hackatruck.com.br</text>
          </a>
        </Col>
        <Col md={{ span: 12 }}>
          <a
            target="_blank"
            href="https://www.facebook.com/hackatruck/"
            className="hack-a"
          >
            <FaFacebookSquare size={30} />
            <text className="hack-cor">Facebook</text>
          </a>
        </Col>
        <Col md={{ span: 12 }}>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCVoPx2gZeOjja3ea4F2Wcxw"
            className="hack-a"
          >
            <FaYoutube size={30} />
            <text className="hack-cor">Youtube</text>
          </a>
        </Col>
        <Col md={{ span: 12 }}>
          <a
            target="_blank"
            href="https://www.instagram.com/hackatruck_makerspace/"
            className="hack-a"
          >
            <FaInstagram size={30} />{" "}
            <text className="hack-cor">Instagram</text>
          </a>
        </Col>
      </Row>
      <Row style={{ marginBottom: "40px" }}>
        <Col>
          <ReactYouTube videoId="37qKQn-IdIA" />
        </Col>
      </Row>
    </Container>
    <Footer />{" "}
  </App>
);

export default hackatruck;
