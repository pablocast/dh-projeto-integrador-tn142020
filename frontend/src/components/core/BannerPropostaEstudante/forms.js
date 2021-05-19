import React, { useState } from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import {
    AiOutlineArrowRight,
    AiOutlineMail,
    AiFillGithub
} from "react-icons/ai";
import { BsLock, BsPerson } from "react-icons/bs";
import { RiCellphoneFill } from "react-icons/ri";
import { BiUserCheck } from "react-icons/bi";
import { FaIndustry } from "react-icons/fa";
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
            <div className="input-icon">
                <span className="icon"><BsPerson color='#ffffff' size='1.5em' /></span>
                <div className="form-group">
                    <label className="control-label" for="candidate_name_1">Nome completo (mín. 5 caracteres)</label>
                    <input className="form-control" id="icon" placeholder="Username" placeholder="Digite seu nome completo" type="text" />
                </div>
            </div>
            <div className="input-icon">
                <span className="icon"><BiUserCheck color='#ffffff' size='1.5em' /></span>
                <div className="form-group">
                    <label className="control-label">Usuario (mín. 8 caracteres)</label>
                    <input className="form-control" id="icon" placeholder="Username" placeholder="Digite seu usuario" type="text" />
                </div>
            </div>
            <div className="input-icon">
                <span className="icon"><AiOutlineMail color='#ffffff' size='1.5em' /></span>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input className="form-control" id="icon" placeholder="Username" placeholder="Digite seu email" type="text" />
                </div>
            </div>
            <div className="next-container">
                <span></span>
                <span id="next" className="back" ng-click="backStep()">
                    <a >Seguinte</a>
                    <i className="material-icons next-icon">arrow_forward</i>
                </span>
            </div>

        </div>
    )
}

const Form_3 = ({ ...props }) => {
    const { state, callBack } = props;
    return (
        <div>
            <div className="input-icon">
                <span className="icon"><BsLock color='#ffffff' size='1.5em' /></span>
                <div className="form-group">
                    <label className="control-label" for="candidate_name_1">Senha (mín. 8 caracteres)</label>
                    <input className="form-control" id="icon" placeholder="Username" placeholder="Digite sua senha" type="text" />
                </div>
            </div>
            <div className="input-icon">
                <span className="icon"><BsLock color='#ffffff' size='1.5em' /></span>
                <div className="form-group">
                    <label className="control-label">Confirmar senha</label>
                    <input className="form-control" id="icon" placeholder="Username" placeholder="Digite novamente a senha" type="text" />
                </div>
            </div>
            <div className="input-icon">
                <div className="form-group">
                    <label className="control-label">Endereço</label>
                    <div className="address-container">
                        <span>
                            <a>Rua</a>
                            <input className="form-control" id="icon" placeholder="Rua" type="text" />
                        </span>
                        <span>
                            <a>Número</a>
                            <input className="form-control" id="icon" placeholder="Numero" type="text" />
                        </span>
                        <span>
                            <a>CEP</a>
                            <input className="form-control" id="icon" placeholder="CEP" type="text" />
                        </span>
                    </div>
                    <div className="region-container">
                        <span>
                            <a>Cidade</a>
                            <input className="form-control" id="icon" placeholder="Cidade" type="text" />
                        </span>
                        <span>
                            <a>Pais</a>
                            <input className="form-control" id="icon" placeholder="Pais" type="text" />
                        </span>
                    </div>

                </div>
            </div>
            <div className="next-container">
                <span id="back" className="back" ng-click="backStep()">
                    <i className="material-icons back-icon">arrow_back</i>
                    Voltar
                </span>
                <span id="next" className="next" ng-click="backStep()">
                    <a >Seguinte</a>
                    <i className="material-icons next-icon">arrow_forward</i>
                </span>
            </div>

        </div>
    )
}

const Form_4 = ({ ...props }) => {
    const { state, callBack } = props;
    return (
        <div>
            <div className="input-icon">
                <span className="icon"><AiFillGithub color='#ffffff' size='1.5em' /></span>
                <div className="form-group">
                    <label className="control-label" for="candidate_name_1">GitHub</label>
                    <input className="form-control" id="icon" placeholder="Digite seu GitHub Url" type="text" />
                </div>
            </div>
            <div className="input-icon">
                <span className="icon"><RiCellphoneFill color='#ffffff' size='1.5em' /></span>
                <div className="form-group">
                    <label className="control-label">Celular</label>
                    <input className="form-control" id="icon" placeholder="Digite seu celular" type="text" />
                </div>
            </div>
            <div className="input-icon">
                <span className="icon"><FaIndustry color='#ffffff' size='1.5em' /></span>
                <div className="form-group">
                    <label className="control-label">Empresa</label>
                    <input className="form-control" id="icon" placeholder="Digite o nome da empresa" type="text" />
                </div>
            </div>
            <div className="input-icon">
                <div className="form-group">
                    <label className="control-label">Acerca</label>
                    <input className="form-control about" id="icon" placeholder="Nos conte de você" type="text" />
                </div>
            </div>
            <input type="submit" name="commit" value="CRIAR MEU PERFIL AGORA" className="mybutton"/>
            <div className="next-container">
                <span id="back" className="back" ng-click="backStep()">
                    <i className="material-icons back-icon">arrow_back</i>
                    Voltar
                </span>
            </div>

        </div>
    )
}



/* TO DO THE REST OF FORMS */

export { Form_1, Form_2, Form_3, Form_4 };