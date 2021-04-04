import "./styles.css";
import Image from "../../../assets/img/banner.png";

const BannerOfertaCursos = () => {
  return (
    <div className="banner">
      <div className="container rounded">
        <div className="direita">
          <p className="titulo-banner text-dark">
            Sempre em busca dos seus objetivos
          </p>
          <p className="titulo_menor lead">
              Guiamos seus estudos no rumo de uma grande oportunidade
          </p>
        </div>
        <div className="esquerda">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerOfertaCursos;
