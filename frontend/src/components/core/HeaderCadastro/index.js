import './style.css'
import React, { useState } from 'react'
import logo from '../../../assets/img/logo_transp.png'
import { Link } from 'react-router-dom'

const HeaderCadastro = ({ ...props }) => {
  const [Cadastro, setCadastro] = useState(false)
  const { myLogo } = props

  const newLogo = myLogo ? myLogo : logo
  const newBackground = myLogo ? '' : '#EAEFF5'
  const newColor = myLogo ? '#000' : '#000'

  return (
    <header className="HeaderCadastro" style={{ backgroundColor: 'red' }}>
      <Link to='/'>
        <img src={newLogo} className='logo' alt='logo' />
      </Link>
      <nav className='NavCadastro' style={{ color: `${newColor}` }} >
        <a href='/estudantes-destaques'  >Estudantes</a>
        <a href='/criar-perfil-estudante' >Cadastrar como estudante</a>
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

