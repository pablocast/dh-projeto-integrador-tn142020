import React from "react";
import "./style.css";
import { Container, Row, Col, Form, Card, FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormCadastro = ({ ...props }) => {
  const { isStudent } = props;

  return (
    <div className="candidates sign-in">
      <section className="main-section-content">
        <Container className="Container">
          <Row className="Container__title">
            <Col lg={{ span: 8, offset: 2 }} className="Container__title__text">
              <h1 className="Container_tittle__text__inverse">Bem-vindo!</h1>
            </Col>
          </Row>
          <Row className="row">
            <Col md={{ span: 6, offset: 3 }}>
              <Card className="Panel">
                <div className="Panel__heading">
                  <h2 className="Panel__heading__text">Log in</h2>
                </div>
                <div className="Panel__body">
                  <Form className="simple-form">
                    <input name="utf8" type="hidden" value="✓" />
                    <div className="Form-group email optional candidate_email">
                      <label
                        className="control-label email optional"
                        for="candidate_email"
                      >
                        Email
                      </label>
                      <input
                        className="form-control string email optional"
                        autofocus="autofocus"
                        placeholder="Digite o seu email"
                        type="email"
                        name="candidate[email]"
                        id="candidate_email"
                      />
                    </div>
                    <div className="Form-group password optional candidate_password">
                      <label
                        className="control-label password optional"
                        for="candidate_password"
                      >
                        Senha
                      </label>
                      <input
                        className="form-control password optional"
                        placeholder="Digite a sua senha"
                        type="password"
                        name="candidate[password]"
                        id="candidate_password"
                      />
                    </div>
                    <Row className="row small-info-form">
                      <Col
                        className="remember-me"
                        sm={{ span: 6 }}
                        xs={{ span: 6 }}
                      >
                        <div className="Form-group boolean optional candidate_remember_me">
                          <FormCheck className="Checkbox">
                            <label
                              className="boolean optional label-checkbox"
                              for="candidate_remember_me"
                            >
                              <input
                                onClick="checkForCheckbox()"
                                className="boolean optional"
                                type="checkbox"
                                value="1"
                                name="candidate[remember_me]"
                                id="candidate_remember_me"
                              />
                              Mantenha-me conectado
                            </label>
                          </FormCheck>
                        </div>
                      </Col>
                      <Col
                        className="Login-problems"
                        sm={{ span: 6 }}
                        xs={{ span: 6 }}
                      >
                        <p class="Text-right">
                          <a href="/password/new">Problemas com o Log in?</a>
                        </p>
                      </Col>
                    </Row>
                    <Link
                      to={"/profile-".concat(
                        isStudent ? "estudante" : "empresa"
                      )}
                    >
                      <input
                        type="submit"
                        name="commit"
                        value="Entrar"
                        className="btn btn btn-primary btn-lg btn-block"
                      />
                    </Link>
                  </Form>
                </div>
              </Card>
              <p class="text-inverse">
                <small>
                  Ainda não tem uma conta?{" "}
                  <a
                    href={"/criar-perfil-".concat(
                      isStudent ? "estudante" : "empresa"
                    )}
                  >
                    Cadastrar grátis
                  </a>
                </small>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FormCadastro;
