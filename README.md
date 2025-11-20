# Sistema de Gerenciamento de Notas 

Este projeto consiste em uma aplicação simples para cadastro, listagem e análise de alunos.  


## Tecnologias Utilizadas

### **Frontend**
- React (Vite)
- JavaScript
- Fetch API
- CSS 

### **Backend**
- Python
- FastAPI
- Pydantic
- Uvicorn

---

##  Como executar o projeto

###  Pré-requisitos
- Node.js instalado  
- Python 3.10+ instalado

---
## Instalando Dependências
1. Abra o terminal e execute
 
```bash
cd backend
pip install fastapi uvicorn
```
```bash
cd frontend
npm install
```

## Executando pelo atalho (windows .bat)
1. Acesse a pasta do arquivo
2. Clique no executavel "run_project"
3. Abra o endereço http://localhost:5173/
   
## Executando o Backend (FastAPI)

1. Acesse a pasta do backend:

```bash
cd backend
```

2. Inicie o servidor:

```bash
uvicorn main:app --reload
```

O backend ficará disponível em:

```
http://localhost:8000
```

---

## Executando o Frontend (React)

1. Acesse a pasta do frontend:

```bash
cd frontend
```

2. Execute o projeto:

```bash
npm run dev
```

O frontend ficará disponível em:

```
http://localhost:5173
```

---

##  Premissas Assumidas

- Todos os alunos possuem **5 notas**.
- A frequência é informada como **porcentagem**.
- A API guarda todos os dados **em memória** (não existe banco de dados).
- Não há sistema de autenticação ou controle de usuários.

---

##  Decisões de Projeto

- Uso de **FastAPI** pela simplicidade e velocidade para criar APIs REST.
- Uso de **React com Vite** para uma estrutura fácil de entender.
- Armazenamento dos dados em uma lista Python para evitar complexidade.
- Estatísticas calculadas no backend para evitar duplicação de lógica no frontend.


---

## Funcionalidades

- Cadastro de alunos
- Listagem dos alunos cadastrados
- Estatísticas automáticas


---

##  Autor

Projeto desenvolvido por **Davi Brum**.
