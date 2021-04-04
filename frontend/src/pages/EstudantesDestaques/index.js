import "./style.css";
import Header from "../../components/core/Header";
import Footer from "../../components/core/Footer";
import EstudantesDestaque from "../../components/core/ContainerEstudantesDestaques";
const EstudantesDestaques = () => {
  return (
    <>
      <Header />
      <EstudantesDestaque />
      <Footer />
    </>
  );
};

export default EstudantesDestaques;
