import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";
import walmir from "../../components/images/docentes/jose_walmir.png";
import adriana from "../../components/images/docentes/adriana_da_silva_jacinto.jpg";
import ana_cecilia from "../../components/images/docentes/ana_cecilia_rodrigues_medeiros.jpg";
import wellington from "../../components/images/docentes/antonio_wellington.png";
import carlos from "../../components/images/docentes/carlos_augusto_lombardi_garcia.jpg";
import claudio from "../../components/images/docentes/claudio_etelvino.png";
import dercy from "../../components/images/docentes/dercy_felix_da_silva.jpg";
import diogo from "../../components/images/docentes/diogo_branquinho_ramos.jpg";
import eduardo from "../../components/images/docentes/eduardo_clemente_de_medeiros.jpg";
import sakaue from "../../components/images/docentes/eduardo_sakaue.jpg";
import mineda from "../../components/images/docentes/emanuel_mineda.png";
import sabha from "../../components/images/docentes/fabiano_sabha_walczak.jpg";
import fabricio from "../../components/images/docentes/fabricio_galende.png";
import masanori from "../../components/images/docentes/fernando_masanori.png";
import geraldo from "../../components/images/docentes/geraldo_jose_lombardi_de_souza.jpg";
import giuliano from "../../components/images/docentes/giuliano.png";
import jorge from "../../components/images/docentes/jorge_tadao_matsushima.jpg";
import juliana from "../../components/images/docentes/juliana_forin.png";
import lise from "../../components/images/docentes/lise_virginia_vieira_de_azevedo.jpg";
import lucas from "../../components/images/docentes/lucas_goncalves_nadalete.jpg";
import marcos from "../../components/images/docentes/marcos_allan_ferreira_goncalves.jpg";
import goreti from "../../components/images/docentes/maria_goreti_lopes_cepinho.jpg";
import nanci from "../../components/images/docentes/nanci_oliveira.png";
import teresinha from "../../components/images/docentes/teresinha_de_fatima_nogueira.jpg";
import valter from "../../components/images/docentes/valter_joao_de_sousa.jpg";

const lista = [
  {
    nome: "José Walmir Gonçalves Duque (Coordenador)",
    cv: "http://lattes.cnpq.br/4678097512178887",
    img: walmir,
  },
  {
    nome: "Adriana da Silva Jacinto",
    cv: "http://lattes.cnpq.br/2481860221007135",
    img: adriana,
  },
  {
    nome: "Ana Cecília Rodrigues Medeiros",
    cv: "http://lattes.cnpq.br/1940086892227479",
    img: ana_cecilia,
  },
  {
    nome: "Antonio Wellington Sales Rios",
    cv: "http://lattes.cnpq.br/5381625486751504",
    img: wellington,
  },
  {
    nome: "Carlos Augusto Lombardi Garcia",
    cv: "http://lattes.cnpq.br/4435879023647642",
    img: carlos,
  },
  {
    nome: "Cláudio Etelvino de Lima",
    cv: "http://lattes.cnpq.br/9330552327454666",
    img: claudio,
  },
  {
    nome: "Cláudio José Silva Gomes",
    cv: "http://lattes.cnpq.br/8385263738659115",
    img: perfil,
  },
  {
    nome: "Dercy Félix da Silva",
    cv: "http://lattes.cnpq.br/7911918958263988",
    img: dercy,
  },
  {
    nome: "Diogo Branquinho Ramos",
    cv: "http://lattes.cnpq.br/2442951597646811",
    img: diogo,
  },
  {
    nome: "Eduardo Clemente de Medeiros",
    cv: "http://lattes.cnpq.br/6959627044949288",
    img: eduardo,
  },
  {
    nome: "Eduardo Sakaue",
    cv: "http://lattes.cnpq.br/5948825528321491",
    img: sakaue,
  },
  {
    nome: "Emanuel Mineda Carneiro",
    cv: "http://lattes.cnpq.br/3395132054636969",
    img: mineda,
  },
  {
    nome: "Fabiano Sabha Walczak",
    cv: "http://lattes.cnpq.br/4250738143383384",
    img: sabha,
  },
  {
    nome: "Fabrício Galendes Marques de Carvalho",
    cv: "http://lattes.cnpq.br/8632801813322469",
    img: fabricio,
  },
  {
    nome: "Fernando Masanori Ashikaga",
    cv: "http://lattes.cnpq.br/3324339924853354",
    img: masanori,
  },
  {
    nome: "Geraldo José Lombardi de Souza",
    cv: "http://lattes.cnpq.br/0760681088537371",
    img: geraldo,
  },
  {
    nome: "Giuliano Araújo Bertoti",
    cv: "http://lattes.cnpq.br/4377240827813491",
    img: giuliano,
  },
  {
    nome: "Jorge Tadao Matsushima",
    cv: "http://lattes.cnpq.br/1266568094950867",
    img: jorge,
  },
  {
    nome: "Juliana Forin Pasquini Martinez",
    cv: "http://lattes.cnpq.br/1506784529918492",
    img: juliana,
  },
  {
    nome: "Kleber Gelli",
    cv: "http://lattes.cnpq.br/1252290199830627",
    img: perfil,
  },
  {
    nome: "Lise Virgínia Vieira de Azevedo",
    cv: "http://lattes.cnpq.br/7441288591542440",
    img: lise,
  },
  {
    nome: "Lucas Gonçalves Nadalete",
    cv: "http://lattes.cnpq.br/1268591658881312",
    img: lucas,
  },
  {
    nome: "Marcos Allan Ferreira Gonçalves",
    cv: "http://lattes.cnpq.br/9320576884865638",
    img: marcos,
  },
  {
    nome: "Maria Goreti Lopes Cepinho",
    cv: "http://lattes.cnpq.br/5583930802031762",
    img: goreti,
  },
  {
    nome: "Nanci de Oliveira",
    cv: "http://lattes.cnpq.br/9817633201761453",
    img: nanci,
  },
  {
    nome: "Teresinha de Fátima Nogueira",
    cv: "http://lattes.cnpq.br/7384139196438903",
    img: teresinha,
  },
  {
    nome: "Valter João de Sousa",
    cv: "http://lattes.cnpq.br/4037684544757358",
    img: valter,
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

export default doc_banco;
