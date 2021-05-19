import React from "react";
import "./style.css";
import imageLogo from "../../../assets/img/logo_transp.png";
import { Link } from "react-router-dom";

const HeaderPagesCursos = () => {
  return (
    <header>
      <div class="menu">
        <Link to="/" class="menu-logo">
          <img src={imageLogo} alt="BrainXpert logo" />
        </Link>
        {/* <button class="nav-toggle" aria-label="toggle navegation">
              <span class="hamburguer"></span>
            </button>  */}
        <nav class="nav">
          <ul class="menu-navbar">
            <li class="menu-navbar-item">
              <a href="#">Aprenda</a>
            </li>
            <li class="menu-navbar-item">
              <a href="#">Comunidade</a>
            </li>
            <li>
              <i class="large material-icons">circle_notifications</i>
            </li>
            <li class="menu-navbar-item">
              <a href="#">Aluno(a)</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="subMenu">
        <h1>Dashboard</h1>
      </div>
    </header>
  );
};

export default HeaderPagesCursos;
