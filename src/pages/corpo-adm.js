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
import tozi from "../components/images/administrativo/tozi.png";
import sabha from "../components/images/docentes/fabiano_sabha_walczak.jpg";
import walmir from "../components/images/docentes/jose_walmir.png";
import arakaki from "../components/images/docentes/reinaldo_gen_ichiro_arakaki.jpg";
import roque from "../components/images/docentes/roque_antonio_de_moura.jpg";
import reinaldo_fagundes from "../components/images/docentes/reinaldo_fagundes.png";
import viviane from "../components/images/docentes/viviane_ribeiro.png";
import felix from "../components/images/docentes/felix_arlindo.png";
import carlos_lineu from "../components/images/docentes/carlos_lineu_de_faria_e_alves.png";
import erick from "../components/images/administrativo/erick_dos_santos_cristovao.jpg";
import luana from "../components/images/administrativo/luana_rezende_de_souza_moreira.jpg";
import daniel from "../components/images/administrativo/daniel_reinoso_morais.jpg";
import claudinei from "../components/images/administrativo/claudinei_paulista_de_paula.jpg";

import "./corpo-adm.css";
import { GrNotes } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";

const diretoria = [
  {
    nome: "Luiz Antônio Tozi",
    area: "Diretor da Unidade",
    imagem: tozi,
    cv: "http://lattes.cnpq.br/6282935022782310",
    email: "f146.diretoria@fatec.sp.gov.br",
  },
];

const assistente = [
  {
    nome: "Luciana de Abreu Aquino",
    area: "Assistente Técnico / Administrativo I",
    imagem: perfil,
    cv: "http://lattes.cnpq.br/6282935022782310",
    email: "luciana.aquino@fatec.sp.gov.br",
  },
];

const coordenacao = [
  {
    nome: "Fabiano Sabha Walczak",
    curso: "Análise e Desenvolvimento de Sistemas",
    imagem: sabha,
    cv: "http://lattes.cnpq.br/4250738143383384",
    email: "f146.adssjc@fatec.sp.gov.br",
    ref: "/ads",
  },
  {
    nome: "José Walmir Gonçalves Duque",
    curso: "Banco de Dados",
    imagem: walmir,
    cv: "http://lattes.cnpq.br/4678097512178887",
    email: "f146.bdsjc@fatec.sp.gov.br",
    ref: "/banco",
  },
  {
    nome: "Reinaldo Gen Ichiro Arakaki",
    curso: "Desenvolvimento de Software Multiplataforma",
    imagem: arakaki,
    cv: "http://lattes.cnpq.br/2075406788034578",
    email: "f146.dsmsjc@fatec.sp.gov.br",
  },
  {
    nome: "Roque Antônio de Moura",
    curso: "Gestão da Produção Industrial",
    imagem: roque,
    cv: "http://lattes.cnpq.br/3410759923244537",
    email: "gpi.sjc@fatec.sp.gov.br",
  },
  {
    nome: "Reinaldo Fagundes dos Santos",
    curso: "Logística",
    imagem: reinaldo_fagundes,
    cv: "http://lattes.cnpq.br/4671561926234240",
    email: "f146.logisticasjc@fatec.sp.gov.br",
  },
  {
    nome: "Viviane Ribeiro de Siqueira",
    curso: "Manufatura Avançada",
    imagem: viviane,
    cv: "http://lattes.cnpq.br/3319116115200375",
    email: "f146.manufatura@fatec.sp.gov.br",
  },
  {
    nome: "Felix Arlindo Strottmann",
    curso: "Manutenção de Aeronaves",
    imagem: felix,
    cv: "http://lattes.cnpq.br/8478784526842018",
    email: "f146.manutencao@fatec.sp.gov.br",
  },
  {
    nome: "Carlos Lineu de Faria e Alves",
    curso: "Projetos de Estruturas Aeronáuticas",
    imagem: carlos_lineu,
    cv: "http://lattes.cnpq.br/1659520862242303",
    email: "f146.peasjc@fatec.sp.gov.br",
  },
];

