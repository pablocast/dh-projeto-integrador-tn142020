import React from "react";
import "./style.css";
import { Container, Row, Col } from 'react-bootstrap';

const Emoji = props => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  )

const ContainerContato = () => {

    return (
        <Container className='contato'>
            <Col lg={{ span: 1 }} >
            </Col>
            <Col lg={{ span: 4, offset:3}} >
                <div className='contato_area'>
                    <p className='contato_area_texto'>Tem perguntas?</p>
                    <div></div>
                    <h2>Contate a BrainXpert</h2>
                    <p className='contato_area_descricao'>
                        Estamos aqui para ajudar e responder a qualquer dúvida que você possa ter. Estamos ansiosos para ouvir de você
                        <Emoji symbol="😃" />
                    </p>
                    
                </div>
            </Col>
            <Col lg={{ span: 1 }} >
            </Col>
        </Container>

    )


}







export default ContainerContato