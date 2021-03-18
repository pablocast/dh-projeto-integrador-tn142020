import './style.css'
import React from 'react'
import logo from '../../../assets/img/logo.jpg'

const Header = () => {
  
  return (
    <header>
    <div className="menu">
      <a href="index.html" className="menu-logo">
        <img src={logo} alt="BrainXpert logo"/>
      </a>
      <button className="nav-toggle" aria-label="toggle navegation">
        <span className="hamburguer"></span>
      </button>
      <nav className="nav">


        <ul className="menu-navbar">
          <li className="menu-navbar-item"><a href="javascript: void(0)">A Plataforma</a>
          </li>
          <li className="menu-navbar-item"><a href="#">Cursos</a>
          </li>
          <li className="menu-navbar-item"><a href="#">Empresas</a>
          </li>
          <li className="menu-navbar-item"><a href="javascript: void(0)">Contato</a>
          </li>
          <li className="menu-navbar-item-active" id="cadastro"><a href="javascript: void(0)">Cadastre-se</a>
          </li>
        </ul>
      </nav>


    </div>
  </header>

  );
}

export default Header; 

