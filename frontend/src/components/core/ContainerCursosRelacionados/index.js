import React from "react";
import "./style.css";
import ImgHtml from "../../../assets/img/html-logo.png";
import ImgXd from "../../../assets/img/xd-logo.png";
import ImgCss from "../../../assets/img/css-logo.png";
import ImgGit from "../../../assets/img/git-logo.jpg";
import Carousel from "react-elastic-carousel";
import Card from "../Card";

const CursosRelacionados = (props) => {
  const { id } = props;

  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
    { width: 1500, itemsToShow: 7 },
  ];
  return (
    <div className="container-fluid" id={id}>
      <h2 className="h2 text-dark pt-3" id="cursosRelacionados">
        Cursos Relacionados
      </h2>
      <Carousel
        className="card-group"
        breakPoints={breakPoints}
        pagination={false}
        itemPadding={[10]}
      >
        <Card
          img={ImgHtml}
          title="Curso de HTML"
          description="Tags semanticas, foco em SEO"
        />
        <Card
          img={ImgGit}
          title="Curso de GIT & GITHUB"
          description="Trabalho remoto, versionamento de código"
        />
        <Card
          img={ImgCss}
          title="Curso de CSS"
          description="Display GRID, FLEXBOX"
        />
        <Card
          img={ImgXd}
          title="Curso de XD"
          description="Criação de protótipos, design grafico"
        />
        <Card
          img={ImgHtml}
          title="Curso de HTML"
          description="Tags semanticas, foco em SEO"
        />
        <Card
          img={ImgCss}
          title="Curso de CSS"
          description="Display GRID, FLEXBOX"
        />
        <Card
          img={ImgXd}
          title="Curso de XD"
          description="Criação de protótipos, design grafico"
        />
      </Carousel>
    </div>
  );
};

export default CursosRelacionados;
