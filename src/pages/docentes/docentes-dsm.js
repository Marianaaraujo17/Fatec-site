import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";
import arakaki from "../../components/images/docentes/reinaldo_gen_ichiro_arakaki.jpg";
import claudio from "../../components/images/docentes/claudio_etelvino.png";
import sabha from "../../components/images/docentes/fabiano_sabha_walczak.jpg";
import fabricio from "../../components/images/docentes/fabricio_galende.png";
import masanori from "../../components/images/docentes/fernando_masanori.png";
import gerson from "../../components/images/docentes/gerson_da_penha_neto.jpg";
import jean from "../../components/images/docentes/jean_carlos_lourenco_costa.jpg";
import walmir from "../../components/images/docentes/jose_walmir.png";
import juliana from "../../components/images/docentes/juliana_forin.png";

const lista = [
  {
    nome: "Reinaldo Gen Ichiro Arakaki (Coordenador)",
    cv: "http://lattes.cnpq.br/2075406788034578",
    img: arakaki,
  },
  {
    nome: "Cláudio Etelvino de Lima",
    cv: "http://lattes.cnpq.br/9330552327454666",
    img: claudio,
  },
  {
    nome: "Fabiano Sabha Walczak",
    cv: "http://lattes.cnpq.br/8632801813322469",
    img: sabha,
  },
  {
    nome: "Fabrício Galende Marques de Carvalho",
    cv: "http://lattes.cnpq.br/8632801813322469",
    img: fabricio,
  },
  {
    nome: "Fernando Masanori Ashikaga",
    cv: "http://lattes.cnpq.br/3324339924853354",
    img: masanori,
  },
  {
    nome: "Gerson da Penha Neto",
    cv: "http://lattes.cnpq.br/9441903297380731",
    img: gerson,
  },
  {
    nome: "Jean Carlos Lourenço Costa",
    cv: "http://lattes.cnpq.br/4723982029081265",
    img: jean,
  },
  {
    nome: "José Walmir Gonçalves Duque",
    cv: "http://lattes.cnpq.br/4678097512178887",
    img: walmir,
  },
  {
    nome: "Juliana Forin Pasquini Martinez",
    cv: "http://lattes.cnpq.br/1506784529918492",
    img: juliana,
  },
];

const doc_dsm = () => (
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
          <p className="subtitulo">
            DESENVOLVIMENTO DE SOFTWARE MULTIPLATAFORMA
          </p>
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
      <Row xs={1} md={4} className="g-4">
        {lista.map((obj) => (
          <Col>
            <a className="nome" target="_blank" href={obj.cv}>
              <Card className="doc_card">
                <Card.Body>
                  <Card.Title>
                    <Image fluid src={obj.img} width={150} height={150}></Image>
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

export default doc_dsm;
