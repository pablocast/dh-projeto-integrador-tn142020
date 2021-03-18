import './style.css'
import ImageBanner from '../../../assets/img/banner.png'

const Component1 = () => {

    return (
        <section>

      <div class="container-description">
        <div class="container-description-text">
          <p class="titulo-banner">Evolua rápido em busca dos seus objetivos</p>
          <div class="button-container">
            <button class="button expert">Torne-se um Expert</button>
            <div class="container-description-secundary-text">

              <p >Guiamos seus estudos no rumo de uma grande oportunidade</p>
            </div>
          </div>
        </div>

        <div class="container-description-img">
          <img src={ImageBanner}/>
        </div>
      </div>
    </section>
    )

}

export default Component1
