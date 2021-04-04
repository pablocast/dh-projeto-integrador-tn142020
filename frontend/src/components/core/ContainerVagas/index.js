import "./style.css";
import ImageMagalu from "../../../assets/img/magazineluiza.png";
import ImageMercadolivre from "../../../assets/img/mercadolivre.jpg";
import ImageOlx from "../../../assets/img/olx.png";

const ContainerVagas = () => {
  return (
    <section id="vagas" className="vagas">
      <h2>Vagas disponiveis</h2>
      <div className="container-cards">
        <div className="card-empresas">
          <img src={ImageMagalu} alt="vagas html" />
          <div className="card-text">
            <h4>Empresa Magazine Luiza</h4>
            <p>x vagas disponiveis</p>
            <a href="#">ver mais</a>
          </div>
        </div>
        <div className="card-empresas">
          <img src={ImageMercadolivre} alt="vagas css" />
          <div className="card-text">
            <h4>Empresa Mercado Livre</h4>
            <p>x vagas disponiveis</p>
            <a href="#">ver mais</a>
          </div>
        </div>
        <div className="card-empresas">
          <img src={ImageOlx} alt="vagas xd" />
          <div className="card-text">
            <h4>Empresa OLX</h4>
            <p>x vagas disponiveis</p>
            <a href="#">ver mais</a>
          </div>
        </div>
        <div className="card-empresas">
          <img src={ImageOlx} alt="vagas git" />
          <div className="card-text">
            <h4>Empresa OLX</h4>
            <p>x vagas disponiveis</p>
            <a href="#">ver mais</a>
          </div>
        </div>
        <div className="card-empresas">
          <img src={ImageMagalu} alt="vagas html" />
          <div className="card-text">
            <h4>Empresa Magazine Luiza</h4>
            <p>x vagas disponiveis</p>
            <a href="#">ver mais</a>
          </div>
        </div>
        <div className="card-empresas">
          <img src={ImageMercadolivre} alt="vagas css" />
          <div className="card-text">
            <h4>Empresa Mercado Livre</h4>
            <p>x vagas disponiveis</p>
            <a href="#">ver mais</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerVagas;
