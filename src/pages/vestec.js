import React from "react";
import { Card, CardGroup, Container, Row, Col, Table } from "react-bootstrap";
import App from "../containers/App";
import Footer from "../components/footer";
import { FaFacebookSquare, FaYoutube, FaInstagram } from "react-icons/fa";
import vesteec from "../components/images/2018_vestec.png";
import foto from "../components/images/vestec_foto.png";
import "./vestec.css";

const vestec = () => (
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
        <Col md={{ span: 12 }} style={{ marginTop: "30px" }}>
          <img className="vestec-imagens" src={vesteec}></img>
        </Col>
      </Row>
    </Container>

    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="vestec-p">
            Vestec é atualmente um projeto de extensão da Fatec São José dos
            Campos, e oferece de forma gratuita um cursinho pré-vestibular para
            pessoas carentes da região, cujo coordenador geral é o prof.
            Reinaldo Arakaki e tem como coordenadores alunos dos cursos da Fatec
            e professores voluntários de universidades da região (Fatec, Usp,
            Unicamp, Unifesp, etc). Através de uma parceria com o Poliedro
            oferece as apostilas deste sistema.
          </p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="vestec-subtitulo">Processo Seletivo</p>
          <p className="vestec-p">
            O processo seletivo Vestec consiste em uma prova teórica e uma
            entrevista de renda. Na prova teórica são avaliados os conhecimentos
            gerais do aluno. A prova é composta por questões de matemática e
            português. A entrevista de renda é usada para avaliar as condições
            socioeconômicas do aluno, visto que o VESTEC é destinado para a
            população de baixa renda. Na entrevista de renda, serão priorizados
            os candidatos que frequentam ou frequentaram instituições públicas
            de ensino e que possuam menor renda familiar per capita (menor valor
            de renda por membro da família). Geralmente, as inscrições para o
            processo seletivo Vestec são abertas no meio do mês de janeiro e se
            estendem por um período de três semanas. O candidato que quiser
            participar do processo deverá pagar uma taxa de inscrição no valor
            de R$ 15,00.
          </p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="vestec-subtitulo">Documentos Requeridos</p>
          <p className="vestec-p">
            <a
              id="cor"
              target="_blank"
              href="https://www.facebook.com/Turuna-Baja-FATEC-1555294254765047/"
            >
              1- Lista de documentos exigidos para inscrição no curso Vestec
            </a>
            <br />
            <a
              id="cor"
              target="_blank"
              href="https://www.facebook.com/Turuna-Baja-FATEC-1555294254765047/"
            >
              2- Declaração de trabalho informal
            </a>
            <br />
            <a
              id="cor"
              target="_blank"
              href="https://www.facebook.com/Turuna-Baja-FATEC-1555294254765047/"
            >
              3- Declaração de residência cedida
            </a>
          </p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="vestec-subtitulo">Equipe</p>
          <p className="vestec-p">
            Diretor geral - Reinaldo Arakaki
            <br />
            Vice-diretor - Marcus Nascimento
            <br />
            Coordenadora geral - Isabela Rosa da Silva
            <br />
            Coordenador logístico - André dos Santos Sabino
            <br />
            Coordenadora discente/marketing - Débora dos Santos Sabino
            <br />
            Coordenador docente - Nicolas Raphael Silva de Araújo
            <br />
            Coordenador de escala – João Paulo Barcelos Botelho
          </p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="vestec-subtitulo">Voluntários</p>
          <p className="vestec-p">
            Cassiano Ribeiro de Assis
            <br />
            Letícia Croffi
            <br />
            Alex Santos Lemes
            <br />
            Gabriela Caraça Soares
          </p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="vestec-subtitulo">Professores</p>
          <p className="vestec-p">
            Francisco Martins - Português
            <br />
            Gabriel Silva do Carmo - Matemática 1<br />
            Alef Fernandes - Matemática 2<br />
            Bruno Felipe - Matemática 3<br />
            Luiza Aoki - Química 2<br />
            André Menezes – Química 1 e 3<br />
            João Paulo Moreira da Costa - Física 1<br />
            Rodolfo Camera – Física 2<br />
            Thiago de Souza Tursi - Física 3<br />
            Gustavo Queiroz - Biologia
            <br />
            Natália Nascimento de Souza – Inglês
            <br />
            Sandra Aparecida – História
          </p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="vestec-subtitulo">Contato</p>
          <p className="vestec-p">
            Dúvidas, sugestões, reclamações e mais informações para fazer parte
            da equipe, envie um email para:{" "}
            <mark id="marca">vestec.adm@gmail.com</mark> ou
            <mark id="marca">voluntarios.vestec@gmail.com</mark>
          </p>
        </Col>
        <Col md={{ span: 12 }}>
          <a
            target="_blank"
            href="https://www.facebook.com/Vestec-106717066088864/"
            className="hack-a"
          >
            <FaFacebookSquare size={30} />
            <text className="hack-cor">Facebook</text>
          </a>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <a
            target="_blank"
            href="https://www.instagram.com/vestecsjc/"
            className="hack-a"
          >
            <FaInstagram size={30} />{" "}
            <text className="hack-cor">Instagram</text>
          </a>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="vestec-subtitulo">Fotos</p>
        </Col>
        <Col md={{ span: 12 }}>
          <img className="vestec-imagens" src={foto}></img>
        </Col>
      </Row>
    </Container>
    <Footer />
  </App>
);

export default vestec;
