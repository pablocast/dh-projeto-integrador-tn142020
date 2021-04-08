import React from 'react'
import "./style.css";
import img from "../../../assets/img/young-woman-zerocost.png";
import { Row, Col } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

const BannerPrecosEstudante = () => {
  return (
    <section className="BannerPrecosEstudante">
      <Row>
        <Col lg={{ span: 1 }}></Col>
        <Col lg={{ span: 5 }} className="BannerPrecosEstudante-img">
          <img src={img} />
        </Col>
        <Col lg={{ span: 6 }}>
          <p className="BannerPrecosEstudante-badge-sm">Custa R$0 😱</p>
          <h2>
            Sim, uma plataforma
            <span>
              <br />
            </span>
            100% gratuita para
            <span>
              <br />
            </span>
            estudantes.
          </h2>
          <a onClick={() => window.scrollTo(0, 0)} className="btn-arrow">
            CRIAR MEU PERFIL AGORA
            <AiOutlineArrowRight
              color="white"
              style={{ marginLeft: "5px", height: "20px", width: "20px" }}
            />
          </a>
        </Col>
      </Row>
    </section>
  );
};

export default BannerPrecosEstudante;
