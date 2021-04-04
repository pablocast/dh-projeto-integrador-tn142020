import "./style.css";

const Estudante = (props) => {
  const { number, img, nome, skill } = props;
  return (
    <tr>
      <td>{number}</td>
      <td>
        <div>
          <img src={img} alt={nome} />
          <h4>{nome}</h4>
        </div>
      </td>
      <td> {skill}</td>
      <td>{nome}</td>
    </tr>
  );
};

const estudantes = [
  {
    nome: "Fulano",
    number: "01",
    img:
      "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
    skill: "Node React css",
  },
  {
    nome: "Fulano",
    number: "02",
    img:
      "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
    skill: "Node React css",
  },
  {
    nome: "Fulano",
    number: "03",
    img:
      "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
    skill: "Node React css",
  },
  {
    nome: "Fulano",
    number: "04",
    img:
      "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
    skill: "Node React css",
  },
];

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
              {estudantes.map((estudante, idx) => {
                return (
                  <Estudante
                    number={estudante.number}
                    img={estudante.img}
                    nome={estudante.nome}
                    skill={estudante.skill}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default EstudantesDestaques;
