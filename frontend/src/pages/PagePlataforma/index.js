import './style.css'
import Header from '../../components/core/HeaderPagePlataforma'
import QuemSomos from '../../components/core/ContainerQuemSomos'
import Apoiadores from '../../components/core/ContainerApoiadores'
import ContainerVagas from '../../components/core/ContainerVagas'
import Footer from '../../components/core/Footer'

const PagePlataforma = () => {
    return (
        <>
        <Header />
        <QuemSomos />
        <Apoiadores />
        <ContainerVagas />
        <Footer />
        </>
    )
}

export default PagePlataforma