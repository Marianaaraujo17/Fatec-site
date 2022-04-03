import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import "./docentes-geral.css";

const introducao = [
  {
    titulo: "Resumo",
    descricao:
      "O Tecnólogo em Análise e Desenvolvimento de Sistemas cria, projeta, desenvolve e configura programas, softwares e sistemas para inúmeras empresas. Faz auditoria de sistemas para avaliar possíveis erros e falhas. Além disso, o tecnólogo em Análise e Desenvolvimento de Sistemas está apto a prestar consultoria e desenvolver pesquisas.",
  },
  {
    titulo: "Onde este tecnólogo poderá trabalhar?",
    descricao:
      "Como a informática está presente em praticamente todos os setores da sociedade, o tecnólogo em Análise e Desenvolvimento de Sistemas pode atuar em empresas públicas ou privadas, instituições financeiras, consultorias, terceiro setor, empresas especializadas em Tecnologia da Informação (TI), indústrias etc.",
  },
];

const doc_manufatura = () => (
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
          <p className="titulo">ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</p>
          <p className="subtitulo">
            40 Vagas no período da Manhã | Informação e Comunicação
          </p>
        </Col>
      </Row>
    </Container>

    <Container id="resumo" style={{ marginBottom: "50px" }}>
      <Row>
        <Col md={{ span: 12 }}>
          <CardGroup>
            {introducao.map((object, index) => {
              return (
                <Card style={{ marginRight: "50px" }}>
                  <Card.Body>
                    <Card.Title className="card-titulo">
                      {object.titulo}
                    </Card.Title>
                    <Card.Text className="card-descricao">
                      {object.descricao}
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </CardGroup>
        </Col>
      </Row>
    </Container>

    <Footer />
  </App>
);

export default doc_manufatura;
