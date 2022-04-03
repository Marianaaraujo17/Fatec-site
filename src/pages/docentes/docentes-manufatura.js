import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";

const lista = [
  {
    nome: "Viviane Ribeiro de Siqueira (Coordenadora)",
    cv: "http://lattes.cnpq.br/3319116115200375",
  },
  {
    nome: "Alfred Makoto Kabayama",
    cv: "http://lattes.cnpq.br/9538707811469897",
  },
  {
    nome: "Antônio Egydio São Tiago Graça",
    cv: "http://lattes.cnpq.br/0858832006050432",
  },
  {
    nome: "Antonio Wellington Sales Rios",
    cv: "http://lattes.cnpq.br/5381625486751504",
  },
  {
    nome: "Bruno Peruchi Trevisan",
    cv: "http://lattes.cnpq.br/7753807121855274",
  },
  {
    nome: "Cássia Cristina Bordini Cintra",
    cv: "http://lattes.cnpq.br/8943594351295823",
  },
  {
    nome: "Danielle Cristina de Morais Amorim",
    cv: "http://lattes.cnpq.br/4540882358553916",
  },
  {
    nome: "Dawilmar Guimarães de Araújo",
    cv: "http://lattes.cnpq.br/6096388695371506",
  },
  {
    nome: "Edmar de Queiróz Figueiredo",
    cv: "http://lattes.cnpq.br/0167719495243420",
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
    nome: "Guaraci Lima de Morais",
    cv: "http://lattes.cnpq.br/2559851146331207",
  },
  {
    nome: "Heide Heloise Bernardi",
    cv: "http://lattes.cnpq.br/7731226311524994",
  },
  {
    nome: "Hudson Alberto Bode",
    cv: "http://lattes.cnpq.br/3555037033356299",
  },
  {
    nome: "Jorge Tadao Matsushima",
    cv: "http://lattes.cnpq.br/1266568094950867",
  },
  {
    nome: "José Walmir Gonçalves Duque",
    cv: "http://lattes.cnpq.br/4678097512178887",
  },
  {
    nome: "Leônidas Lopes de Melo",
    cv: "http://lattes.cnpq.br/5724312050985045",
  },
  {
    nome: "Lise Virgínia Vieira de Azevedo",
    cv: "http://lattes.cnpq.br/7441288591542440",
  },
  {
    nome: "Lucas Giovanetti",
    cv: "http://lattes.cnpq.br/3093689772701905",
  },
  {
    nome: "Maria Suelena Santiago",
    cv: "http://lattes.cnpq.br/0112548142014331",
  },
  {
    nome: "Newton Eizo Yamada",
    cv: "http://lattes.cnpq.br/3354330818533896",
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
    nome: "Rita de Cássia Mendonça Sales Contini",
    cv: "http://lattes.cnpq.br/2711147975748001",
  },
  {
    nome: "Roque Antônio de Moura",
    cv: "http://lattes.cnpq.br/3410759923244537",
  },
  {
    nome: "Santiago Martin Lugones",
    cv: "http://lattes.cnpq.br/9549799126833827",
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

const doc_manufatura = () => (
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
          <p className="subtitulo">MANUFATURA AVANÇADA</p>
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

export default doc_manufatura;
