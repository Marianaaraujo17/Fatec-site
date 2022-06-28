import React, { useState, render } from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import vestibular from "../../components/images/carrossel/vestibular_2_2022.png";
import "./carrossel.css";
function Carrossel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imagens = [
    {
      img: vestibular,
      titulo: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      link: "https://www.vestibularfatec.com.br/",
    },
  ];

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="7">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <Image
                fluid
                id="img_carousel"
                className="d-block w-100"
                src={vestibular}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Carrossel;
