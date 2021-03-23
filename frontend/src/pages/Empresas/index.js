import './style.css'
import { Container, Row, Col } from 'react-bootstrap'
import FormRegistroEmpresa from '../../components/core/FormRegistroEmpresa'
import BannerDepoimentoEmpresas from '../../components/core/BannerDepoimentoEmpresas'
import HeaderCadastro from '../../components/core/HeaderCadastro'
import olx from '../../assets/img/olx.png'
import magazineluiza from '../../assets/img/magazineluiza.png'
import mercadolivre from '../../assets/img/mercadolivre.jpg'
import img1 from '../../assets/img/person-3.png'
import img2 from '../../assets/img/empresa.png'
import img3 from '../../assets/img/skills.png'
import { BsBell, BsStar, BsChatSquareDots } from 'react-icons/bs'
import { AiOutlineArrowRight, AiOutlineAreaChart } from 'react-icons/ai'
import ItemEmpresa from '../../components/core/BannerDepoimentos/ItemEmpresa'
import Footer from '../../components/core/Footer'

const depoimentos = [
    { nome: "Augusto Antunes", cargo: "CTO Magazine Luiza", testimonio: "A plataforma tem uma proposta muito nobre de empresa: democratizar o ensino de tecnologia pra todo mundo e com isso ajudar muitos jovens a realizar seus sonhos, aquecer o mercado de TI.", avatar: 'person-1.jpg', empresalogo: 'magazineluiza.png' },
    { nome: "Elder Novaes", cargo: "CTO Mercado Livre", testimonio: "A plataforma me ajudou bastante em um dos meus objetivos: uma primeira oportunidade na área.Consegui uma oportunidade como Desenvolvedor Mobile Jr em uma grande empresa!", avatar: 'person-2.jpg', empresalogo: 'mercadolivre.png' },
    { nome: "Mayara Nunes", cargo: "CTO Olx", testimonio: "A plataforma oferece muitas oportunidades através dos cursos criados por excelentes profissionais de algumas das maiores empresas do mercado. Hoje participo de um grande projeto, que tenho certeza que dará ótimos resultados", avatar: 'person-3.png', empresalogo: 'olx.png' },
    { nome: "José Cruz", cargo: "CEO Olx", testimonio: "A plataforma é incrível. Além das metodologias do curso serem de alcançarem quem está começando e tambem quem já possui um conhecimento na àrea, no forúm de dúvidas, sempre tem muitas pessoas dispostas a ajudar.", avatar: 'person-4.jpg', empresalogo: 'olx.png' },
    { nome: "Sergio Alves", cargo: "CSO Olx", testimonio: "Os professores, por serem profissionais da área, explicam de forma muito didática. Vêm sempre com técnicas muito práticas que podemos aplicar no dia a dia. E também com uma mecânica muito legal de acompanhamento dos exercícios feitos pelos alunos", avatar: 'person-1.jpg', empresalogo: 'olx.png' }
]

