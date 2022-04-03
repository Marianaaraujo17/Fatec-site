import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";

const lista = [
  {
    nome: "Reinaldo Fagundes dos Santos (Coordenador)",
    cv: "http://lattes.cnpq.br/4671561926234240",
  },
  {
    nome: "Adriana Bezerra da Silva",
    cv: "http://lattes.cnpq.br/6075698780438999",
  },
  {
    nome: "Adriana da Silva Jacinto",
    cv: "http://lattes.cnpq.br/2481860221007135",
  },
  {
    nome: "Agliberto do Socorro Chagas",
    cv: "http://lattes.cnpq.br/9026223443410477",
  },
  {
    nome: "Ana Maria Pereira",
    cv: "http://lattes.cnpq.br/6169493464523507",
  },
  {
    nome: "Antônio Egydio São Tiago Graça",
    cv: "http://lattes.cnpq.br/0858832006050432",
  },
  {
    nome: "Carlos Eduardo Bastos",
    cv: "http://lattes.cnpq.br/6232367700315612",
  },
  {
    nome: "Cássia Cristina Bordini Cintra",
    cv: "http://lattes.cnpq.br/8943594351295823",
  },
  {
    nome: "Cícero Soares da Silva",
    cv: "http://lattes.cnpq.br/3341430928298725",
  },
  {
    nome: "Cláudio Etelvino de Lima",
    cv: "http://lattes.cnpq.br/9330552327454666",
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
    nome: "Geraldo José Lombardi de Souza",
    cv: "http://lattes.cnpq.br/0760681088537371",
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
    nome: "Marcus Vinícius do Nascimento",
    cv: "http://lattes.cnpq.br/3855964357335792",
  },
  {
    nome: "Maria Suelena Santiago",
    cv: "http://lattes.cnpq.br/0112548142014331",
  },
  {
    nome: "Marluce Gavião Sacramento Dias",
    cv: "http://lattes.cnpq.br/6046996954018861",
  },
  {
    nome: "Nanci de Oliveira",
    cv: "http://lattes.cnpq.br/9817633201761453",
  },
  {
    nome: "Newton Eizo Yamada",
    cv: "http://lattes.cnpq.br/3354330818533896",
  },
  {
    nome: "Renata Cristiane Fusverk da Silva",
    cv: "http://lattes.cnpq.br/6828777883307945",
  },
  {
    nome: "Reinaldo Viveiros Carraro",
    cv: "http://lattes.cnpq.br/3696825556037490",
  },
  {
    nome: "Roque Antônio de Moura",
    cv: "http://lattes.cnpq.br/3410759923244537",
  },
  {
    nome: "Rubens Barreto da Silva",
    cv: "http://lattes.cnpq.br/6631073215748483",
  },
  {
    nome: "Sanzara Nhiaaia Jardim Costa Hassmann",
    cv: "http://lattes.cnpq.br/7854426214121768",
  },
  {
    nome: "Teresinha de Fátima Nogueira",
    cv: "http://lattes.cnpq.br/7384139196438903",
  },
  {
    nome: "Valter João de Sousa",
    cv: "http://lattes.cnpq.br/4037684544757358",
  },
  {
    nome: "Vera Lucia Monteiro",
    cv: "http://lattes.cnpq.br/0410753831680271",
  },
];

const doc_logistica = () => (
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
          <p className="subtitulo">LOGÍSTICA</p>
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

export default doc_logistica;
