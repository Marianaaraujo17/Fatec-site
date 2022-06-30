import React, { useState } from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import vestibular from "../../components/images/carrossel/vestibular_2_2022.png";
import curso from "../../components/images/carrossel/curso_lh_2022.jpg";
import fatecult from "../../components/images/carrossel/fatecult.jpg";
import nube from "../../components/images/carrossel/nube_cursosead.png";
import "./carrossel.css";
function Carrossel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  //Quando a imagem não tiver link direto, remover a tag <a>
  return (
    <Container
      style={{
        marginTop: "50px",
        marginBottom: "40px",
      }}
    >
      <Row>
        <Col xs md={12}>
          <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={5000}>
              <a href="https://www.vestibularfatec.com.br/" target="_blank">
                <Image
                  thumbnail
                  width={500}
                  height={300}
                  id="img_carousel"
                  alt=""
                  src={vestibular}
                />
              </a>
              <Carousel.Caption>
                <h3>Vestibular FATEC 2º Semestre de 2022</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Image
                thumbnail
                width={500}
                height={300}
                id="img_carousel"
                fluid
                alt=""
                src={curso}
              />

              <Carousel.Caption>
                <h3>Curso: Logística de Operações Humanitárias</h3>
                <a id="links" href="https://forms.gle/hhvNLEfTHAisN1WE7">
                  <p>Clique aqui para se inscrever.</p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Image
                thumbnail
                width={500}
                height={300}
                id="img_carousel"
                fluid
                alt=""
                src={fatecult}
              />

              <Carousel.Caption>
                <h3>FATECult - Intervalo Cultural</h3>
                <a id="links" href="https://forms.gle/bwGXktaDNmor14kX6">
                  <p>Inscreva-se</p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <a href="https://www.nube.com.br/ead" target="_blank">
                <Image
                  thumbnail
                  width={500}
                  height={300}
                  id="img_carousel"
                  fluid
                  alt=""
                  src={nube}
                />
              </a>
              <Carousel.Caption>
                <h3>Nube</h3>
                <p>Curso EAD</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Carrossel;
