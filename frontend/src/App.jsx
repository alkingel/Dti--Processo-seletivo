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

  <div className="card">
      <FormAluno onAdd={atualizar} />
  </div>

  <div className="card">
      <ListaAlunos alunos={alunos} />
  </div>

  <div className="card">
      <Estatisticas stats={stats} />
  </div>
</div>
  );
}