const Empresas = () => {
    /*TO DO: Change Style Depoimento Empresa */
    const value = depoimentos[0]

    return (
        <>
            <HeaderCadastro />
            <div className='registrations'>
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
                                    <Col className="img-wrapper" lg={{ span: 2, offset: 3 }}> <img src={olx} /></Col>
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
                </section>
                <section className='companies-descricao'>
                    <Container className='container' >
                        <Row>
                            <Col lg={{ span: 5 }} className='col-5'>
                                <div className="img-cascade">
                                    <div className="img img-first">
                                        <img src={img1} alt="Man 01" />
                                    </div>
                                    <div className="img img-scnd">
                                        <img src={img2} alt="Woman 01" />
                                    </div>
                                    <div className="img img-trd">
                                        <img src={img3} alt="Woman 02" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={{ span: 7 }} className='col-5-texto'>
                                <h1>Somos especialistas em educar programadores</h1>
                                <p className="subtitle">Falamos a mesma língua dos devs e vamos te ajudar</p>
                                <p>Por meio de nossa plataforma, atraímos, treinamos, pré-validamos e selecionamos os desenvolvedores mais engajados, e com maior connhecimento técnico.</p>
                                <ul>
                                    <li><BsBell color='#0052FB' /> Candidatos muito mais engajados</li>
                                    <li><BsStar color='#0052FB' /> Os melhores candidatos pré-validados</li>
                                </ul>
                                <a href="/criar-perfil-estudante">Como é para os candidatos? <AiOutlineArrowRight /> </a>
                            </Col>
                            <Col lg={{ span: 2 }} className='col-2'>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className='companies-depoimento'>
                    <Container className='container-depoimento'>
                        <Row>
                            <Col lg={{ span: 1 }} >
                            </Col>
                            <Col lg={{ span: 5 }}>
                                <h1>Receba recomendações de acordo com as suas <br /> vagas 🏆</h1>
                                <p>Conte com a plataforma para fazer buscas, e para ajudá-lo(a) a fechar a sua vaga de desenvolvedor!</p>
                                <ul>
                                    <li><BsStar color='#0052FB' /> Conte com o suporte do nosso time de Customer Success</li>
                                    <li><BsChatSquareDots color='#0052FB' /> Receba recomendações automáticas da plataforma</li>
                                    <li><AiOutlineAreaChart color='#0052FB' /> Encontre profissionais com match para as suas vagas</li>
                                </ul>
                            </Col>
                            <Col lg={{ span: 5 }} >
                                <ItemEmpresa
                                    cargo={value.cargo}
                                    testimonio={value.testimonio}
                                    nome={value.nome}
                                    avatar={value.avatar}
                                    empresa_logo={value.empresalogo}
                                />
                            </Col>
                            <Col lg={{ span: 1 }} >
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={{ span: 4, offset: 4 }} style={{ paddingTop: '30px' }}>
                                <button className='button' onClick={() => window.scrollTo(0, 0)}>
                                    Quero contratar programadores
                                        <img src="https://d4zjpv0aa4kr2.cloudfront.net/assets/icons/arrow_w-1e6a15b4c1ae7762567d102827fda5b754a84a2f5eced763f359cb92f6524676.svg" alt="Arrow w" />
                                </button>
                            </Col>
                        </Row>
                        <Row style={{ paddingTop: '48px' }}>
                            <Col lg={{ span: 1 }} >
                            </Col>
                            <Col lg={{ span: 10 }}>
                                <Row>
                                    <Col lg={{ span: 3 }} style={{ paddingTop: '16px' }} >
                                        <h3>Nossa plataforma em números 👉</h3>
                                    </Col>
                                    <Col lg={{ span: 3 }} >
                                        <h1 style={{ color: '#0052FB', fontSize: '60px' }}>80<strong style={{ fontSize: '32px' }}>%</strong></h1>
                                        <p className="subtitle" style={{ color: '#040C10B', fontWeight: '500', fontSize: '16px' }}>dos candidatos com conhecimentos certificados</p>
                                        <p style={{ color: '#040C10B', fontWeight: '200', fontSize: '16px' }}>Conhecimentos nas tecnologías mais relevantes do mercado</p>
                                    </Col>
                                    <Col lg={{ span: 3 }} >
                                        <h1 style={{ color: '#0052FB', fontSize: '60px' }}>97<strong style={{ fontSize: '32px' }}>%</strong></h1>
                                        <p className="subtitle" style={{ color: '#040C10', fontWeight: '500', fontSize: '16px' }}>dos candidatos participando ativamente nas comunidades</p>
                                        <p style={{ color: '#040C10B', fontWeight: '200', fontSize: '16px' }}>Interações relevantes pra construção do equipes </p>
                                    </Col>
                                    <Col lg={{ span: 3 }} >
                                        <h1 style={{ color: '#0052FB', fontSize: '60px' }}>10<strong style={{ fontSize: '32px' }}> dias</strong></h1>
                                        <p className="subtitle" style={{ color: '#040C10', fontWeight: '500', fontSize: '16px' }}>para contratação desde a primeira abordagem</p>
                                        <p style={{ color: '#040C10B', fontWeight: '200', fontSize: '16px' }}>Leve em média 10 dias entre a abordagem do desenvolvedor e o aceite da proposta</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={{ span: 1 }} >
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Empresas