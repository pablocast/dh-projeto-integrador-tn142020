import './style.css'
import React from 'react'
import logo from '../../../assets/img/logo.jpg'

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} className ='logo' alt='logo' />
      <nav className='Nav'>
        <a href='/plataforma'>A Plataforma</a>
        <a href='/cursos'>Cursos</a>
        <a href='/empresas'>Empresas</a>
        <a href='/contato'>Contato</a>
        <a href='/cadastro' id="Cadastro">Cadastre-se</a>
      </nav>
    </header>
  );
}

export default Header; 

