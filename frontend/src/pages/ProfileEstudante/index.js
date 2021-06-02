import React from "react";
import "./style.css";
import Header from "../../components/core/HeaderPageCursos";
import ContainerCursos from "../../components/core/ContainerCursos";
import Footer from "../../components/core/Footer";

const ProfileCursos = (props) => {
  const { username } = props.location.state;

  return (
    <>
      <Header username={username} />
      <ContainerCursos />
      <Footer />
    </>
  );
};

export default ProfileCursos;
