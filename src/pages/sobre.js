import React from "react";
import Footer from "../components/footer";
import App from "../containers/App";
import { Card, CardGroup, Container, Row, Col } from "react-bootstrap";
import "./sobre.css";
import { BiLinkExternal } from "react-icons/bi";

const sobre = () => (
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
          <p className="sobre-titulo">SOBRE</p>
        </Col>
      </Row>
    </Container>

    <Container style={{ marginBottom: "50px" }}>
      <Row>
        <Col md={{ span: 12 }}>
          <CardGroup>
            <Card style={{ marginRight: "50px" }}>
              <Card.Body>
                <Card.Title className="sobre-card-titulo">
                  CEETEPS - Centro Estadual de Educação Tecnológica Paula Souza
                </Card.Title>
                <Card.Text className="sobre-card-descricao">
                  <p>
                    O{" "}
                    <a className="sobre-link" href="https://www.cps.sp.gov.br">
                      Centro Paula Souza
                    </a>{" "}
                    administra as Faculdades de Tecnologia (Fatecs) e Escolas
                    Técnicas Estaduais (Etecs) nas cidades do Estado de São
                    Paulo.
                  </p>
                </Card.Text>
                <Card.Text className="sobre-card-descricao">
                  As Etec atendem mais de 100 mil estudantes nos níveis de
                  ensino Médio e Técnico, para os setores Industrial,
                  Agropecuário e de Serviços, em 78 habilitações.
                </Card.Text>
                <Card.Text className="sobre-card-descricao">
                  Nas Fatecs, mais de 20 mil alunos estão distribuídos em vários
                  cursos Superiores de Graduação.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title className="sobre-card-titulo">
                  Faculdade de Tecnologia de São José dos Campos
                </Card.Title>
                <Card.Text className="sobre-card-descricao">
                  A Faculdade de Tecnologia de São José dos Campos foi criada no
                  dia 2 de março de 2006 conforme o Decreto Nº 50.580 publicado
                  no Diário Oficial:
                </Card.Text>
                <Card.Text className="sobre-card-descricao-citacao">
                  ❝ DECRETO Nº 50.580 DE 2 DE MARÇO DE 2006 Cria a Faculdade de
                  Tecnologia de São José dos Campos, como Unidade de Ensino do
                  Centro Estadual de Educação Tecnológica Paula Souza - CEETEPS
                  e dá providências correlatas. ❞
                </Card.Text>
                <Card.Text className="sobre-card-descricao">
                  A Fatec é uma Faculdade Pública Estadual e todos os cursos
                  oferecidos são gratuitos.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>

    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col style={{ marginBottom: "30px" }} md={{ span: 12 }}>
          <Card>
            <Card.Body>
              <Card.Title className="sobre-card-titulo">
                O Curso de Tecnologia
              </Card.Title>
              <Card.Text className="sobre-card-descricao">
                De uma forma geral a formação do Tecnólogo, além de aspectos
                técnicos, envolve também, uma base de caráter social, ético,
                filosófico e ambiental que faz deste cidadão um profissional
                ciente de sua inserção e responsabilidades no meio social que
                integra.
              </Card.Text>
              <Card.Text className="sobre-card-descricao">
                Esta bagagem técnica e sócio-ambiental adquirida implicará em um
                tecnólogo que realiza suas atribuições seguindo sempre normas de
                segurança, higiene e proteção ao meio-ambiente.
              </Card.Text>
              <Card.Text className="sobre-card-descricao">
                Inclui, também, aspectos de empreendedorismo que possibilita sua
                dedicação a direção e gerenciamento do seu próprio negócio,
                prestação de serviços de assessoria, ao ensino e a pesquisa
                tecnológica dentro de seu campo profissional.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 12 }}>
          <Card>
            <Card.Body>
              <Card.Title className="sobre-card-titulo">
                Deliberação CEETEPS
              </Card.Title>
              <Card.Text className="sobre-card-descricao">
                <a
                  className="sobre-link"
                  href="https://fatecsjc-prd.azurewebsites.net/downloads/arquivos/2016-2/2016.09.27_deliberacao_ceeteps_31.pdf"
                >
                  Deliberação CEETEPS nº 31 de 27/09/2016{" "}
                  <BiLinkExternal></BiLinkExternal>
                </a>
              </Card.Text>
              <Card.Text className="sobre-card-descricao">
                Esta bagagem técnica e sócio-ambiental adquirida implicará em um
                tecnólogo que realiza suas atribuições seguindo sempre normas de
                segurança, higiene e proteção ao meio-ambiente.
              </Card.Text>
              <Card.Text className="sobre-card-descricao">
                Inclui, também, aspectos de empreendedorismo que possibilita sua
                dedicação a direção e gerenciamento do seu próprio negócio,
                prestação de serviços de assessoria, ao ensino e a pesquisa
                tecnológica dentro de seu campo profissional.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <Footer />
  </App>
);

export default sobre;
