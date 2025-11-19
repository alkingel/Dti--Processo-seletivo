from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Middleware CORS
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

@app.get("/")
def home():
    return {"mensagem": "API funcionando!"}

@app.post("/alunos")
def adicionar_aluno(aluno: Aluno):
    alunos.append(aluno)
    return {"mensagem": "Aluno adicionado"}

@app.get("/alunos")
def listar_alunos():
    return alunos

@app.get("/estatisticas")
def estatisticas():
    if len(alunos) == 0:
        return {
            "media_turma_disciplinas": [],
            "alunos_acima_da_media": [],
            "alunos_com_baixa_frequencia": []
        }

    num_disciplinas = len(alunos[0].notas)
    medias = []

    for i in range(num_disciplinas):
        soma = sum(a.notas[i] for a in alunos)
        medias.append(soma / len(alunos))

    media_geral = sum(medias) / len(medias)

    acima = []
    for a in alunos:
        media_aluno = sum(a.notas) / len(a.notas)
        if media_aluno > media_geral:
            acima.append(a.nome)

    baixa_freq = [a.nome for a in alunos if a.frequencia < 75]

    return {
        "media_turma_disciplinas": medias,
        "alunos_acima_da_media": acima,
        "alunos_com_baixa_frequencia": baixa_freq
    }
