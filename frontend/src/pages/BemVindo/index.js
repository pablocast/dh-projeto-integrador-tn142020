import "./style.css";
import BannerBemVindo from "../../components/core/BannerBemVindo";
import Footer from "../../components/core/Footer";
import HeaderCadastro from "../../components/core/HeaderCadastro";
import logo from "../../assets/img/logo_white.png";

const BemVindo = ({ ...props }) => {
  const { isStudent } = props;
  return (
    <>
      <HeaderCadastro className="Header" myLogo={logo} />
      <BannerBemVindo />
      <Footer className="Footer" />
    </>
  );
};

export default BemVindo;
