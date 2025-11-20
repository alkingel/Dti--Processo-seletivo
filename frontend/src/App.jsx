import { useEffect, useState } from "react";
import FormAluno from "./components/FormAluno";
import ListaAlunos from "./components/ListaAlunos";
import Estatisticas from "./components/Estatisticas";
import { listarAlunos, obterEstatisticas, excluirAluno } from "./services/api";

export default function App() {
  const [alunos, setAlunos] = useState([]);
  const [stats, setStats] = useState(null);

  async function atualizar() {
    setAlunos(await listarAlunos());
    setStats(await obterEstatisticas());
  }

  async function remover(index) {
    await excluirAluno(index);
    atualizar();
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
        <ListaAlunos alunos={alunos} onDelete={remover} />
      </div>

      <div className="card">
        <Estatisticas stats={stats} />
      </div>
    </div>
  );
}
