import './style.css'
import { Container, Row, Col } from 'react-bootstrap'
import FormRegistroEmpresa from '../../components/core/FormRegistroEmpresa'
import olx from '../../assets/img/olx.png'
import magazineluiza from '../../assets/img/magazineluiza.png'
import mercadolivre from '../../assets/img/mercadolivre.jpg'

const Empresas = () => {
    return (
        <div className='registrarions'>
            <section className='companies-registration'>
                <Container className='container'>
                    <Row className='row'>
                        <Col lg={{ span: 1 }} className='col-1'>
                        </Col>
                        <Col lg={{ span: 5 }} className='col-5'>
                            <h1>Contratar programador <br /> é  <strong>mais eficaz </strong>com <br />a BrainExpert 🚀</h1>
                            <p>Se você quiser contratar programadores com conhecimento <br /> técnico, comportamental e pré-validados <br /> sem perder tempo está no lugar certo!</p>
                            <ul>
                                <li><img src="https://d4zjpv0aa4kr2.cloudfront.net/assets/icons/Time-b1f00bf2be315b9d1507915da919ce930fff259eaf3cfe596dcb8efe28115fe3.svg" alt="Time" /> Leve em média <strong>7 dias para contratar</strong></li>
                                <li><img src="https://d4zjpv0aa4kr2.cloudfront.net/assets/icons/Star-b4dae46f60b0d3d62d7998914d30e5934bfb3d2de8315d0e235fc0faa1d3e4fa.svg" alt="Star" /> Acesse candidatos <strong>pré-validados e engajados</strong></li>
                                <li><img src="https://d4zjpv0aa4kr2.cloudfront.net/assets/icons/Plane-f16900589f5bbc70516ada3221a41e486d45d0a7560d5180a2e76354eef41ed6.svg" alt="Plane" /> Receba <strong>recomendações</strong> para as suas vagas</li>
                            </ul>
                            <p className="text-small"><strong>Onde as melhores empresas contrataram desenvolvedores</strong></p>
                            <Row className="companies-logo">
                                <Col className="img-wrapper" lg={{ span: 2, offset:3 }}> <img src={olx} /></Col>
                                <Col className="img-wrapper" lg={{ span: 2 }}> <img src={magazineluiza} /></Col>
                            <Col className="img-wrapper" lg={{ span: 2 }}> <img src={mercadolivre} /></Col>
                    </Row>
                        </Col>
                <Col lg={{ span: 5 }} className='col-5'>
                    <FormRegistroEmpresa />
                </Col>
                <Col lg={{ span: 1 }} className='col-1'>
                </Col>
                    </Row>
                </Container>

            </section >


        </div >
    )
}

export default Empresas