const diretoria_academica = [
  {
    nome: "Erick dos Santos Cristóvão",
    area: "Diretor de Serviços Acadêmicos",
    imagem: erick,
    email: "f146.secretaria@fatec.sp.gov.br",
  },
  {
    nome: "Luana Rezende de Souza Moreira",
    area: "Assistente Administrativo",
    imagem: luana,
    email: "luana.moreira@fatec.sp.gov.br",
  },
  {
    nome: "Benedito Vitorino Júnior",
    area: "Agente Técnico e Administrativo",
    imagem: perfil,
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
    imagem: daniel,
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
    imagem: claudinei,
    cv: "http://lattes.cnpq.br/0108907754791325",
    email: "claudinei.paulista@fatec.sp.gov.br",
  },
  {
    nome: "Cristiano Júlio Barreira",
    area: "Auxiliar Docente (Informática)",
    imagem: perfil,
    cv: "",
    email: "cristiano.barreira@fatec.sp.gov.br",
  },
  {
    nome: "Régis Guimarães Silva",
    area: "Auxiliar Docente (Aeronáutica)",
    imagem: perfil,
    cv: "",
    email: "regis.guimaraes@fatec.sp.gov.br",
  },
  {
    nome: "Renato de Menezes Quintino",
    area: "Auxiliar Docente (Aeronáutica)",
    imagem: perfil,
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
        marginTop: "20px",
      }}
    >
      <Row>
        <Col>
          <p className="corpo-adm-titulo">CORPO ADMINISTRATIVO</p>
        </Col>
      </Row>
    </Container>
    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2>Diretoria da Unidade</h2>
        </Col>
        <Col style={{ marginBottom: "20px" }} md={10}>
          <p>
            A Diretoria é o órgão executivo encarregado de dirigir e coordenar
            as atividades da Faculdade.<br></br>
          </p>
          {diretoria.map((obj) => (
            <div>
              <img src={obj.imagem} width={150} height={150}></img>
              <p className="corpo-adm-nome">{obj.nome}</p>
              <p className="corpo-adm-area">{obj.area}</p>
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
        <hr></hr>
      </Row>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="corpo-adm-h2">Assistente do Diretor</h2>
        </Col>
        <Col style={{ marginBottom: "20px" }} md={10}>
          {assistente.map((obj) => (
            <div>
              <img src={perfil} width={150} height={150}></img>
              <p className="corpo-adm-nome">{obj.nome}</p>
              <p className="corpo-adm-area">{obj.area}</p>
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
        <hr></hr>
      </Row>

      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="corpo-adm-h2">Coordenação de Cursos</h2>
        </Col>
        <Col md={10}>
          <p>
            A Coordenação de Curso em Implantação é a menor fração da estrutura
            da Faculdade para todos os efeitos de organização administrativa,
            didático-científica e de distribuição de pessoal.
            <br></br>
          </p>
        </Col>
        <Row xs={1} md={3} className="g-4">
          {coordenacao.map((obj) => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <img src={obj.imagem} width={150} height={150}></img>
                  </Card.Title>
                  <Card.Text>
                    <p className="corpo-adm-nome">{obj.nome}</p>
                  </Card.Text>
                  <Card.Text>
                    <a id="cor" href={obj.ref} className="corpo-adm-curso">
                      {obj.curso}
                    </a>
                  </Card.Text>
                  <Card.Text>
                    <a
                      target="_blank"
                      style={{ marginRight: "10px" }}
                      href={obj.cv}
                    >
                      <GrNotes></GrNotes>
                    </a>
                    <a target="_blank" href={obj.email}>
                      <AiOutlineMail></AiOutlineMail>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
      <hr></hr>

      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="corpo-adm-h2">Diretoria de Serviços Acadêmicos</h2>
        </Col>
        <Col md={10}>
          <p>
            A Secretaria Acadêmica é o órgão de apoio da Direção, onde se
            centralizam os registros dos serviços administrativos concernentes
            ao regime didático e escolar da Faculdade.
            <br></br>
          </p>
          <p>
            É o órgão responsável, entre outras coisas, pela emissão de
            documentos e registros de notas.
          </p>
        </Col>
        <Row xs={1} md={3} className="g-4">
          {diretoria_academica.map((obj) => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <img src={obj.imagem} width={150} height={150}></img>
                  </Card.Title>
                  <Card.Text>
                    <p className="corpo-adm-nome">{obj.nome}</p>
                  </Card.Text>
                  <Card.Text>
                    <p href={obj.ref} className="corpo-adm-area">
                      {obj.area}
                    </p>
                  </Card.Text>
                  <Card.Text>
                    <a
                      target="_blank"
                      style={{ marginRight: "10px" }}
                      href={obj.cv}
                    >
                      <GrNotes></GrNotes>
                    </a>
                    <a target="_blank" href={obj.email}>
                      <AiOutlineMail></AiOutlineMail>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
      <hr></hr>

      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="corpo-adm-h2">
            Diretoria de Serviços Administrativos
          </h2>
        </Col>
        <Col md={10}>
          <p>
            A Diretoria de Serviços Administrativos é o órgão responsável pela
            direção e coordenação das atividades de suporte administrativo e
            operacional ao desenvolvimento do ensino e da pesquisa, promovendo,
            entre outras atividades, as medidas administrativas necessárias à
            defesa e preservação dos bens patrimoniais.
            <br></br>
          </p>
        </Col>
        <Row xs={1} md={3} className="g-4">
          {diretoria_administrativa.map((obj) => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <img src={perfil} width={150} height={150}></img>
                  </Card.Title>
                  <Card.Text>
                    <p className="corpo-adm-nome">{obj.nome}</p>
                  </Card.Text>
                  <Card.Text>
                    <p href={obj.ref} className="corpo-adm-area">
                      {obj.area}
                    </p>
                  </Card.Text>
                  <Card.Text>
                    <a
                      target="_blank"
                      style={{ marginRight: "10px" }}
                      href={obj.cv}
                    >
                      <GrNotes></GrNotes>
                    </a>
                    <a target="_blank" href={obj.email}>
                      <AiOutlineMail></AiOutlineMail>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
      <hr></hr>

      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="corpo-adm-h2">Biblioteca</h2>
        </Col>
        <Col style={{ marginBottom: "20px" }} md={10}>
          {biblioteca.map((obj) => (
            <div>
              <img src={obj.imagem} width={150} height={150}></img>
              <p className="corpo-adm-nome">{obj.nome}</p>
              <p className="corpo-adm-area">{obj.area}</p>
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
        <hr></hr>
      </Row>

      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="corpo-adm-h2">Departamento de Informática</h2>
        </Col>
        <Col style={{ marginBottom: "20px" }} md={10}>
          {informatica.map((obj) => (
            <div>
              <img src={perfil} width={150} height={150}></img>
              <p className="corpo-adm-nome">{obj.nome}</p>
              <p className="corpo-adm-area">{obj.area}</p>
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
        <hr></hr>
      </Row>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="corpo-adm-h2">Auxiliar Docente</h2>
        </Col>
        <Col md={10}></Col>
        <Row xs={1} md={3} className="g-4">
          {auxiliar_docente.map((obj) => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <img src={obj.imagem} width={150} height={150}></img>
                  </Card.Title>
                  <Card.Text>
                    <p className="corpo-adm-nome">{obj.nome}</p>
                  </Card.Text>
                  <Card.Text>
                    <p href={obj.ref} className="corpo-adm-area">
                      {obj.area}
                    </p>
                  </Card.Text>
                  <Card.Text>
                    <a
                      target="_blank"
                      style={{ marginRight: "10px" }}
                      href={obj.cv}
                    >
                      <GrNotes></GrNotes>
                    </a>
                    <a target="_blank" href={obj.email}>
                      <AiOutlineMail></AiOutlineMail>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
      <hr></hr>
    </Container>
    <Footer />{" "}
  </App>
);

export default corpo_adm;
