import React from "react";
import Footer from "../components/footer";
import App from "../containers/App";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import "./laboratorio.css";
import { MdSubdirectoryArrowRight } from "react-icons/md";

const laboratorio = () => (
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
          <p className="lab-titulo">LABORATÓRIOS</p>
        </Col>
      </Row>
    </Container>

    <Container style={{ marginBottom: "50px" }}>
      <Row style={{ marginBottom: "30px" }}>
        <Col md={{ span: 12 }}>
          <p className="lab-titulo">Horário de Funcionamento</p>
          <p className="lab-texto">
            De segunda à sexta-feira das 07h10 às 23h00.
          </p>
        </Col>
      </Row>
      <Row style={{ marginBottom: "30px" }}>
        <Col md={{ span: 12 }}>
          <p className="lab-titulo">Organização</p>
          <p className="lab-texto">
            Os laboratórios da FATEC-SJC prestam serviços de atendimento à
            comunidade acadêmica, oferecem recursos computacionais a serem
            utilizados nas disciplinas dos cursos regulares e em cursos
            extracurriculares ministrados na instituição.
          </p>
          <p className="lab-texto">
            Durante a fase de implantação dos cursos, a responsabilidade dos
            laboratórios estará a cargo do Diretor da FATEC-SJC e será
            coordenado pelo professor usuário do laboratório, o responsável
            geral pelas atividades desenvolvidas pelo mesmo durante as aulas.
          </p>
        </Col>
      </Row>

      <Row style={{ marginBottom: "30px" }}>
        <Col md={{ span: 12 }}>
          <p className="lab-titulo">Usuários</p>
          <p className="lab-texto">
            São considerados usuários dos Laboratórios de Informática, todos os
            Professores, Funcionários e Alunos da FATEC-SJC.
          </p>
          <p className="lab-texto">
            As normas para a utilização dos laboratórios aplicam-se a todos os
            usuários, estando os infratores sujeitos às penalidades.
          </p>
          <p className="lab-texto">
            Na realização de cursos, que não os de Graduação, poderão utilizar
            os laboratórios os participantes dos mesmos, desde que acompanhados
            do responsável pelo referido curso.
          </p>
        </Col>
      </Row>

      <Row style={{ marginBottom: "30px" }}>
        <Col md={{ span: 12 }}>
          <p className="lab-titulo">Infrações previstas</p>
          <p className="lab-texto">
            O não atendimento às normas estabelecidas resultará na aplicação da
            pena de suspensão do uso do laboratório, que podem variar de 15
            (quinze) dias a 01 (um) semestre, aplicadas pela Coordenação do
            Curso;
          </p>
          <p className="lab-texto">
            Em caso de suspensão do aluno, este não poderá utilizar o
            laboratório, exceto durante as aulas do mesmo;
          </p>
          <p className="lab-texto">
            Em qualquer suspeita de contaminação por{" "}
            <a
              className="lab-link"
              href="https://pt.wikipedia.org/wiki/Vírus_de_computador"
              target="_blank"
            >
              VÍRUS
            </a>
            , o laboratório ficará fechado por tempo indeterminado, e o aluno
            sofrerá as penalidades previstas nas normas do laboratório, que se
            encontra afixada no mesmo;
          </p>
          <p className="lab-texto">
            As exceções serão devidamente avaliadas pela Coordenação dos Cursos.
          </p>
        </Col>
      </Row>

      <Row style={{ marginBottom: "30px" }}>
        <Col md={{ span: 12 }}>
          <p className="lab-titulo">Orientações de uso do laboratório</p>
          <p className="lab-texto">
            <MdSubdirectoryArrowRight></MdSubdirectoryArrowRight> Não comer e/ou
            beber no interior do laboratório.
          </p>
          <p className="lab-texto">
            <MdSubdirectoryArrowRight></MdSubdirectoryArrowRight> Ao final das
            aulas, desligar o computador, o monitor, o estabilizador, fechar as
            janelas, fechar as persianas e deixar as cadeiras organizadas.
          </p>
          <text className="lab-texto">
            <text style={{ fontWeight: "bold" }}>Lembre-se:</text> da mesma
            forma que você gostaria de encontrar o laboratório organizado, os
            outros também.
          </text>
        </Col>
      </Row>
    </Container>

    <Footer />
  </App>
);

export default laboratorio;
