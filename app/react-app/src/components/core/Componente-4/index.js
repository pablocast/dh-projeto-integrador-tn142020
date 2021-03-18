import './style.css'
import imageEmpresa from '../../../assets/img/empresa.png'

const Component4 = () => {

    return (
        <section className="information">
    <div className="information-container">

      <div className="information-text">
        <p className="titulo">A entrada no mercado de trabalho, começa por aqui! </p>
        <p className="paragrafo">Oferecemos uma trilha de cursos focado em vagas reais de grandes empresas. Já formamos mais de 2000 alunos, nos mais diversos cursos em que oferecemos.
        </p>
        <p>
          Iremos te preparar com todo conhecimento técnico e comportamental, visuando não só as empresas parceiras, que fornecem conteudo para prepara-los para uma grande oportunidade,mas tambem para as mais diversas vagas desse mercado que cresce cada vez mais.
        </p>
        <button className="button">Cadastra-se</button>
      </div>

      <div className="information-img">
        <img src={imageEmpresa} alt="empresa"/>
      </div>

    </div>
  </section>
    )

}

export default Component4
