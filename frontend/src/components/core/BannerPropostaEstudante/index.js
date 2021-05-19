import React, { useState } from "react";
import "./style.css";
import { Row, Col, Container } from "react-bootstrap";
import { GiSkills } from "react-icons/gi";
import {
  AiOutlineClockCircle,
  AiFillStar
} from "react-icons/ai";
import img from "../../../assets/img/banner.png";
import { create } from '../api-user.js';
import { Form_1, Form_2, Form_3, Form_4 } from './forms'

const BannerPropostaEstudante = () => {

  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    address: '',
    website: '',
    phone: '',
    company: '',
    about: '',
    photo: '',
    open: false,
    error: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
      username: values.username || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
      address: values.address || undefined,
      website: values.website || undefined,
      phone: values.phone || undefined,
      company: values.company || undefined,
      about: values.about || undefined,
      photo: values.photo || undefined
    }
    create(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({ ...values, error: '', open: true })
      }
    })
  }

  return (
    <section className="proposta">
      <Container style={{ marginLeft: 96.58 }}>
        <Row>
          <Col lg={{ span: 1 }}></Col>
          <Col lg={{ span: 6 }}>
            <h1>
              Dev, prepare-se para o <br /> emprego dos seus sonhos!
            </h1>
            <ul>
              <li>
                <GiSkills color="#FFCF26" style={{ marginRight: '1em' }} /> Aprenda as skills mais requisitadas
                do mercado
              </li>
              <li>
                <AiOutlineClockCircle color="#FFCF26" style={{ marginRight: '1em' }} /> 90% dos candidatos(as)
                recebem convites para entrevistas
              </li>
              <li>
                <AiFillStar color="#FFCF26" style={{ marginRight: '1em' }} /> Sinalize seu valor para as
                empresas parceiras
              </li>
            </ul>
            <Form_4 state={values} callBack={handleChange} />
          </Col>
          <Col lg={{ span: 5 }}>
            <img src={img} className="ImgHomen" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerPropostaEstudante;
