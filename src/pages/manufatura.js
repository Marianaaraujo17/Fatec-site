import React from "react";
import App from "../containers/App";
import Footer from "../components/footer";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import "./manufatura.css";
import ReactYouTube from "../components/youtube/ReactYoutube";

const introducao = [
  {
    titulo: "Resumo",
    descricao:
      "O Tecnólogo em Manufatura Avançada é o profissional que irá criar e/ou gerenciar projetos de desenvolvimento integrado de manufatura, tendo em vista a concepção ou a melhoria de processos de produção. Atua como integrador de tecnologias e conceitos, a fim de transformar ambientes de manufatura convencional em ambientes de manufatura avançada.",
    extra: "Mais informações sobre o curso CLIQUE AQUI",
  },
  {
    titulo: "Onde este tecnólogo poderá trabalhar?",
    descricao:
      "Esse profissional tem um amplo mercado de atuação no aperfeiçoamento do processo industrial nos setores de manufatura incluindo, aeroespacial, automotiva, metal-mecânico, eletrônica e de energia. Como empreendedor, pode abrir sua própria consultoria ou empresa. Pode ainda atuar em pesquisas.",
    extra: "",
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
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/cursos/ma/2017.11.09_matriz_ma.pdf",
    botao: "Clique aqui para visualizar a matriz curricular e a carga horária",
  },
  {
    titulo: "Projeto Pedagógico",
    subtitulo: "",
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/cursos/ma/projeto_pedagogico_ma.pdf",
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

const manufatura = () => (
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
          <p className="titulo">MANUFATURA AVANÇADA</p>
          <p className="subtitulo">
            40 Vagas no período da Manhã | Controle e Processos Industriais
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
                      <br />
                      <a
                        id="fonte"
                        href="https://fatecsjc-prd.azurewebsites.net/downloads/cursos/ma/2017.11.10_apresentacao_manufatura_avancada.pdf"
                        target="_blank"
                      >
                        {object.extra}
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </CardGroup>
        </Col>
      </Row>
    </Container>
    <Container>
      <ReactYouTube videoId="oQpdILOtVbc" />
      <br />
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

export default manufatura;
