import React from "react";
import { Card, CardGroup, Container, Row, Col, Table } from "react-bootstrap";
import Footer from "../components/footer";
import App from "../containers/App";
import "./monitoria.css";

const monitoria = () => (
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
        <Col style={{ marginTop: "30px" }}>
          <p className="monitoria-titulo">Monitoria</p>
          <p className="monitoria-p">1º Semestre de 2022</p>
        </Col>
      </Row>
    </Container>

    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <hr />
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="monitoria-subtitulo">Resultado</p>
          <p className="monitoria-p">
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/monitoria/2022-1/Resultado%20Final%20do%20Processo%20de%20Monitoria%20-%202022-1.pdf"
            >
              Clique aqui para visualizar o resultado do Processo Seletivo do
              Edital para o Programa de Monitoria 1º semestre de 2022.
            </a>
          </p>

          <p className="monitoria-subtitulo" style={{ marginTop: "50px" }}>
            Anexos
          </p>
          <p className="monitoria-p">
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/monitoria/deliberacao_ceeteps_40_2018-02-08_monitoria.pdf"
            >
              - Deliberação CEETEPS nº 40 de 08/02/2018
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/monitoria.php#:~:text=Instru%C3%A7%C3%A3o%20Normativa%20CESU%20n%C2%BA%2007%20de%2016/07/2018"
            >
              - Instrução Normativa CESU nº 07 de 16/07/2018
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/monitoria.php#:~:text=Anexo%202%20%2D%20Relat%C3%B3rio%20Final"
            >
              - Anexo 2 - Relatório Final
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/monitoria.php#:~:text=Anexo%203%20%2D%20Ficha%20de%20Inscri%C3%A7%C3%A3o%20Monitoria"
            >
              - Anexo 3 - Ficha de Inscrição Monitoria
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/monitoria.php#:~:text=Anexo%205%20%2D%20Lista%20de%20Presen%C3%A7a"
            >
              - Anexo 5 - Lista de Presença
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/monitoria/anexo_06_registro_conteudo.docx"
            >
              - Anexo 6 - Registro de Conteúdo
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/monitoria.php#:~:text=Anexo%207%20%2D%20Ficha%20de%20Avalia%C3%A7%C3%A3o%20do%20Projeto"
            >
              - Anexo 7 - Ficha de Avaliação do Projeto
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/monitoria.php#:~:text=Anexo%208%20%2D%20Ficha%20de%20Inscri%C3%A7%C3%A3o%20Monitoria%20Inicia%C3%A7%C3%A3o"
            >
              - Anexo 8 - Ficha de Inscrição Monitoria Iniciação
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/monitoria.php#:~:text=Anexo%209%20%2D%20Instru%C3%A7%C3%B5es%20para%20a%20Elabora%C3%A7%C3%A3o%20do%20Projeto%20de%20Pesquisa"
            >
              - Anexo 9 - Instruções para a Elaboração do Projeto de Pesquisa
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/monitoria.php#:~:text=Anexo%2010%20%2D%20Plano%20de%20Trabalho%20(Aluno)"
            >
              - Anexo 10 - Plano de Trabalho (Aluno)
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/monitoria.php#:~:text=Anexo%2011%20%2D%20Plano%20de%20Trabalho%20(Orientador)"
            >
              - Anexo 11 - Plano de Trabalho (Orientador)
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/monitoria.php#:~:text=Anexo%2012%20%2D%20Instru%C3%A7%C3%B5es%20para%20a%20Elabora%C3%A7%C3%A3o%20do%20Relat%C3%B3rio%20Parcial"
            >
              - Anexo 12 - Instruções para a Elaboração do Relatório Parcial
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/monitoria.php#:~:text=Anexo%2013%20%2D%20Ficha%20de%20Acompanhamento%20das%20Atividades%20Propostas"
            >
              - Anexo 13 - Ficha de Acompanhamento das Atividades Propostas
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/monitoria.php#:~:text=Anexo%2014%20%2D%20Instru%C3%A7%C3%B5es%20para%20a%20Elabora%C3%A7%C3%A3o%20do%20Resumo%20Expandido"
            >
              - Anexo 14 - Instruções para a Elaboração do Resumo Expandido
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/monitoria.php#:~:text=Anexo%2015%20%2D%20Instru%C3%A7%C3%B5es%20para%20a%20Elabora%C3%A7%C3%A3o%20do%20Relat%C3%B3rio%20Final%20Monitoria%20%2D%20Inicia%C3%A7%C3%A3o"
            >
              - Anexo 15 - Instruções para a Elaboração do Relatório Final
              Monitoria - Iniciação
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/monitoria.php#:~:text=Anexo%2016%20%2D%20Formul%C3%A1rio%20de%20Avalia%C3%A7%C3%A3o%20do%20Resumo%20Expandido%20%2D%20CEPE"
            >
              - Anexo 16 - Formulário de Avaliação do Resumo Expandido - CEPE
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/monitoria.php#:~:text=Anexo%2017%20%2D%20Formul%C3%A1rio%20de%20Avalia%C3%A7%C3%A3o%20do%20Relat%C3%B3rio%20Final%20%2D%20CEPE"
            >
              - Anexo 17 - Formulário de Avaliação do Relatório Final - CEPE
            </a>
          </p>
        </Col>
      </Row>
    </Container>
    <Footer />
  </App>
);

export default monitoria;
