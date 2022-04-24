import React from "react";
import { Card, CardGroup, Container, Row, Col, Table } from "react-bootstrap";
import Footer from "../components/footer";
import App from "../containers/App";
import foto1 from "../components/images/workshop_0001.png";
import foto2 from "../components/images/workshop_0002.png";
import foto3 from "../components/images/workshop_0003.png";
import foto4 from "../components/images/workshop_0004.png";
import foto5 from "../components/images/workshop_0005.png";
import "./workshop.css";

const workshop = () => (
  <App>
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "50px",
        marginTop: "25px",
      }}
    >
      <Row>
        <Col>
          <p className="workshop-titulo">Workshop de Logística Humanitária</p>
        </Col>
      </Row>
    </Container>

    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }}>
          <p className="workshop-p">
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/workshop/apresentacoes/modelo_para_entender_a_convergencia_de_materiais_em_desastres.pdf"
            >
              - Modelo para entender a convergência de materiais em desastres
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/workshop/apresentacoes/atuacao_guarda_civil_metropolitana_sp_contexto_politica_nacional_protecao_defesa_civil.pdf"
            >
              - A atuação da Guarda Civil Metropolitana De São Paulo no contexto
              da Política Nacional de Proteção e Defesa Civil
            </a>
            <br />

            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/workshop/apresentacoes/organizacao_de_simulados_o_caso_de_campos_do_jordao_sp.pdf"
            >
              - Organização de simulados: O caso de Campos do Jordão-SP
            </a>
            <br />

            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/workshop/apresentacoes/cartografia_social_espacializando_os_riscos_ambientais.pdf"
            >
              - Cartografia Social: espacializando os riscos ambientais
            </a>
            <br />

            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/workshop/apresentacoes/cao_cibernetico.pdf"
            >
              - Cão Cibernético
            </a>
            <br />

            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/workshop/apresentacoes/o_estado_sp_na_campanha_cidades_resilientes_minha_cidade_esta_se_preparando.pdf"
            >
              - O Estado de São Paulo na Campanha Cidades Resilientes Minha
              cidade está se preparando
            </a>
            <br />

            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/workshop/apresentacoes/sete_cidades_integradas_na_gestao_e_prevencao_dos_riscos.pdf"
            >
              - Sete cidades integradas na gestão e prevenção dos riscos
            </a>
            <br />

            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/workshop/apresentacoes/vulnerabilidade_estrutural_escolas.pdf"
            >
              - Avaliação da vulnerabilidade estrutural das escolas expostas a
              ameaças naturais
            </a>
          </p>
        </Col>
        <Col
          md={{ span: 12 }}
          style={{ marginBottom: "40px", marginTop: "40px" }}
        >
          <p className="workshop-subtitulo">Fotos</p>
        </Col>
        <Col>
          <img className="workshop-imagens" src={foto1}></img>
          <img className="workshop-imagens" src={foto2}></img>
          <img className="workshop-imagens" src={foto3}></img>
          <img className="workshop-imagens" src={foto4}></img>
          <img className="workshop-imagens" src={foto5}></img>
        </Col>
      </Row>
    </Container>
    <Footer />
  </App>
);

export default workshop;
