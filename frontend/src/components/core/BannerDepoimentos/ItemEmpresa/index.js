import './style.css'
import React from "react";
import { Col, Card, Row } from "react-bootstrap"

const ItemEmpresa = (props) => {
    const { cargo, testimonio, nome, avatar, empresa_logo } = props

    return (
        <Col className="Cards-Empresa">
            <Card testimonial className="Testimonial-Empresa">
                <Row className='Testimonial-Empresa__bottom'>
                    <Col lg={{ span: 1 }} className="Testimonial-Empresa__bottom__avatar">
                        <img
                            src={require('../../../../assets/img/' + `${avatar}`).default}
                            alt=""
                            className="rounded-circle img-fluid"
                        />
                    </Col>
                    <Col lg={{ span: 8 }} className='Testimonial-Empresa__bottom__title'>
                        <h5>{nome}</h5>
                        <h1>{cargo}</h1>
                    </Col>
                    <Col lg={{ span: 3 }} className='Testimonial-Empresa__bottom__company'>
                        <img
                            src={require('../../../../assets/img/' + `${empresa_logo}`).default}
                            alt=""
                            className="rounded-circle img-fluid"
                        />
                    </Col>
                </Row>
                <Row className='Testimonial-Empresa__top'>
                    <p className="Testimonial-Empresa__top__testimonio">
                        {testimonio}
                    </p>
                </Row>
            </Card>
        </Col>
    );
}
export default ItemEmpresa