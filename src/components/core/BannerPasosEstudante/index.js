import React from 'react'
import "./style.css";
import { Row, Col, Container } from "react-bootstrap";
import { AiFillLinkedin } from "react-icons/ai";

const BannerPasosEstudante = () => {
  return (
    <section className="pasos">
      <Container style={{ width: "100%" }}>
        <Row className="platform-numbers">
          <Col lg={{ span: 1 }}></Col>
          <Col lg={{ span: 12 }}>
            <Row className="row">
              <Col lg={{ span: 3 }}>
                <h2>Cadastrar na BrainXpert é simples 👉</h2>
              </Col>
              <Col lg={{ span: 3 }}>
                <p className="subtitle">01</p>
                <h3>Crie o seu perfil e começe seu desenvolvimento</h3>
                <p className="sub-description">
                  <AiFillLinkedin color="#FFCF26" /> Importe seu perfil do
                  LinkedIn
                </p>
                <p className="description">
                  Conte-nos sobre você e o que você procura
                </p>
              </Col>
              <Col lg={{ span: 3 }}>
                <p className="subtitle">02</p>
                <h3>Demostre seu potencial para a comunidade</h3>
                <p className="sub-description">
                  Esteja entre os melhores profissionais
                </p>
                <p class="description">
                  Demonstre as suas habilidades através dos nossos testes
                  técnicos
                </p>
              </Col>
              <Col lg={{ span: 3 }}>
                <p className="subtitle">03</p>
                <h3>Receba convites e escolha a melhor proposta</h3>
                <p className="sub-description">
                  90% dos candidatos recebem convites
                </p>
                <p className="description">
                  Conforme evoluir na sua própria trilha de carreira, você já
                  começa a receber convites de entrevista
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={{ span: 1 }}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerPasosEstudante;
