
import './style.css'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HeaderCadastro from '../HeaderCadastro'
import logo from '../../../assets/img/logo_white.png'

const BannerBemVindo = () => {

    return (
        <>
            <HeaderCadastro className='Header' myLogo={logo} />
            <section className='This__main-section'>
                <Container className="Container">
                    <Row>
                        <Col lg={{ span: 12 }} className='This__Container__text'>
                            <h1>
                                Bem-vindo!
                        </h1>
                            <p>
                                Você é empresa ou estudante?
                        </p>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: '16px' }} className='Row__botoes'>
                        <Col lg={{ span: 2, offset: 4 }} style={{ textAlign: 'center', left: '-36px' }}>
                            <Link to="/estudantes/sign_in">
                                <button className="button">Sou estudante</button>
                            </Link>
                        </Col>
                        <Col lg={{ span: 2 }} style={{ textAlign: 'center', paddingLeft: '12px' }}>
                            <Link to="/empresa/sign_in">
                                <button className="button">Sou empresa</button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )

}

export default BannerBemVindo