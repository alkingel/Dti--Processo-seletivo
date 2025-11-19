export default function ListaAlunos({ alunos }) {
  if (alunos.length === 0) {
    return <p>Nenhum aluno cadastrado.</p>;
  }

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Média</th>
          <th>Frequência</th>
        </tr>
      </thead>
      <tbody>
        {alunos.map((a, index) => {
          const media = (
            a.notas.reduce((acc, n) => acc + n, 0) / a.notas.length
          ).toFixed(2);

          return (
            <tr key={index}>
              <td>{a.nome}</td>
              <td>{media}</td>
              <td>{a.frequencia}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
