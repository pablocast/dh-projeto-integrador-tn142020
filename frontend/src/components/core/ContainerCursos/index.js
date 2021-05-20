import React from "react";
import "./style.css";
import imageJavascript from "../../../assets/img/JavaScript-logo.png";
import imageHtml from "../../../assets/img/html-logo.png";
import imageCss from "../../../assets/img/css-logo.png";
import imageGit from "../../../assets/img/git-logo.jpg";
import imageXd from "../../../assets/img/xd-logo.png";
import imageReact from "../../../assets/img/reactjs-logo.jpg";

const Curso = (props) => {
  const { img, titulo } = props;

  return (
    <div class="cardCursos">
      <img src={img} alt="curso html" />
      <div class="containerText">{titulo}</div>
    </div>
  );
};

const ContainerCursos = () => {
  return (
    <section>
      <div class="containerCursos">
        <h2>Cursos em andamento</h2>
        <div class="cursosAndamento">
          <div class="containerDestaque">
            <div class="containerSuperior">
              <img src={imageJavascript} alt="curso javascript" />
              <div class="containerText">
                <p>Javascript conhecendo o browser</p>
              </div>
            </div>
            <div class="containerInferior">
              <button class="buttonGrey">ver conteudo do curso</button>
              <button class="buttonYellow">continuar o curso</button>
            </div>
          </div>
          <div class="containerSecundario">
            <Curso img={imageHtml} titulo="HTML 5 - COMPLETO semantica e SEO" />
            <Curso img={imageCss} titulo="CSS 3 - grid e flexbox" />
            <Curso img={imageGit} titulo="GIT & GITHUB - repositório remoto" />
            <Curso img={imageXd} titulo="XD - design grafico, protótipos" />
          </div>
        </div>
        <h4>
          <a href="#">ver todos os cursos em andamento</a>
        </h4>
        <h2>Cursos recomendados</h2>
        <div class="cursosRecomendados">
          <div class="containerInferior">
            <Curso
              img={imageReact}
              titulo="REACTJS - desenvolvimento FRONT-END"
            />
            <Curso img={imageHtml} titulo="NODEJS - desenvolvimento BACK-END" />
            <Curso img={imageGit} titulo="EXPRESS - banco de dados" />
            <Curso
              img={imageCss}
              titulo="ANGULARJS - desenvolvimento FRONT-END"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerCursos;
