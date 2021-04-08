import React from 'react'
import "./style.css";
import { Row, Col, Container, Card } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import instagram from "../../../assets/img/instagram-white.png";
import facebook from "../../../assets/img/facebook-white.png";
import google from "../../../assets/img/google-white.png";
import amazon from "../../../assets/img/amazon-white.png";
import uber from "../../../assets/img/uber-white.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const depoimentos = [
  {
    nome: "Augusto Antunes",
    cargo: "Desenvolvedor Full-Stack",
    testimonio:
      "A plataforma tem uma proposta muito nobre de empresa: democratizar o ensino de tecnologia pra todo mundo e com isso ajudar muitos jovens a realizar seus sonhos, aquecer o mercado de TI.",
    avatar: "person-1.jpg",
  },
  {
    nome: "Elder Novaes",
    cargo: "Desenvolvedor Mobile - flutter",
    testimonio:
      "A plataforma me ajudou bastante em um dos meus objetivos: uma primeira oportunidade na área.Consegui uma oportunidade como Desenvolvedor Mobile Jr em uma grande empresa!",
    avatar: "person-2.jpg",
  },
  {
    nome: "Mayara Nunes",
    cargo: "Desenvolvedora Front-End",
    testimonio:
      "A plataforma oferece muitas oportunidades através dos cursos criados por excelentes profissionais de algumas das maiores empresas do mercado. Hoje participo de um grande projeto, que tenho certeza que dará ótimos resultados",
    avatar: "person-3.png",
  },
  {
    nome: "José Cruz",
    cargo: "Desenvolvedor Back-end",
    testimonio:
      "A plataforma é incrível. Além das metodologias do curso serem de alcançarem quem está começando e tambem quem já possui um conhecimento na àrea, no forúm de dúvidas, sempre tem muitas pessoas dispostas a ajudar.",
    avatar: "person-4.jpg",
  },
  {
    nome: "Sergio Alves",
    cargo: "Desenvolvedor Front-End",
    testimonio:
      "Os professores, por serem profissionais da área, explicam de forma muito didática. Vêm sempre com técnicas muito práticas que podemos aplicar no dia a dia. E também com uma mecânica muito legal de acompanhamento dos exercícios feitos pelos alunos",
    avatar: "person-1.jpg",
  },
];

const ItemEmpresa = (props) => {
  const { cargo, testimonio, nome, avatar } = props;

  const style = {
    "Testimonial-Empresa__top__testimonio": { fontSize: "12px" },
  };

  return (
    <Col className="Cards-Empresa">
      <Card testimonial className="Testimonial-Empresa">
        <Row className="Testimonial-Empresa__bottom">
          <Col lg={{ span: 1 }} className="Testimonial-Empresa__bottom__avatar">
            <img
              src={require("../../../assets/img/" + `${avatar}`).default}
              alt=""
              className="rounded-circle img-fluid"
            />
          </Col>
          <Col lg={{ span: 8 }} className="Testimonial-Empresa__bottom__title">
            <h5>{nome}</h5>
            <h1>{cargo}</h1>
          </Col>
        </Row>
        <Row className="Testimonial-Empresa__top">
          <p
            className="Testimonial-Empresa__top__testimonio"
            style={style["Testimonial-Empresa__top__testimonio"]}
          >
            {testimonio}
          </p>
        </Row>
      </Card>
    </Col>
  );
};

const MakeCarousel = () => {
  return (
    <Carousel
      breakPoints={breakPoints}
      pagination={false}
      className="CarouselCompanies"
    >
      {depoimentos.map((value, index) => {
        return (
          <ItemEmpresa
            cargo={value.cargo}
            testimonio={value.testimonio}
            nome={value.nome}
            avatar={value.avatar}
            empresa_logo={value.empresalogo}
          />
        );
      })}
    </Carousel>
  );
};

const BannerTestimonioEstudante = () => {
  return (
    <section>
      <Container className="testimonials">
        <Row>
          <Col lg={{ span: 12 }}>
            <p className="companies-text">
              Onde as melhores empresas contrataram desenvolvedores
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 12 }} className="companies-logo">
            <div className="logo-wrapper">
              <img src={instagram} />
            </div>
            <div className="logo-wrapper">
              <img src={facebook} />
            </div>
            <div className="logo-wrapper">
              <img src={google} />
            </div>
            <div className="logo-wrapper">
              <img src={amazon} />
            </div>
            <div className="logo-wrapper">
              <img src={uber} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 12 }}>
            <MakeCarousel />
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </section>
  );
};

export default BannerTestimonioEstudante;
