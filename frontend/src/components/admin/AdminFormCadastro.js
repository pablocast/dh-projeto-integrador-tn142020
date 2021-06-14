import "./style.css";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import React, { useState } from "react";
import { signin } from "../auth/api-auth";
import auth from "../auth/auth-helper";

const AdminFormCadastro = (props) => {
  const history = useHistory();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    error: "",
    redirectToReferrer: false,
  });

  const handleChange = (name) =>
    function (event) {
      setValues({ ...values, [name]: event.target.value });
    };

  const clickSubmit = (event) => {
    event.preventDefault();
    const user = {
      typeuser: "admin",
      email: values.email || undefined,
      password: values.password || undefined,
    };
    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        auth.authenticate(data, () => {
          setValues({
            ...values,
            error: "",
            redirectToReferrer: true,
            username: data.user.name,
          });
          sessionStorage.setItem("isAuthenticated", true);
        });
      }
    });
  };

  const { from } = {
    from: {
      pathname: "/admin/painel",
      state: { username: values.username },
    },
  };
  const { redirectToReferrer } = values;
  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <div className="admin-main-section-content">
      <Container className="Container">
        <Row className="Container__title">
          <Col lg={{ span: 8, offset: 2 }} className="Container__title__text">
            <h1 className="Container_tittle__text__inverse">
              <AiFillLock />
            </h1>
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
                      className="control-label usuario optional"
                      for="candidate_usuario"
                    >
                      Email
                    </label>
                    <input
                      className="form-control string email optional"
                      autoFocus="autofocus"
                      placeHolder="Digite o seu email"
                      type="usuario"
                      value={values.email}
                      onChange={handleChange("email")}
                      name="candidate[usuario]"
                      id="candidate_usuario"
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
                      className="form-control string password optional"
                      autoFocus="autofocus"
                      placeHolder="Digite a sua senha"
                      type="password"
                      value={values.password}
                      onChange={handleChange("password")}
                      name="candidate[password]"
                      id="candidate_password"
                    />
                  </div>
                  <Row className="row small-info-form">
                    <Col
                      className="remember-me"
                      sm={{ span: 6 }}
                      xs={{ span: 6 }}
                    ></Col>
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
                  <br />
                  {values.error && (
                    <p style={{ color: "red", textAlign: "center" }}>
                      <RiErrorWarningFill color="red" />
                      {values.error}
                    </p>
                  )}
                  <br />
                  <input
                    type="submit"
                    name="commit"
                    value="Entrar"
                    onClick={clickSubmit}
                    className="btn btn btn-primary btn-lg btn-block"
                  />
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminFormCadastro;
