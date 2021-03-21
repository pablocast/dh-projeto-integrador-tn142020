import './style.css'
import FormCadastro from '../../components/core/FormCadastro'
import Footer from '../../components/core/Footer'
import Header from '../../components/core/Header'

const Cadastro = () => {
    return (
        <>
            <Header isLogin={true} />
            <FormCadastro />
            <Footer />
        </>
    )
}

export default Cadastro