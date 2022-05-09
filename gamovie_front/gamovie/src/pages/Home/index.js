import React from "react";
import Card from "components/Card";
import HomeCarousel from "components/HomeCarousel";
import { Container, Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="d-flex flex-column">
      <Row>
        <Col sm="12" className="mt-3">
          <h1 className="text-center p-3">WELCOME TO GAMOVIE!</h1>
        </Col>
        <Col sm="12" className="d-flex justify-content-center mt-3">
          <HomeCarousel className="home-carousel" />
        </Col>
        <Col sm="12">
          <h2 className="text-center p-3">
            Most Popular <strong>Movies!</strong>
          </h2>
        </Col>
        <Col
          xs="6"
          sm="6"
          md="4"
          lg="3"
          className="d-flex justify-content-center mt-3"
        >
          <Card
            url={"caballerOscuro.jpg"}
            year="2008"
            title={"El Caballero Oscuro"}
            id={"7"} contentType={"movies"}
          />
        </Col>
        <Col
          xs="6"
          sm="6"
          md="4"
          lg="3"
          className="d-flex justify-content-center mt-3"
        >
          <Card url={"theBatman.jpg"} year="2022" title={"The Batman"} id={"1"} contentType={"movies"} />
        </Col>
        <Col
          xs="6"
          sm="6"
          md="4"
          lg="3"
          className="d-flex justify-content-center mt-3"
        >
          <Card
            url={"spiderNoWayHome.jpg"}
            year="2021"
            title={"Spider-Man: No Way Home"}
            id={"2"} contentType={"movies"}
          />
        </Col>
        <Col
          xs="6"
          sm="6"
          md="4"
          lg="3"
          className="d-flex justify-content-center mt-3"
        >
          <Card url={"dune.jpg"} year="2021" title={"Dune"} id={"3"} contentType={"movies"} />
        </Col>
        <Col sm="12" className="mt-3">
          <h2 className="text-center p-3">
            Most Popular <strong>Games!</strong>
          </h2>
        </Col>
        <Col
          xs="6"
          sm="6"
          md="4"
          lg="3"
          className="d-flex justify-content-center mt-3"
        >
          <Card url={"eldenRing.jpg"} year="2022" title={"Elden Ring"} id={"1"} contentType={"games"} />
        </Col>
        <Col
          xs="6"
          sm="6"
          md="4"
          lg="3"
          className="d-flex justify-content-center mt-3"
        >
          <Card
            url={"botw.jpg"}
            year="2017"
            title={"The Legend of Zelda: Breath of the Wild"}
            id={"2"} contentType={"games"}
          />
        </Col>
        <Col
          xs="6"
          sm="6"
          md="4"
          lg="3"
          className="d-flex justify-content-center mt-3"
        >
          <Card url={"gta.jpg"} year="2013" title={"Grand Theft Auto V"} id={"3"} contentType={"games"} />
        </Col>
        <Col
          xs="6"
          sm="6"
          md="4"
          lg="3"
          className="d-flex justify-content-center mt-3"
        >
          <Card
            url={"sekiro.jpg"}
            year="2019"
            title={"Sekiro™: Shadows Die Twice"}
            id={"4"} contentType={"games"}
          />
        </Col>
      </Row>
    </Container>
  );
}
