import React from "react";
import "./style.css";
import BannerPropostaEstudante from "../../components/core/BannerPropostaEstudante";
import BannerPasosEstudante from "../../components/core/BannerPasosEstudante";
import BannerTestimonioEstudante from "../../components/core/BannerTestimonioEstudante";
import HeaderCadastro from "../../components/core/HeaderCadastro";
import Footer from "../../components/core/Footer";
import logo from "../../assets/img/logo_white.png";
import { Row, Col } from "react-bootstrap";
import BannerPrecosEstudante from "../../components/core/BannerPrecosEstudante";

const NovoEstudante = () => {
  return (
    <body>
      <HeaderCadastro className="Header" myLogo={logo} />
      <div className="Registration">
        <BannerPropostaEstudante />
        <BannerPasosEstudante />
        <BannerTestimonioEstudante />
        <BannerPrecosEstudante />
      </div>
      <Footer />
    </body>
  );
};

export default NovoEstudante;
