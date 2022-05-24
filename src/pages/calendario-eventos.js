import React from "react";
import Footer from "../components/footer";
import { Card, CardGroup, Container, Row, Col, Table } from "react-bootstrap";
import App from "../containers/App";
import "./eventos.css";

const calendar_event = () => (
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
          <p className="eventos-titulo">CALENDÁRIOS DE EVENTOS </p>
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&src=bWFyaWFuYWRvc3NhbnRvc2FyYXVqb0BnbWFpbC5jb20&src=YXMxYnY0MmkzY29xOXJxNGJsdTQ3MXBqZjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aWcwN2wwOHVrbDllamRnMjZnbGUzNHNhdWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=c2ttYzk5MmE1ZmQ0bW1pZnJyaDU1aWVuczRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NG1kYnI5aTUyaGppYnNhdDk1cXNnNmxpbDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cHQtYnIuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23D81B60&color=%238E24AA&color=%23C0CA33&color=%23795548&color=%23D50000&color=%230B8043"></iframe>
        </Col>
      </Row>
    </Container>

    <Footer />
  </App>
);

export default calendar_event;
