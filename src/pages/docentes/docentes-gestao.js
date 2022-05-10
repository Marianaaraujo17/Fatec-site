import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";
import roque from "../../components/images/docentes/roque_antonio_de_moura.jpg";
import adriana from "../../components/images/docentes/adriana_da_silva_jacinto.jpg";
import alfred from "../../components/images/docentes/alfred_makoto_kabayama.jpg";
import ana_cecilia from "../../components/images/docentes/ana_cecilia_rodrigues_medeiros.jpg";
import carlos_eduardo from "../../components/images/docentes/carlos_eduardo_bastos.jpg";
import carlos_lineu from "../../components/images/docentes/carlos_lineu_de_faria_e_alves.png";
import cicero from "../../components/images/docentes/cicero_soares_da_silva.jpg";
import danielle from "../../components/images/docentes/danielle_cristina_de_morais_amorim.jpg";
import dercy from "../../components/images/docentes/dercy_felix_da_silva.jpg";
import eliane from "../../components/images/docentes/eliane_penha_mergulhao_dias.jpg";
import fabiana from "../../components/images/docentes/fabiana_eloisa_passador.jpg";
import fabio from "../../components/images/docentes/fabio_jose_santos_de_oliveira.jpg";
import guaraci from "../../components/images/docentes/guaraci_lima_de_morais.jpg";
import herculano from "../../components/images/docentes/herculano_camargo_ortiz.jpg";
import jean from "../../components/images/docentes/jean_carlos_lourenco_costa.jpg";
import joares from "../../components/images/docentes/joares_lidovino_dos_reis.jpg";
import jorge from "../../components/images/docentes/jorge_tadao_matsushima.jpg";
import jose from "../../components/images/docentes/jose_jaetis_rosario.jpg";
import lise from "../../components/images/docentes/lise_virginia_vieira_de_azevedo.jpg";
import tozi from "../../components/images/docentes/luiz_antonio_tozi.jpg";
import manoel from "../../components/images/docentes/manoel_roman_filho.jpg";
import marcos from "../../components/images/docentes/marcos_da_silva_e_souza.jpg";
import newton from "../../components/images/docentes/newton_eizo_yamada.jpg";
import rodrigo from "../../components/images/docentes/rodrigo_elias_pereira.jpg";
import rubens from "../../components/images/docentes/rubens_barreto_da_silva.jpg";
import santiago from "../../components/images/docentes/santiago_martin_lugones.jpg";
import teresinha from "../../components/images/docentes/teresinha_de_fatima_nogueira.jpg";
import tiago from "../../components/images/docentes/tiago_cristofer_aguzzoli_colombo.jpg";
import valter from "../../components/images/docentes/valter_joao_de_sousa.jpg";

const lista = [
  {
    nome: "Roque Antônio de Moura (Coordenador)",
    cv: "http://lattes.cnpq.br/3410759923244537",
    img: roque,
  },
  {
    nome: "Adriana da Silva Jacinto",
    cv: "http://lattes.cnpq.br/2481860221007135",
    img: adriana,
  },
  {
    nome: "Alfred Makoto Kabayama",
    cv: "http://lattes.cnpq.br/9538707811469897",
    img: alfred,
  },
  {
    nome: "Ana Cecília Rodrigues Medeiros",
    cv: "http://lattes.cnpq.br/1940086892227479",
    img: ana_cecilia,
  },
  {
    nome: "Carlos Eduardo Bastos",
    cv: "http://lattes.cnpq.br/6232367700315612",
    img: carlos_eduardo,
  },
  {
    nome: "Carlos Lineu de Faria e Alves",
    cv: "http://lattes.cnpq.br/1659520862242303",
    img: carlos_lineu,
  },
  {
    nome: "Cícero Soares da Silva",
    cv: "http://lattes.cnpq.br/3341430928298725",
    img: cicero,
  },
  {
    nome: "Danielle Cristina de Morais Amorim",
    cv: "http://lattes.cnpq.br/4540882358553916",
    img: danielle,
  },
  {
    nome: "Dercy Félix da Silva",
    cv: "http://lattes.cnpq.br/7911918958263988",
    img: dercy,
  },
  {
    nome: "Eliane Penha Mergulhão Dias",
    cv: "http://lattes.cnpq.br/8261748179517367",
    img: eliane,
  },
  {
    nome: "Fabiana Eloisa Passador",
    cv: "http://lattes.cnpq.br/5954754249075851",
    img: fabiana,
  },
  {
    nome: "Fábio José Santos de Oliveira",
    cv: "http://lattes.cnpq.br/5665569935426089",
    img: fabio,
  },
  {
    nome: "Guaraci Lima de Morais",
    cv: "http://lattes.cnpq.br/2559851146331207",
    img: guaraci,
  },
  {
    nome: "Herculano Camargo Ortiz",
    cv: "http://lattes.cnpq.br/4185480707901158",
    img: herculano,
  },
  {
    nome: "Jean Carlos Lourenço Costa",
    cv: "http://lattes.cnpq.br/4723982029081265",
    img: jean,
  },
  {
    nome: "Joares Lidovino dos Reis",
    cv: "http://lattes.cnpq.br/7963698498836684",
    img: joares,
  },
  {
    nome: "Jorge Tadao Matsushima",
    cv: "http://lattes.cnpq.br/1266568094950867",
    img: jorge,
  },
  {
    nome: "José Jaétis Rosário",
    cv: "http://lattes.cnpq.br/3722748744687441",
    img: jose,
  },
  {
    nome: "Lise Virgínia Vieira de Azevedo",
    cv: "http://lattes.cnpq.br/7441288591542440",
    img: lise,
  },
  {
    nome: "Luiz Antônio Tozi",
    cv: "http://lattes.cnpq.br/6282935022782310",
    img: tozi,
  },
  {
    nome: "Manoel Roman Filho",
    cv: "http://lattes.cnpq.br/7309259288234165",
    img: manoel,
  },
  {
    nome: "Marcos da Silva e Souza",
    cv: "http://lattes.cnpq.br/8872909500743880",
    img: marcos,
  },
  {
    nome: "Newton Eizo Yamada",
    cv: "http://lattes.cnpq.br/3354330818533896",
    img: newton,
  },
  {
    nome: "Rodrigo Elias Pereira",
    cv: "http://lattes.cnpq.br/2815094010702397",
    img: rodrigo,
  },
  {
    nome: "Rubens Barreto da Silva",
    cv: "http://lattes.cnpq.br/6631073215748483",
    img: rubens,
  },
  {
    nome: "Santiago Martin Lugones",
    cv: "http://lattes.cnpq.br/9549799126833827",
    img: santiago,
  },
  {
    nome: "Teresinha de Fátima Nogueira",
    cv: "http://lattes.cnpq.br/7384139196438903",
    img: teresinha,
  },
  {
    nome: "Tiago Cristofer Aguzzoli Colombo",
    cv: "http://lattes.cnpq.br/5386299544469271",
    img: tiago,
  },
  {
    nome: "Valter João de Sousa",
    cv: "http://lattes.cnpq.br/4037684544757358",
    img: valter,
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

export default doc_gestao;
