import React from 'react'
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import FormInicial from "./FormInicial";
import FormFinal from "./FormFinal";
import { useState } from "react";

const FormRegistroEmpresa = () => {
  const [toSecondStep, settoSecondStep] = useState(false);

  return (
    <div className="candidates sign-in">
      <section className="main-section-content">
        <Container className="Container">
          <Row className="row">
            <Col md={{ span: 12 }}>
              {!toSecondStep ? (
                <FormInicial handleSubmit={(props) => settoSecondStep(props)} />
              ) : (
                <FormFinal handleVoltar={(props) => settoSecondStep(props)} />
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FormRegistroEmpresa;
