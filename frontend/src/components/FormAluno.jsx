import { useState } from "react";
import { adicionarAluno } from "../services/api";

export default function FormAluno({ onAdd }) {
  const [nome, setNome] = useState("");
  const [notas, setNotas] = useState(["", "", "", "", ""]);
  const [frequencia, setFrequencia] = useState("");

  function updateNota(value, index) {
    const n = [...notas];
    n[index] = value;
    setNotas(n);
  }

  async function enviar(e) {
    e.preventDefault();

    const payload = {
      nome,
      notas: notas.map(n => Number(n)),
      frequencia: Number(frequencia),
    };

    await adicionarAluno(payload);

    setNome("");
    setNotas(["", "", "", "", ""]);
    setFrequencia("");

    onAdd();
  }

  return (
    <form onSubmit={enviar}>
  <h2 style={{marginTop: 0}}>Cadastrar Aluno</h2>

  <input
    placeholder="Nome do aluno"
    value={nome}
    onChange={e => setNome(e.target.value)}
  />

  {notas.map((n, i) => (
    <input
      key={i}
      placeholder={`Nota ${i + 1}`}
      value={n}
      onChange={(e) => updateNota(e.target.value, i)}
    />
  ))}

  <input
    placeholder="Frequência (%)"
    value={frequencia}
    onChange={e => setFrequencia(e.target.value)}
  />

  <button type="submit">Adicionar</button>
</form>
  );
}
