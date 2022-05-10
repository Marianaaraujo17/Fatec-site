import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";
import viviane from "../../components/images/docentes/viviane_ribeiro.png";
import alfred from "../../components/images/docentes/alfred_makoto_kabayama.jpg";
import egydio from "../../components/images/docentes/antonio_egydio_sao_tiago_graca.jpg";
import wellington from "../../components/images/docentes/antonio_wellington.png";
import bruno from "../../components/images/docentes/bruno_peruchi_trevisan.jpg";
import cassia from "../../components/images/docentes/cassia_cristina.png";
import danielle from "../../components/images/docentes/danielle_cristina_de_morais_amorim.jpg";
import edmar from "../../components/images/docentes/edmar_de_queiroz_figueiredo.jpg";
import eliane from "../../components/images/docentes/eliane_penha_mergulhao_dias.jpg";
import fabiana from "../../components/images/docentes/fabiana_eloisa_passador.jpg";
import guaraci from "../../components/images/docentes/guaraci_lima_de_morais.jpg";
import heide from "../../components/images/docentes/heide_heloise.png";
import hudson from "../../components/images/docentes/hudson_alberto.png";
import jorge from "../../components/images/docentes/jorge_tadao_matsushima.jpg";
import walmir from "../../components/images/docentes/jose_walmir.png";
import leonidas from "../../components/images/docentes/leonidas_lopes.png";
import lise from "../../components/images/docentes/lise_virginia_vieira_de_azevedo.jpg";
import lucas from "../../components/images/docentes/lucas_giovanetti.jpg";
import maria from "../../components/images/docentes/maria_suelena_santiago.jpg";
import newton from "../../components/images/docentes/newton_eizo_yamada.jpg";
import nilo_castro from "../../components/images/docentes/nilo_castro_dos_santos.jpg";
import nilo_jeronimo from "../../components/images/docentes/nilo_jeronimo_vieira.jpg";
import rita from "../../components/images/docentes/rita_de_cassia_mendonca_sales_contini.jpg";
import roque from "../../components/images/docentes/roque_antonio_de_moura.jpg";
import santiago from "../../components/images/docentes/santiago_martin_lugones.jpg";
import tiago from "../../components/images/docentes/tiago_cristofer_aguzzoli_colombo.jpg";
import valter from "../../components/images/docentes/valter_joao_de_sousa.jpg";

const lista = [
  {
    nome: "Viviane Ribeiro de Siqueira (Coordenadora)",
    cv: "http://lattes.cnpq.br/3319116115200375",
    img: viviane,
  },
  {
    nome: "Alfred Makoto Kabayama",
    cv: "http://lattes.cnpq.br/9538707811469897",
    img: alfred,
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
    nome: "Bruno Peruchi Trevisan",
    cv: "http://lattes.cnpq.br/7753807121855274",
    img: bruno,
  },
  {
    nome: "Cássia Cristina Bordini Cintra",
    cv: "http://lattes.cnpq.br/8943594351295823",
    img: cassia,
  },
  {
    nome: "Danielle Cristina de Morais Amorim",
    cv: "http://lattes.cnpq.br/4540882358553916",
    img: danielle,
  },
  {
    nome: "Dawilmar Guimarães de Araújo",
    cv: "http://lattes.cnpq.br/6096388695371506",
    img: perfil,
  },
  {
    nome: "Edmar de Queiróz Figueiredo",
    cv: "http://lattes.cnpq.br/0167719495243420",
    img: edmar,
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
    nome: "Guaraci Lima de Morais",
    cv: "http://lattes.cnpq.br/2559851146331207",
    img: guaraci,
  },
  {
    nome: "Heide Heloise Bernardi",
    cv: "http://lattes.cnpq.br/7731226311524994",
    img: heide,
  },
  {
    nome: "Hudson Alberto Bode",
    cv: "http://lattes.cnpq.br/3555037033356299",
    img: hudson,
  },
  {
    nome: "Jorge Tadao Matsushima",
    cv: "http://lattes.cnpq.br/1266568094950867",
    img: jorge,
  },
  {
    nome: "José Walmir Gonçalves Duque",
    cv: "http://lattes.cnpq.br/4678097512178887",
    img: walmir,
  },
  {
    nome: "Leônidas Lopes de Melo",
    cv: "http://lattes.cnpq.br/5724312050985045",
    img: leonidas,
  },
  {
    nome: "Lise Virgínia Vieira de Azevedo",
    cv: "http://lattes.cnpq.br/7441288591542440",
    img: lise,
  },
  {
    nome: "Lucas Giovanetti",
    cv: "http://lattes.cnpq.br/3093689772701905",
    img: lucas,
  },
  {
    nome: "Maria Suelena Santiago",
    cv: "http://lattes.cnpq.br/0112548142014331",
    img: maria,
  },
  {
    nome: "Newton Eizo Yamada",
    cv: "http://lattes.cnpq.br/3354330818533896",
    img: newton,
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
    nome: "Rita de Cássia Mendonça Sales Contini",
    cv: "http://lattes.cnpq.br/2711147975748001",
    img: rita,
  },
  {
    nome: "Roque Antônio de Moura",
    cv: "http://lattes.cnpq.br/3410759923244537",
    img: roque,
  },
  {
    nome: "Santiago Martin Lugones",
    cv: "http://lattes.cnpq.br/9549799126833827",
    img: santiago,
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

export default doc_manufatura;
