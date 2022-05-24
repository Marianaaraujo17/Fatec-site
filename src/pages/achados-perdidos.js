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
import ReCAPTCHA from "react-google-recaptcha";

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
                . Caso não o encontre lá, registre o ocorrido preenchendo o
                formulário abaixo. Se, posteriormente, ele for localizado,
                entraremos em contato no e-mail indicado.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 12 }}>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridNome">
                <FloatingLabel
                  controlId="floatingInputNome"
                  label="Nome Completo"
                  className="mb-3"
                >
                  <Form.Control placeholder="Nome" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <FloatingLabel
                  controlId="floatingInputEmail"
                  label="Email para contato"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="Email" />
                </FloatingLabel>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridObjeto">
              <FloatingLabel
                controlId="floatingInputObjeto"
                label="Objeto perdido"
                className="mb-3"
              >
                <Form.Control placeholder="Objeto" />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridDescricao">
              <FloatingLabel
                controlId="floatingTextarea"
                label="Descrição detalhada do objeto perdido"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Detalhe o objeto"
                  style={{ height: "150px" }}
                />
              </FloatingLabel>
            </Form.Group>

            <ReCAPTCHA
              sitekey="6LffPhAfAAAAAFoPO159F-liEs1OkaM167s5LbtR"
              onChange={onChange}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>

    <Footer />
  </App>
);

export default achados;
