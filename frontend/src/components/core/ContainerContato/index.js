import React from "react";
import "./style.css";
import { Container, Row, Col, Form, Card } from "react-bootstrap";

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

const FormContato = (props) => {
  return (
    <Card className="contato_card">
      <Form className="contato_card_form">
        <div className="contato_card_form_nome">
          <label className="control-label nome required" for="candidate_nome">
            NOME
          </label>
          <input
            className="form-control string nome required"
            autofocus="autofocus"
            type="nome"
            value=""
            name="candidate[nome]"
            id="candidate_nome"
          />
        </div>
        <div className="contato_card_form_sobrenome">
          <label className="control-label nome required" for="candidate_nome">
            SOBRENOME
          </label>
          <input
            className="form-control string nome required"
            autofocus="autofocus"
            type="nome"
            value=""
            name="candidate[nome]"
            id="candidate_nome"
          />
        </div>
        <div className="contato_card_form_email">
          <label className="control-label email required" for="candidate_email">
            EMAIL
          </label>
          <input
            className="form-control string email required"
            autofocus="autofocus"
            type="email"
            value=""
            name="candidate[email]"
            id="candidate_email"
          />
        </div>
        <div className="contato_card_form_mensagem">
          <label className="control-label email required" for="candidate_email">
            MENSAGEM
          </label>
          <input
            className="form-control string email required"
            autofocus="autofocus"
            type="email"
            value=""
            name="candidate[email]"
            id="candidate_email"
            style={{ height: "7pc" }}
          />
        </div>
        <div className="button_div">
          <button className="button">Enviar Mensagem</button>
        </div>
      </Form>
    </Card>
  );
};

const ContainerContato = () => {
  return (
    <Container className="contato">
      <Col lg={{ span: 1 }}></Col>
      <Col lg={{ span: 4, offset: 3 }}>
        <div className="contato_area">
          <p className="contato_area_texto">Tem perguntas?</p>
          <div></div>
          <h2>Contate a BrainXpert</h2>
          <p className="contato_area_descricao">
            Estamos aqui para ajudar e responder a qualquer dúvida que você
            possa ter. Estamos ansiosos para ouvir de você
            <Emoji symbol="😃" />
          </p>
        </div>
        <div className="contato_area_form">
          <FormContato />
        </div>
      </Col>
      <Col lg={{ span: 1 }}></Col>
    </Container>
  );
};

export default ContainerContato;
