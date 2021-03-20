import './style.css'


const FormCadastro = () => {

    return (
        <div class="candidates sign-in">
            <section class="main-section-content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <h1 class="text-inverse">
                                Bem-vindo
                            </h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                            <div class="panel panel-default panel-inverse">
                                <div class="panel-heading">
                                    <h2 class="panel-title">Log in</h2>
                                </div>
                                <div class="panel-body">
                                    <form novalidate="novalidate" class="simple_form new_candidate ng-pristine ng-valid" id="new_candidate" action="/candidates/sign_in" accept-charset="UTF-8" method="post">
                                        <input name="utf8" type="hidden" value="✓"></input>
                                            <div class="form-group email optional candidate_email">
                                                <label class="control-label email optional" for="candidate_email">Email</label>
                                                <input class="form-control string email optional" autofocus="autofocus" placeholder="Digite o seu email" type="email" value="" name="candidate[email]" id="candidate_email"></input>
                                            </div>
                                            <div class="form-group password optional candidate_password">
                                                <label class="control-label password optional" for="candidate_password">Senha</label>
                                                <input class="form-control password optional" placeholder="Digite a sua senha" type="password" name="candidate[password]" id="candidate_password"></input>
                                            </div>
                                            <div class="row small-info-form">
                                                <div class="col-sm-6 col-xs-6 remember-me">
                                                    <div class="form-group boolean optional candidate_remember_me">
                                                        <div class="checkbox">
                                                            <input value="0" type="hidden" name="candidate[remember_me]">
                                                                <label class="boolean optional label-checkbox" for="candidate_remember_me">
                                                                    <input onclick="checkForCheckbox()" class="boolean optional" type="checkbox" value="1" name="candidate[remember_me]" id="candidate_remember_me">Mantenha-me conectado</input>
                                                                </label>
                                                            </input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 col-xs-6 login-problems">
                                                    <p class="text-right"><a href="/password/new">Problemas com o Log in?</a></p>
                                                </div>
                                            </div>
                                            <input type="submit" name="commit" value="Entrar" class="btn btn btn-primary btn-lg btn-block"></input>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                        <p class="text-inverse"><small>Ainda não tem uma conta? <a href="/criar-perfil">Cadastrar grátis</a></small></p>
                </div>  
            </section>
        </div>
    )
}



export default FormCadastro