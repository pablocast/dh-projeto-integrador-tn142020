import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.css";
import ImagePlataforma from "../../../assets/img/plataforma.jpg";

const ContainerQuemSomos = () => {
  return (
    <section id="quem-somos" className="quem-somos">
      <Row>
        <Col className='container-img'>
          <img src={ImagePlataforma} alt="A plataforma" />
        </Col>
        <Col className="container-text">
          <h1>Quem somos ?</h1>
          <p className="paragrafo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            error reprehenderit illum, vel laborum repellendus doloribus quidem
            deserunt fugiat delectus consectetur iste commodi sunt ratione neque
            nisi! Ullam inventore ut dolorum? Quas illum quibusdam optio
            doloremque. Nam nostrum fugiat maiores facilis mollitia, in quisquam.
            Commodi corporis excepturi ipsum obcaecati iste!
        </p>
        </Col>
      </Row>
    </section>
  );
};

export default ContainerQuemSomos;
