import React from "react";
import Footer from "../components/footer";
import App from "../containers/App";
import {
  Card,
  CardGroup,
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import logo_cipa from "../components/images/CIPA.png";
import perfil from "../components/images/docentes/profile.png";
import "./cadi.css";

const titulares = [
  {
    nome: "Gerson Carlos Favalli - Presidente (Empregador)",
    imagem: "",
  },
  {
    nome: "	Santiago Martin Lugones - Vice Presidente (Eleito)",
    imagem: "",
  },
];

const suplentes = [
  {
    nome: "Gerson Carlos Favalli - Presidente (Empregador)",
    imagem: "",
  },
  {
    nome: "Cristiano Julio Barreira (Eleito)",
    imagem: "",
  },
];

function onChange(value) {
  console.log("Captcha value:", value);
}

const cipa = () => (
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
          <img src={logo_cipa}></img>
        </Col>
      </Row>
    </Container>
    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }}>
          <p>
            A CIPA é formada pelos próprios funcionários e professores, com o
            objetivo de prevenir acidentes e doenças decorrentes do trabalho.
          </p>
        </Col>
      </Row>
      <Row style={{ margin: "30px" }}>
        <Col>
          <p>
            Membros da CIPA
            <br />
            Fatec São José dos Campos
            <br />
            Gestão 2020/2021
          </p>
        </Col>
      </Row>

      <Row style={{ margin: "30px" }}>
        <Col>
          <h2>Titulares</h2>
        </Col>
      </Row>

      {titulares.map((obj) => (
        <Row xs={1} md={2} className="g-4">
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
        </Row>
      ))}

      <Row style={{ margin: "30px" }}>
        <Col>
          <h2>Suplentes</h2>
        </Col>
      </Row>

      {suplentes.map((obj) => (
        <Row xs={1} md={2} className="g-4">
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
        </Row>
      ))}

      <Row style={{ margin: "30px" }}>
        <Col>
          <h2>Significado e competências</h2>
          <br></br>
          <p>
            CIPA: Comissão Interna de Prevenção de Acidentes, que tem a
            finalidade de prevenir acidentes e doenças decorrentes do trabalho,
            de modo a tornar compatível permanentemente o trabalho com a
            preservação da vida e a promoção da saúde do trabalhador.
          </p>
          <text>
            <a
              id="cor"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/cipa/2015.07.25_folder_cipa.pdf"
            >
              Clique Aqui
            </a>{" "}
            e veja o folder informativo que contêm mais detalhes sobre a CIPA,
            como tarefas, composição e competências.
          </text>
        </Col>
      </Row>

      <Row
        style={{ marginBottom: "60px", marginTop: "60px", marginLeft: "30px" }}
      >
        <Col>
          <h2>Dias sem acidentes: 1023</h2>
          <br />
        </Col>
        <h2>Outras informações</h2>
        <p>
          A Fatec possui uma maca e uma cadeira de rodas próximo à entrada
          principal e uma maca no quarto andar. Em caso de necessidade chamar o
          Ramal 21.
        </p>
        <h2>
          Recomendações da CIPA aos colaboradores e frequentadores das
          dependências da Fatec SJC
        </h2>
        <p>
          - 09/10/2018 – Estacione seu veículo de ré. Isso evita acidentes e em
          caso de emergência facilita a saída de todos;
          <br />- 09/10/2018 - Não sente nas escadas, não utilize celular nas
          escadas.
        </p>
        <h2>Contato</h2>
        <p>
          Caso possua alguma dúvida, sugestão ou crítica, entre em contato pelo
          formulário abaixo. O responsável responderá assim que possível.
          <br />
          <a
            id="cor"
            target="_blank"
            href="https://fatecsjc-prd.azurewebsites.net/downloads/cipa/2015.06.25_perguntas_frequentes_cipa.pdf"
          >
            Clique aqui
          </a>{" "}
          para ler o conteúdo de "Perguntas frequentes" e veja se sua dúvida já
          tem uma resposta.
          <br />
          Em caso de urgência, ligue diretamente para a unidade{" "}
          <mark id="marca">+55 (12) 3905-2423</mark> ou pelo e-mail{" "}
          <mark id="marca">f146cipa@cps.sp.gov.br</mark>
        </p>
      </Row>
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
      <Row>
        <h2>Atribuições Legais (NR 5-16)</h2>
        <h2>
          Regida pela Norma Regulamentadora Nº5 do Ministério do Trabalho e
          Emprego (NR-5)
        </h2>
        <p>
          Participar da implementação e do controle da qualidade das medidas de
          prevenção necessárias, bem como da avaliação das prioridades de ação
          nos locais de trabalho;
          <br />
          Realizar, periodicamente, verificações nos ambientes e condições de
          trabalho visando a identificação de situações que venham a trazer
          riscos para a segurança e saúde dos trabalhadores;
          <br />
          Realizar, a cada reunião, avaliação do cumprimento das metas fixadas
          em seu plano de trabalho e discutir as situações de risco que foram
          identificadas;
          <br />
          Divulgar aos trabalhadores informações relativas à segurança e saúde
          no trabalho;
          <br />
          Participar, com o SESMT, onde houver, das discussões promovidas pelo
          empregador, para avaliar os impactos de alterações no ambiente e
          processo de trabalhos relacionados à segurança e saúde dos
          trabalhadores;
          <br />
          Requerer ao SESMT, quando houver, ou ao empregador, a paralisação de
          máquina ou setor onde considere haver risco grave e iminente à
          segurança e saúde dos trabalhadores;
          <br />
          Requisitar à empresa as cópias das CAT emitidas;
          <br />
          Promover, anualmente, em conjunto com o SESMT, onde houver, a Semana
          Interna de Prevenção de Acidentes do Trabalho – SIPAT; e<br />{" "}
          Participar, anualmente, em conjunto com a empresa, de Campanhas de
          Prevenção da AIDS.
        </p>
      </Row>
    </Container>
    <Footer />{" "}
  </App>
);

export default cipa;
