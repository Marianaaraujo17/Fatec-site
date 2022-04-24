import React from "react";
import Footer from "../components/footer";
import logo_api from "../components/images/logo_api.png";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import "./api.css";

import App from "../containers/App";

const api = () => (
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
      <p className="api-titulo">APRENDIZADO POR PROJETOS INTEGRADOS</p>
    </Container>

    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="api-h2">Aprendizagem por Projetos Integrados</h2>
        </Col>
        <Col md={10}>
          <p className="api-p" id="espaco">
            A API (Aprendizagem por Projetos Integrados), desenvolvida no escopo
            do{" "}
            <a id="cor" target="_blank" href="/cadi">
              CADI
            </a>
            , é a metodologia de ensino em implantação na Fatec São José dos
            Campos, desde o Segundo Semestre de 2019 (nos cursos da área de
            Computação, porém, a metodologia estará completamente implantada em
            todos os períodos até Primeiro Semestre de 2022).
          </p>

          <p className="api-p" id="espaco">
            Vídeos de apresentação dos resultados finais nas disciplinas de
            Projetos Integradores da FATEC São José dos Campos – Prof. Jessen
            Vidal.
          </p>

          <p className="api-p" id="espaco">
            <a id="cor" target="_blank" href="/cadi">
              Turmas 2020-1
            </a>{" "}
            <br />
            <a id="cor" target="_blank" href="/cadi">
              Turmas 2020-2
            </a>
            <br />
            <a id="cor" target="_blank" href="/cadi">
              Turmas 2021-1
            </a>
          </p>

          <h2 className="api-h2">Pilares da API</h2>
        </Col>
        <Col md={2}>
          <img src={logo_api} width={100} height={100}></img>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="api-p">
            API preconiza os seguintes pilares:
            <br />  - Real Problem Based Learning (rPBL)
            <br />  - Validação Externa
            <br />  - Mindset Ágil (Agile)
            <br /> Para melhor compreensão do Projeto CADI e da API, acessar o
            site:{" "}
            <a id="cor" target="_blank" href="https://cadi.tec.br/">
              cadi.tec.br
            </a>
          </p>
        </Col>
        <hr />
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <h2 className="api-h2" style={{ marginBottom: "30px" }}>
            Disclaimer (Aviso Legal)
          </h2>
          <p className="api-p">
            Todas as informações resultantes da Aprendizagem por Projetos
            Integrados da Fatec São José dos Campos - Prof. Jessen Vidal seguem
            a licença Open Source Initiative (OSI) ou Academic Free License 3.0
            (AFL-3.0).
            <br /> A distribuição do código-fonte bem como suas eventuais
            derivações são livres de royalties ou qualquer outro encargo e podem
            ser modificados, alterados, substituídos, utilizadas de forma
            comercial ou privada desde que seja citada a fonte original.
            <br /> Os autores não contaram com nenhuma colaboração financeira e,
            portanto, não provêm nenhuma garantia sobre as consequências da
            forma, meios e uso do modelo ou execução dos resultados limitando-se
            para fins acadêmicos e educativos.
            <br /> A Fatec São José dos Campos - Prof. Jessen Vidal utiliza este
            modelo apenas para fins acadêmicos e educativos (formação de
            discentes), independentemente dos resultados, portanto, isenta-se de
            responsabilidade sobre os produtos ou suas derivações resultantes e
            advindas dos discentes e docentes do processo de construção do
            conhecimento.
          </p>
        </Col>
      </Row>
    </Container>

    <Footer />
  </App>
);

export default api;
