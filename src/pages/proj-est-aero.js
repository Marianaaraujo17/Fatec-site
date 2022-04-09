import React from "react";
import App from "../containers/App";
import Footer from "../components/footer";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import "./proj-est-aero.css";
import ReactYouTube from "../components/youtube/ReactYoutube";

const introducao = [
  {
    titulo: "Resumo",
    descricao:
      "O Tecnólogo em Projetos de Estruturas Aeronáuticas desenvolve projetos de componentes estruturais de uma aeronave, segundo as normas técnicas e de segurança. Projeta peças e estruturas, como as utilizadas nas asas, na empenagem (porção traseira do avião), na fuselagem e em outras partes da aeronave. Supervisiona a execução de projetos de fabricação de estruturas e peças. Pode atuar também na produção - industrial ou manual - de peças estruturais em compósitos (materiais compostos por dois ou mais componentes) e no gerenciamento de equipes na fábrica. O uso crescente de materiais leves na fabricação de estruturas aeronáuticas para diminuir o peso das aeronaves - o que melhora performances -, amplia o campo de trabalho para esse tecnólogo.",
  },
  {
    titulo: "Onde este tecnólogo poderá trabalhar?",
    descricao:
      "Indústria aeronáutica, como montadoras de aviões e fabricantes de peças e estruturas aeronáuticas e órgãos públicos, como a Agência Nacional de Aviação Civil. O tecnólogo pode ainda abrir seu próprio negócio, por exemplo, uma empresa fornecedora de peças para as montadoras. Essa graduação tecnológica forma projetistas para trabalhar na Embraer por meio do Programa Projetista Embraer (PPE), uma parceria entre a empresa e a Fatec São José dos Campos.",
  },
];

const links = [
  {
    titulo: "Inscreva-se",
    subtitulo: "40 Vagas > Período da Noite > Duração de 06 semestres",
    link: "https://www.vestibularfatec.com.br/home/",
    botao: " www.vestibularfatec.com.br",
  },
  {
    titulo: "Matriz curricular",
    subtitulo: "",
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/cursos/pea/2016.11.16_matriz_pea.pdf",
    botao: "Clique aqui para visualizar a matriz curricular e a carga horária",
  },
  {
    titulo: "Projeto Pedagógico",
    subtitulo: "",
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/cursos/pea/projeto_pedagogico_pea.pdf",
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

const proj_est_aero = () => (
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
          <p className="pea-titulo">PROJETOS DE ESTRUTURAS AERONÁUTICAS</p>
          <p className="pea-subtitulo">
            40 Vagas no período da Noite | Controle e Processos Industriais
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
                    <Card.Title className="pea-card-titulo">
                      {object.titulo}
                    </Card.Title>
                    <Card.Text className="pea-card-descricao">
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
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <ReactYouTube videoId="bAaQiT6ESUs" />
      <br />
    </Container>
    <Container style={{ marginBottom: "50px", textAlign: "center" }}>
      <Row xs={1} md={2} className="g-4">
        {links.map((object, index) => {
          return (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title className="pea-card-link-titulo">
                    {object.titulo}
                  </Card.Title>
                  <Card.Text className="pea-card-link-subtitulo">
                    {object.subtitulo}
                  </Card.Text>
                  <Button
                    className="pea-card-botao"
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

export default proj_est_aero;
