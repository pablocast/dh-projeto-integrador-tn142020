import React from "react";
import "./style.css";
import img from "../../../assets/img/empresa.png";
import { Link } from "react-router-dom";

const Component4 = () => {
  return (
    <section className="Information">
      <div className="Information-container">
        <div className="Information-text">
          <p className="Titulo">
            A entrada no mercado de trabalho, começa por aqui!
          </p>
          <p className="Paragrafo">
            Oferecemos uma trilha de cursos focado em vagas reais de grandes
            empresas. Já formamos mais de 2000 alunos, nos mais diversos cursos
            em que oferecemos.
          </p>
          <br />
          <p>
            Iremos te preparar com todo conhecimento técnico e comportamental,
            visuando não só as empresas parceiras, que fornecem conteudo para
            prepara-los para uma grande oportunidade,mas tambem para as mais
            diversas vagas desse mercado que cresce cada vez mais.
          </p>
          <Link to="/bemvindo">
            <button className="button">Cadastra-se</button>
          </Link>
        </div>
        <div className="Information-img">
          <img src={img} alt="empresa"></img>
        </div>
      </div>
    </section>
  );
};

export default Component4;
