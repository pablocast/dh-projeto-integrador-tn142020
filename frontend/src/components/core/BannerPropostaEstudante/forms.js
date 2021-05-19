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
    const { callBack, nextForm, lastForm } = props;
    return (
        <div>
            <Row className="proposta__registrar">
                <Col style={{ display: "flex", flexDirection: "column" }}>
                    <span className="icon"><AiOutlineMail color='#ffffff' size='1.25em' /></span>
                    <label>E-mail</label>
                    <input className="form-control string email required" placeholder="Digite o seu email" onChange={callBack('email')} />
                </Col>
                <Col>
                    <button className="button" onClick={nextForm()}>
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
    const { callBack, nextForm, lastForm } = props;
    return (
        <div>
            <div className="input-icon">
                <span className="icon"><BsPerson color='#ffffff' size='1.5em' /></span>
                <div className="form-group">
                    <label className="control-label" for="candidate_name_1">Nome completo (mín. 5 caracteres)</label>
                    <input className="form-control" id="icon" placeholder="Digite seu nome completo" type="text" onChange={callBack('name')} />
                </div>
            </div>
            <div className="input-icon">
                <span className="icon"><BiUserCheck color='#ffffff' size='1.5em' /></span>
                <div className="form-group">
                    <label className="control-label">Usuario (mín. 8 caracteres)</label>
                    <input className="form-control" id="icon" placeholder="Digite seu usuario" type="text" onChange={callBack('username')} />
                </div>
            </div>
            <div className="input-icon">
                <span className="icon"><BsLock color='#ffffff' size='1.5em' /></span>
                <div className="form-group">
                    <label className="control-label" for="candidate_name_1">Senha (mín. 8 caracteres)</label>
                    <input className="form-control" id="icon" placeholder="Digite sua senha" type="password" onChange={callBack('password')} />
                </div>
            </div>
            <div className="input-icon">
                <span className="icon"><BsLock color='#ffffff' size='1.5em' /></span>
                <div className="form-group">
                    <label className="control-label">Confirmar senha</label>
                    <input className="form-control" id="icon" placeholder="Digite novamente a senha" type="password" />
                </div>
            </div>
            <div className="next-container">
                <span id="back" className="back" onClick={lastForm()}>
                    <i className="material-icons back-icon">arrow_back</i>
                    <a>Voltar</a>
                </span>
                <span id="next" className="next" onClick={nextForm()}>
                    <a>Seguinte</a>
                    <i className="material-icons next-icon">arrow_forward</i>
                </span>
            </div>

        </div>
    )
}

const Form_3 = ({ ...props }) => {
    const {  callBack, nextForm, lastForm } = props;
    return (
        <div>
            <div className="input-icon">
                <div className="form-group">
                    <label className="control-label">Endereço</label>
                    <div className="address-container">
                        <span>
                            <a>Rua</a>
                            <input className="form-control" id="icon" placeholder="Rua" type="text" onChange={callBack('address_street')} />
                        </span>
                        <span>
                            <a>Número</a>
                            <input className="form-control" id="icon" placeholder="Numero" type="text" onChange={callBack('address_number')} />
                        </span>
                        <span>
                            <a>CEP</a>
                            <input className="form-control" id="icon" placeholder="CEP" type="text" onChange={callBack('address_zip')}/>
                        </span>
                    </div>
                    <div className="region-container">
                        <span>
                            <a>Cidade</a>
                            <input className="form-control" id="icon" placeholder="Cidade" type="text" onChange={callBack('address_city')} />
                        </span>
                        <span>
                            <a>Pais</a>
                            <input className="form-control" id="icon" placeholder="Pais" type="text" onChange={callBack('address_country')} />
                        </span>
                    </div>
                    <div className="input-icon" style={{paddingTop:'15px'}}>
                        <span className="icon"><RiCellphoneFill color='#ffffff' size='1.5em' /></span>
                        <div className="form-group">
                            <label className="control-label">Celular</label>
                            <input className="form-control" id="icon" placeholder="Digite seu celular" type="text" onChange={callBack('phone')} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="next-container">
                <span id="back" className="back" onClick={lastForm()}>
                    <i className="material-icons back-icon">arrow_back</i>
                    <a>Voltar</a>
                </span>
                <span id="next" className="next" onClick={nextForm()}>
                    <a>Seguinte</a>
                    <i className="material-icons next-icon">arrow_forward</i>
                </span>
            </div>

        </div>
    )
}

const Form_4 = ({ ...props }) => {
    const { callBack, nextForm, lastForm, submit } = props;
    return (
        <div>
            <div className="input-icon">
                <span className="icon"><AiFillGithub color='#ffffff' size='1.5em' /></span>
                <div className="form-group">
                    <label className="control-label" for="candidate_name_1">GitHub</label>
                    <input className="form-control" id="icon" placeholder="Digite seu GitHub Url" type="text" onChange={callBack('website')}/>
                </div>
            </div>
            <div className="input-icon">
                <span className="icon"><FaIndustry color='#ffffff' size='1.5em' /></span>
                <div className="form-group">
                    <label className="control-label">Empresa</label>
                    <input className="form-control" id="icon" placeholder="Digite o nome da empresa" type="text" onChange={callBack('company')} />
                </div>
            </div>
            <div className="input-icon">
                <div className="form-group">
                    <label className="control-label">Acerca</label>
                    <input className="form-control about" id="icon" placeholder="Nos conte de você" type="text" onChange={callBack('about')} />
                </div>
            </div>
            <input type="submit" name="commit" value="CRIAR MEU PERFIL AGORA" className="mybutton" onClick={submit}/>
            <div className="next-container">
                <span id="back" className="back" onClick={lastForm()}>
                    <i className="material-icons back-icon">arrow_back</i>
                    <a>Voltar</a>
                </span>
            </div>

        </div>
    )
}


export { Form_1, Form_2, Form_3, Form_4 };