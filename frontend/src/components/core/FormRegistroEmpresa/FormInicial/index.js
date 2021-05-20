import React from "react";
import "./style.css";
import { Row, Col, Form, Card } from "react-bootstrap";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";

const FormInicial = ({ ...props }) => {
  const { handleSubmit } = props;

  return (
    <Card className="Panel">
      <div className="Panel__heading">
        <h2 className="Panel__heading__text">Cadastre-se</h2>
        <h1>
          Comece a contratar <br /> desenvolvedores! ✨
        </h1>
      </div>
      <div className="Panel__body">
        <Form className="Form">
          <input name="utf8" type="hidden" value="✓" />
          <div className="Form-group nome">
            <label className="control-label nome required" for="candidate_nome">
              Nome
            </label>
            <span className="icon">
              <BsPerson color="#939DA5" size="1.25em" />
            </span>
            <input
              className="form-control string nome required"
              autofocus="autofocus"
              placeholder="Bruno Castano"
              type="nome"
              id="candidate_nome"
            />
          </div>
          <div className="Form-group email required candidate_email">
            <label
              className="control-label email required"
              for="candidate_email"
            >
              Email corporativo
            </label>
            <span className="icon">
              <AiOutlineMail color="#939DA5" size="1.25em" />
            </span>
            <input
              className="form-control string email required"
              autofocus="autofocus"
              placeholder="bcastano@dh.org.br"
              type="email"
              id="candidate_email"
            />
          </div>
          <div className="Form-group empresa required candidate_empresa">
            <label
              className="control-label empresa required"
              for="candidate_empresa"
            >
              Nome da empresa
            </label>
            <span className="icon">
              <FaIndustry color="#939DA5" size="1.25em" />
            </span>
            <input
              className="form-control string empresa required"
              autofocus="autofocus"
              placeholder="Digital House"
              type="nome"
              id="candidate_empresa"
            />
          </div>
          <div className="Form-group cidade required candidate_cidade">
            <label
              className="control-label password required"
              for="candidate_cidade"
            >
              Cidade
            </label>
            <span className="icon">
              <GiModernCity color="#939DA5" size="1.25em" />
            </span>
            <input
              className="form-control password required"
              placeholder="São Paulo, SP"
              type="text"
              id="candidate_cidade"
            />
          </div>
          <Row className="row small-info-form">
            <Col className="Termos" sm={{ span: 12 }} xs={{ span: 12 }}>
              <p>
                {" "}
                Ao se cadastrar você aceita os nossos{" "}
                <a href="">Termos de uso</a>
              </p>
            </Col>
          </Row>
          <button className="button" onClick={() => handleSubmit(true)}>
            Quero contratar programadores
            <AiOutlineArrowRight
              color="white"
              style={{ marginLeft: "5px", height: "20px", width: "20px" }}
            />
          </button>
        </Form>
      </div>
    </Card>
  );
};

export default FormInicial;
