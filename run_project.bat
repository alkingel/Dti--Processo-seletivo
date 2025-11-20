@echo off
echo Iniciando projeto completo...

REM Abrir backend em uma nova janela
start cmd /k "cd backend && uvicorn main:app --reload"

REM Abrir frontend em outra janela
start cmd /k "cd frontend && npm run dev"

echo Ambos os servidores foram iniciados.
pause
