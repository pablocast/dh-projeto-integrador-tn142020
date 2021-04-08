import React, { useRef } from "react";
import "./style.css";
import Header from "../../components/core/Header";
import Footer from "../../components/core/Footer";
import Banner from "../../components/core/BannerOfertaCursos";
import CursosRecomendados from "../../components/core/ContainerCursosRecomendados";
import CursosRelacionados from "../../components/core/ContainerCursosRelacionados";
import CursosEmAlta from "../../components/core/ContainerCursosEmAlta";
import FiltroCursos from "../../components/core/ContainerFiltroCursos";
import { Col, Row, Container } from "react-bootstrap";

const Cursos = () => {
  return (
    <>
      <Header />
      <Container className="CursosContainer">
        <Row className="CursosContainer-Row">
          <Col lg={{ span: 2 }} className="CursosContainer-Form">
            <FiltroCursos />
          </Col>
          <Col lg={{ span: 10 }} className="CursosContainer-Courses">
            <Banner />
            <CursosRecomendados />
            <CursosEmAlta />
            <CursosRelacionados />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Cursos;
