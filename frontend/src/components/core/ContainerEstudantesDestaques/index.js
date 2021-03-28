import './style.css'






const EstudantesDestaques = () => {
  return (
    <main>
      <section className="estudant-section">
      <div class="table">
            <h5>Alunos</h5>
            <p>Lorem Ispsum</p>
            <table id="filmesTable">
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Aluno</th>
                        <th>Skils</th>
                        <th>Potfolio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>01</td>
                      <td><div><img src="" alt="Fulano"/>
                      <h4>Fulano</h4>
                      </div></td>
                      <td> Node React css</td>
                      <td>Fulano</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>
    </main>
  )

}

export default EstudantesDestaques