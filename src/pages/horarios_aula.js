import React from "react";
import { Card, CardGroup, Container, Row, Col, Table } from "react-bootstrap";
import Footer from "../components/footer";
import App from "../containers/App";
import aulas from "../components/images/aulas.png";
import mapa_sala from "../components/images/mapa_sala.png";
import "./aulas.css";

const horarios_aula = () => (
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
          <p className="aula-titulo">Horários de Aula</p>
          <p className="aula-p">1º Semestre de 2022</p>
        </Col>
      </Row>
    </Container>

    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="aula-p">
            Para maiores informações entre em contato com a Secretaria Acadêmica
            <mark id="marca">f146.secretaria@fatec.sp.gov.br</mark>
          </p>
          <hr />
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
          <Row>
            <a id="horario">MANHÃ</a>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>
                    <a
                      id="cor_aulas"
                      target="_blank"
                      href="https://fatecsjc-prd.azurewebsites.net/downloads/horarios/2022-1/2022-1_ads_manha.pdf"
                    >
                      Análise e Desenvolvimento de Sistemas
                    </a>
                  </td>
                  <td>das 07h10 às 12h35</td>
                </tr>
                <tr>
                  <td>
                    <a
                      id="cor_aulas"
                      target="_blank"
                      href="https://fatecsjc-prd.azurewebsites.net/downloads/horarios/2022-1/2022-1_dsm_manha.pdf"
                    >
                      Desenvolvimento de Software Multiplataforma
                    </a>
                  </td>
                  <td>das 07h10 às 12h35</td>
                </tr>
                <tr>
                  <td>
                    <a
                      id="cor_aulas"
                      target="_blank"
                      href="https://fatecsjc-prd.azurewebsites.net/downloads/horarios/2022-1/2022-1_log_manha.pdf"
                    >
                      Logística
                    </a>
                  </td>
                  <td>das 08h00 às 12h35</td>
                </tr>
                <tr>
                  <td>
                    <a
                      id="cor_aulas"
                      target="_blank"
                      href="https://fatecsjc-prd.azurewebsites.net/downloads/horarios/2022-1/2022-1_ma_manha.pdf"
                    >
                      Manufatura Avançada
                    </a>
                  </td>
                  <td>das 08h00 às 12h35</td>
                </tr>
              </tbody>
            </Table>
          </Row>
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
          <Row>
            <a id="horario" style={{ marginTop: "40px" }}>
              NOITE
            </a>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>
                    <a
                      id="cor_aulas"
                      target="_blank"
                      href="https://fatecsjc-prd.azurewebsites.net/downloads/horarios/2022-1/2022-1_bd_noite.pdf"
                    >
                      Banco de Dados
                    </a>
                  </td>
                  <td>das 18h45 às 23h05</td>
                </tr>
                <tr>
                  <td>
                    <a
                      id="cor_aulas"
                      target="_blank"
                      href="https://fatecsjc-prd.azurewebsites.net/downloads/horarios/2022-1/2022-1_gpi_noite.pdf"
                    >
                      Gestão da Produção Industrial
                    </a>
                  </td>
                  <td>das 18h45 às 23h05</td>
                </tr>
                <tr>
                  <td>
                    <a
                      id="cor_aulas"
                      target="_blank"
                      href="https://fatecsjc-prd.azurewebsites.net/downloads/horarios/2022-1/2022-1_log_noite.pdf"
                    >
                      Logística
                    </a>
                  </td>
                  <td>das 18h45 às 23h05</td>
                </tr>
                <tr>
                  <td>
                    <a
                      id="cor_aulas"
                      target="_blank"
                      href="https://fatecsjc-prd.azurewebsites.net/downloads/horarios/2022-1/2022-1_mnt_noite.pdf"
                    >
                      Manutenção de Aeronaves
                    </a>
                  </td>
                  <td>das 18h45 às 23h05</td>
                </tr>
                <tr>
                  <td>
                    <a
                      id="cor_aulas"
                      target="_blank"
                      href="https://fatecsjc-prd.azurewebsites.net/downloads/horarios/2022-1/2022-1_pea_noite.pdf"
                    >
                      Projetos de Estruturas Aeronáuticas
                    </a>
                  </td>
                  <td>das 18h45 às 23h05</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Col>

        <Col
          md={{ span: 12 }}
          style={{ marginBottom: "40px", marginTop: "50px" }}
        >
          <p className="aula-subtitulo">Mapa de Salas</p>
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
          <img className="aulas-imagens" src={mapa_sala}></img>
        </Col>
      </Row>
    </Container>
    <Footer />
  </App>
);

export default horarios_aula;
