const BASE_URL = "http://localhost:8000";

export async function adicionarAluno(data) {
  const res = await fetch(`${BASE_URL}/alunos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function listarAlunos() {
  const res = await fetch(`${BASE_URL}/alunos`);
  return res.json();
}

export async function obterEstatisticas() {
  const res = await fetch(`${BASE_URL}/estatisticas`);
  return res.json();
}

export async function excluirAluno(index) {
  const res = await fetch(`${BASE_URL}/alunos/${index}`, {
    method: "DELETE",
  });
  return res.json();
}

export async function editarAluno(index, data) {
  const res = await fetch(`${BASE_URL}/alunos/${index}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
