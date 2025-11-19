export default function ListaAlunos({ alunos }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Notas</th>
          <th>Frequência</th>
        </tr>
      </thead>
      <tbody>
        {alunos.map((a, i) => (
          <tr key={i}>
            <td>{a.nome}</td>
            <td>{a.notas.join(", ")}</td>
            <td>{a.frequencia}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
