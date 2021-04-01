import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Empresas from "../pages/Empresas";
import NovoEstudante from "../pages/NovoEstudante";
import EstudantesDestaques from "../pages/EstudantesDestaques";
import Cursos from "../pages/Cursos";
import ProfileEstudante from "../pages/ProfileEstudante";
import PagePlataforma from "../pages/PagePlataforma";
import BemVindo from "../pages/BemVindo";
import Contato from "../pages/Contato";
import AdminLogin from "../pages/AdminLogin";
import AdminDash from "../pages/AdminDash";
import PrivateRoute from "../components/auth/PrivateRoute";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/plataforma" component={PagePlataforma} />
      <Route exact path="/cursos" component={Cursos} />
      <Route exact path="/empresas" component={Empresas} />
      <Route
        path="/estudantes/sign_in"
        render={() => <Cadastro isStudent={true} />}
      />
      <Route
        path="/empresa/sign_in"
        render={() => <Cadastro isStudent={false} />}
      />
      <Route path="/criar-perfil-empresa" component={Empresas} />
      <Route path="/criar-perfil-estudante" component={NovoEstudante} />
      <Route path="/estudantes-destaques" component={EstudantesDestaques} />
      <Route path="/profile-estudante" component={ProfileEstudante} />
      <Route path="/bemvindo" component={BemVindo} />
      <Route path="/contato" component={Contato} />
      <Route path="/admin" component={AdminLogin} />
      <PrivateRoute path="/admin/painel" component={AdminDash} />
    </Switch>
  );
};

export default MainRouter;
