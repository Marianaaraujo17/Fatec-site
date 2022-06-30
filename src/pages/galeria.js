import React from "react";
import Footer from "../components/footer";
import ImageGallery from "react-image-gallery";
import { Container, Row, Col } from "react-bootstrap";
import App from "../containers/App";
import "./galeria.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const galeria = () => (
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
        <Col>
          <p className="sobre-titulo">GALERIA</p>
        </Col>
      </Row>
    </Container>
    <Container style={{ marginBottom: "20px" }}>
      <ImageGallery items={images} />
    </Container>
    <Footer />
  </App>
);

export default galeria;
