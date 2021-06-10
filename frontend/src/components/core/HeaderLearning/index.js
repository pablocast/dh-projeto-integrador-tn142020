import "./style.css";
import React from "react";
import logo from "../../../assets/img/logo.jpg";
import { Link } from "react-router-dom";
import auth from "../../auth/auth-helper";
import { useHistory } from "react-router-dom";

const HeaderLearning = ({ ...props }) => {
  let history = useHistory();
  return (
    <header className="Header">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <nav className="Nav">
        <a href="/plataforma">Meu perfile</a>
        <a
          onClick={() => {
            auth.clearJWT(() => history.push("/"));
          }}
        >
          Sair
        </a>
      </nav>
    </header>
  );
};

export default HeaderLearning;
