import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Empresas from './pages/Empresas'
import CadastroNuevoEstudante from './pages/CadastroNuevoEstudante'

const MainRouter = () => {
  return (<div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/empresas" component={Empresas} />
      <Route path="/estudantes/sign_in" render={() => <Cadastro isStudent={true} />} />
      <Route path="/empresa/sign_in" render={() => <Cadastro isStudent={false} />} />
      <Route path="/criar-perfil-empresa" component={Empresas} />
      <Route path="/criar-perfil-estudante" component={CadastroNuevoEstudante} />
    </Switch>
  </div>)
}

export default MainRouter