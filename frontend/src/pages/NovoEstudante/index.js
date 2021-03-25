import './style.css'
import BannerPropostaEstudante from '../../components/core/BannerPropostaEstudante'
import BannerPasosEstudante from '../../components/core/BannerPasosEstudante'
import BannerTestimonioEstudante from '../../components/core/BannerTestimonioEstudante'
import BannerRegistrarEstudante from '../../components/core/BannerRegistrarEstudante'
import Footer from '../../components/core/Footer'

const NovoEstudante = () => {

    return (
        <>
        <div className='Registration'>
            <BannerPropostaEstudante />
            <BannerPasosEstudante />
            <BannerTestimonioEstudante />
            <BannerRegistrarEstudante />
        </div>
        <Footer />
        </>

    )
}

export default NovoEstudante