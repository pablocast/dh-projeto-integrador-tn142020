import React from 'react'
import "./style.css";
import FormCadastro from "../../components/core/FormCadastro";
import Footer from "../../components/core/Footer";
import Header from "../../components/core/Header";

const Cadastro = ({ ...props }) => {
  const { isStudent } = props;
  return (
    <>
      <Header isLogin={true} />
      <FormCadastro isStudent={isStudent} />
      <Footer />
    </>
  );
};

export default Cadastro;
