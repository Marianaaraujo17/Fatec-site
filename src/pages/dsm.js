import React from "react";
import App from "../containers/App";
import Footer from "../components/footer";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import "./dsm.css";

const introducao = [
  {
    titulo: "Resumo",
    descricao:
      "O Curso Superior Tecnológico em Desenvolvimento de Software Multiplataforma tem como objetivo formar profissionais capazes de desenvolver software para diversas plataformas, tais como Web, Desktop, Móvel, em Nuvem Internet das Coisas, empregando conceitos de Segurança da Informação e Inteligência Artificial. Assim como especializar profissionais para trabalhar com metodologias ágeis de gestão de projetos, versionamento, integração e entrega contínua de software, visando desenvolver soluções de software que atendam os critérios de qualidade exigidos pelo mercado. Além disso, pretende-se preparar os egressos para estabelecer relacionamentos produtivos; desenvolver a capacidade de comunicação, inclusive em língua estrangeira; utilizar raciocínio lógico; gerar soluções inovadoras; saber posicionar-se enquanto profissional e cidadão ético, com responsabilidade social e ambiental.",
  },
  {
    titulo: "Onde este tecnólogo poderá trabalhar?",
    descricao:
      "O egresso do Curso Superior Tecnológico em Desenvolvimento de Software poderá atuar em grandes empresas, como especialista ou gestor; em empresas menores, com perfil de atuação mais generalista; por conta própria, no modelo autônomo, bem como empreender e criar sua própria empresa. Organizações não-governamentais. Órgãos públicos. Institutos e Centros de Pesquisa.",
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
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/cursos/dsm/2020_matriz_dsm.pdf",
    botao: "Clique aqui para visualizar a matriz curricular e a carga horária",
  },
  {
    titulo: "Projeto Pedagógico",
    subtitulo: "",
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/cursos/dsm/projeto_pedagogico_dsm.pdf",
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

const dsm = () => (
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
          <p className="dsm-titulo">
            DESENVOLVIMENTO DE SOFTWARE MULTIPLATAFORMA
          </p>
          <p className="dsm-subtitulo">
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
                    <Card.Title className="dsm-card-titulo">
                      {object.titulo}
                    </Card.Title>
                    <Card.Text className="dsm-card-descricao">
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
                  <Card.Title className="dsm-card-link-titulo">
                    {object.titulo}
                  </Card.Title>
                  <Card.Text className="dsm-card-link-subtitulo">
                    {object.subtitulo}
                  </Card.Text>
                  <Button
                    className="dsm-card-botao"
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

export default dsm;
