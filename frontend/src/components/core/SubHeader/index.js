import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

const SubHeader = () => {
  return (
    <Container className="SubHeader">
      <header>
        <Row>
          <Col lg={{ span: 2 }}></Col>
          <Col lg={{ span: 8 }}>
            <nav className="SubNav">
              <ul>
                <li>
                  <a href="#cursosRecomendados">Cursos recomendados</a>
                </li>
                <li>
                  <a href="#cursosEmAlta">Cursos em alta</a>
                </li>
                <li>
                  <a href="#cursosRelacionados">Cursos relacionados</a>
                </li>
              </ul>
            </nav>
          </Col>
          <Col lg={{ span: 2 }}></Col>
        </Row>
      </header>
    </Container>
  );
};

export default SubHeader;
