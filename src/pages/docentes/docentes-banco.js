import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";

const lista = [
  {
    nome: "José Walmir Gonçalves Duque (Coordenador)",
    cv: "http://lattes.cnpq.br/4678097512178887",
  },
  {
    nome: "Adriana da Silva Jacinto",
    cv: "http://lattes.cnpq.br/2481860221007135",
  },
  {
    nome: "Ana Cecília Rodrigues Medeiros",
    cv: "http://lattes.cnpq.br/1940086892227479",
  },
  {
    nome: "Antonio Wellington Sales Rios",
    cv: "http://lattes.cnpq.br/5381625486751504",
  },
  {
    nome: "Carlos Augusto Lombardi Garcia",
    cv: "http://lattes.cnpq.br/4435879023647642",
  },
  {
    nome: "Cláudio Etelvino de Lima",
    cv: "http://lattes.cnpq.br/9330552327454666",
  },
  {
    nome: "Cláudio José Silva Gomes",
    cv: "http://lattes.cnpq.br/8385263738659115",
  },
  {
    nome: "Dercy Félix da Silva",
    cv: "http://lattes.cnpq.br/7911918958263988",
  },
  {
    nome: "Diogo Branquinho Ramos",
    cv: "http://lattes.cnpq.br/2442951597646811",
  },
  {
    nome: "Eduardo Clemente de Medeiros",
    cv: "http://lattes.cnpq.br/6959627044949288",
  },
  {
    nome: "Eduardo Sakaue",
    cv: "http://lattes.cnpq.br/5948825528321491",
  },
  {
    nome: "Emanuel Mineda Carneiro",
    cv: "http://lattes.cnpq.br/3395132054636969",
  },
  {
    nome: "Fabiano Sabha Walczak",
    cv: "http://lattes.cnpq.br/4250738143383384",
  },
  {
    nome: "Fabrício Galendes Marques de Carvalho",
    cv: "http://lattes.cnpq.br/8632801813322469",
  },
  {
    nome: "Fernando Masanori Ashikaga",
    cv: "http://lattes.cnpq.br/3324339924853354",
  },
  {
    nome: "Geraldo José Lombardi de Souza",
    cv: "http://lattes.cnpq.br/0760681088537371",
  },
  {
    nome: "Giuliano Araújo Bertoti",
    cv: "http://lattes.cnpq.br/4377240827813491",
  },
  {
    nome: "Jorge Tadao Matsushima",
    cv: "http://lattes.cnpq.br/1266568094950867",
  },
  {
    nome: "Juliana Forin Pasquini Martinez",
    cv: "http://lattes.cnpq.br/1506784529918492",
  },
  {
    nome: "Kleber Gelli",
    cv: "http://lattes.cnpq.br/1252290199830627",
  },
  {
    nome: "Lise Virgínia Vieira de Azevedo",
    cv: "http://lattes.cnpq.br/7441288591542440",
  },
  {
    nome: "Lucas Gonçalves Nadalete",
    cv: "http://lattes.cnpq.br/1268591658881312",
  },
  {
    nome: "Marcos Allan Ferreira Gonçalves",
    cv: "http://lattes.cnpq.br/9320576884865638",
  },
  {
    nome: "Maria Goreti Lopes Cepinho",
    cv: "http://lattes.cnpq.br/5583930802031762",
  },
  {
    nome: "Nanci de Oliveira",
    cv: "http://lattes.cnpq.br/9817633201761453",
  },
  {
    nome: "Teresinha de Fátima Nogueira",
    cv: "http://lattes.cnpq.br/7384139196438903",
  },
  {
    nome: "Valter João de Sousa",
    cv: "http://lattes.cnpq.br/4037684544757358",
  },
];

const doc_banco = () => (
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
          <p className="subtitulo">BANCO DE DADOS</p>
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

export default doc_banco;
