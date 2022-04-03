import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";

const lista = [
  {
    nome: "Roque Antônio de Moura (Coordenador)",
    cv: "http://lattes.cnpq.br/3410759923244537",
  },
  {
    nome: "Adriana da Silva Jacinto",
    cv: "http://lattes.cnpq.br/2481860221007135",
  },
  {
    nome: "Alfred Makoto Kabayama",
    cv: "http://lattes.cnpq.br/9538707811469897",
  },
  {
    nome: "Ana Cecília Rodrigues Medeiros",
    cv: "http://lattes.cnpq.br/1940086892227479",
  },
  {
    nome: "Carlos Eduardo Bastos",
    cv: "http://lattes.cnpq.br/6232367700315612",
  },
  {
    nome: "Carlos Lineu de Faria e Alves",
    cv: "http://lattes.cnpq.br/1659520862242303",
  },
  {
    nome: "Cícero Soares da Silva",
    cv: "http://lattes.cnpq.br/3341430928298725",
  },
  {
    nome: "Danielle Cristina de Morais Amorim",
    cv: "http://lattes.cnpq.br/4540882358553916",
  },
  {
    nome: "Dercy Félix da Silva",
    cv: "http://lattes.cnpq.br/7911918958263988",
  },
  {
    nome: "Eliane Penha Mergulhão Dias",
    cv: "http://lattes.cnpq.br/8261748179517367",
  },
  {
    nome: "Fabiana Eloisa Passador",
    cv: "http://lattes.cnpq.br/5954754249075851",
  },
  {
    nome: "Fábio José Santos de Oliveira",
    cv: "http://lattes.cnpq.br/5665569935426089",
  },
  {
    nome: "Guaraci Lima de Morais",
    cv: "http://lattes.cnpq.br/2559851146331207",
  },
  {
    nome: "Herculano Camargo Ortiz",
    cv: "http://lattes.cnpq.br/4185480707901158",
  },
  {
    nome: "Jean Carlos Lourenço Costa",
    cv: "http://lattes.cnpq.br/4723982029081265",
  },
  {
    nome: "Joares Lidovino dos Reis",
    cv: "http://lattes.cnpq.br/7963698498836684",
  },
  {
    nome: "Jorge Tadao Matsushima",
    cv: "http://lattes.cnpq.br/1266568094950867",
  },
  {
    nome: "José Jaétis Rosário",
    cv: "http://lattes.cnpq.br/3722748744687441",
  },
  {
    nome: "Lise Virgínia Vieira de Azevedo",
    cv: "http://lattes.cnpq.br/7441288591542440",
  },
  {
    nome: "Luiz Antônio Tozi",
    cv: "http://lattes.cnpq.br/6282935022782310",
  },
  {
    nome: "Manoel Roman Filho",
    cv: "http://lattes.cnpq.br/7309259288234165",
  },
  {
    nome: "Marcos da Silva e Souza",
    cv: "http://lattes.cnpq.br/8872909500743880",
  },
  {
    nome: "Newton Eizo Yamada",
    cv: "http://lattes.cnpq.br/3354330818533896",
  },
  {
    nome: "Rodrigo Elias Pereira",
    cv: "http://lattes.cnpq.br/2815094010702397",
  },
  {
    nome: "Rubens Barreto da Silva",
    cv: "http://lattes.cnpq.br/6631073215748483",
  },
  {
    nome: "Santiago Martin Lugones",
    cv: "http://lattes.cnpq.br/9549799126833827",
  },
  {
    nome: "Teresinha de Fátima Nogueira",
    cv: "http://lattes.cnpq.br/7384139196438903",
  },
  {
    nome: "Tiago Cristofer Aguzzoli Colombo",
    cv: "http://lattes.cnpq.br/5386299544469271",
  },
  {
    nome: "Valter João de Sousa",
    cv: "http://lattes.cnpq.br/4037684544757358",
  },
];

const doc_gestao = () => (
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
          <p className="subtitulo">GESTÃO DA PRODUÇÃO INDUSTRIAL</p>
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

export default doc_gestao;
