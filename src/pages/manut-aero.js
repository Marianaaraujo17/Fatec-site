import React from "react";
import App from "../containers/App";
import Footer from "../components/footer";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import "./manut-aero.css";
import ReactYouTube from "../components/youtube/ReactYoutube";

const introducao = [
  {
    titulo: "Resumo",
    descricao:
      "O Tecnólogo em Manutenção de Aeronaves supervisiona a revisão e a manutenção de aviões. Atua na gestão, no planejamento e no controle dos serviços de manutenção de aeronaves e seus componentes. No planejamento de serviços, define a sequência das atividades de manutenção, otimiza as tarefas e controla os prazos de execução de cada etapa de trabalho. Orienta o técnico na execução das atividades de montagem e regulagem dos componentes das aeronaves. Zela pelo cumprimento das normas de segurança de voo. O mercado para essa profissão é promissor. A frota de jatos executivos cresceu nos últimos anos na América Latina, onde o Brasil é o principal representante. Além disso, a região de São José dos Campos concentra as principais empresas aeroespaciais do País.",
    extra: "Para visualizar uma breve apresentação do curso, CLIQUE AQUI.",
  },
  {
    titulo: "Onde este tecnólogo poderá trabalhar?",
    descricao:
      "Companhias aéreas, fabricantes de aeronaves, fabricantes de partes e componentes de aeronaves, centros de manutenção de aeronaves e componentes, empresas de aviação executiva, empresas operadoras e de manutenção de helicópteros, Forças Armadas e autoridade aeronáutica (ANAC). Como empreendedor, pode implantar sua própria oficina de reparo ou revisão de componentes para atuar como fornecedor de serviços para os centros de manutenção de aeronaves.",
    extra: "",
  },
];

const links = [
  {
    titulo: "Inscreva-se",
    subtitulo: "40 Vagas > Período da Noite> Duração de 06 semestres",
    link: "https://www.vestibularfatec.com.br/home/",
    botao: " www.vestibularfatec.com.br",
  },
  {
    titulo: "Matriz curricular",
    subtitulo: "",
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/cursos/mnt/2018.12.13_matriz_manutencao.pdf",
    botao: "Clique aqui para visualizar a matriz curricular e a carga horária",
  },
  {
    titulo: "Projeto Pedagógico",
    subtitulo: "",
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/cursos/mnt/projeto_pedagogico_mnt_reestruturacao_2019-outubro_2018.pdf",
    botao: "Clique aqui para visualizar o projeto pedagógico do curso.",
  },
  {
    titulo: "Regulamento ANAC",
    subtitulo: "",
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/cursos/mnt/2014.01.20_regulamento_anac.pdf",
    botao: "Clique para visualizar o Regulamento ANAC",
  },
  {
    titulo: "Regulamento Geral",
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

const manut_aero = () => (
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
          <p className="titulo">MANUTENÇÃO DE AERONAVES</p>
          <p className="subtitulo">
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
                    <Card.Title className="card-titulo">
                      {object.titulo}
                    </Card.Title>
                    <Card.Text
                      style={{ fontFamily: "Noto Sans", fontSize: "23px" }}
                    >
                      {object.descricao}<br/>
                      <a id="fonte" href="https://fatecsjc-prd.azurewebsites.net/downloads/cursos/mnt/2021.02.09_apresentacao_manutencao_aero.pdf" target="_blank">{object.extra}</a>
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
      <ReactYouTube videoId="d1vkNIYDVWA"/><br/>
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

export default manut_aero;
