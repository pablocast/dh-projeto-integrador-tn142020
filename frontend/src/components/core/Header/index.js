import './style.css'
import React, { useState } from 'react'
import logo from '../../../assets/img/logo.jpg'

const Header = () => {
  const [Cadastro, setCadastro] = useState(false)

  return (
    <header className="Header">
      <img src={logo} className='logo' alt='logo' />
      <nav className='Nav' >
        <a href='/plataforma'>A Plataforma</a>
        <a href='/cursos'>Cursos</a>
        <a href='/empresas'>Empresas</a>
        <a href='/contato'>Contato</a>
        <div className='Cadastro' onMouseOver={() => setCadastro(true)} >
          <a href='' className='Cadastro_button' >Cadastre-se</a>
        </div>
      </nav>
      {
        Cadastro
          ? (
            <div className='Cadastro__menu' onMouseLeave={() => setCadastro(false)} >
              <a href="/estudantes/sign_in"> Sou estudante </a>
              <a href="/empresa/sign_in"> Sou empresa </a>
            </div>
          ) : (
            null
          )
      }
    </header >
  );
}

export default Header;

