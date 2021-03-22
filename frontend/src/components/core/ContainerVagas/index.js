import './style.css'
import ImageHmtl from '../../../assets/img/html-logo.png'
import ImageCss from '../../../assets/img/css-logo.png'
import ImageGit from '../../../assets/img/git-logo.jpg'
import ImageXd from '../../../assets/img/xd-logo.png'

const ContainerVagas = () => {
    return (
        <section id="vagas" className="vagas">
            <h2>Vagas disponiveis</h2>
            <div className="container-cards">
                <div className="card-empresas">
                    <img src={ImageHmtl} alt="vagas html"/>
                    <div className="card-text">
                        <h4>Empresa html</h4>
                        <p>x vagas disponiveis</p>
                        <a href="#">ver mais</a>
                    </div>
                </div>
                <div className="card-empresas">
                    <img src={ImageCss} alt="vagas css"/>
                    <div className="card-text">
                        <h4>Empresa css</h4>
                        <p>x vagas disponiveis</p>
                        <a href="#">ver mais</a>
                    </div>
                </div>
                <div className="card-empresas">
                    <img src={ImageXd} alt="vagas xd"/>
                    <div className="card-text">
                        <h4>Empresa XD</h4>
                        <p>x vagas disponiveis</p>
                        <a href="#">ver mais</a>
                    </div>
                </div>
                <div className="card-empresas">
                    <img src={ImageGit} alt="vagas git"/>
                    <div className="card-text">
                        <h4>Empresa git</h4>
                        <p>x vagas disponiveis</p>
                        <a href="#">ver mais</a>
                    </div>
                </div>
                <div className="card-empresas">
                    <img src={ImageHmtl} alt="vagas html"/>
                    <div className="card-text">
                        <h4>Empresa html</h4>
                        <p>x vagas disponiveis</p>
                        <a href="#">ver mais</a>
                    </div>
                </div>
                <div className="card-empresas">
                    <img src={ImageCss} alt="vagas css"/>
                    <div className="card-text">
                        <h4>Empresa CSS</h4>
                        <p>x vagas disponiveis</p>
                        <a href="#">ver mais</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContainerVagas