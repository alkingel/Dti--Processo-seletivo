import { useState } from "react";
import { adicionarAluno } from "../services/api";

export default function FormAluno({ onAdd }) {
  const [nome, setNome] = useState("");
  const [notas, setNotas] = useState(["", "", "", "", ""]);
  const [freq, setFreq] = useState("");

  function updateNota(v, i) {
    const copia = [...notas];
    copia[i] = v;
    setNotas(copia);
  }

  async function enviar(e) {
    e.preventDefault();

    await adicionarAluno({
      nome,
      notas: notas.map(Number),
      frequencia: Number(freq),
    });

    setNome("");
    setNotas(["", "", "", "", ""]);
    setFreq("");

    onAdd();
  }

  return (
    <form onSubmit={enviar}>
      <h2>Cadastrar Aluno</h2>

      <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />

      {notas.map((n, i) => (
        <input
          key={i}
          placeholder={`Nota ${i + 1}`}
          value={n}
          onChange={e => updateNota(e.target.value, i)}
        />
      ))}

      <input
        placeholder="Frequência (%)"
        value={freq}
        onChange={e => setFreq(e.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}
