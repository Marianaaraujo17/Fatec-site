import React from "react";
import Footer from "../components/footer";
import App from "../containers/App";
import { Card, Container, Row } from "react-bootstrap";
import "./secretaria.css";
import tabelaDocumentos from "../components/images/tabelaDocumentos.png";

const secretaria = () => (
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
      <p className="sct-titulo">SECRETARIA ACADÊMICA</p>
    </Container>
    <Container>
      <Card style={{ boxShadow: "0 0 0 0", border: "0 none", outline: "0" }}>
        <Row>
          <p id="subtitulo">Horário de Funcionamento</p>
          <p id="espaco">
            De segunda a sexta das <mark id="marca">08h30 às 12h30</mark> e das{" "}
            <mark id="marca">14h00 às 22h00</mark>.
          </p>
          <p id="subtitulo">Sobre a Secretaria</p>
          <p id="espaco">
            Prestamos informações, auxiliamos, controlamos e organizamos
            informações referente a vida acadêmica dos alunos.{" "}
          </p>
          <p id="subtitulo">Matrícula Inicial</p>
          <p>
            Recebemos a documentação dos candidatos aprovados via vestibular e
            somos responsáveis pela inclusão dos mesmos no sistema utilizado
            pela Fatec <a id="bold">(SIGA)</a> e por repassar os dados de acesso
            de cada aluno.
          </p>
          <p id="espaco">
            Se impossibilitado de comparecer para realizar a matrícula, o
            candidato pode indicar um representante, portando uma{" "}
            <a
              id="cor"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/secretaria/procuracao_para_matricula.pdf"
            >
              procuração para fins específicos de realização de matrícula
              inicial
            </a>
            , juntamente com os documentos exigidos{" "}
            <a
              id="cor"
              target="_blank"
              href="https://fatweb.s3.amazonaws.com/vestibularfatec/documentos/2SEM-21/ManualCandidato.pdf#page=27"
            >
              (conforme Manual do Candidato)
            </a>
            . A matrícula dos ingressantes é realizada de forma automática em
            todas disciplinas do 1º Semestre.{" "}
          </p>
          <p id="subtitulo">Matrícula de Veteranos (Rematrícula)</p>
          <p id="espaco">
            É obrigatória em cada novo semestre de acordo com o{" "}
            <a
              target="_black"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/calendario/calendario_2022-1.pdf"
              id="cor"
            >
              Calendário Acadêmico
            </a>{" "}
            , a ausência da matrícula acarretará em trancamento, caso o aluno
            ainda tenha direito. As matrículas são processadas pelo SIGA
            conforme{" "}
            <a
              id="cor"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/secretaria/regulamentogeral.pdf"
            >
              Regulamento Geral dos Cursos de Graduação das FATECs
            </a>
            .{" "}
          </p>
          <p id="subtitulo">Desistência de Disciplinas</p>
          <p id="espaco">
            O estudante poderá solicitar desistência no período determinado no
            calendário acadêmico, obedecendo o limite mínimo de disciplinas a
            serem cursadas no semestre. A solicitação deve ser feita através do
            e-mail da secretaria para podermos registrar no SIGA. Não serão
            aceitas a desistência caso o aluno já tenha solicitado
            anteriormente, ou seja uma disciplina de matrícula (artigo 42 do
            regulamento das Fatecs).{" "}
          </p>
          <p id="subtitulo">Trancamento de Matrícula</p>
          <p id="espaco">
            Cada aluno tem direito a dois trancamentos (2 semestres)
            consecutivos ou não podendo ser solicitado de acordo com as datas
            estipuladas no calendário. A solicitação deve ser feita através do
            e-mail da secretaria e informado o motivo da solicitação. O aluno
            que por qualquer motivo não efetuar sua rematrícula em pelo menos
            uma disciplina terá trancamento automático na sua matrícula naquele
            semestre letivo, caso não tenha utilizado anteriormente os dois
            trancamentos previstos no regulamento das Fatecs.{" "}
          </p>
          <p id="subtitulo">Cancelamento de Matrícula</p>
          <p id="espaco">
            A matrícula de um aluno será cancelada quando: <br />
            - O aluno aprovado via vestibular não comparecer as aulas nas duas
            primeiras semanas do semestre em que ingressou na Faculdade;
            <br />
            - O ingressante não obter aprovação em nenhuma disciplina do 1º
            semestre, não computadas dispensas (aproveitamentos de estudos e/ou
            exames de proficiência) eventualmente concedidas;
            <br />
            - Aluno que após 1 semestre (6 meses) de matrícula não tiver obtido
            um Percentual de Progressão superior a 33%;
            <br />
            - O aluno não concluir seu curso de graduação no prazo máximo fixado
            para a sua integralização, não computados os trancamentos de
            matrícula;
            <br />
            - O aluno solicitar o trancamento por escrito via e-mail;
            <br />
            - O aluno não confirmar o trancamento automático previsto neste
            regulamento;
            <br />
            - O aluno for enquadrado em situação de trancamento, não tendo mais
            direito a nenhum trancamento;
            <br />
            - A FATEC tomar conhecimento de que o aluno está matriculado em
            outra instituição pública de ensino superior;
            <br />- O aluno for condenado à pena de expulsão em processo
            disciplinar.
          </p>
          <p id="subtitulo">Estágio</p>
          <p id="espaco">
            Somos responsáveis pelo recebimento, registro e encaminhamento para
            assinatura e devolução de contratos de estágio e acordos de
            cooperação. Relatórios de estágios finalizados devem ser
            encaminhados ao coordenador do curso. Na aba{" "}
            <a href="/portal" id="cor" target="_blank">
              Estágios
            </a>{" "}
            você pode encontrar mais informações.{" "}
          </p>
          <p id="subtitulo">Abono de Faltas</p>
          <p id="espaco">
            Não há abono de faltas, exceto nos seguintes casos:
            <br /> - Convocação para cumprimento de serviços obrigatórios por
            lei;
            <br /> - Exercício de representação estudantil em órgãos colegiados,
            nos horários em que estes se reúnem;
            <br /> - Falecimento de cônjuge, filho, pais ou padrastos e irmãos,
            3 (três) dias;
            <br /> - Falecimento de avós, sogros e cunhados, 2 (dois) dias.
            <br /> Em qualquer dos casos previstos, deverá haver comprovação e o
            pedido deve ser encaminhado para o email:
            <mark id="marca">f146.secretaria@fatec.sp.gov.br</mark>
          </p>
          <p id="subtitulo">Regime de Exercícios Domiciliares</p>
          <p id="espaco">
            São considerados merecedores de tratamento excepcional, os alunos
            temporariamente impossibilitados de frequência, mas em condições de
            aprendizagem, podendo compensar suas ausências às atividades
            presenciais solicitando o regime de exercícios domiciliares, desde
            que se enquadrem nos seguintes casos:
            <br /> - Alunas gestantes, a partir do 8º (oitavo) mês de gestação,
            por um período de 90 (noventa) dias ou, em casos excepcionais com
            comprovação médica, por período superior;
            <br /> - Portadores de afecções congênitas ou adquiridas, infecções,
            traumatismos ou outras condições mórbidas, desde que se constituam
            em ocorrência isolada.
          </p>
          <p id="espaco">
            São condições para que o aluno seja submetido ao regime de
            exercícios domiciliares:
            <br /> - Requerimento em{" "}
            <a
              id="cor"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/secretaria/formulario_abono_regime.pdf"
            >
              formulário específico
            </a>{" "}
            devidamente preenchido, protocolado junto à Secretaria Acadêmica
            solicitando o Regime de Exercícios Domiciliares, no prazo máximo de
            5 (cinco) dias úteis contados a partir da data do afastamento;
            <br /> - Laudo médico contendo assinatura e nº do CRM, período do
            afastamento não inferior a 15 (quinze) dias, especificando a
            natureza do impedimento e informações de que as condições
            intelectuais e emocionais necessárias para o desenvolvimento das
            atividades de estudo estão preservadas;
            <br /> - Existência de compatibilidade entre a natureza das
            disciplinas envolvidas e a aplicação do regime, a critério da
            Coordenadoria do Curso, sendo excluídas atividades de natureza
            eminentemente prática, estágios, práticas laboratoriais etc;
            <br /> - Duração que não ultrapasse um máximo admissível, em cada
            caso, para a continuidade do processo de aprendizagem, a critério da
            Coordenadoria do Curso;
            <br /> - Aprovação do pedido pelo Diretor da Unidade, após parecer
            favorável da Coordenadoria do Curso, ouvido o professor responsável
            pelas disciplinas envolvidas.
            <br /> - O acompanhamento das atividades do regime de exercícios
            domiciliares será feito pelo professor responsável pela disciplina e
            todos os processos de avaliação deverão ser equivalentes àqueles
            aplicados aos demais alunos matriculados na atividade, seja no grau
            de dificuldade, seja no conteúdo abrangido.
            <br />
          </p>
          <p id="espaco">
            <a id="bold">Importante:</a> É de responsabilidade do aluno,
            manter-se em contato com os professores para o cumprimento das
            tarefas estabelecidas no regime de exercícios domiciliares.
            <br /> Impedimentos não contemplados no Regime de Exercícios
            Domiciliares por não atenderem às disposições estabelecidas, serão
            computados como faltas.
          </p>
          <p id="subtitulo">Expedição de documentos acadêmicos</p>
          <p id="espaco">
            A expedição de documentos acadêmicos é efetuada com base nas
            informações cadastradas no SIGA e nos documentos mantidos em
            arquivos.
          </p>
          <img
            style={{ maxWidth: "600px", marginBottom: "60px" }}
            src={tabelaDocumentos}
          />
          <p>
            Para requerer os documentos listados acima, existem 3 opções:
            <br />
            - Via SIGA em Solicitações - Solicitação de Documentos;
            <br />- Entrando em{" "}
            <a href="/contato" target="_blank" id="cor">
              Contato pelo site
            </a>{" "}
            ou;
            <br />- Enviando mensagens via e-mail{" "}
            <mark id="marca">f146.secretaria@fatec.sp.gov.br</mark>
          </p>
        </Row>
      </Card>
    </Container>
    <Footer />
  </App>
);

export default secretaria;
