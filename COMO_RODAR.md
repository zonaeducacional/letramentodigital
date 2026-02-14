# 🚀 Instruções para Rodar o Portal

O sistema foi implementado com sucesso! Agora precisamos configurar o banco de dados e instalar as dependências.

## 1. Instalação
Na pasta raiz do projeto, execute:

```bash
npm install
```

## 2. Banco de Dados (Backend)
Você precisa ter o PostgreSQL rodando. As configurações estão em `backend/.env`.
Se estiver tudo certo com o banco, execute as migrações e o seed (dados da BNCC):

```bash
cd backend
npx prisma migrate dev --name init
npx prisma db seed
cd ..
```

*O comando `db seed` vai popular o banco com as habilidades da BNCC extraídas dos seus documentos.*

## 3. Rodar o Projeto
Na raiz do projeto:

```bash
npm run dev
```

## O que foi feito?
### ✅ Autenticação
- Login e Cadastro funcionais.
- Proteção de rotas com JWT.

### ✅ Dados BNCC
- Script de seed com habilidades do 6º ao 9º ano + Ensino Médio.
- Classificação por Eixos (Ler, Escrever, Participar).

### ✅ Gerador de Planejamento (/planejar)
- Wizard passo a passo.
- Filtro automático de habilidades por ano escolar.
- Criação e salvamento de planos didáticos.
