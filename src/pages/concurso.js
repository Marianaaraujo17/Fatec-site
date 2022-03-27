import React from "react";
import Footer from "../components/footer";
import App from "../containers/App";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import "./concurso.css";


const concurso = () => (
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
          <p className="titulo">CONCURSO PÚBLICO</p>
    </Container>
    <Container>
      <Card>
      <Row>
      <p id="subtitulo">Docentes</p>
      <p id="espaco">A contratação de docentes pode ocorrer de duas formas: por processo seletivo, quando a contratação é feita por prazo determinado (contrata-se por 1 ano, podendo ser prorrogado por mais 1 ano) e por concurso público, quando a contratação é feita por tempo indeterminado.</p>
      <p id="subtitulo">Funcionários Técnico-Administrativos e Auxiliares de Docente</p>
      <p id="espaco">A contratação de funcionários técnico-administrativos e auxiliares de docente é feita somente através de concurso público. </p>
      <p id="subtitulo">Informações</p>
      <p>Para detalhes sobre a abertura de concursos, o candidato deverá contatar a Unidade de interesse pessoalmente, pelos telefones indicados no site ou nas seguintes páginas: </p>
      <p>- Concursos para contratação de docentes e auxiliares de docente do Centro Paula Souza</p>
      <a id="left" target="blank" href="https://urhsistemas.cps.sp.gov.br/dgsdad/default.aspx">https://urhsistemas.cps.sp.gov.br/dgsdad/default.aspx</a>
      <p>- Concursos públicos do Estado de São Paulo</p>
      <a id="left" target="blank" href="http://www.concursopublico.sp.gov.br">http://www.concursopublico.sp.gov.br</a>
      <p>- Diário Oficial do Estado de São Paulo</p>
      <a id="left" target="blank" href="http://www.imprensaoficial.com.br">http://www.imprensaoficial.com.br</a>
      <p id="subtitulo">Deliberações</p>
      <p>Dispõe sobre norma para a realização de Concurso Público para o preenchimento de emprego público permanente de Professor do Ensino Superior das Faculdades de Tecnologia do Centro Estadual de Educação Tecnológica Paula Souza.</p>
      <a id="left" target="blank" href="http://fatecsjc.edu.br/downloads/arquivos/2015-1/2015.01.09_deliberao_ceeteps_009.pdf">Deliberação CEETEPS nº 009 de 09/01/2015</a>
      </Row>
      </Card>
    </Container>
    <Footer/>
  </App>
);

export default concurso;
