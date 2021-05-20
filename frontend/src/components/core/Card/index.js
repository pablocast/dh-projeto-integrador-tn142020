import React from "react";
import { Container, Row, Column } from "react-bootstrap";
import "./style.css";

const Card = (props) => {
  return (
    <Container className="Mycard">
      <Row className="card-img">
        <img
          className="card-img-top rounded pt-2"
          style={{ width: "50%", margin: "auto" }}
          src={props.img}
          alt={props.alt}
        />
      </Row>
      <Row className="card-body">
        <h5 className="card-title"> {props.title} </h5>
        <p className="card-text lead"> {props.description} </p>
      </Row>
      <Row className="card-bottom">
        <a href="#" className="btn btn-primary">
          Ver mais
        </a>
      </Row>
    </Container>
  );
};

export default Card;
