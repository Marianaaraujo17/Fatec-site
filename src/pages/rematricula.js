// /src/pages/Home.js
import React from "react";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import App from "../containers/App";
import "./rematricula.css";

const Rematricula = () => (
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
      <p className="rem-titulo">REMATRÍCULA</p>
    </Container>

    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col
          md={{ span: 12 }}
          style={{ marginBottom: "40px", justify: "center" }}
        >
          <p className="rem-subtitulo">
            Matrícula de Veteranos - 1º Semestre de 2022
          </p>
          <p className="rem-bold">ATENÇÃO</p>
          <p className="rem-p">
            Período para rematrícula: <a id="red">de 10 a 14 de janeiro,</a>
          </p>
          <p className="rem-p">
            <a
              id="cor_rematricula"
              target="_blank"
              href="https://siga.cps.sp.gov.br/aluno/login.aspx"
            >
              somente pela interface de aluno do SIGA
            </a>
          </p>
          <p className="rem-p2">
            Para dúvidas ou problemas preencha o{" "}
            <a
              id="cor_rematricula"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd-c07NT1cKHD1bbvEk19Le-bG0RVFcJTHrOZ5kNXImM8Jy_Q/viewform"
            >
              Formulário.
            </a>
          </p>

          <p className="rem-bold" style={{ marginTop: "5rem" }}>
            INSTRUÇÕES:
          </p>
          <p className="rem-p2">
            1) Acesse ao SIGA e clique em Matrícula online. Na tela de matrícula
            constam instruções que deverão ser lidas com atenção.
          </p>
          <p className="rem-p2">
            2) Selecione as disciplinas de interesse clicando nas caixas de
            seleção ao lado das mesmas, clicando em "Matricular Selecionadas".
            Ficarão na cor amarela e marcadas com a legenda NC (Não confirmada).
            Ou clique no lápis ao lado da caixa de seleção para escolher a
            turma.
          </p>
          <p className="rem-p2">
            3) Clique em “Confirmar Matrícula”. Dessa forma estará finalizada a
            etapa do aluno na Matrícula de Veteranos. IMPORTANTE: Matrícula não
            confirmada não será realizada.
          </p>
          <p className="rem-p2">
            A Secretaria Acadêmica fará a análise das rematrículas efetuadas e
            poderá ou não haver alterações, principalmente nos casos de detecção
            de conflitos de horário e não cumprimento do artigo 42 do
            Regulamento Geral dos Cursos de Graduação das FATECs
            (obrigatoriedade de cursar as disciplinas reprovadas). Caso a
            matrícula não seja realizada será trancada automaticamente, se ainda
            possuir direito.
          </p>

          <p className="rem-bold" style={{ marginTop: "5rem" }}>
            DICAS:
          </p>
          <p className="rem-p2">
            - Consulte os{" "}
            <a id="cor_rematricula" href="/horarios_aula">
              horários de aula
            </a>{" "}
            e faça um planejamento das disciplinas em que deseja cursar antes de
            entrar na interface da matrícula. Realizando este procedimento
            facilitará o uso da interface.
          </p>
          <p className="rem-p2">
            - Ao acessar a interface, leia atentamente as instruções de uso.
          </p>

          <p className="rem-bold" style={{ marginTop: "5rem" }}>
            IMPORTANTE:
          </p>
          <p className="rem-p2">
            Qualquer problema ou dúvida deverá obrigatoriamente ser informada
            via{" "}
            <a
              id="cor_rematricula"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd-c07NT1cKHD1bbvEk19Le-bG0RVFcJTHrOZ5kNXImM8Jy_Q/viewform"
            >
              Formulário.
            </a>
          </p>
          <p className="rem-p2">
            O formulário é o único meio de comunicação oficial para o tratamento
            de assuntos relacionados à Matrícula de Veteranos.
          </p>
          <p className="rem-p2">
            Após relatar um problema, aguarde o recebimento do nosso retorno via
            e-mail.
          </p>
          <p className="rem-p2">
            Lembrando que o próprio aluno deverá realizar a matrícula no SIGA.
            Caso contrário terá o semestre trancado automaticamente conforme
            Art. 23 do Regulamento Geral dos Cursos de Graduação das FATECs.
          </p>

          <p className="rem-subtitulo" style={{ marginTop: "5rem" }}>
            Seguem abaixo as relações de disciplinas habilitadas para matrícula
            em Turmas Especiais:
          </p>

          <p className="rem-p2">
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/secretaria/2022-1/rematricula/turmas_especiais/TES%20ADS.pdf"
            >
              - Análise e Desenvolvimento de Sistemas
            </a>
            <br />
            - Automação e Manufatura Digital (não há turmas especiais)
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/secretaria/2022-1/rematricula/turmas_especiais/TES%20BD.pdf"
            >
              - Banco de Dados
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/secretaria/2022-1/rematricula/turmas_especiais/TES%20DSM.pdf"
            >
              - Desenvolvimento de Software Multiplataformas
            </a>
            <br />
            - Gestão da Produção Industrial (não há turmas especiais)
            <br />
            - Logística (não há turmas especiais)
            <br />
            - Manufatura Avançada (não há turmas especiais)
            <br />
            - Manutenção de Aeronaves (não há turmas especiais)
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/secretaria/2022-1/rematricula/turmas_especiais/TES%20PEA.pdf"
            >
              - Projetos de Estruturas Aeronáuticas
            </a>
            <br />
          </p>
        </Col>
      </Row>
    </Container>
    <Footer />
  </App>
);

export default Rematricula;
