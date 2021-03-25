import './style.css'
import { Row, Col, Container } from 'react-bootstrap'
import instagram from '../../../assets/img/instagram-white.png'
import facebook from '../../../assets/img/facebook-white.png'
import google from '../../../assets/img/google-white.png'
import amazon from '../../../assets/img/amazon-white.png'
import uber from '../../../assets/img/uber-white.png'

const BannerTestimonioEstudante = () => {

    return (
        <section >
            <Container className="testimonials">
                <Row>
                    <Col lg={{ span: 12 }}>
                        <p className="companies-text">Onde as melhores empresas contrataram desenvolvedores</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 12 }} className='companies-logo'>
                        <div className='logo-wrapper'>
                            <img src={instagram}/>
                        </div>
                        <div className='logo-wrapper'>
                            <img src={facebook}/>
                        </div>
                        <div className='logo-wrapper'>
                            <img src={google}/>
                        </div>
                        <div className='logo-wrapper'>
                            <img src={amazon}/>
                        </div>
                        <div className='logo-wrapper'>
                            <img src={uber}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 12 }}>



                    </Col>
                </Row>
                <Row>
                    <p>This is testimonials</p>
                </Row>

            </Container>
        </section>
    )

}

export default BannerTestimonioEstudante