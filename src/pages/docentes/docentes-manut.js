import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";
import felix from "../../components/images/docentes/felix_arlindo.png";
import ana_cecilia from "../../components/images/docentes/ana_cecilia_rodrigues_medeiros.jpg";
import andre from "../../components/images/docentes/andre_hassessian.png";
import bruno from "../../components/images/docentes/bruno_peruchi_trevisan.jpg";
import danielle from "../../components/images/docentes/danielle_cristina_de_morais_amorim.jpg";
import edmar from "../../components/images/docentes/edmar_de_queiroz_figueiredo.jpg";
import eduardo from "../../components/images/docentes/eduardo_de_castro_faustino_coelho.jpg";
import fabiana from "../../components/images/docentes/fabiana_eloisa_passador.jpg";
import fabricio from "../../components/images/docentes/fabricio_galende.png";
import gerson from "../../components/images/docentes/gerson_carlos.png";
import joares from "../../components/images/docentes/joares_lidovino_dos_reis.jpg";
import luiz from "../../components/images/docentes/luiz_alberto_nolasco_fonseca.jpg";
import marcos from "../../components/images/docentes/marcos_da_silva_e_souza.jpg";
import goreti from "../../components/images/docentes/maria_goreti_lopes_cepinho.jpg";
import nilo_castro from "../../components/images/docentes/nilo_castro_dos_santos.jpg";
import nilo_jeronimo from "../../components/images/docentes/nilo_jeronimo_vieira.jpg";
import renata from "../../components/images/docentes/renata_cristiane_fusverk_da_silva.jpg";
import rita from "../../components/images/docentes/rita_de_cassia_mendonca_sales_contini.jpg";
import rodrigo from "../../components/images/docentes/rodrigo_elias_pereira.jpg";
import santiago from "../../components/images/docentes/santiago_martin_lugones.jpg";

const lista = [
  {
    nome: "Felix Arlindo Strottmann (Coordenador)",
    cv: "http://lattes.cnpq.br/8478784526842018",
    img: felix,
  },
  {
    nome: "Ana Cecília Rodrigues Medeiros",
    cv: "http://lattes.cnpq.br/1940086892227479",
    img: ana_cecilia,
  },
  {
    nome: "André Hassessian",
    cv: "http://lattes.cnpq.br/2457474189473241",
    img: andre,
  },
  {
    nome: "Bruno Peruchi Trevisan",
    cv: "http://lattes.cnpq.br/7753807121855274",
    img: bruno,
  },
  {
    nome: "Danielle Cristina de Morais Amorim",
    cv: "http://lattes.cnpq.br/4540882358553916",
    img: danielle,
  },
  {
    nome: "Edmar de Queiróz Figueiredo",
    cv: "http://lattes.cnpq.br/0167719495243420",
    img: edmar,
  },
  {
    nome: "Eduardo de Castro Faustino Coelho",
    cv: "http://lattes.cnpq.br/6968717905595612",
    img: eduardo,
  },
  {
    nome: "Fabiana Eloisa Passador",
    cv: "http://lattes.cnpq.br/5954754249075851",
    img: fabiana,
  },
  {
    nome: "Fabrício Galende Marques de Carvalho",
    cv: "http://lattes.cnpq.br/8632801813322469",
    img: fabricio,
  },
  {
    nome: "Gerson Carlos Favalli",
    cv: "http://lattes.cnpq.br/5148082193065688",
    img: gerson,
  },
  {
    nome: "Joares Lidovino dos Reis",
    cv: "http://lattes.cnpq.br/7963698498836684",
    img: joares,
  },
  {
    nome: "Luiz Alberto Nolasco Fonseca",
    cv: "http://lattes.cnpq.br/7896838403267274",
    img: luiz,
  },
  {
    nome: "Marcos da Silva e Souza",
    cv: "http://lattes.cnpq.br/8872909500743880",
    img: marcos,
  },
  {
    nome: "Maria Goreti Lopes Cepinho",
    cv: "http://lattes.cnpq.br/5583930802031762",
    img: goreti,
  },
  {
    nome: "Nilo Castro dos Santos",
    cv: "http://lattes.cnpq.br/5514511194095282",
    img: nilo_castro,
  },
  {
    nome: "Nilo Jerônimo Vieira",
    cv: "http://lattes.cnpq.br/3077760545765491",
    img: nilo_jeronimo,
  },
  {
    nome: "Renata Cristiane Fusverk da Silva",
    cv: "http://lattes.cnpq.br/6828777883307945",
    img: renata,
  },
  {
    nome: "Rita de Cássia Mendonça Sales Contini",
    cv: "http://lattes.cnpq.br/2711147975748001",
    img: rita,
  },
  {
    nome: "Rodrigo Elias Pereira",
    cv: "http://lattes.cnpq.br/2815094010702397",
    img: rodrigo,
  },
  {
    nome: "Santiago Martin Lugones",
    cv: "http://lattes.cnpq.br/9549799126833827",
    img: santiago,
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

export default doc_manut;
