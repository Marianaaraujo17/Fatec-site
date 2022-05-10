import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";
import sabha from "../../components/images/docentes/fabiano_sabha_walczak.jpg";
import agliberto from "../../components/images/docentes/agliberto_do_socorro_chagas.jpg";
import ana_cecilia from "../../components/images/docentes/ana_cecilia_rodrigues_medeiros.jpg";
import egydio from "../../components/images/docentes/antonio_egydio_sao_tiago_graca.jpg";
import wellington from "../../components/images/docentes/antonio_wellington.png";
import cicero from "../../components/images/docentes/cicero_soares_da_silva.jpg";
import claudio from "../../components/images/docentes/claudio_etelvino.png";
import dercy from "../../components/images/docentes/dercy_felix_da_silva.jpg";
import diogo from "../../components/images/docentes/diogo_branquinho_ramos.jpg";
import sakaue from "../../components/images/docentes/eduardo_sakaue.jpg";
import eliane from "../../components/images/docentes/eliane_penha_mergulhao_dias.jpg";
import mineda from "../../components/images/docentes/emanuel_mineda.png";
import fabricio from "../../components/images/docentes/fabricio_galende.png";
import masanori from "../../components/images/docentes/fernando_masanori.png";
import geraldo from "../../components/images/docentes/geraldo_jose_lombardi_de_souza.jpg";
import gerson from "../../components/images/docentes/gerson_da_penha_neto.jpg";
import giuliano from "../../components/images/docentes/giuliano.png";
import jean from "../../components/images/docentes/jean_carlos_lourenco_costa.jpg";
import joares from "../../components/images/docentes/joares_lidovino_dos_reis.jpg";
import walmir from "../../components/images/docentes/jose_walmir.png";
import juliana from "../../components/images/docentes/juliana_forin.png";
import marluce from "../../components/images/docentes/marluce_gaviao.png";
import nanci from "../../components/images/docentes/nanci_oliveira.png";
import nilo from "../../components/images/docentes/nilo_jeronimo_vieira.jpg";
import arakaki from "../../components/images/docentes/reinaldo_gen_ichiro_arakaki.jpg";
import renata from "../../components/images/docentes/renata_cristiane_fusverk_da_silva.jpg";
import valter from "../../components/images/docentes/valter_joao_de_sousa.jpg";
import "./docentes-geral.css";

const lista = [
  {
    nome: "Fabiano Sabha Walczak (Coordenador)",
    cv: "http://lattes.cnpq.br/4250738143383384",
    img: sabha,
  },
  {
    nome: "Agliberto do Socorro Chagas",
    cv: "http://lattes.cnpq.br/9026223443410477",
    img: agliberto,
  },
  {
    nome: "Ana Cecília Rodrigues Medeiros",
    cv: "http://lattes.cnpq.br/1940086892227479",
    img: ana_cecilia,
  },
  {
    nome: "Antônio Egydio São Tiago Graça",
    cv: "http://lattes.cnpq.br/0858832006050432",
    img: egydio,
  },
  {
    nome: "Antonio Wellington Sales Rios",
    cv: "http://lattes.cnpq.br/5381625486751504",
    img: wellington,
  },
  {
    nome: "Arley Ferreira de Souza",
    cv: "http://lattes.cnpq.br/3013376353724630",
    img: perfil,
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
    nome: "Dawilmar Guimarães de Araújo",
    cv: "http://lattes.cnpq.br/6096388695371506",
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
    nome: "Eduardo Sakaue",
    cv: "http://lattes.cnpq.br/5948825528321491",
    img: sakaue,
  },
  {
    nome: "Eliane Penha Mergulhão Dias",
    cv: "http://lattes.cnpq.br/8261748179517367",
    img: eliane,
  },
  {
    nome: "Emanuel Mineda Carneiro",
    cv: "http://lattes.cnpq.br/3395132054636969",
    img: mineda,
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
    nome: "Gerson da Penha Neto",
    cv: "http://lattes.cnpq.br/9441903297380731",
    img: gerson,
  },
  {
    nome: "Giuliano Araújo Bertoti",
    cv: "http://lattes.cnpq.br/4377240827813491",
    img: giuliano,
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
    nome: "José Walmir Gonçalves Duque",
    cv: "http://lattes.cnpq.br/4678097512178887",
    img: walmir,
  },
  {
    nome: "Juliana Forin Pasquini Martinez",
    cv: "http://lattes.cnpq.br/1506784529918492",
    img: juliana,
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
    nome: "Nilo Jerônimo Vieira",
    cv: "http://lattes.cnpq.br/3077760545765491",
    img: nilo,
  },
  {
    nome: "Reinaldo Gen Ichiro Arakaki",
    cv: "http://lattes.cnpq.br/2075406788034578",
    img: arakaki,
  },
  {
    nome: "Renata Cristiane Fusverk da Silva",
    cv: "http://lattes.cnpq.br/6828777883307945",
    img: renata,
  },
  {
    nome: "Valter João de Sousa",
    cv: "http://lattes.cnpq.br/4037684544757358",
    img: valter,
  },
];

const doc_ads = () => (
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
          <p className="subtitulo">ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</p>
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
          <Col className="doc_card">
            <a className="nome" target="_blank" href={obj.cv}>
              <Image fluid src={obj.img} width={150} height={150}></Image>
              <p style={{ fontSize: "23px" }}>{obj.nome}</p>
            </a>
          </Col>
        ))}
      </Row>
    </Container>

    <Footer />
  </App>
);

export default doc_ads;
