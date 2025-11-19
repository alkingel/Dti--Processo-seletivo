export default function Estatisticas({ stats }) {
  if (!stats) return null;

  return (
    <div>
  <h2 style={{marginTop: 0}}>Estatísticas</h2>

  <h3>Média da turma por disciplina</h3>
  {stats.media_turma_disciplinas.length === 0 ? (
    <p>Nenhum aluno cadastrado.</p>
  ) : (
    <ul>
      {stats.media_turma_disciplinas.map((m, i) => (
        <li key={i}>Disciplina {i + 1}: {m.toFixed(2)}</li>
      ))}
    </ul>
  )}

  <h3>Acima da média</h3>
  {stats.alunos_acima_da_media.length === 0 ? (
    <p>Nenhum aluno acima da média.</p>
  ) : (
    <ul>
      {stats.alunos_acima_da_media.map((n, i) => (
        <li key={i}>{n}</li>
      ))}
    </ul>
  )}

  <h3>Baixa Frequência (&lt; 75%)</h3>
  {stats.alunos_com_baixa_frequencia.length === 0 ? (
    <p>Nenhum aluno com baixa frequência.</p>
  ) : (
    <ul>
      {stats.alunos_com_baixa_frequencia.map((n, i) => (
        <li key={i}>{n}</li>
      ))}
    </ul>
  )}
</div>
  );
}
