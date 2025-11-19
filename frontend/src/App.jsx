import { useEffect, useState } from "react";
import FormAluno from "./components/FormAluno";
import ListaAlunos from "./components/ListaAlunos";
import Estatisticas from "./components/Estatisticas";
import { listarAlunos, obterEstatisticas } from "./services/api";

export default function App() {
  const [alunos, setAlunos] = useState([]);
  const [stats, setStats] = useState(null);

  async function atualizar() {
    const lista = await listarAlunos();
    setAlunos(lista);

    const est = await obterEstatisticas();
    setStats(est);
  }

  useEffect(() => {
    atualizar();
  }, []);

  return (
    <div>
      <h1>Sistema de Notas</h1>

      <FormAluno onAdd={atualizar} />

      <ListaAlunos alunos={alunos} />

      <Estatisticas stats={stats} />
    </div>
  );
}
