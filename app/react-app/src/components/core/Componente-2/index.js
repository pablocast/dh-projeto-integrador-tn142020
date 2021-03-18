import './style.css'
import imageSkill from '../../../assets/img/skills.png'


const Component2 = () => {

    return (
        <section class="skill-container">
    <div class="skill-container-img">
      <img src={imageSkill} alt="Quer desenvolver suas skills"/>
    </div>
    <div class="skill-container-text">
      <div>
        <p class="titulo">Quer desenvolver skills mais requisitadas do mercado ?</p>
        <ul>
          <li>
            <i class="material-icons font-blue">check_circle_outline</i> Desenvolvedor Full-Stack - MERN
          </li>
          <li>
            <i class="material-icons font-blue">check_circle_outline</i>
            Desenvolvedor Front-End-ReactJS
          </li>
          <li>
            <i class="material-icons font-blue">check_circle_outline</i>
            Desenvolvedor Back-End - NodeJS
          </li>
          <li>
            <i class="material-icons font-blue">check_circle_outline</i>
            Desenvolvedor Mobile- React-Native
          </li>
          <li>
          <i class="material-icons font-blue">check_circle_outline</i>
          Desenvolvedor Mobile-Flutter
          </li>
        </ul>
        <button class="button">Cadastra-se</button>
      </div>
    </div>

  </section>
    )
}
export default Component2
