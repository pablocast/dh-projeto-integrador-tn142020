import './style.css'
import React, { useState } from 'react'
import logo from '../../../assets/img/logo_transp.png'

const HeaderCadastro = () => {
  const [Cadastro, setCadastro] = useState(false)

  return (
    <header className="HeaderCadastro">
      <img src={logo} className='logo' alt='logo' />
      <nav className='NavCadastro' >
        <a href='/estudantes-destaques'>Estudantes</a>
        <a href='/criar-perfil-estudante'>Cadastrar como estudante</a>
        <div className='Cadastro' onMouseOver={() => setCadastro(true)} >
          <a href='' className='Cadastro_button' >Já tenho conta, entrar</a>
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
    </header>
  );
}

export default HeaderCadastro;

