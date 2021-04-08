import React from "react";
import "./style.css";
import Header from "../../components/core/Header";
import QuemSomos from "../../components/core/ContainerQuemSomos";
import Apoiadores from "../../components/core/ContainerApoiadores";
import ContainerVagas from "../../components/core/ContainerVagas";
import Footer from "../../components/core/Footer";
import { checkPropTypes } from "prop-types";

const PagePlataforma = () => {
  return (
    <>
      <Header />
      <QuemSomos />
      <Apoiadores />
      <ContainerVagas />
      <Footer />
    </>
  );
};

export default PagePlataforma;
