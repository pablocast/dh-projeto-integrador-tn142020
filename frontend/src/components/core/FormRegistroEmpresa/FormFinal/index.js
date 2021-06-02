import React from "react";
import "./style.css";
import { Form, Card } from "react-bootstrap";
import { BsLock } from "react-icons/bs";
import { RiCellphoneFill } from "react-icons/ri";

const FormFinal = ({ ...props }) => {
  const { callBack, handleVoltar, onClick } = props;

  return (
    <Card className="Panel">
      <div className="Panel__heading">
        <h2 className="Panel__heading__text">Cadastre-se </h2>
        <h1>
          Comece a contratar <br /> desenvolvedores! ✨
        </h1>
        <span
          className="Panel__heading__back"
          onClick={() => handleVoltar(false)}
        >
          <i className="material-icons next-icon">arrow_back</i>
          Voltar
        </span>
      </div>
      <div className="Panel__body">
        <Form className="Form">
          <input name="utf8" type="hidden" value="✓" />
          <div className="Form-group senha">
            <label
              className="control-label senha required"
              for="candidate_senha"
            >
              Senha (mín. 8 caracteres)
            </label>
            <span className="icon">
              <BsLock color="#939DA5" size="1.25em" />
            </span>
            <input
              className="form-control string senha required"
              autofocus="autofocus"
              placeholder="Digite sua senha"
              type="password"
              id="candidate_senha"
              onChange={callBack("password")}
            />
          </div>
          <div className="Form-group telefone required candidate_telefone">
            <label
              className="control-label telefone required"
              for="candidate_telefone"
            >
              Telefone para contato
            </label>
            <span className="icon">
              <RiCellphoneFill color="#939DA5" size="1.25em" />
            </span>
            <input
              className="form-control string telefone required"
              autofocus="autofocus"
              placeholder="Digite número com DD"
              type="text"
              id="candidate_telefone"
              onChange={callBack("company_phone")}
            />
          </div>
          <div className="Form-group numero_devs required candidate_numero">
            <label
              className="control-label numero_devs required"
              for="candidate_empresa"
            >
              Número de desenvolvedores
            </label>
            <select
              class="form-control select required ng-pristine ng-invalid ng-invalid-required ng-touched"
              required="required"
              placeholder="4_10"
              type="text"
              id="company_number_of_programmers"
              onClick={callBack("company_num_devs")}
            >
              <option value="1_3" selected="1_3">
                1-3
              </option>
              <option value="4_10">4-10</option>
              <option value="11_25">11-25</option>
              <option value="26_50">26-50</option>
              <option value="50">+50</option>
            </select>
          </div>
          <button className="button" onClick={onClick}>
            Cadastrar
          </button>
        </Form>
      </div>
    </Card>
  );
};

export default FormFinal;
