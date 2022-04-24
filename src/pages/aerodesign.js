import React from "react";
import { Card, CardGroup, Container, Row, Col, Table } from "react-bootstrap";
import megazord from "../components/images/2017_logo_megazord.png";
import aerodesignn from "../components/images/2017_logo_aerodesign.png";
import "./aerodesign.css";

import App from "../containers/App";

const aerodesign = () => (
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
          <p className="aero-titulo">Projeto SAE Aerodesign</p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginTop: "30px" }}>
          <img className="aero-imagens" src={megazord}></img>
        </Col>
      </Row>
    </Container>

    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="aero-subtitulo">Quem somos?</p>
          <p className="aero-p">
            Nossa história começou em 2013, com graduandos em Automação
            Aeronáutica da FATEC São José dos Campos que, inspirados pelo
            espirito competitivo e a vontade em aplicar os conhecimentos
            teóricos na prática, iniciaram o desenvolvimento do primeiro projeto
            de aeronave para a competição SAE Brasil Aerodesign. Ao participar
            da equipe Megazord, o aluno se envolve com um caso real de
            desenvolvimento de projeto aeronáutico, desde sua a concepção,
            projeto até construção e testes, a fim de evoluir constantemente e
            alcançar uma melhor classificação na competição.
          </p>
          <p className="aero-fonte">
            A equipe Megazord é uma das poucas representantes de Faculdade de
            Tecnologia a competir em meio a Faculdades de Engenharia da América
            Latina.
          </p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="aero-subtitulo">Missão</p>
          <p className="aero-p">
            Projetar e desenvolver um trabalho interdisciplinar para a
            construção de uma aeronave que atenda aos requisitos da competição
            SAE BRASIL Aerodesign. Fornecendo aos alunos envolvidos a
            experiência de trabalho em equipe, desenvolvimento de projeto e o
            reconhecimento da Faculdade de Tecnologia Fatec Professor Jessen
            Vidal na competição, representando o ensino tecnológico de
            qualidade.
          </p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="aero-subtitulo">Visão</p>
          <p className="aero-p">
            Ser uma equipe competitiva e superar os resultados na classificação
            de competições anteriores.
          </p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="aero-subtitulo">Valores</p>
          <p className="aero-p">
            - Ética
            <br />- Trabalho em equipe
            <br /> - Comprometimento
            <br /> - Responsabilidade
            <br /> - Disciplina
            <br /> - Aprendizado
            <br /> - Melhoria contínua
          </p>
        </Col>
      </Row>
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
          <Col md={{ span: 12 }}>
            <img className="aero-imagens" src={aerodesignn}></img>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="aero-subtitulo">A competição</p>
          <p className="aero-p">
            As equipes que participam da SAE Aerodesign representam uma
            Instituição de Ensino Superior à qual estão ligadas. Estas equipes
            são desafiadas com regulamentos que mudam anualmente, baseados em
            desafios reais enfrentados pela indústria aeronáutica. As avaliações
            e classificação das equipes são realizadas em duas etapas:
            Competição de Projeto e Competição de Voo, onde os projetos são
            avaliados comparativamente por engenheiros da indústria aeronáutica,
            com base na concepção e desempenho dos projetos. No Brasil a
            competição nacional recebe o nome de Competição SAE Brasil
            Aerodesign.
            <br /> A Competição SAE BRASIL AeroDesign é composta por três
            categorias distintas: Regular, Advanced e Micro, com requisitos
            específicos aplicáveis à cada uma destas. Atualmente a equipe
            Megazord compete na categoria Regular. Os primeiros classificados
            nas categorias terão a oportunidade de representar o Brasil na
            competição mundial nos Estados Unidos.
          </p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="aero-subtitulo">Como participar?</p>
          <p className="aero-p">
            As equipes que participam da SAE Aerodesign representam uma
            Instituição de Ensino Superior à qual estão ligadas. Estas equipes
            são desafiadas com regulamentos que mudam anualmente, baseados em
            desafios reais enfrentados pela indústria aeronáutica. As avaliações
            e classificação das equipes são realizadas em duas etapas:
            Competição de Projeto e Competição de Voo, onde os projetos são
            avaliados comparativamente por engenheiros da indústria aeronáutica,
            com base na concepção e desempenho dos projetos. No Brasil a
            competição nacional recebe o nome de Competição SAE Brasil
            Aerodesign.
            <br /> A Competição SAE BRASIL AeroDesign é composta por três
            categorias distintas: Regular, Advanced e Micro, com requisitos
            específicos aplicáveis à cada uma destas. Atualmente a equipe
            Megazord compete na categoria Regular. Os primeiros classificados
            nas categorias terão a oportunidade de representar o Brasil na
            competição mundial nos Estados Unidos.
          </p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="aero-subtitulo">Contato</p>
        </Col>
      </Row>
    </Container>
  </App>
);

export default aerodesign;
