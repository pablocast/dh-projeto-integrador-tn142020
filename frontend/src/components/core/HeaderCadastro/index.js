import './style.css'
import React, { useState } from 'react'
import logo from '../../../assets/img/logo_transp.png'
import { Link } from 'react-router-dom'

const HeaderCadastro = ({ ...props }) => {
  const [Cadastro, setCadastro] = useState(false)
  const { myLogo } = props

  const useLogo = myLogo ? myLogo : logo
  const useBackground = myLogo ? 'transparent' : '#EAEFF5'
  const useColor = myLogo ? 'white' : '#000'

  return (
    <header className="HeaderCadastro" style={{ backgroundColor: `${useBackground}` }}>
      <Link to='/'>
        <img src={useLogo} className='logo' alt='logo' />
      </Link>
      <nav className='NavCadastro' >
        <a href='/estudantes-destaques' style={{ color: `${useColor}` }}>Estudantes</a>
        <a href='/criar-perfil-estudante' style={{ color: `${useColor}` }}>Cadastrar como estudante</a>
        <div className='Cadastro' onMouseOver={() => setCadastro(true)} >
          <a href='' className='Cadastro_button' style={{ color: `${useColor}` }}  >Já tenho conta, entrar</a>
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

