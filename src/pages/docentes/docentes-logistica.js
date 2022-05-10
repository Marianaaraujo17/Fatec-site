import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";
import reinaldo_fagundes from "../../components/images/docentes/reinaldo_fagundes.png";
import adriana_bezerra from "../../components/images/docentes/adriana_bezerra.png";
import adriana from "../../components/images/docentes/adriana_da_silva_jacinto.jpg";
import agliberto from "../../components/images/docentes/agliberto_do_socorro_chagas.jpg";
import ana_maria from "../../components/images/docentes/ana_maria_pereira.jpg";
import egydio from "../../components/images/docentes/antonio_egydio_sao_tiago_graca.jpg";
import carlos_eduardo from "../../components/images/docentes/carlos_eduardo_bastos.jpg";
import cassia from "../../components/images/docentes/cassia_cristina.png";
import cicero from "../../components/images/docentes/cicero_soares_da_silva.jpg";
import claudio from "../../components/images/docentes/claudio_etelvino.png";
import dercy from "../../components/images/docentes/dercy_felix_da_silva.jpg";
import eliane from "../../components/images/docentes/eliane_penha_mergulhao_dias.jpg";
import geraldo from "../../components/images/docentes/geraldo_jose_lombardi_de_souza.jpg";
import guaraci from "../../components/images/docentes/guaraci_lima_de_morais.jpg";
import herculano from "../../components/images/docentes/herculano_camargo_ortiz.jpg";
import jean from "../../components/images/docentes/jean_carlos_lourenco_costa.jpg";
import jose from "../../components/images/docentes/jose_jaetis_rosario.jpg";
import lise from "../../components/images/docentes/lise_virginia_vieira_de_azevedo.jpg";
import tozi from "../../components/images/docentes/luiz_antonio_tozi.jpg";
import manoel from "../../components/images/docentes/manoel_roman_filho.jpg";
import marcus from "../../components/images/docentes/marcus_vinicius.png";
import maria from "../../components/images/docentes/maria_suelena_santiago.jpg";
import marluce from "../../components/images/docentes/marluce_gaviao.png";
import nanci from "../../components/images/docentes/nanci_oliveira.png";
import newton from "../../components/images/docentes/newton_eizo_yamada.jpg";
import renata from "../../components/images/docentes/renata_cristiane_fusverk_da_silva.jpg";
import reinaldo_viveiros from "../../components/images/docentes/reinaldo_viveiros_carraro.jpg";
import roque from "../../components/images/docentes/roque_antonio_de_moura.jpg";
import rubens from "../../components/images/docentes/rubens_barreto_da_silva.jpg";
import sanzara from "../../components/images/docentes/sanzara_nhiaaia_jardim_costa_hassmann.jpg";
import teresinha from "../../components/images/docentes/teresinha_de_fatima_nogueira.jpg";
import valter from "../../components/images/docentes/valter_joao_de_sousa.jpg";
import vera from "../../components/images/docentes/vera_lucia.png";

const lista = [
  {
    nome: "Reinaldo Fagundes dos Santos (Coordenador)",
    cv: "http://lattes.cnpq.br/4671561926234240",
    img: reinaldo_fagundes,
  },
  {
    nome: "Adriana Bezerra da Silva",
    cv: "http://lattes.cnpq.br/6075698780438999",
    img: adriana_bezerra,
  },
  {
    nome: "Adriana da Silva Jacinto",
    cv: "http://lattes.cnpq.br/2481860221007135",
    img: adriana,
  },
  {
    nome: "Agliberto do Socorro Chagas",
    cv: "http://lattes.cnpq.br/9026223443410477",
    img: agliberto,
  },
  {
    nome: "Ana Maria Pereira",
    cv: "http://lattes.cnpq.br/6169493464523507",
    img: ana_maria,
  },
  {
    nome: "Antônio Egydio São Tiago Graça",
    cv: "http://lattes.cnpq.br/0858832006050432",
    img: egydio,
  },
  {
    nome: "Carlos Eduardo Bastos",
    cv: "http://lattes.cnpq.br/6232367700315612",
    img: carlos_eduardo,
  },
  {
    nome: "Cássia Cristina Bordini Cintra",
    cv: "http://lattes.cnpq.br/8943594351295823",
    img: cassia,
  },
  {
    nome: "Cícero Soares da Silva",
    cv: "http://lattes.cnpq.br/3341430928298725",
    img: cicero,
  },
  {
    nome: "Cláudio Etelvino de Lima",
    cv: "http://lattes.cnpq.br/9330552327454666",
    img: claudio,
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
    nome: "Geraldo José Lombardi de Souza",
    cv: "http://lattes.cnpq.br/0760681088537371",
    img: geraldo,
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
    nome: "Marcus Vinícius do Nascimento",
    cv: "http://lattes.cnpq.br/3855964357335792",
    img: marcus,
  },
  {
    nome: "Maria Suelena Santiago",
    cv: "http://lattes.cnpq.br/0112548142014331",
    img: maria,
  },
  {
    nome: "Marluce Gavião Sacramento Dias",
    cv: "http://lattes.cnpq.br/6046996954018861",
    img: marluce,
  },
  {
    nome: "Nanci de Oliveira",
    cv: "http://lattes.cnpq.br/9817633201761453",
    img: nanci,
  },
  {
    nome: "Newton Eizo Yamada",
    cv: "http://lattes.cnpq.br/3354330818533896",
    img: newton,
  },
  {
    nome: "Renata Cristiane Fusverk da Silva",
    cv: "http://lattes.cnpq.br/6828777883307945",
    img: renata,
  },
  {
    nome: "Reinaldo Viveiros Carraro",
    cv: "http://lattes.cnpq.br/3696825556037490",
    img: reinaldo_viveiros,
  },
  {
    nome: "Roque Antônio de Moura",
    cv: "http://lattes.cnpq.br/3410759923244537",
    img: roque,
  },
  {
    nome: "Rubens Barreto da Silva",
    cv: "http://lattes.cnpq.br/6631073215748483",
    img: rubens,
  },
  {
    nome: "Sanzara Nhiaaia Jardim Costa Hassmann",
    cv: "http://lattes.cnpq.br/7854426214121768",
    img: sanzara,
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
  {
    nome: "Vera Lucia Monteiro",
    cv: "http://lattes.cnpq.br/0410753831680271",
    img: vera,
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

export default doc_logistica;
