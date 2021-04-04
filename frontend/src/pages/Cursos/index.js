import './styles.css'
import Header from '../../components/core/Header'
import SubHeader from '../../components/core/SubHeader'
import Footer from '../../components/core/Footer'
import Banner from '../../components/core/BannerOfertaCursos'
import CursosRecomendados from '../../components/core/ContainerCursosRecomendados'
import CursosRelacionados from '../../components/core/ContainerCursosRelacionados'
import CursosEmAlta from '../../components/core/ContainerCursosEmAlta'

const Cursos = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <Banner />
      <CursosRecomendados />
      <CursosEmAlta />
      <CursosRelacionados />
      <Footer />
    </>
  )
};

export default Cursos;
