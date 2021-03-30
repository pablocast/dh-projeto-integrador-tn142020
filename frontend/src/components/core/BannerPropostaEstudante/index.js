import './style.css'
import { Row, Col, Container } from 'react-bootstrap'
import { GiSkills } from 'react-icons/gi'
import { AiOutlineClockCircle, AiFillStar, AiOutlineArrowRight } from 'react-icons/ai'
import img from '../../../assets/img/banner.png'
import Carousel from 'react-elastic-carousel'
import olx from '../../../assets/img/olx.png'
import magazineluiza from '../../../assets/img/magazineluiza.png'
import mercadolivre from '../../../assets/img/mercadolivre.jpg'
import b2w from '../../../assets/img/b2w.png'
import microsoft from '../../../assets/img/microsoft.png'
import spotify from '../../../assets/img/spotify.png'
import uber from '../../../assets/img/uber.png'

const empresas = [olx, magazineluiza, mercadolivre, b2w, microsoft, uber, spotify]

const Item = ({ ...props }) => {
    const { avatar } = props
    const style = {
        minWidth: '80px',
        maxWidth: '80px',
        minHeight: '80px',
        maxHeight: '80px',
        borderRadius: '50%',
        overflow: 'hidden',
        marginLeft: '15px'
    }
    return (
        <img src={avatar} style={style} />
    )
}

const MakeCarousel = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 3 }
    ]

    return (
        <Carousel
            breakPoints={breakPoints}
            pagination={false}
            className='CarouselCompanies'
        >
            {empresas.map((img, index) => {
                return <Item
                    avatar={img}
                />
            })}
        </Carousel>
    )
}


const BannerPropostaEstudante = () => {

    return (
        <section className='proposta'>
            <Container style={{marginLeft:96.58}}>
                <Row>
                    <Col lg={{ span: 1 }} >
                    </Col>
                    <Col lg={{ span: 6 }} >
                        <h1>Dev, prepare-se para o <br /> emprego dos seus sonhos!</h1>
                        <ul>
                            <li><GiSkills color='#FFCF26' /> Aprenda as skills mais requisitadas do mercado</li>
                            <li><AiOutlineClockCircle color='#FFCF26' />    90% dos candidatos(as) recebem convites para entrevistas</li>
                            <li><AiFillStar color='#FFCF26' />  Sinalize seu valor para as empresas parceiras</li>
                        </ul>
                        <Row className='proposta__registrar'>
                            <Col style={{ display: 'flex', flexDirection: 'column' }}>
                                <label>E-mail</label>
                                <input placeholder="Digite o seu email" type="email" />
                            </Col>
                            <Col>
                                <button className='button'>
                                    CRIAR MEU PERFIL AGORA
                                    <AiOutlineArrowRight color='white' style={{ marginLeft: '5px', height: '20px', width: '20px' }} />
                                </button>
                            </Col>
                        </Row>
                        <small style={{ color: 'white' }}>Ao se cadastrar você aceita os nossos<a href="/termos-de-uso"> Termos de uso</a>
                        </small>
                        <Row >
                            <p className="Carousel__title">Onde as melhores empresas contrataram desenvolvedores</p>
                            <MakeCarousel />
                        </Row>
                    </Col>
                    <Col lg={{ span: 5 }} >
                        <img src={img} className='ImgHomen' />
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default BannerPropostaEstudante