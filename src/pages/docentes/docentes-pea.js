import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";

const lista = [
  {
    nome: "Carlos Lineu de Faria e Alves (Coordenador)",
    cv: "http://lattes.cnpq.br/1659520862242303",
  },
  {
    nome: "Alfred Makoto Kabayama",
    cv: "http://lattes.cnpq.br/9538707811469897",
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
    nome: "Bruno Peruchi Trevisan",
    cv: "http://lattes.cnpq.br/7753807121855274",
  },
  {
    nome: "Celso de Oliveira",
    cv: "http://lattes.cnpq.br/6515353941367961",
  },
  {
    nome: "Danielle Cristina de Morais Amorim",
    cv: "http://lattes.cnpq.br/4540882358553916",
  },
  {
    nome: "Dercy Félix da Silva",
    cv: "http://lattes.cnpq.br/7911918958263988",
  },
  {
    nome: "Edmar de Queiróz Figueiredo",
    cv: "http://lattes.cnpq.br/0167719495243420",
  },
  {
    nome: "Eduardo Clemente de Medeiros",
    cv: "http://lattes.cnpq.br/6959627044949288",
  },
  {
    nome: "Eduardo de Castro Faustino Coelho",
    cv: "http://lattes.cnpq.br/6968717905595612",
  },
  {
    nome: "Fabiana Eloisa Passador",
    cv: "http://lattes.cnpq.br/5954754249075851",
  },
  {
    nome: "Fábio José Santos de Oliveira",
    cv: "http://lattes.cnpq.br/5665569935426089",
  },
  {
    nome: "Felix Arlindo Strottmann",
    cv: "http://lattes.cnpq.br/8478784526842018",
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
    nome: "Joares Lidovino dos Reis",
    cv: "http://lattes.cnpq.br/7963698498836684",
  },
  {
    nome: "Jorge Tadao Matsushima",
    cv: "http://lattes.cnpq.br/1266568094950867",
  },
  {
    nome: "José Jaétis Rosário",
    cv: "http://lattes.cnpq.br/3722748744687441",
  },
  {
    nome: "Leônidas Lopes de Melo",
    cv: "http://lattes.cnpq.br/5724312050985045",
  },
  {
    nome: "Lucas Giovanetti",
    cv: "http://lattes.cnpq.br/3093689772701905",
  },
  {
    nome: "Luiz Alberto Nolasco Fonseca",
    cv: "http://lattes.cnpq.br/7896838403267274",
  },
  {
    nome: "Marcos da Silva e Souza",
    cv: "http://lattes.cnpq.br/8872909500743880",
  },
  {
    nome: "Marcus Vinícius do Nascimento",
    cv: "hhttp://lattes.cnpq.br/3855964357335792",
  },
  {
    nome: "Marluce Gavião Sacramento Dias",
    cv: "http://lattes.cnpq.br/6046996954018861",
  },
  {
    nome: "Nilo Castro dos Santos",
    cv: "http://lattes.cnpq.br/5514511194095282",
  },
  {
    nome: "Reinaldo Viveiros Carraro",
    cv: "http://lattes.cnpq.br/3696825556037490",
  },
  {
    nome: "Renato Galvão da Silveira Mussi",
    cv: "http://lattes.cnpq.br/8387564352962864",
  },
  {
    nome: "Rita de Cássia Mendonça Sales Contini",
    cv: "http://lattes.cnpq.br/2711147975748001",
  },
  {
    nome: "Rodrigo Elias Pereira",
    cv: "http://lattes.cnpq.br/2815094010702397",
  },
  {
    nome: "Valter João de Sousa",
    cv: "http://lattes.cnpq.br/4037684544757358",
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

export default doc_pea;
