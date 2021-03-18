import './style.css'
import React from 'react'
import logo from '../../../assets/img/logo.jpg'

const Header = () => {
  return (
    <header>
    <div class="menu">
      <a href="index.html" class="menu-logo">
        <img src={logo} alt="BrainXpert logo"/>
      </a>
      <button class="nav-toggle" aria-label="toggle navegation">
        <span class="hamburguer"></span>
      </button>
      <nav class="nav">


        <ul class="menu-navbar">
          <li class="menu-navbar-item"><a href="javascript: void(0)">A Plataforma</a>
          </li>
          <li class="menu-navbar-item"><a href="#">Cursos</a>
          </li>
          <li class="menu-navbar-item"><a href="#">Empresas</a>
          </li>
          <li class="menu-navbar-item"><a href="javascript: void(0)">Contato</a>
          </li>
          <li class="menu-navbar-item-active" id="cadastro"><a href="javascript: void(0)">Cadastre-se</a>
          </li>
        </ul>
      </nav>


     </div>
  </header>
  );
}

export default Header; 

