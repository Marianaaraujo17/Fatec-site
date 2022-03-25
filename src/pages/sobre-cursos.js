import React from "react";
import App from "../containers/App";
import Footer from "../components/footer";
import {
  Card,
  CardGroup,
  Container,
  Row,
  Col,
  Button,
  ListGroup,
} from "react-bootstrap";
import "./sobre-cursos.css";

const sobre_cursos = () => (
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
          <p className="titulo">CURSOS SUPERIORES GRATUITOS DE QUALIDADE!</p>
        </Col>
      </Row>
    </Container>

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
      <Row xs={1} md={12} className="g-4">
        <Col>
          <p className="list-titulo">Cursos oferecidos nesta Unidade</p>
          <ListGroup>
            <ListGroup.Item>
              <a className="links" href="/ads">
                Análise e Desenvolvimento de Sistemas
              </a>
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <a className="links" href="banco">
                Banco de Dados
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a className="links" href="/dsm">
                Desenvolvimento de Software Multiplataforma
              </a>
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <a className="links" href="/gtproducaoind">
                Gestão da Produção Industrial
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a className="links" href="/logistica">
                Logística
              </a>
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <a className="links" href="/manufatura">
                Manufatura Avançada
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a className="links" href="/manut_aero">
                Manutenção de Aeronaves
              </a>
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <a className="links" href="/projtestaero">
                Projetos de Estruturas Aeronáuticas
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>

    <Container id="resumo" style={{ marginBottom: "50px" }}>
      <Row>
        <Col md={{ span: 12 }}>
          <CardGroup>
            <Card style={{ textAlign: "right" }}>
              <Card.Body>
                <Card.Title className="card-titulo">Inscrições</Card.Title>
                <Card.Text>
                  <a
                    href="https://www.vestibularfatec.com.br/home/"
                    target="_blank"
                    className="inscricoes"
                  >
                    www.vestibularfatec.com.br
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title className="card-titulo">
                  Guia das profissões tecnológicas
                </Card.Title>
                <Card.Text
                  style={{ fontFamily: "Noto Sans", fontSize: "23px" }}
                >
                  <p className="card-descricao">
                    Este{" "}
                    <a
                      className="guia"
                      href="https://www.cps.sp.gov.br/download/guia_profissoes_tecnologicas.pdf"
                      target="_blank"
                    >
                      GUIA
                    </a>
                    apresenta os cursos tecnológicos oferecidos pelo Centro
                    Paula Souza, as disciplinas estudadas, as atribuições do
                    profissional, onde trabalhar, onde estudar e sugestões de
                    cursos relacionados. Boa sorte na escolha!
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
        <Col md={{ span: 12 }}>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title className="card-titulo">
                  Curso Superior de Tecnologia
                </Card.Title>
                <Card.Text
                  style={{ fontFamily: "Noto Sans", fontSize: "23px" }}
                >
                  <p
                    className="card-descricao"
                    style={{
                      fontWeight: "lighter",
                      color: "gray",
                      fontStyle: "italic",
                    }}
                  >
                    ❝ É um curso de graduação (…). Desenvolve competências
                    profissionais, fundamentadas na ciência, na tecnologia, na
                    cultura e na ética (…). Como todo curso de nível superior, o
                    curso dessa natureza é aberto a candidatos que tenham
                    concluído o ensino médio, ou equivalente, e que tenham sido
                    classificados em processo seletivo. Os graduados nos CST
                    denominam-se tecnólogos e são profissionais de nível
                    superior. (MEC, 2009) ❞
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>

    <Footer />
  </App>
);

export default sobre_cursos;
