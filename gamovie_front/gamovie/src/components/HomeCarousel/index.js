import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "wouter";
import './carousel.css';

export default function HomeCarousel() {
  return (
    <Carousel className="mt-4 Home-carousel" fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/elden.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Link to="/" className="text-decoration-none text-light carousel-link">
            <h3>Elden Ring</h3>
            <p>El increible mundo abierto de los creadores de Dark Souls.</p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/btm.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <Link to="/" className="text-decoration-none text-light carousel-link">
            <h3>The Batman</h3>
            <p>Robert Pattinson como un Batman nunca antes visto.</p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/breath.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <Link to="/" className="text-decoration-none text-light carousel-link">
            <h3>Breath of The Wild</h3>
            <p>El impresionante mundo abierto de nintendo.</p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
