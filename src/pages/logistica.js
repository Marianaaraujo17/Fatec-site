import React from "react";
import App from "../containers/App";
import Footer from "../components/footer";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import "./logistica.css";
import ReactYouTube from "../components/youtube/ReactYoutube";

const introducao = [
  {
    titulo: "Resumo",
    descricao:
      "O Tecnólogo em Logística é o profissional que gerencia o fluxo de produtos ou pessoas em uma empresa. Cuida da aquisição, do recebimento, da armazenagem, da distribuição e do transporte de produtos, bem como do controle e processamento de pedidos. Determina, por exemplo, a quantidade e o tipo de veículos necessários para uma entrega. Planeja a organização e a ordem dos produtos dentro de caminhões ou contêineres. Monta o roteiro de entrega dos produtos. Define o melhor local para se fazer um estoque. Pode atuar ainda na ordenação do fluxo de atendimento ao público em hospitais e postos de serviço. Em indústrias e fábricas, determina a disposição de equipamentos e setores de produção, de modo a melhorar a produtividade e evitar desperdício e retrabalho. Precisa saber trabalhar em equipe e ter alguma familiaridade com informática, pois no dia a dia do trabalho terá de usar programas específicos da área. Em geral, inicia a carreira em funções de armazenagem, estocagem e inventário de produtos. Todas as empresas, grandes e pequenas, precisam ter um profissional de Logística, uma vez que essa área é fundamental para redução de custos.",
  },
  {
    titulo: "Onde este tecnólogo poderá trabalhar?",
    descricao:
      "Existe um extenso campo de trabalho na área, como indústrias, supermercados, lojas, hospitais, órgãos públicos de mobilidade urbana, empresas especializadas (operadores logísticos), empresas da área de transportes e empresas de comércio eletrônico. Cada vez mais os serviços de logística têm sido terceirizados, o que abre espaço para as empresas especializadas no setor.",
  },
];

const links = [
  {
    titulo: "Inscreva-se",
    subtitulo:
      "40 Vagas (Período da Manhã) > 40 Vagas (Período da Noite) > Duração de 06 semestres",
    link: "https://www.vestibularfatec.com.br/home/",
    botao: " www.vestibularfatec.com.br",
  },
  {
    titulo: "Matriz curricular",
    subtitulo: "",
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/cursos/log/2016.11.16_matriz_log.pdf",
    botao: "Clique aqui para visualizar a matriz curricular e a carga horária",
  },
  {
    titulo: "Projeto Pedagógico",
    subtitulo: "",
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/cursos/log/projeto_pedagogico_log.pdf",
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
    link: "/docentes-logistica",
    botao: "Clique aqui para visualizar a lista de docentes.",
  },
];

const logistica = () => (
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
          <p className="log-titulo">LOGÍSTICA</p>
          <p className="log-subtitulo">
            40 Vagas no período da Manhã e 40 Vagas no período da Noite | Gestão
            e Negócios
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
                    <Card.Title className="log-card-titulo">
                      {object.titulo}
                    </Card.Title>
                    <Card.Text className="log-card-descricao">
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
      <ReactYouTube videoId="73zQmITJsd0" />
      <br />
    </Container>
    <Container style={{ marginBottom: "50px", textAlign: "center" }}>
      <Row xs={1} md={2} className="g-4">
        {links.map((object, index) => {
          return (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title className="log-card-link-titulo">
                    {object.titulo}
                  </Card.Title>
                  <Card.Text className="log-card-link-subtitulo">
                    {object.subtitulo}
                  </Card.Text>
                  <Button
                    className="log-card-botao"
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

export default logistica;
