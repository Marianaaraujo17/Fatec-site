import React from "react";
import Footer from "../components/footer";
import App from "../containers/App";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import logo_cadi from "../components/images/logo_cadi.jpg";
import logo_fatec from "../components/images/logo.png";
import logo_parque from "../components/images/logo_parque_tecnologico_sjc.png";
import logo_fapg from "../components/images/logo_fapg.png";
import logo_api from "../components/images/logo_api.png";
import foto_parque from "../components/images/foto_parque_tecnologico_sjc.png";
import foto_cadi from "../components/images/foto_cadi_0001.jpg";
import perfil from "../components/images/docentes/profile.png";
import "./corpo-adm.css";
import { GrNotes } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";

const diretoria = [
  {
    nome: "Luiz Antônio Tozi",
    area: "Diretor da Unidade",
    imagem: { perfil },
    cv: "http://lattes.cnpq.br/6282935022782310",
    email: "f146.diretoria@fatec.sp.gov.br",
  },
];

const assistente = [
  {
    nome: "Luciana de Abreu Aquino",
    area: "Assistente Técnico / Administrativo I",
    imagem: { perfil },
    cv: "http://lattes.cnpq.br/6282935022782310",
    email: "luciana.aquino@fatec.sp.gov.br",
  },
];

const coordenacao = [
  {
    nome: "Fabiano Sabha Walczak",
    curso: "Análise de Desenvolvimento de Sistemas",
    imagem: { perfil },
    cv: "http://lattes.cnpq.br/4250738143383384",
    email: "f146.adssjc@fatec.sp.gov.br",
    ref: "/ads",
  },
  {
    nome: "José Walmir Gonçalves Duque",
    curso: "Banco de Dados",
    imagem: { perfil },
    cv: "http://lattes.cnpq.br/4678097512178887",
    email: "f146.bdsjc@fatec.sp.gov.br",
    ref: "/banco",
  },
  {
    nome: "Reinaldo Gen Ichiro Arakaki",
    curso: "Desenvolvimento de Software Multiplataforma",
    imagem: { perfil },
    cv: "http://lattes.cnpq.br/2075406788034578",
    email: "f146.dsmsjc@fatec.sp.gov.br",
  },
  {
    nome: "Roque Antônio de Moura",
    curso: "Gestão da Produção Industrial",
    imagem: { perfil },
    cv: "http://lattes.cnpq.br/3410759923244537",
    email: "gpi.sjc@fatec.sp.gov.br",
  },
  {
    nome: "Reinaldo Fagundes dos Santos",
    curso: "Logística",
    imagem: { perfil },
    cv: "http://lattes.cnpq.br/4671561926234240",
    email: "f146.logisticasjc@fatec.sp.gov.br",
  },
  {
    nome: "Viviane Ribeiro de Siqueira",
    curso: "Manufatura Avançada",
    imagem: { perfil },
    cv: "http://lattes.cnpq.br/3319116115200375",
    email: "f146.manufatura@fatec.sp.gov.br",
  },
  {
    nome: "Felix Arlindo Strottmann",
    curso: "Manutenção de Aeronaves",
    imagem: { perfil },
    cv: "http://lattes.cnpq.br/8478784526842018",
    email: "f146.manutencao@fatec.sp.gov.br",
  },
  {
    nome: "Carlos Lineu de Faria e Alves",
    curso: "Projetos de Estruturas Aeronáuticas",
    imagem: { perfil },
    cv: "http://lattes.cnpq.br/1659520862242303",
    email: "f146.peasjc@fatec.sp.gov.br",
  },
];

const diretoria_academica = [
  {
    nome: "Erick dos Santos Cristóvão",
    area: "Diretor de Serviços Acadêmicos",
    imagem: { perfil },
    email: "f146.secretaria@fatec.sp.gov.br",
  },
  {
    nome: "Luana Rezende de Souza Moreira",
    area: "Assistente Administrativo",
    imagem: { perfil },
    email: "luana.moreira@fatec.sp.gov.br",
  },
  {
    nome: "Benedito Vitorino Júnior",
    area: "Agente Técnico e Administrativo",
    imagem: { perfil },
    email: "benedito.vitorino@fatec.sp.gov.br",
  },
];

