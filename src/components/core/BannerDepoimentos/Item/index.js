import "./style.css";
import React from "react";
import { Col, Card, Row } from "react-bootstrap";

const Item = (props) => {
  const { cargo, testimonio, nome, avatar } = props;

  return (
    <Col className="Cards">
      <Card testimonial className="Testimonial">
        <Row className="Testimonial__top">
          <p className="Testimonial__top__testimonio">{testimonio}</p>
        </Row>
        <Row className="Testimonial__bottom">
          <Col lg={{ span: 8 }} className="Testimonial__bottom__title">
            <h5>{nome}</h5>
            <h1>{cargo}</h1>
          </Col>
          <Col lg={{ span: 4 }} className="Testimonial__bottom__avatar">
            <img
              src={require("../../../../assets/img/" + `${avatar}`).default}
              alt=""
              className="rounded-circle img-fluid"
            />
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
export default Item;
