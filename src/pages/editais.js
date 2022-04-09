import React from "react";
import Footer from "../components/footer";
import App from "../containers/App";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import "./biblioteca.css";

const editais = () => (
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
      <p className="edit-titulo">EDITAIS</p>
    </Container>
    <Container>
      <Card>
        <Row>
          <p id="subtitulo">PROCESSO SELETIVO SIMPLIFICADO</p>
          <p id="espaco">
            Curso Superior de Tecnologia em Projetos de Estruturas Aeronáuticas
            <br />
            Período de inscrição:
            <mark id="marca">de 01/04 até às 23h59 do dia 15/04/2022</mark>
          </p>
          <p id="espaco">
            {" "}
            <a
              id="cor"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/editais/2022/DOE%2030-03-2022%20Exec%20I%20-%20Pag%20344-346%20-%20Edital%20PSS%20-%20Ingl%C3%AAs%20IV%20-%20Curso%20PEA.pdf"
            >
              Edital nº 146/05/2022
            </a>{" "}
            do Processo Seletivo Simplificado para preenchimento de 01 vaga para
            a disciplina de <u>INGLÊS IV</u>, 02 horas-aula, período noturno, no
            Curso Superior de Tecnologia em Projetos de Estruturas Aeronáuticas;
          </p>
          <p id="espaco">
            {" "}
            <a
              id="cor"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/editais/2022/DOE%2030-03-2022%20Exec%20I%20-%20Pag%20348-349%20-%20Edital%20PSS%20-%20Ingl%C3%AAs%20V%20-%20Curso%20PEA.pdf"
            >
              Edital nº 146/06/2022
            </a>{" "}
            do Processo Seletivo Simplificado para preenchimento de 01 vaga para
            a disciplina de <u>INGLÊS V</u>, 02 horas-aula, período noturno, no
            Curso Superior de Tecnologia em Projetos de Estruturas Aeronáuticas.
          </p>
          <p>
            As inscrições deverão ser realizadas <u>somente pela internet</u>,
            no site
            <a
              id="cor"
              target="_blank"
              href="https://urhsistemas.cps.sp.gov.br/dgsdad/selecaopublica/"
            >
              {" "}
              www.cps.sp.gov.br
            </a>
            , clicar em FATEC e, em seguida, Concursos.
          </p>
        </Row>
      </Card>
    </Container>
    <Container>
      <Card>
        <Row>
          <p id="subtitulo">EDITAIS INTERNOS</p>
          <p id="espaco">
            Curso de Projetos de Estruturas Aeronáuticas
            <br />
            Período de inscrição:
            <mark id="marca">
              de 04/04 a 06/04/2022 (03 dias úteis), até às 23h59
            </mark>
          </p>
          <p id="espaco">
            <a
              id="cor"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/editais/2022/033-2022%20-%20Ingl%C3%AAs%20I%20-%20PEA.pdf"
            >
              Edital interno determinado nº 033/2022
            </a>{" "}
            – INGLÊS I – 02 horas-aula;
            <br />
            <a
              id="cor"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/editais/2022/034-2022%20-%20Ingl%C3%AAs%20VI%20-%20PEA.pdf"
            >
              Edital interno determinado nº 034/2022
            </a>{" "}
            – INGLÊS VI – 02 horas-aula.
          </p>
          <p id="espaco">
            <a id="cor">IMPORTANTE:</a>
            <br />
            Para realizar a inscrição o docente deverá encaminhar,{" "}
            <u>exclusivamente</u>, para o e-mail{" "}
            <mark id="marca">f146editais@cps.sp.gov.br</mark> a seguinte
            documentação:
            <br />
            A) Ficha de manifestação de interesse (anexo VI da Instrução CESU
            15);
            <br />
            B) Tabela de pontuação (Anexo IV-A Aba disciplina línguas
            estrangeiras) da Instrução CESU nº 15, preenchida eletronicamente,
            sendo o preenchimento exclusivamente de responsabilidade do docente
            interessado; e<br />
            C) Documentação comprobatória das atividades/itens elencados na
            tabela de pontuação, devendo cada comprovante ser numerado, de modo
            a informar no anexo IV a sua correspondência.
          </p>
          <p id="espaco">
            Link para download dos modelos a serem preenchidos e enviados para a
            inscrição:
            <a
              id="cor"
              target="_blank"
              href="https://cesu.cps.sp.gov.br/concursos-publicos-pss-e-ampliacao/"
            >
              https://cesu.cps.sp.gov.br/concursos-publicos-pss-e-ampliacao/
            </a>
          </p>
          <p id="espaco">
            Verificar a{" "}
            <a
              id="cor"
              target="_blank"
              href="https://cesu.cps.sp.gov.br/wp-content/uploads/2021/10/Instrucao-CESU-15_2021-10-29-D.O.pdf"
            >
              Instrução CESU nº 15 de 28/10/2021
            </a>
            , a{" "}
            <a
              id="cor"
              target="_blank"
              href="https://cesu.cps.sp.gov.br//wp-content/uploads/2019/06/DELIBERACAO_CEETEPS_48_2018-13-12.pdf"
            >
              Deliberação CEETEPS 48 de 13/12/2018
            </a>{" "}
            e a{" "}
            <a
              id="cor"
              target="_blank"
              href="https://cesu.cps.sp.gov.br//wp-content/uploads/2019/06/DELIBERACAO_CEETEPS-52_2019-05-16.pdf"
            >
              Deliberação CEETEPS 52 de 09/05/2019
            </a>
            , que dispõem sobre procedimentos e critérios para a alteração de
            carga horária de docentes a partir do 1º semestre de 2022.
          </p>
        </Row>
      </Card>
    </Container>
    <Footer />
  </App>
);

export default editais;
