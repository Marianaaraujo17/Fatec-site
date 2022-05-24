import React from "react";
import Footer from "../components/footer";
import App from "../containers/App";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo_fbm from "../components/images/logo-fbm.png";
import cecompi from "../components/images/cecompi.png";
import cna from "../components/images/cna.png";
import deltalife from "../components/images/deltalife.png";
import parque from "../components/images/logo_parque_tecnologico_sjc.png";
import rsd from "../components/images/rsd.png";
import tpg from "../components/images/tpg.png";
import perfil from "../components/images/docentes/profile.png";

import "./business_mentoring.css";
import { CgChevronRight } from "react-icons/cg";

const parceria = [
  {
    imagem: cecompi,
    link: "http://www2.cecompi.org.br",
  },
  {
    imagem: cna,
    link: "http://www.cnadesenvolvimento.com.br/cgi-sys/suspendedpage.cgi",
  },
  {
    imagem: deltalife,
    link: "https://www.deltalife.com.br",
  },
  {
    imagem: parque,
    link: "https://pqtec.org.br",
  },
  {
    imagem: rsd,
    link: "https://fatecsjc-prd.azurewebsites.net/rsdtecnologia.wix.com/rsd",
  },
  {
    imagem: tpg,
    link: "http://tpgdobrasil.com",
  },
];

const equipe = [
  {
    nome: "Cícero Soares da Silva",
    imagem: perfil,
    link: "http://lattes.cnpq.br/3341430928298725",
  },
  {
    nome: "José Walmir Gonçalves Duque",
    imagem: perfil,
    link: "http://lattes.cnpq.br/4678097512178887",
  },
  {
    nome: "Valter João de Sousa",
    imagem: perfil,
    link: "http://lattes.cnpq.br/4037684544757358",
  },
];

const business_mentoring = () => (
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
          <Image fluid src={logo_fbm}></Image>
        </Col>
      </Row>
    </Container>
    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="bsn-h2">O Projeto</h2>
        </Col>
        <Col style={{ marginBottom: "20px" }} md={12}>
          <text className="bsn-p">
            O Fatec Business Mentoring foi baseado na ideia do INOVA Centro
            Paula Souza e iniciado em 2014. Trata-se de um projeto da Faculdade
            de Tecnologia São José dos Campos que tem por objetivo mapear as
            necessidades dos empreendimentos atendidos e atendê-los dentro do
            rol de expertises presentes no corpo docente da própria unidade. O
            projeto se faz presente nos ambientes do{" "}
            <a
              target="_blank"
              href="http://www2.cecompi.org.br"
              className="bsn-a"
            >
              CECOMPI
            </a>{" "}
            e{" "}
            <a
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/parque-tecnologico"
              className="bsn-a"
            >
              Parque Tecnológico
            </a>
            , em salas apropriadas ao atendimento, por meio de Professores
            Consultores, Mestres e Doutores em suas áreas de atuação.
          </text>
        </Col>
        <Col>
          {" "}
          <text className="bsn-p">
            O objetivo do projeto é fazer com que a Faculdade de Tecnologia de
            São José dos Campos participe do desenvolvimento econômico e social
            do município, por meio da atuação conjunta com as empresas locais,
            no desenvolvimento de soluções para problemas de ordem tecnológica
            ou de gestão empresarial.
          </text>
        </Col>
      </Row>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="bsn-h2">Competências</h2>
        </Col>
        <Col style={{ marginBottom: "20px" }} md={12}>
          <p className="bsn-p">
            <CgChevronRight />
            Gestão de Projetos (PMBOK)<br></br>
            <CgChevronRight />
            Análise de viabilidade econômico-financeiro<br></br>
            <CgChevronRight />
            Análise de viabilidade de mercado<br></br>
            <CgChevronRight />
            Gestão da qualidade<br></br>
            <CgChevronRight />
            Procedimentos contábeis<br></br>
            <CgChevronRight />
            Procedimentos de comércio exterior<br></br>
            <CgChevronRight />
            Gestão organizacional<br></br>
            <CgChevronRight />
            Auditorias<br></br>
            <CgChevronRight />
            Captação de recursos<br></br>
            <CgChevronRight />
            Gestão de Processos de Negócios<br></br>
            <CgChevronRight />
            Projetos de Sistemas de Informação<br></br>
            <CgChevronRight />
            Projetos de Business Intelligence e Big Data<br></br>
          </p>
        </Col>
      </Row>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="bsn-h2">Parceiros</h2>
        </Col>
      </Row>
      <Row style={{ marginBottom: "40px" }} xs={1} md={6}>
        {parceria.map((obj) => (
          <Col>
            <a className="nome" target="_blank" href={obj.link}>
              <Image
                thumbnail
                className="bsn-imagens"
                src={obj.imagem}
                width={200}
                height={200}
              ></Image>
            </a>
          </Col>
        ))}
      </Row>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="bsn-h2">Equipe</h2>
        </Col>
      </Row>

      <Row xs={1} md={3}>
        {equipe.map((obj) => (
          <Col>
            <a className="bsn-a" target="_blank" href={obj.link}>
              <Image
                thumbnail
                className="bsn-imagens"
                src={obj.imagem}
                width={200}
                height={200}
              ></Image>
              <p>{obj.nome}</p>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer />{" "}
  </App>
);

export default business_mentoring;
