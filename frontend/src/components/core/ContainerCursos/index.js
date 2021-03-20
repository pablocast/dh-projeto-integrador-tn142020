import './style.css'
import imageJavascript from '../../../assets/img/javaScript-logo.png'
import imageHtml from '../../../assets/img/html-logo.png'
import imageCss from '../../../assets/img/css-logo.png'
import imageGit from '../../../assets/img/git-logo.png'
import imageXd from '../../../assets/img/xd-logo.png'
import imageReact from '../../../assets/img/react-logo.png'

const ContainerCursos = () => {
    return (
        <section>
            <div class="containerCursos">
                <h2>Cursos em andamento</h2>
                <div class="cursosAndamento">
                    <div class="containerDestaque">
                        <div class="containerSuperior">
                            <img src={imageJavascript} alt="curso javascript"/>
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
                        <div class="cardCursos">
                        <img src={imageHtml} alt="curso html"/>
                            <div class="containerText">
                                HTML 5 - COMPLETO semantica e SEO
                            </div>
                        </div>
                        <div class="cardCursos">
                            <img src={imageCss} alt="curso css"/>
                            <div class="containerText">
                                CSS 3 - grid e flexbox
                            </div>
                        </div>
                        <div class="cardCursos">
                            <img src={imageGit} alt="curso git e github"/>
                            <div class="containerText">
                                GIT & GITHUB - repositório remoto
                            </div>
                        </div>
                        <div class="cardCursos">
                            <img src={imageXd} alt="curso xd"/>
                            <div class="containerText">
                                XD - design grafico, protótipos
                            </div>
                        </div>
                    </div>
                </div>
                <h4>
                    <a href="#">ver todos os cursos em andamento</a>
                </h4>
                <h2>Cursos recomendados</h2>
                <div class="cursosRecomendados">
                    <div class="containerInferior">
                        <div class="cardCursos">
                            <img src={imageReact} alt="curso react"/>
                            <div class="containerText">
                                REACTJS - desenvolvimento FRONT-END
                            </div>
                        </div>
                        <div class="cardCursos">
                            <img src={imageHtml} alt="curso nodejs"/>
                            <div class="containerText">
                                NODEJS - desenvolvimento BACK-END
                            </div>
                        </div>
                        <div class="cardCursos">
                            <img src={imageGit} alt="curso express"/>
                            <div class="containerText">
                                EXPRESS - banco de dados
                            </div>
                        </div>
                        <div class="cardCursos">
                            <img src={imageCss} alt="curso angularjs"/>
                            <div class="containerText">
                                ANGULARJS - desenvolvimento FRONT-END
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContainerCursos