import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";

const lista = [
  {
    nome: "Felix Arlindo Strottmann (Coordenador)",
    cv: "http://lattes.cnpq.br/8478784526842018",
  },
  {
    nome: "Ana Cecília Rodrigues Medeiros",
    cv: "http://lattes.cnpq.br/1940086892227479",
  },
  {
    nome: "André Hassessian",
    cv: "http://lattes.cnpq.br/2457474189473241",
  },
  {
    nome: "Bruno Peruchi Trevisan",
    cv: "http://lattes.cnpq.br/7753807121855274",
  },
  {
    nome: "Danielle Cristina de Morais Amorim",
    cv: "http://lattes.cnpq.br/4540882358553916",
  },
  {
    nome: "Edmar de Queiróz Figueiredo",
    cv: "http://lattes.cnpq.br/0167719495243420",
  },
  {
    nome: "Eduardo de Castro Faustino Coelho",
    cv: "http://lattes.cnpq.br/6968717905595612",
  },
  {
    nome: "Fabiana Eloisa Passador",
    cv: "http://lattes.cnpq.br/5954754249075851",
  },
  {
    nome: "Fabrício Galende Marques de Carvalho",
    cv: "http://lattes.cnpq.br/8632801813322469",
  },
  {
    nome: "Gerson Carlos Favalli",
    cv: "http://lattes.cnpq.br/5148082193065688",
  },
  {
    nome: "Joares Lidovino dos Reis",
    cv: "http://lattes.cnpq.br/7963698498836684",
  },
  {
    nome: "Luiz Alberto Nolasco Fonseca",
    cv: "http://lattes.cnpq.br/7896838403267274",
  },
  {
    nome: "Marcos da Silva e Souza",
    cv: "http://lattes.cnpq.br/8872909500743880",
  },
  {
    nome: "Maria Goreti Lopes Cepinho",
    cv: "http://lattes.cnpq.br/5583930802031762",
  },
  {
    nome: "Nilo Castro dos Santos",
    cv: "http://lattes.cnpq.br/5514511194095282",
  },
  {
    nome: "Nilo Jerônimo Vieira",
    cv: "http://lattes.cnpq.br/3077760545765491",
  },
  {
    nome: "Renata Cristiane Fusverk da Silva",
    cv: "http://lattes.cnpq.br/6828777883307945",
  },
  {
    nome: "Rita de Cássia Mendonça Sales Contini",
    cv: "http://lattes.cnpq.br/2711147975748001",
  },
  {
    nome: "Rodrigo Elias Pereira",
    cv: "http://lattes.cnpq.br/2815094010702397",
  },
  {
    nome: "Santiago Martin Lugones",
    cv: "http://lattes.cnpq.br/9549799126833827",
  },
];

const doc_manut = () => (
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
          <p className="titulo">DOCENTES</p>
          <p className="subtitulo">MANUTENÇÃO DE AERONAVES</p>
        </Col>
      </Row>
    </Container>
    <Container style={{ marginBottom: "20px" }}>
      <Button href="/docentes">Voltar para a área de Docentes</Button>
    </Container>
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "50px",
      }}
    >
      <Row xs={1} md={2} className="g-4">
        {lista.map((obj) => (
          <Col>
            <a className="nome" target="_blank" href={obj.cv}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <img src={perfil} width={150} height={150}></img>
                  </Card.Title>
                  <Card.Text>{obj.nome}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>

    <Footer />
  </App>
);

export default doc_manut;
