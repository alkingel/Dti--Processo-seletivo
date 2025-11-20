export default function Estatisticas({ stats }) {
  if (!stats) return null;

  return (
    <div>
      <h2>Estatísticas</h2>

      <h3>Média por disciplina</h3>
      <ul>
        {stats.media_turma_disciplinas.map((m, i) => (
          <li key={i}>Disciplina {i + 1}: {m.toFixed(2)}</li>
        ))}
      </ul>

      <h3>Acima da Média</h3>
      <ul>
        {stats.alunos_acima_da_media.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>

      <h3>Baixa Frequência (&lt; 75%)</h3>
      <ul>
        {stats.alunos_com_baixa_frequencia.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
