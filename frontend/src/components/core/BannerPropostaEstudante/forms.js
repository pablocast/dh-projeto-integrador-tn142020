import React, { useState } from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import {
    AiOutlineArrowRight,
    AiOutlineMail
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BiUserCheck } from "react-icons/bi";
import Carousel from "react-elastic-carousel";
import olx from "../../../assets/img/olx.png";
import magazineluiza from "../../../assets/img/magazineluiza.png";
import mercadolivre from "../../../assets/img/mercadolivre.jpg";
import b2w from "../../../assets/img/b2w.png";
import microsoft from "../../../assets/img/microsoft.png";
import spotify from "../../../assets/img/spotify.png";
import uber from "../../../assets/img/uber.png";

const empresas = [
    olx,
    magazineluiza,
    mercadolivre,
    b2w,
    microsoft,
    uber,
    spotify,
];

const Item = ({ ...props }) => {
    const { avatar } = props;
    const style = {
        minWidth: "80px",
        maxWidth: "80px",
        minHeight: "80px",
        maxHeight: "80px",
        borderRadius: "50%",
        overflow: "hidden",
        marginLeft: "15px",
    };
    return <img src={avatar} style={style} />;
};

const MakeCarousel = () => {
    const breakPoints = [{ width: 1, itemsToShow: 3 }];

    return (
        <Carousel
            breakPoints={breakPoints}
            pagination={false}
            className="CarouselCompanies"
        >
            {empresas.map((img, index) => {
                return <Item avatar={img} />;
            })}
        </Carousel>
    );
};

const Form_1 = ({ ...props }) => {
    const { state, callBack } = props;
    return (
        <div>
            <Row className="proposta__registrar">
                <Col style={{ display: "flex", flexDirection: "column" }}>
                    <label>E-mail</label>
                    <input className="form-control string email required" placeholder="Digite o seu email" value={state.email} onChange={callBack('email')} />
                </Col>
                <Col>
                    <button className="button">
                        CRIAR MEU PERFIL AGORA
                    <AiOutlineArrowRight
                            color="white"
                            style={{ marginLeft: "5px", height: "20px", width: "20px" }}
                        />
                    </button>
                </Col>
            </Row>
            <small style={{ color: "white" }}>
                Ao se cadastrar você aceita os nossos
                <a href="/termos-de-uso"> Termos de uso</a>
            </small>
            <Row>
                <p className="Carousel__title">
                    Onde as melhores empresas contrataram desenvolvedores
                </p>
                <MakeCarousel />
            </Row>
        </div>
    )
}

const Form_2 = ({ ...props }) => {
    const { state, callBack } = props;
    return (
        <div>
            <div class="input-icon">
                <span class="icon"><BsPerson color='#ffffff' size='1.5em' /></span>
                <div class="form-group">
                    <label class="control-label" for="candidate_name_1">Nome completo (mín. 5 caracteres)</label>
                    <input class="form-control" id="icon" placeholder="Username" placeholder="Digite seu nome completo" type="text" />
                </div>
            </div>
            <div class="input-icon">
                <span class="icon"><BiUserCheck color='#ffffff' size='1.5em' /></span>
                <div class="form-group">
                    <label class="control-label">Usuario (mín. 8 caracteres)</label>
                    <input class="form-control" id="icon" placeholder="Username" placeholder="Digite seu usuario" type="text" />
                </div>
            </div>
            <div class="input-icon">
                <span class="icon"><AiOutlineMail color='#ffffff' size='1.5em' /></span>
                <div class="form-group">
                    <label class="control-label">Email</label>
                    <input class="form-control" id="icon" placeholder="Username" placeholder="Digite seu email" type="text" />
                </div>
            </div>
            <div class="next-container">
                <span></span>
                <span id="next" class="back" ng-click="backStep()">
                    Seguinte
                    <i class="material-icons next-icon">arrow_forward</i>
                </span>
            </div>

        </div>
    )
}


export { Form_1, Form_2 };