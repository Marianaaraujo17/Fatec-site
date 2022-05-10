import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";
import carlos from "../../components/images/docentes/carlos_lineu_de_faria_e_alves.png";
import alfred from "../../components/images/docentes/alfred_makoto_kabayama.jpg";
import ana_cecilia from "../../components/images/docentes/ana_cecilia_rodrigues_medeiros.jpg";
import wellington from "../../components/images/docentes/antonio_wellington.png";
import bruno from "../../components/images/docentes/bruno_peruchi_trevisan.jpg";
import celso from "../../components/images/docentes/celso_de_oliveira.jpg";
import danielle from "../../components/images/docentes/danielle_cristina_de_morais_amorim.jpg";
import dercy from "../../components/images/docentes/dercy_felix_da_silva.jpg";
import edmar from "../../components/images/docentes/edmar_de_queiroz_figueiredo.jpg";
import eduardo_clemente from "../../components/images/docentes/eduardo_clemente_de_medeiros.jpg";
import eduardo_coelho from "../../components/images/docentes/eduardo_de_castro_faustino_coelho.jpg";
import fabiana from "../../components/images/docentes/fabiana_eloisa_passador.jpg";
import fabio from "../../components/images/docentes/fabio_jose_santos_de_oliveira.jpg";
import felix from "../../components/images/docentes/felix_arlindo.png";
import heide from "../../components/images/docentes/heide_heloise.png";
import hudson from "../../components/images/docentes/hudson_alberto.png";
import joares from "../../components/images/docentes/joares_lidovino_dos_reis.jpg";
import jorge from "../../components/images/docentes/jorge_tadao_matsushima.jpg";
import jose from "../../components/images/docentes/jose_jaetis_rosario.jpg";
import leonidas from "../../components/images/docentes/leonidas_lopes.png";
import lucas from "../../components/images/docentes/lucas_giovanetti.jpg";
import luiz from "../../components/images/docentes/luiz_alberto_nolasco_fonseca.jpg";
import marcos from "../../components/images/docentes/marcos_da_silva_e_souza.jpg";
import marcus from "../../components/images/docentes/marcus_vinicius.png";
import marluce from "../../components/images/docentes/marluce_gaviao.png";
import nilo_castro from "../../components/images/docentes/nilo_castro_dos_santos.jpg";
import reinaldo from "../../components/images/docentes/reinaldo_viveiros_carraro.jpg";
import renato from "../../components/images/docentes/renato_galvao_da_silveira_mussi.jpg";
import rita from "../../components/images/docentes/rita_de_cassia_mendonca_sales_contini.jpg";
import rodrigo from "../../components/images/docentes/rodrigo_elias_pereira.jpg";
import valter from "../../components/images/docentes/valter_joao_de_sousa.jpg";

const lista = [
  {
    nome: "Carlos Lineu de Faria e Alves (Coordenador)",
    cv: "http://lattes.cnpq.br/1659520862242303",
    img: carlos,
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
    nome: "Celso de Oliveira",
    cv: "http://lattes.cnpq.br/6515353941367961",
    img: celso,
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
    nome: "Edmar de Queiróz Figueiredo",
    cv: "http://lattes.cnpq.br/0167719495243420",
    img: edmar,
  },
  {
    nome: "Eduardo Clemente de Medeiros",
    cv: "http://lattes.cnpq.br/6959627044949288",
    img: eduardo_clemente,
  },
  {
    nome: "Eduardo de Castro Faustino Coelho",
    cv: "http://lattes.cnpq.br/6968717905595612",
    img: eduardo_coelho,
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
    nome: "Felix Arlindo Strottmann",
    cv: "http://lattes.cnpq.br/8478784526842018",
    img: felix,
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
    nome: "Leônidas Lopes de Melo",
    cv: "http://lattes.cnpq.br/5724312050985045",
    img: leonidas,
  },
  {
    nome: "Lucas Giovanetti",
    cv: "http://lattes.cnpq.br/3093689772701905",
    img: lucas,
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
    nome: "Marcus Vinícius do Nascimento",
    cv: "http://lattes.cnpq.br/3855964357335792",
    img: marcus,
  },
  {
    nome: "Marluce Gavião Sacramento Dias",
    cv: "http://lattes.cnpq.br/6046996954018861",
    img: marluce,
  },
  {
    nome: "Nilo Castro dos Santos",
    cv: "http://lattes.cnpq.br/5514511194095282",
    img: nilo_castro,
  },
  {
    nome: "Reinaldo Viveiros Carraro",
    cv: "http://lattes.cnpq.br/3696825556037490",
    img: reinaldo,
  },
  {
    nome: "Renato Galvão da Silveira Mussi",
    cv: "http://lattes.cnpq.br/8387564352962864",
    img: renato,
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
    nome: "Valter João de Sousa",
    cv: "http://lattes.cnpq.br/4037684544757358",
    img: valter,
  },
];

const doc_pea = () => (
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
          <p className="subtitulo">PROJETOS DE ESTRUTURAS AERONÁUTICAS</p>
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

export default doc_pea;
