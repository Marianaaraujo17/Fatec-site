import React from "react";
import Footer from "../components/footer";
import App from "../containers/App";
import {
  Card,
  CardGroup,
  Container,
  Row,
  Col,
  Button,
  Table,
} from "react-bootstrap";
import "./biblioteca.css";

const biblioteca = () => (
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
      <p className="bbl-titulo">BIBLIOTECA</p>
    </Container>
    <Container>
      <p className="bbl-titulo">Horário de Funcionamento</p>
      <p id="subtitulo">Empréstimos</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Segunda</th>
            <th>Terça</th>
            <th>Quarta</th>
            <th>Quinta</th>
            <th>Sexta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>08h00 às 13h00</td>
            <td>14h00 às 19h00</td>
            <td>14h00 às 19h00</td>
            <td>14h00 às 19h00</td>
            <td>14h00 às 19h00</td>
          </tr>
          <tr>
            <td>14h00 às 16h50</td>
            <td>20h00 às 22h50</td>
            <td>20h00 às 22h50</td>
            <td>20h00 às 22h50</td>
            <td>20h00 às 22h50</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <p id="subtitulo">Devoluções</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Segunda</th>
            <th>Terça</th>
            <th>Quarta</th>
            <th>Quinta</th>
            <th>Sexta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>08h00 às 13h00</td>
            <td>07h30 às 10h50</td>
            <td>09h00 às 13h00</td>
            <td>08h50 às 10h50</td>
            <td>14h00 às 19h00</td>
          </tr>
          <tr>
            <td>14h00 às 16h50</td>
            <td>14h00 às 19h00</td>
            <td>14h00 às 19h00</td>
            <td>14h00 às 19h00</td>
            <td>20h00 às 22h50</td>
          </tr>
          <tr>
            <td></td>
            <td>20h00 às 22h50</td>
            <td>20h00 às 22h50</td>
            <td>20h00 às 22h50</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <br />

      <p id="subtitulo">Renovações</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Segunda</th>
            <th>Terça</th>
            <th>Quarta</th>
            <th>Quinta</th>
            <th>Sexta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>08h00 às 13h00</td>
            <td>07h30 às 10h50</td>
            <td>09h00 às 13h00</td>
            <td>08h50 às 10h50</td>
            <td>14h00 às 19h00</td>
          </tr>
          <tr>
            <td>14h00 às 16h50</td>
            <td>14h00 às 19h00</td>
            <td>14h00 às 19h00</td>
            <td>14h00 às 19h00</td>
            <td>20h00 às 22h50</td>
          </tr>
          <tr>
            <td></td>
            <td>20h00 às 22h50</td>
            <td>20h00 às 22h50</td>
            <td>20h00 às 22h50</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <br />

      <p id="subtitulo">Utilização do espaço da biblioteca</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Segunda</th>
            <th>Terça</th>
            <th>Quarta</th>
            <th>Quinta</th>
            <th>Sexta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>08h00 às 13h00</td>
            <td>07h30 às 10h50</td>
            <td>09h00 às 13h00</td>
            <td>08h50 às 10h50</td>
            <td>14h00 às 19h00</td>
          </tr>
          <tr>
            <td>14h00 às 16h50</td>
            <td>14h00 às 19h00</td>
            <td>14h00 às 19h00</td>
            <td>14h00 às 19h00</td>
            <td>20h00 às 22h50</td>
          </tr>
          <tr>
            <td></td>
            <td>20h00 às 22h50</td>
            <td>20h00 às 22h50</td>
            <td>20h00 às 22h50</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <br />
    </Container>
    <Footer />
  </App>
);

export default biblioteca;
