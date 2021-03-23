import './style.css'
import Carousel from 'react-elastic-carousel'
import { Container } from "react-bootstrap"
import Item from './Item'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]

const depoimentos = [
    { nome: "Augusto Antunes", cargo: "Desenvolvedor Full-Stack", testimonio: "A plataforma tem uma proposta muito nobre de empresa: democratizar o ensino de tecnologia pra todo mundo e com isso ajudar muitos jovens a realizar seus sonhos, aquecer o mercado de TI.", avatar: 'person-1.jpg' },
    { nome: "Elder Novaes", cargo: "Desenvolvedor Mobile - flutter", testimonio: "A plataforma me ajudou bastante em um dos meus objetivos: uma primeira oportunidade na área.Consegui uma oportunidade como Desenvolvedor Mobile Jr em uma grande empresa!", avatar: 'person-2.jpg' },
    { nome: "Mayara Nunes", cargo: "Desenvolvedora Front-End", testimonio: "A plataforma oferece muitas oportunidades através dos cursos criados por excelentes profissionais de algumas das maiores empresas do mercado. Hoje participo de um grande projeto, que tenho certeza que dará ótimos resultados", avatar: 'person-3.png' },
    { nome: "José Cruz", cargo: "Desenvolvedor Back-end", testimonio: "A plataforma é incrível. Além das metodologias do curso serem de alcançarem quem está começando e tambem quem já possui um conhecimento na àrea, no forúm de dúvidas, sempre tem muitas pessoas dispostas a ajudar.", avatar: 'person-4.jpg' },
    { nome: "Sergio Alves", cargo: "Desenvolvedor Front-End", testimonio: "Os professores, por serem profissionais da área, explicam de forma muito didática. Vêm sempre com técnicas muito práticas que podemos aplicar no dia a dia. E também com uma mecânica muito legal de acompanhamento dos exercícios feitos pelos alunos", avatar: 'person-1.jpg' }
]


const Component3 = () => {
    return (
        <Container className='Componente-3'>
            <h2 className="h2-responsive font-weight-bold my-5">
                Veja o depoimento de alguns dos nossos alunos
        </h2>
            <Carousel breakPoints={breakPoints} pagination={false} className='Carousel-holder'>
                {depoimentos.map((value, index) => {
                    return <Item
                        cargo={value.cargo}
                        testimonio={value.testimonio}
                        nome={value.nome}
                        avatar={value.avatar}
                    />
                })}
            </Carousel>
        </Container>
    );
}

export default Component3
