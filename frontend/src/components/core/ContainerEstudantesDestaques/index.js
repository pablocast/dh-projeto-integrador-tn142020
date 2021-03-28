import './style.css'






const EstudantesDestaques = () => {
  return (
    <main>
      <section className="estudant-section">
        <div className="senioridade">
          <div>
            <h2>Senior</h2>
          </div>
          <div>
            <h2>Pleno</h2>
          </div>
          <div>
            <h2>Junior</h2>
          </div>
          <div>
            <h2>Estagiário</h2>
          </div>
        </div>
        <div className="status-section">
            <div className="ranck">Rank</div>
            <div className="tier">Senioridade</div>
            <div className="avatar">
            <div className="aluno">Aluno(a)</div>
            </div>
            <div className="nome"></div>
            <div className="container-skils">
            <div className="skils">Skils</div>
            </div>
            <div className="portfolio">Portfolio</div>
        </div>
        <div className="aluno-sec">
        <div className="ranck">1</div>

            <div className="tier">Pleno</div>
            <div className="avatar">
            <div className="aluno">Fulaninho</div>
            </div>
            <div className="nome"></div>
            <div className="container-skils">
            <div className="skils"></div>
            </div>
            <div className="portfolio">@fulanhinho</div>

        </div>
      </section>
    </main>
  )

}

export default EstudantesDestaques