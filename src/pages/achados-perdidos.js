import React from "react";
import Footer from "../components/footer";
import App from "../containers/App";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import "./achados-perdidos.css";

function onChange(value) {
  console.log("Captcha value:", value);
}
const achados = () => (
  <App>
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "50px",
        marginTop: "20px",
      }}
    >
      <Row>
        <Col>
          <p className="ach-titulo">ACHADOS E PERDIDOS</p>
        </Col>
      </Row>
    </Container>

    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col style={{ marginBottom: "30px" }} md={{ span: 12 }}>
          <Card style={{ textDecoration: "none" }}>
            <Card.Body>
              <Card.Title className="ach-card-titulo">
                Achados e Perdidos
              </Card.Title>
              <Card.Text className="ach-card-descricao">
                Todos os objetos encontrados nas dependências da instituição se
                concentram na{" "}
                <a className="ach-link" href="/biblioteca">
                  Biblioteca
                </a>
                . Caso não o encontre lá, mande um e-mail para
                f146.secretaria@fatec.sp.gov.br. Se, posteriormente, ele for
                localizado, entraremos em contato no e-mail indicado.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <Footer />
  </App>
);

export default achados;
