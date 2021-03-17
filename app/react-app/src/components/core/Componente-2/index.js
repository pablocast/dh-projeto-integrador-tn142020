import './style.css'
import Image from '../../../assets/banner.png'

const Component2 = () => {

    return (
        <main className="comp-2">
            <div className="container">
                <div className="direita">
                    <p className="titulo-banner">Evolua rápido em busca dos seus objetivos</p>
                    <div className="comp2-button">
                        <button className="button">Torne-se um Expert</button>
                        <p className="titulo_menor">Guiamos seus estudos no rumo de uma grande oportunidade</p>
                    </div>
                </div>
                <div className="esquerda">
                    <img src={Image} alt=""/>
                </div>
            </div> 
        </main>
    )

}

export default Component2
