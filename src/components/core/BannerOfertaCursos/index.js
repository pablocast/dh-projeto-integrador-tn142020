import React from "react";
import "./style.css";
import Image from "../../../assets/img/banner.png";

const BannerOfertaCursos = () => {
  return (
    <div className="banner">
      <div className="banner_container rounded">
        <div className="banner_direita">
          <p className="banner_titulo text-dark">
            Sempre em busca dos seus objetivos
          </p>
          <p className="banner_titulo_menor lead">
            Guiamos seus estudos no rumo de uma grande oportunidade
          </p>
        </div>
        <div className="banner_esquerda">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerOfertaCursos;
