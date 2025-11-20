from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Aluno(BaseModel):
    nome: str
    notas: list[float]
    frequencia: float

alunos = []

@app.post("/alunos")
def adicionar_aluno(aluno: Aluno):
    alunos.append(aluno.dict())
    return {"mensagem": "Aluno adicionado"}

@app.get("/alunos")
def listar_alunos():
    return alunos

@app.delete("/alunos/{index}")
def excluir_aluno(index: int):
    if index < 0 or index >= len(alunos):
        raise HTTPException(status_code=404, detail="Aluno não encontrado")
    alunos.pop(index)
    return {"mensagem": "Aluno removido"}

@app.get("/estatisticas")
def estatisticas():
    if len(alunos) == 0:
        return {
            "media_turma_disciplinas": [],
            "alunos_acima_da_media": [],
            "alunos_com_baixa_frequencia": []
        }

    num_disciplinas = len(alunos[0]["notas"])

    medias = []
    for i in range(num_disciplinas):
        soma = sum(a["notas"][i] for a in alunos)
        medias.append(soma / len(alunos))

    media_geral = sum(medias) / len(medias)

    acima = [
        a["nome"]
        for a in alunos
        if (sum(a["notas"]) / len(a["notas"])) > media_geral
    ]

    baixa_freq = [a["nome"] for a in alunos if a["frequencia"] < 75]

    return {
        "media_turma_disciplinas": medias,
        "alunos_acima_da_media": acima,
        "alunos_com_baixa_frequencia": baixa_freq
    }
