import './style.css'
import skillsImage from '../../../assets/img/skills.png'


const Component2 = () => {

    return (
        <section className="skill-container">
            <div className="skill-container-img">
                <img src={skillsImage} alt="Quer desenvolver suas skills" />
            </div>
            <div className="skill-container-text">
                <div>
                    <p className="titulo">Quer desenvolver skills mais requisitadas do mercado ?</p>
                    <ul>
                        <li>
                            <i className="material-icons font-blue">check_circle_outline</i>Desenvolvedor Full-Stack - MERN
                    </li>
                        <li>
                            <i className="material-icons font-blue">check_circle_outline</i>Desenvolvedor Front-End-ReactJS
                    </li>
                        <li>
                            <i className="material-icons font-blue">check_circle_outline</i>Desenvolvedor Back-End - NodeJS
                    </li>
                        <li>
                            <i className="material-icons font-blue">check_circle_outline</i>Desenvolvedor Mobile- React-Native
                    </li>
                        <li>
                            <i className="material-icons font-blue">check_circle_outline</i>Desenvolvedor Mobile-Flutter
                </li>
                    </ul>
                    <button className="button">Cadastra-se</button>
                </div>
            </div>
        </section>
    )
}
export default Component2
