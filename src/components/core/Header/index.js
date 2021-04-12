import "./style.css";
import React, { useState } from "react";
import logo from "../../../assets/img/logo.jpg";
import { Link } from "react-router-dom";

const Header = ({ ...props }) => {
  const [Cadastro, setCadastro] = useState(false);
  const { isLogin } = props;

  return (
    <header className="Header">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <nav className="Nav">
        <a href="/plataforma">A plataforma</a>
        <a href="/cursos">Cursos</a>
        <a href="/empresas">Empresas</a>
        <a href="/contato">Contato</a>
        {!isLogin ? (
          <div className="Cadastro" onMouseOver={() => setCadastro(true)}>
            <a href="" className="Cadastro_button">
            Sign in
            </a>
          </div>
        ) : null}
      </nav>
      {Cadastro ? (
        <div className="Cadastro__menu" onMouseLeave={() => setCadastro(false)}>
          <a href="/estudantes/sign_in"> Sou estudante </a>
          <a href="/empresa/sign_in"> Sou empresa </a>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
