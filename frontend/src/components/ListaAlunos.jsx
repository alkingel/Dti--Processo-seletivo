export default function ListaAlunos({ alunos, onDelete }) {
  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Notas</th>
          <th>Frequência</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {alunos.map((a, i) => (
          <tr key={i}>
            <td>{a.nome}</td>
            <td>{a.notas.join(", ")}</td>
            <td>{a.frequencia}%</td>
            <td>
              <button onClick={() => onDelete(i)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
