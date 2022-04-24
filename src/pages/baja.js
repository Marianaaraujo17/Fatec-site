import React from "react";
import "./aerodesign.css";
import { Card, CardGroup, Container, Row, Col, Table } from "react-bootstrap";
import App from "../containers/App";
import Footer from "../components/footer";
import bajaa from "../components/images/logo_baja_sae_brasil.png";
import turuna from "../components/images/2019-2_turuna.png";
import ReactYouTube from "../components/youtube/ReactYoutube";
import organizacao from "../components/images/setores.png";
import "./baja.css";

const baja = () => (
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
          <img className="baja-imagens" src={bajaa}></img>
        </Col>
      </Row>
    </Container>

    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="baja-subtitulo">O que é?</p>
          <p className="baja-p">
            O programa Baja SAE BRASIL é um desafio lançado aos estudantes de
            Engenharia que oferece a chance de aplicar na prática os
            conhecimentos adquiridos em sala de aula, visando incrementar sua
            preparação para o mercado de trabalho. Ao participar do programa
            Baja SAE, o aluno se envolve com um caso real de desenvolvimento de
            um veículo off road, desde sua concepção, projeto detalhado,
            construção e testes. E o mais estimulante é que as equipes
            vencedoras são convidadas a participar da competição internacional,
            nos Estados Unidos!
          </p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="baja-subtitulo">A competição</p>
          <p className="baja-p">
            Os alunos que participam do Baja SAE BRASIL devem formar equipes que
            representarão a Instituição de Ensino Superior à qual estão ligados.
            Estas equipes são desafiadas anualmente a participar da competição,
            que reúne os estudantes e promove a avaliação comparativa dos
            projetos. No Brasil a competição nacional recebe o nome de
            Competição Baja SAE BRASIL e as competições regionais são nomeadas
            como Etapa Sul, Sudeste e Nordeste.
            <br /> As etapas da competição não são complementares e a equipe
            vencedora do Baja nacional ganha o direito de competir da etapa
            internacional da prova nos Estados Unidos.
          </p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="baja-subtitulo">Histórico</p>
          <p className="baja-p">
            O projeto Baja SAE foi criado na Universidade da Carolina do Sul,
            Estados Unidos, sob a direção do Dr. John F. Stevens, sendo que a
            primeira competição ocorreu em 1976. O ano de 1991 marcou o início
            das atividades da SAE BRASIL, que, em 1994, lançava o Projeto Baja
            SAE BRASIL.
            <br /> No ano seguinte, em 1995, era realizada a primeira competição
            nacional, na pista Guido Caloi, bairro do Ibirapuera, cidade de São
            Paulo. No ano seguinte a competição foi transferida para o Autódromo
            de Interlagos, onde ficaria até o ano de 2002. A partir de 2003 a
            competição passou a ser realizada em Piracicaba, interior de São
            Paulo, no ECPA – Esporte Clube Piracicabano de Automobilismo.
            <br /> Desde 1997 a SAE BRASIL também apoia a realização de eventos
            regionais do Baja SAE BRASIL, através de suas Seções Regionais.
            Desde então dezenas de eventos foram realizados em vários estados do
            país como Rio Grande do Sul, São Paulo, Minas Gerais e Bahia.
          </p>
        </Col>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="baja-subtitulo">Por que participar?</p>
          <p className="baja-p">
            O Baja oferece aos participantes a oportunidade de aplicar na
            prática os conhecimentos adquiridos em sala de aula, de forma a
            contribuir em sua preparação para o mercado de trabalho. Além disso,
            as equipes vencedoras terão a oportunidade de viajar e mostrar seu
            projeto a profissionais estrangeiros na competição internacional,
            nos Estados Unidos.
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
          <Col>
            <p className="baja-titulo">A EQUIPE TURUNA BAJA</p>
          </Col>
          <Col md={{ span: 12 }}>
            <img className="baja-imagens2" src={turuna}></img>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="baja-p">
            <b>Missão:</b> Desenvolver o trabalho em equipe, promovendo a troca
            de informações e experiências, entre os alunos de diferentes cursos
            da Faculdade de Tecnologia Fatec Jessen Vidal, em prol de um único
            objetivo, o sucesso do desempenho sobre o desenvolvimento do projeto
            “Baja Turuna Fatec”.
          </p>
          <p className="baja-p">
            <b>Visão:</b> Estar entre as equipes estreantes a participar e
            concluir todas as provas. E agregar conhecimentos a todos os
            integrantes.
          </p>
          <p className="aero-p">
            <b>Valores:</b>
            <br />- Ética
            <br />- Comprometimento
            <br /> - Colaboração
            <br /> - Transparência
            <br /> - Melhoria contínua
            <br /> A equipe é formada por alunos de diversos cursos, organizada
            em 8 setores:
          </p>
        </Col>
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
              <img className="baja-imagens3" src={organizacao}></img>
            </Col>
          </Row>
        </Container>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="baja-subtitulo">Como participar?</p>
          <p className="baja-p">
            Envie e-mail contendo nome, curso, semestre e telefone para
            "turunabaja.sjc@fatec.sp.gov.br".
          </p>
          <p className="baja-p">
            <a
              id="cor"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfa6zL5zdOZwR0pHaIffVYsP9KWPDKi90g9qe61J-N6wJT2uQ/closedform"
            >
              Clique aqui para fazer a sua inscrição
            </a>
            <br />
            <a
              id="cor"
              target="_blank"
              href="https://www.facebook.com/Turuna-Baja-FATEC-1555294254765047/"
            >
              facebook.com/Turuna-Baja-FATEC-1555294254765047/
            </a>
          </p>
        </Col>
        <hr />
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="baja-subtitulo">Vídeos</p>
          <br />
          <ReactYouTube videoId="ZbbAt_Ysbvk" />
        </Col>
        <hr />
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="baja-subtitulo">Fotos</p>
          <br />
          <p className="baja-p">
            <a
              id="cor"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/images/baja/2016/fotos_baja_2016.php"
            >
              Baja 2016
            </a>
          </p>
        </Col>
      </Row>
    </Container>
    <Footer />
  </App>
);

export default baja;
