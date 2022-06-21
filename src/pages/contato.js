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
  Table,
} from "react-bootstrap";
import "./sobre-cursos.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillPhone,
} from "react-icons/ai";

const departamentos = [
  {
    dep: "Diretor da Unidade",
    email: "f146.diretoria@fatec.sp.gov.br",
  },
  {
    dep: "Diretoria Acadêmica (Secretaria)",
    email: "f146.secretaria@fatec.sp.gov.br",
  },
  {
    dep: "Diretoria Administrativa",
    email: "f146.admdirserv@fatec.sp.gov.br",
  },
  {
    dep: "Coordenação do Curso de Análise e Desenvolvimento de Sistemas",
    email: "f146.adssjc@fatec.sp.gov.br",
  },
  {
    dep: "Coordenação do Curso de Banco de Dados",
    email: "f146.bdsjc@fatec.sp.gov.br",
  },
  {
    dep: "Coordenação do Curso de Desenvolvimento de Software Multiplataforma",
    email: "f146.dsmsjc@fatec.sp.gov.br",
  },
  {
    dep: "Coordenação do Curso de Gestão da Produção Industrial",
    email: "f146.gpisjc@fatec.sp.gov.br",
  },
  {
    dep: "Coordenação do Curso de Logística",
    email: "f146.logisticasjc@fatec.sp.gov.br",
  },
  {
    dep: "Coordenação do Curso de Manufatura Avançada",
    email: "f146.manufatura@fatec.sp.gov.br",
  },
  {
    dep: "Coordenação do Curso de Manutenção de Aeronaves",
    email: "f146.manutencao@fatec.sp.gov.br",
  },
  {
    dep: "Coordenação do Curso de Projetos de Estruturas Aeronáuticas",
    email: "f146.peasjc@fatec.sp.gov.br",
  },
  {
    dep: "Suporte de Informática",
    email: "f146.suportesjc@fatec.sp.gov.br",
  },
];

const contato = () => (
  <App>
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "10px",
        marginTop: "20px",
      }}
    >
      <Row>
        <Col>
          <p className="sbr-titulo">CONTATO</p>
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
        marginBottom: "20px",
      }}
    >
      <Row xs={1} md={1} className="g-4">
        <Col>
          <CardGroup>
            <Card>
              <Card.Header>
                <AiFillFacebook size={40}></AiFillFacebook>
              </Card.Header>
              <Card.Body>
                <Button
                  target="_blank"
                  href="https://www.facebook.com/fatecjessenvidal"
                  variant="primary"
                >
                  FACEBOOK
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <AiFillInstagram size={40}></AiFillInstagram>
              </Card.Header>
              <Card.Body>
                <Button
                  target="_blank"
                  href="https://www.instagram.com/fatecsaojosedoscampos/"
                  variant="danger"
                >
                  INSTAGRAM
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <AiFillLinkedin size={40}></AiFillLinkedin>
              </Card.Header>
              <Card.Body>
                <Button
                  target="_blank"
                  href="https://www.linkedin.com/school/fatecjessenvidal"
                  variant="secondary"
                >
                  LINKEDIN
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <AiFillYoutube size={40}></AiFillYoutube>
              </Card.Header>
              <Card.Body>
                <Button
                  target="_blank"
                  href="https://www.youtube.com/channel/UCRTd_ST0vPqXi4w_ZdfXtiw"
                  variant="danger"
                >
                  YOUTUBE
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="baja-subtitulo">Telefones</p>
          <p className="baja-p">
            {" "}
            <AiFillPhone></AiFillPhone>+55 12 3905-2423 (Secretaria)
          </p>
          <p className="baja-p">
            {" "}
            <AiFillPhone></AiFillPhone>+55 12 3905-4699 (Administração)
          </p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="baja-subtitulo">Localização</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3668.17968909569!2d-45.79295757141112!3d-23.16364099723604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4c498567cf5d%3A0xf9cf22ea7d377dca!2sFATEC+S%C3%A3o+Jos%C3%A9+dos+Campos+-+Prof.+Jessen+Vidal!5e0!3m2!1spt-BR!2sus!4v1417867973752"></iframe>
        </Col>
        <Col md={{ span: 8 }} style={{ marginBottom: "40px" }}>
          <p className="baja-subtitulo">Lista de contato dos departamentos</p>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Departamento</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {departamentos.map((obj) => (
                <tr>
                  <td>{obj.dep}</td>
                  <td>{obj.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>

    <Footer />
  </App>
);

export default contato;
