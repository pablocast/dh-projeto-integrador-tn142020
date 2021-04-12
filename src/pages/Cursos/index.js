import React, { useRef } from "react";
import "./style.css";
import Header from "../../components/core/Header";
import Footer from "../../components/core/Footer";
import Banner from "../../components/core/BannerOfertaCursos";
import CursosRecomendados from "../../components/core/ContainerCursosRecomendados";
import CursosRelacionados from "../../components/core/ContainerCursosRelacionados";
import CursosEmAlta from "../../components/core/ContainerCursosEmAlta";
import { Col, Row, Container } from "react-bootstrap";

const FiltroCursos = (props) => {
  const { id1, id2, id3 } = props

  const goToContainer = (id) => {
    document.getElementById(id).scrollIntoView();
  }

  return (
    <>
      <div className="fact-wrapper">
        <h3 className="header-facet" onClick={() => { goToContainer(id1) }} >Cursos Recomendados</h3>
      </div>
      <div className="fact-wrapper">
        <h3 className="header-facet" onClick={() => { goToContainer(id2) }} >Cursos em Alta</h3>
      </div>
      <div className="fact-wrapper">
        <h3 className="header-facet" onClick={() => { goToContainer(id3) }}>Cursos Relacionados</h3>
      </div>
    </>
  );
};

const Cursos = () => {
  return (
    <>
      <Header />
      <Container className="CursosContainer">
        <Row className="CursosContainer-Row">
          <Col lg={{ span: 2 }} className="CursosContainer-Form">
            <FiltroCursos id1={'ref1'} id2={'ref2'} id3={'ref3'} />
          </Col>
          <Col lg={{ span: 10 }} className="CursosContainer-Courses" >
            <Banner />
            <CursosRecomendados id={'ref1'} />
            <CursosEmAlta id={'ref2'} />
            <CursosRelacionados id={'ref3'} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Cursos;