const diretoria_administrativa = [
  {
    nome: "Anna Hiromi Sogabe",
    area: "Diretora de Serviços",
    imagem: { perfil },
    email: "f146.admdirserv@fatec.sp.gov.br",
  },
  {
    nome: "Patrícia Fernandes da Silva",
    area: "Assistente Administrativo",
    imagem: { perfil },
    email: "patricia.silva154@fatec.sp.gov.br",
  },
  {
    nome: "Carolina Fcamidu Coff",
    area: "Agente Técnico e Administrativo",
    imagem: { perfil },
    email: "carolcoff@fatec.sp.gov.br",
  },
];

const biblioteca = [
  {
    nome: "Daniel Reinoso de Morais",
    area: "Agente Técnico e Administrativo",
    imagem: { perfil },
    email: "daniel.morais01@fatec.sp.gov.br",
  },
];

const informatica = [
  {
    nome: "Marcos Issamu Kokehara",
    area: "Analista de Suporte e Gestão (Tecnólogo em Informática)",
    imagem: { perfil },
    email: "marcos.kokehara@fatec.sp.gov.br",
  },
];

const auxiliar_docente = [
  {
    nome: "Claudinei Paulista de Paula",
    area: "Auxiliar Docente (Aeronáutica)",
    imagem: { perfil },
    cv: "http://lattes.cnpq.br/0108907754791325",
    email: "claudinei.paulista@fatec.sp.gov.br",
  },
  {
    nome: "Cristiano Júlio Barreira",
    area: "Auxiliar Docente (Informática)",
    imagem: { perfil },
    cv: "",
    email: "cristiano.barreira@fatec.sp.gov.br",
  },
  {
    nome: "Régis Guimarães Silva",
    area: "Auxiliar Docente (Aeronáutica)",
    imagem: { perfil },
    cv: "",
    email: "regis.guimaraes@fatec.sp.gov.br",
  },
  {
    nome: "Renato de Menezes Quintino",
    area: "Auxiliar Docente (Aeronáutica)",
    imagem: { perfil },
    cv: "",
    email: "renato.quintino@fatec.sp.gov.br",
  },
];

const corpo_adm = () => (
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
          <p className="titulo">CORPO ADMINISTRATIVO</p>
        </Col>
      </Row>
    </Container>
    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2>Diretoria da Unidade</h2>
        </Col>
        <Col md={10}>
          <p>
            A Diretoria é o órgão executivo encarregado de dirigir e coordenar
            as atividades da Faculdade.<br></br>
          </p>
          {diretoria.map((obj) => (
            <div>
              <img src={perfil} width={150} height={150}></img>
              <p className="nome">{obj.nome}</p>
              <p className="area">{obj.area}</p>
              <Col>
                <a style={{ marginRight: "10px" }} href={obj.cv}>
                  <GrNotes></GrNotes>
                </a>
                <a href={obj.email}>
                  <AiOutlineMail></AiOutlineMail>
                </a>
              </Col>
            </div>
          ))}
        </Col>
      </Row>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2>Sala de Atendimentos no Parque Tecnológico</h2>
        </Col>
        <Col md={{ span: 12 }}>
          <p>
            Contamos com uma Sala de apoio para Reuniões, Atendimentos e
            Capacitações no seguinte endereço:<br></br>{" "}
            <p style={{ fontStyle: "italic" }}>
              Parque Tecnológico São José dos Campos - Centro Empresarial II –
              Sala 2207<br></br> Estrada Dr. Altino Bondensan, 500 – Distrito
              Eugênio de Melo, São José dos Campos - SP, CEP 12210-131
            </p>
          </p>
        </Col>
        <Col md={{ span: 6 }}>
          <img style={{ maxWidth: "600px" }} src={foto_parque}></img>
        </Col>
        <Col md={{ span: 6 }}>
          <img style={{ maxWidth: "535px" }} src={foto_cadi}></img>
        </Col>
      </Row>
    </Container>
    <Footer />{" "}
  </App>
);

export default corpo_adm;
