import React from 'react'
import Header from "../../components/core/Header";
import Footer from "../../components/core/Footer";
import BannerQuemSomos from "../../components/core/BannerQuemSomos";
import BannerCursos from "../../components/core/BannerCursos";
import BannerDepoimentos from "../../components/core/BannerDepoimentos";
import BannerEmpresa from "../../components/core/BannerEmpresa";
import "./style.css";

const Home = () => {
  return (
    <>
      <Header isLogin={false} />
      <BannerQuemSomos />
      <BannerCursos />
      <BannerDepoimentos />
      <BannerEmpresa />
      <Footer />
    </>
  );
};

export default Home;
