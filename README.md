# Sistema de Gerenciamento de Notas – React + FastAPI

Este projeto consiste em uma aplicação simples para cadastro, listagem e análise de alunos.  


## Tecnologias Utilizadas

### **Frontend**
- React (Vite)
- JavaScript
- Fetch API
- CSS puro

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

## Executando o Backend (FastAPI)

1. Acesse a pasta do backend:

```bash
cd backend
```

2. Instale as dependências:

```bash
pip install fastapi uvicorn
```

3. Inicie o servidor:

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

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

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
