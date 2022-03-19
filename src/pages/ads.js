import React from "react";
import App from "../containers/App";
import Footer from "../components/footer";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import "./ads.css";

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

const links = [
  {
    titulo: "Inscreva-se",
    subtitulo: "40 Vagas > Período da Manhã > Duração de 06 semestres",
    link: "https://www.vestibularfatec.com.br/home/",
    botao: " www.vestibularfatec.com.br",
  },
  {
    titulo: "Matriz curricular",
    subtitulo: "",
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/cursos/ads/2016.11.16_matriz_ads.pdf",
    botao: "Clique aqui para visualizar a matriz curricular e a carga horária",
  },
  {
    titulo: "Projeto Pedagógico",
    subtitulo: "",
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/cursos/ads/projeto_pedagogico_ads.pdf",
    botao: "Clique aqui para visualizar o projeto pedagógico do curso.",
  },
  {
    titulo: "Regulamentos",
    subtitulo: "",
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/secretaria/regulamentogeral.pdf",
    botao: "Regulamento Geral dos Cursos de Graduação das Fatecs",
  },
  {
    titulo: "Docentes",
    subtitulo: "",
    link: "",
    botao: "Clique aqui para visualizar a lista de docentes.",
  },
];

const ads = () => (
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
                    <Card.Text
                      style={{ fontFamily: "Noto Sans", fontSize: "23px" }}
                    >
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
    <Container style={{ marginBottom: "50px", textAlign: "center" }}>
      <Row xs={1} md={2} className="g-4">
        {links.map((object, index) => {
          return (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title className="card-link-titulo">
                    {object.titulo}
                  </Card.Title>
                  <Card.Text className="card-link-subtitulo">
                    {object.subtitulo}
                  </Card.Text>
                  <Button
                    className="card-botao"
                    variant="outline-success"
                    href={object.link}
                    target="_blank"
                  >
                    {object.botao}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>

    <Footer />
  </App>
);

export default ads;
