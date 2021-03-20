import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/core/Header'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const MainRouter = () => {
    return (<div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/estudantes/sign_in" component={Cadastro}/>
        <Route path="/empresa/sign_in" component={Cadastro}/>
      </Switch>
    </div>)
}

export default MainRouter