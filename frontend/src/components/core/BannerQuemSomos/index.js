import './style.css'
import Image from '../../../assets/img/banner.png'

const Component1 = () => {

    return (
        <div className="comp-1">
            <div className="container">
                <div className="direita">
                    <p className="titulo-banner">Evolua rápido em busca dos seus objetivos</p>
                    <div className="comp1-button">
                        <button className="button">Torne-se um Expert</button>
                        <p className="titulo_menor">Guiamos seus estudos no rumo de uma grande oportunidade</p>
                    </div>
                </div>
                <div className="esquerda">
                    <img src={Image} alt="" />
                </div>
            </div>
        </div>
    )

}

export default Component1
