import React from "react";
import Footer from "../components/footer";
import App from "../containers/App";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import logo_cpa from "../components/images/logo_cpa.png";
import foto_cpa from "../components/images/cpa.jpg";
import sinaes from "../components/images/eixo_dimensoes_sinaes.png";
import { FaCheck } from "react-icons/fa";
import "./cpa.css";

const cpa = () => (
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
          <img style={{ maxWidth: "500px" }} src={logo_cpa}></img>
        </Col>
      </Row>
    </Container>
    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }}>
          <hr></hr>
        </Col>
      </Row>

      <Row style={{ marginBottom: "60px", textAlign: "justify" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="cpa-h2">CPA – Comissão Própria de Avaliação</h2>
        </Col>
        <Col md={{ span: 12 }}>
          <p className="cpa-p">
            A Comissão Própria de Avaliação – CPA – tem como finalidade
            contribuir para a realização dos procedimentos relacionados à
            autoavaliação institucional (avaliação da Fatec). São eles:
          </p>
          <div style={{ marginLeft: "20px" }}>
            <p className="cpa-p">
              <FaCheck></FaCheck>Conscientizar a comunidade sobre a importância
              da avaliação institucional;
            </p>
            <p className="cpa-p">
              <FaCheck></FaCheck>Coordenar os processos de avaliação internos;
            </p>
            <p className="cpa-p">
              <FaCheck></FaCheck>Analisar os resultados dos processos de
              avaliação;
            </p>
            <p className="cpa-p">
              <FaCheck></FaCheck>Apresentar relatório à Direção da U.E. e à
              CESU;
            </p>
            <p className="cpa-p">
              <FaCheck></FaCheck>Divulgar à comunidade os trabalhos realizados,
              resultados e propostas;
            </p>
            <p className="cpa-p">
              <FaCheck></FaCheck>Prestar informações ao INEP.
            </p>
          </div>
          <p className="cpa-p">
            A CPA é composta por representantes do corpo docente, discente,
            técnico-administrativo e comunidade externa.
          </p>
          <p className="cpa-p">
            Acesse os documentos abaixo e conheça mais sobre a finalidade da CPA
            a partir dos seus atos regulatórios.
          </p>
          <text className="cpa-text">
            Mais informações? Escreva para:{" "}
            <text className="cpa-text" style={{ backgroundColor: "lightblue" }}>
              cpa.sjc@fatec.sp.gov.br
            </text>
          </text>
        </Col>
      </Row>

      <Row
        style={{ margin: "30px", marginBottom: "60px", textAlign: "center" }}
      >
        <Col>
          <img
            style={{ maxWidth: "600px" }}
            className="imagens"
            src={foto_cpa}
          ></img>
        </Col>
      </Row>

      <Row style={{ marginBottom: "60px", textAlign: "justify" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="cpa-h2">
            Em 2016 o Centro Paula Souza instituiu a CPA:
          </h2>
        </Col>
        <Col md={{ span: 12 }}>
          <text className="cpa-text">
            A Superintendência do Centro Estadual de Educação Tecnológica Paula
            Souza, no uso de suas atribuições e com fundamento no disposto no
            Artigo 11 da Lei Federal nº 10.861 (
            <a
              className="cpa-link"
              target="_blank"
              href="https://drive.google.com/file/d/1Yh4eNu-tAvRS41opnMgmanzuV-PkKBJZ/view"
            >
              Lei do SINAES – Sistema Nacional de Avaliação do Ensino Superior
            </a>
            ), de 14 de abril de 2004, na Portaria/MEC nº 2.051, de 09 de julho
            de 2004, e demais disposições normativas aplicáveis, instituiu a CPA
            - Comissão Própria de Avaliação das Fatecs, ao expedir a{" "}
            <a
              className="cpa-link"
              target="_blank"
              href="https://drive.google.com/file/d/1kHrJ2LyXQz-2mpaqE-m36Vk_S7Xt8A6Z/view"
            >
              Portaria CEETEPS-GDS Nº 1305, DE 31-5-2016
            </a>
            .
          </text>
        </Col>
      </Row>

      <Row style={{ marginBottom: "60px", textAlign: "justify" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="cpa-h2">Atribuições da CPA:</h2>
        </Col>
        <Col style={{ marginBottom: "30px" }} md={{ span: 12 }}>
          <text className="cpa-text" style={{ fontWeight: "bold" }}>
            <a
              className="cpa-link"
              target="_blank"
              href="https://drive.google.com/file/d/1qBi8IKEvNbiBtmZFPLzuGf1jVpYB61Rl/view"
            >
              Portaria MEC Nº 2051, 09/07/2014.
            </a>{" "}
            Art. 7º - As Comissões Próprias de Avaliação (CPAs), previstas no
            Art. 11 da Lei no 10.861, de 14 de abril de 2004, e constituídas no
            âmbito de cada instituição de educação superior, terão por
            atribuição a coordenação dos processos internos de avaliação da
            instituição, de sistematização e de prestação das informações
            solicitadas pelo INEP.
          </text>
        </Col>
        <Col md={{ span: 12 }}>
          <text className="cpa-text" style={{ fontWeight: "bold" }}>
            <text style={{ fontWeight: "lighter" }}>
              Portaria CEETEPS-GDS Nº 1305, DE 31-5-2016.
            </text>{" "}
            Art. 4º - A CPA tem por finalidade contribuir com o planejamento, a
            elaboração, a coordenação e o monitoramento da política de
            autoavaliação institucional, promovendo, no que couber, a
            interlocução com os órgãos de regulação, supervisão e avaliação.
            Parágrafo único. A autoavaliação tem por objetivo a melhoria da
            qualidade do ensino tecnológico, a orientação da expansão de sua
            oferta, a consolidação da função social do ensino superior e o
            desenvolvimento institucional, consistindo em um processo contínuo,
            sistêmico e participativo.
          </text>
        </Col>
      </Row>

      <Row style={{ marginBottom: "60px", textAlign: "justify" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="cpa-h2">Cada Fatec deve ter sua CPA:</h2>
        </Col>
        <Col md={{ span: 12 }}>
          <text className="cpa-text" style={{ fontWeight: "bold" }}>
            <text style={{ fontWeight: "lighter" }}>
              Na mesma Portaria CEETEPS-GDS Nº 1305, DE 31-5-2016.
            </text>{" "}
            Art. 1º - Cada Faculdade de Tecnologia – Fatec, do Centro Estadual
            de Educação Tecnológica Paula Souza – CEETEPS, deverá constituir,
            com fundamento no disposto no artigo 11, inciso XVII, do Regimento
            Unificado das Fatecs, aprovado pela Deliberação CEETEPS nº 07, de 15
            de dezembro de 2006, a Comissão Própria de Avaliação - CPA.
          </text>
        </Col>
      </Row>

      <Row style={{ marginBottom: "60px", textAlign: "justify" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="cpa-h2">A Fatec São José dos Campos tem sua CPA:</h2>
        </Col>
        <Col md={{ span: 12 }}>
          <text className="cpa-text">
            Na Fatec São José dos Campos, a CPA foi implantada em 2016 e, em
            2020, uma nova CPA foi constituída e instituída por meio da{" "}
            <a
              className="cpa-link"
              target="_blank"
              href="https://drive.google.com/file/d/1nwaeu_PdwR_YULvGQrsshM-mYANEkZWB/view"
            >
              Portaria do Diretor 008/2020, de 2 de março 2020.
            </a>
          </text>
        </Col>
      </Row>

      <Row style={{ marginBottom: "60px", textAlign: "justify" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="cpa-h2">
            O SINAES - Sistema Nacional de Avaliação do Ensino Superior:
          </h2>
        </Col>
        <Col style={{ marginBottom: "30px" }} md={{ span: 12 }}>
          <text className="cpa-text" style={{ fontWeight: "bold" }}>
            <text style={{ fontWeight: "lighter" }}>
              Instituído pela Lei Nº 10861, 14/04/2004 e Portaria MEC Nº 2051,
              09/07/2014.
            </text>{" "}
            Art. 1º O SINAES tem por finalidade a melhoria da qualidade da
            educação superior, a orientação da expansão da sua oferta, o aumento
            permanente da sua eficácia institucional e efetividade acadêmica e
            social, e especialmente a promoção do aprofundamento dos
            compromissos e responsabilidades sociais das instituições de
            educação superior, por meio da valorização de sua missão pública, da
            promoção dos valores democráticos, do respeito à diferença e à
            diversidade, da afirmação da autonomia e da identidade
            institucional.
          </text>
        </Col>
        <Col md={{ span: 12 }}>
          <text className="cpa-text">
            Importante destacar que o SINAES, em seu Artigo 3º, estabelece dez
            diferentes dimensões institucionais a serem avaliadas. Em
            complemento, a Nota Técnica INEP/DAES/CONAES 065/2014, organiza o
            Roteiro para elaboração do Relatório de Autoavaliação das IES, da
            seguinte maneira:
          </text>
        </Col>
        <Row
          style={{ margin: "30px", marginBottom: "60px", textAlign: "center" }}
        >
          <Col>
            <img
              style={{ maxWidth: "800px" }}
              className="imagens"
              src={sinaes}
            ></img>
          </Col>
        </Row>
      </Row>
    </Container>
    <Footer />{" "}
  </App>
);

export default cpa;
