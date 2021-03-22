import './style.css'
import ImageEmpresa from '../../../assets/img/empresa.png'

const ContainerApoiadores = () => {
    return (
        <section id="apoiadores" className="apoiadores">
            <div className="container-text">
                <h2>Nossos apoiadores</h2>
                <p className="paragrafo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam eos reprehenderit placeat minus,
                    velit voluptatum! Sunt, quia magni, maxime odio perspiciatis incidunt assumenda numquam facere
                    repellat possimus, saepe perferendis omnis culpa vero recusandae nihil temporibus animi minus
                    doloribus distinctio! Voluptatum consequatur commodi vel repellendus excepturi eaque qui atque
                    beatae explicabo!</p>
            </div>
            <img src={ImageEmpresa} alt="empresas parceiras"/>
        </section>
    )
}

export default ContainerApoiadores