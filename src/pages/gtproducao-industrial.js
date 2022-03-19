import React from "react";
import App from "../containers/App";
import Footer from "../components/footer";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import "./gtproducao-industrial.css";

const introducao = [
  {
    titulo: "Resumo",
    descricao:
      "O tecnólogo em Gestão da Produção Industrial trabalha para melhorar a qualidade e a produtividade de uma indústria, atuando no planejamento das atividades, no controle da produção, na criação e no teste de produtos. Pesquisa e identifica oportunidades de negócios e novas tecnologias de produção assim como coordena equipes para aperfeiçoar processos e a logística. Elabora os planos de manutenção de máquinas. Define a localização dos setores e dos equipamentos de uma empresa de acordo com as normas técnicas e de segurança. Acompanha a qualidade dos processos e dos produtos, além de definir como será feito o descarte de resíduos industriais, segundo a política ambiental. Está mais focado na gestão, enquanto o tecnólogo em Produção Industrial ocupa-se da parte mais técnica, dos processos produtivos, das máquinas e ferramentas. Os cursos são oferecidos em unidades localizadas em importantes polos industriais de São Paulo.",
  },
  {
    titulo: "Onde este tecnólogo poderá trabalhar?",
    descricao:
      "Em indústrias no comércio; na direção do próprio negócio; na prestação de serviços de assessoria e na pesquisa tecnológica.",
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
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/cursos/gpi/matriz_gpi.pdf",
    botao: "Clique aqui para visualizar a matriz curricular e a carga horária",
  },
  {
    titulo: "Projeto Pedagógico",
    subtitulo: "",
    link: "https://fatecsjc-prd.azurewebsites.net/downloads/cursos/gpi/projeto_pedagogico_gpi.pdf",
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

const gtproducao_ind = () => (
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
          <p className="titulo">GESTÃO DA PRODUÇÃO INDUSTRIAL</p>
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

export default gtproducao_ind;
