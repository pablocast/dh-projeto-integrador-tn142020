import React from 'react'
import "./style.css";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const BannerBemVindo = () => {
  return (
    <>
      <section className="This__main-section">
        <Container className="Container" style={{ position: "relative" }}>
          <Row>
            <Col lg={{ span: 12 }} className="This__Container__text">
              <h1>Bem-vindo!</h1>
              <p>Você é empresa ou estudante?</p>
            </Col>
          </Row>
          <Row
            style={{ paddingTop: "16px", zIndex: "999 !important" }}
            className="Row__botoes"
          >
            <Col
              lg={{ span: 2, offset: 4 }}
              style={{ textAlign: "center", left: "-36px" }}
            >
              <Link to="/estudantes/sign_in">
                <button className="button">Sou estudante</button>
              </Link>
            </Col>
            <Col
              lg={{ span: 2 }}
              style={{ textAlign: "center", paddingLeft: "12px" }}
            >
              <Link to="/empresa/sign_in">
                <button className="button">Sou empresa</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BannerBemVindo;
