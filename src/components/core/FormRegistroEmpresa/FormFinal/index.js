import React from "react";
import "./style.css";
import { Form, Card } from "react-bootstrap";

const FormFinal = ({ ...props }) => {
  const { handleVoltar } = props;

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
            <input
              className="form-control string senha required"
              autofocus="autofocus"
              placeholder="Crie uma senha com pelo menos 8 carateres"
              type="senha"
              value=""
              name="candidate[senha]"
              id="candidate_senha"
            />
          </div>
          <div className="Form-group telefone required candidate_telefone">
            <label
              className="control-label telefone required"
              for="candidate_telefone"
            >
              Telefone para contato
            </label>
            <input
              className="form-control string telefone required"
              autofocus="autofocus"
              placeholder="Digite número de telefone com DD"
              type="email"
              value=""
              name="candidate[telefone]"
              id="candidate_telefone"
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
              ng-model="company.number_of_programmers"
              ng-change="resetValidation()"
              required="required"
              aria-required="true"
              name="company[number_of_programmers]"
              id="company_number_of_programmers"
            >
              <option value="_1_3">1-3</option>
              <option value="_4_10">4-10</option>
              <option value="_11_25">11-25</option>
              <option value="_26_50">26-50</option>
              <option value="_50">+50</option>
            </select>
          </div>
          <button className="button">Cadastrar</button>
        </Form>
      </div>
    </Card>
  );
};

export default FormFinal;
