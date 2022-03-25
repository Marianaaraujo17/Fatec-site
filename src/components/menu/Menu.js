import React from "react";
import "./Menu.css";
import logo from "../images/logo.png";
import predio from "../images/predio.png";
import { Col } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <div class="z-index-master">
        <nav class="dp-menu">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#">INSTITUCIONAL</a>
              <ul>
                <li>
                  <a href="/sobre">A Fatec</a>
                </li>
                <li>
                  <a href="/achados_perdidos">Achados e Perdidos</a>
                </li>
                <li>
                  <a href="/biblioteca">Biblioteca</a>
                </li>
                <li>
                  <a href="/cipa">CIPA</a>
                </li>
                <li>
                  <a href="/calendario_eventos">
                    Calendário Digital de Eventos
                  </a>
                </li>
                <li>
                  <a href="/concurso">Concurso Público</a>
                </li>
                <li>
                  <a href="/cpa">CPA-Comissão Própria de Avaliação</a>
                </li>
                <li>
                  <a href="/corpo_adm">Corpo Administrativo</a>
                </li>
                <li>
                  <a href="/docentes">Docentes</a>
                </li>
                <li>
                  <a href="/editais">Editais</a>
                </li>
                <li>
                  <a href="/galeria">Galeria</a>
                </li>
                <li>
                  <a href="/laboratorios">Laboratórios</a>
                </li>
                <li>
                  <a href="/noticias">Notícias</a>
                </li>
                <li>
                  <a href="/nucleo">Núcleo de Relações Internacionais</a>
                </li>
                <li>
                  <a href="/secretaria">Secretaria</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">CURSOS</a>
              <ul>
                <li>
                  <a href="/ads">Análise e Desenvolvimento de Sistemas</a>
                </li>
                <li>
                  <a href="/banco">Banco de Dados</a>
                </li>
                <li>
                  <a href="/dsm">Desenvolvimento de Software Multiplataforma</a>
                </li>
                <li>
                  <a href="/gtproducaoind">Gestão da Produção Industrial</a>
                </li>
                <li>
                  <a href="/logistica">Logística</a>
                </li>
                <li>
                  <a href="/manufatura">Manufatura Avançada</a>
                </li>
                <li>
                  <a href="/manut_aero">Manutenção de Aeronaves</a>
                </li>
                <li>
                  <a href="/projtestaero">
                    Projetos de Estruturas Aeronáuticas
                  </a>
                </li>
                <li>
                  <a href="/sobre_cursos">Sobre os cursos</a>
                </li>
                <li>
                  <a
                    href="https://www.vestibularfatec.com.br/home/"
                    target="_blank"
                  >
                    Vestibular
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">PROJETOS</a>
              <ul>
                <li>
                  <a href="/aerodesign"> Aerodesign </a>
                </li>
                <li>
                  <a href="/agencia"> Agência Inova Paula Souza </a>
                </li>
                <li>
                  <a href="/api"> Aprendizagem por Projetos Integrados </a>
                </li>
                <li>
                  <a href="/baja"> Baja </a>
                </li>
                <li>
                  <a href="/cadi"> CADI </a>
                </li>
                <li>
                  <a href="/cimatech"> CIMATech </a>
                </li>
                <li>
                  <a href="/inovadores"> Escola de Inovadores </a>
                </li>
                <li>
                  <a href="/business"> Fatec Business Mentoring </a>
                </li>
                <li>
                  <a href="/hackatruck"> HACKaTruck </a>
                </li>
                <li>
                  <a href="/nucleo"> Núcleo de Relações Internacionais </a>
                </li>
                <li>
                  <a href="/vestec"> Vestec </a>
                </li>
                <li>
                  <a href="/workshop"> Workshop de Logística Humanitária </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">ÁREA DO ALUNO</a>
              <ul>
                <li>
                  <a href="/calendario">Calendário Acadêmico</a>
                </li>
                <li>
                  <a href="/email">Email Institucional</a>
                </li>
                <li>
                  <a href="/diplomados">Galeria de Diplomados</a>
                </li>
                <li>
                  <a href="/horarios_aula">Horários de Aula</a>
                </li>
                <li>
                  <a href="/horarios_onibus">Horários de ônibus</a>
                </li>
                <li>
                  <a href="/monitoria">Monitoria</a>
                </li>
                <li>
                  <a href="/moodle">Moodle</a>
                </li>
                <li>
                  <a href="/TG">Normas para TG</a>
                </li>
                <li>
                  <a href="/passe">Passe Escolar</a>
                </li>
                <li>
                  <a href="/Portal">Portal de Oportunidades</a>
                </li>
                <li>
                  <a href="/Portal">Setor de Estágios</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">ACESSAR</a>
              <ul>
                <li>
                  <a href="https://siga.cps.sp.gov.br/aluno/login.aspx">
                    SIGA (Alunos)
                  </a>
                </li>
                <li>
                  <a href="https://siga.cps.sp.gov.br/fatec/login.aspx">
                    SIGA (Docentes)
                  </a>
                </li>
                <li>
                  <a href="http://www.fatec.sp.gov.br/view/Default.aspx">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=id_token&scope=openid%20profile&client_id=5e3ce6c0-2b1f-4285-8d4b-75ee78787346&redirect_uri=https%3A%2F%2Fteams.microsoft.com%2Fgo&state=eyJpZCI6IjI0NTBmMTRiLTZkZmItNDkwNy1hM2ZlLTFlMzE2NWVhZDRmNCIsInRzIjoxNjM4MzY5MDU4LCJtZXRob2QiOiJyZWRpcmVjdEludGVyYWN0aW9uIn0%3D&nonce=aca8ee0c-e2cc-4a12-b216-5d215dd1995a&client_info=1&x-client-SKU=MSAL.JS&x-client-Ver=1.3.4&client-request-id=cd4761a2-6270-4661-950c-bd374a3f818c&response_mode=fragment&sso_reload=true">
                    Teams
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <Col id="centro">
          <img id="logo" src={logo} />
          <img id="predio" src={predio} />
        </Col>
        <div id="submenu">
          <a id="estilo" href="/vestibular">
            VESTIBULAR
          </a>
          <a id="estilo" href="/secretaria">
            SECRETARIA
          </a>
          <a id="estilo" href="/portal">
            ESTÁGIO|VAGAS
          </a>
          <a id="estilo" href="/contato">
            CONTATO
          </a>
        </div>
      </div>
    </>
  );
};
export default Menu;
