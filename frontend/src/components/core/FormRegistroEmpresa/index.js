import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import FormInicial from "./FormInicial";
import FormFinal from "./FormFinal";
import { useState } from "react";
import { create } from "../api-company.js";

const FormRegistroEmpresa = () => {
  const [toSecondStep, settoSecondStep] = useState(false);

  const [values, setValues] = useState({
    employee_name: "",
    company_name: "",
    company_phone: "",
    company_email: "",
    company_city: "",
    company_country: "",
    company_num_devs: "",
    password: "",
    open: false,
    error: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = () => {
    console.log(values);
    const company = {
      employee_name: values.employee_name || undefined,
      company_name: values.company_name || undefined,
      company_phone: values.company_phone || undefined,
      company_email: values.company_email || undefined,
      company_city: values.company_city || undefined,
      company_country: values.company_country || undefined,
      company_num_devs: values.company_num_devs || undefined,
      password: values.password || undefined,
    };

    create(company).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: "", open: true });
      }
    });
  };

  return (
    <div className="candidates sign-in">
      <section className="main-section-content">
        <Container className="Container">
          <Row className="row">
            <Col md={{ span: 12 }}>
              {!toSecondStep ? (
                <FormInicial
                  handleSubmit={(props) => settoSecondStep(props)}
                  callBack={handleChange}
                />
              ) : (
                <FormFinal
                  handleVoltar={(props) => settoSecondStep(props)}
                  callBack={handleChange}
                  onClick={clickSubmit}
                />
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FormRegistroEmpresa;
