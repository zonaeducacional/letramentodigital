# Endpoints da API

Base URL: `http://localhost:3001/api`

## Autenticação

### POST /auth/register
Registrar novo usuário

**Request:**
```json
{
  "email": "professor@school.com",
  "name": "João Silva",
  "password": "senha_segura",
  "role": "TEACHER",
  "components": ["Português", "Língua Inglesa"],
  "yearsTeaching": [6, 7, 8]
}
```

**Response:** 
```json
{
  "token": "eyJhbGc...",
  "refreshToken": "...",
  "user": {
    "id": "...",
    "email": "professor@school.com",
    "name": "João Silva",
    "role": "TEACHER"
  }
}
```

### POST /auth/login
Login de usuário existente

**Request:**
```json
{
  "email": "professor@school.com",
  "password": "senha_segura"
}
```

**Response:** (mesmo que /register)

---

## Habilidades BNCC

### GET /habilidades
Listar todas as habilidades com filtros

**Query Params:**
- `ano` (number): Ano escolar (6-12)
- `componente` (string): Nome do componente
- `eixo` (string): LER, ESCREVER, PARTICIPAR
- `page` (number): Paginação
- `limit` (number): Items por página

**Response:**
```json
{
  "data": [
    {
      "id": "...",
      "codigo": "EF06CO10",
      "descricao": "Analisar o consumo de tecnologia...",
      "eixo": "LER",
      "conceituoCritico": "LINGUAGEM",
      "anoEscolar": 6,
      "componente": "Educação Física"
    }
  ],
  "total": 157,
  "page": 1,
  "limit": 20,
  "hasMore": true
}
```

### GET /habilidades/ano/:ano
Habilidades de um year específico

### GET /habilidades/componente/:componente
Habilidades de um componente específico

---

## Planos Didáticos

### POST /planos
Criar novo plano didático

**Request:**
```json
{
  "titulo": "Análise crítica de notícias falsas",
  "descricao": "Sequência didática...",
  "anoEscolar": 8,
  "componentes": ["Português", "História"],
  "duracao": 8,
  "eixos": ["LER", "PARTICIPAR"],
  "habilidadeIds": ["id1", "id2"],
  "objetivos": ["Objetivo 1", "Objetivo 2"],
  "problematizacao": "Como identificar...",
  "desenvolvimento": "Atividade 1...",
  "producaoAvaliacao": "Criar...",
  "recursos": [
    {
      "recursoId": "...",
      "quantidade": 1
    }
  ]
}
```

**Response:**
```json
{
  "id": "...",
  "titulo": "Análise crítica de notícias falsas",
  "autorId": "...",
  "compartilhado": false,
  "curtidas": 0,
  "createdAt": "2025-02-14T10:00:00Z"
}
```

### GET /planos
Listar planos do usuário com filtros

**Query Params:**
- `compartilhado` (boolean): Apenas públicos
- `anoEscolar` (number): Filtro por ano
- `eixo` (string): Filtro por eixo
- `ordenar` (string): recent, popular, relevant

### GET /planos/:id
Obter plano específico

### PUT /planos/:id
Atualizar plano (apenas autor)

### DELETE /planos/:id
Deletar plano (apenas autor)

### POST /planos/:id/share
Tornar plano público

### POST /planos/:id/like
Curtir plano

---

## Recursos (Midiateca)

### GET /recursos
Listar recursos com filtros

**Query Params:**
- `tipo` (string): VIDEO, ARTICULO, INFOGRAFICO, etc.
- `eixo` (string): LER, ESCREVER, PARTICIPAR
- `anoRecomendado` (number)
- `search` (string): Busca por título

**Response:**
```json
{
  "data": [
    {
      "id": "...",
      "titulo": "Deep Fake: Como Identificar",
      "tipo": "VIDEO",
      "descricao": "Vídeo educativo sobre...",
      "url": "https://...",
      "eixo": "LER",
      "tags": ["deep-fake", "inteligência-artificial"],
      "anoRecomendado": 9
    }
  ],
  "total": 245,
  "page": 1
}
```

### GET /recursos/:id
Recurso com detalhes completos

---

## Trilhas de Aprendizagem

### GET /trilhas
Listar trilhas disponíveis

**Query Params:**
- `nivel` (string): BASICO, INTERMEDIARIO, AVANCADO

**Response:**
```json
{
  "data": [
    {
      "id": "...",
      "titulo": "Trilha Básica - Fundamentos",
      "descricao": "...",
      "nivel": "BASICO",
      "duracao": 4,
      "certificado": true,
      "modulos": [
        {
          "id": "...",
          "titulo": "Módulo 1: Conceitos Básicos",
          "ordem": 1
        }
      ]
    }
  ]
}
```

### GET /trilhas/:id/modulos
Módulos de uma trilha

### POST /modulos/:id/complete
Marcar módulo como concluído

### POST /quiz/:id/submit
Submeter respostas do quiz

---

## Comunidade

### GET /forum
Listar posts do fórum

**Query Params:**
- `categoria` (string): DUVIDAS, PRATICAS, CASOS, DESAFIOS
- `ordenar` (string): recent, popular
- `tag` (string): Filtro por tag

### POST /forum
Criar novo post

**Request:**
```json
{
  "titulo": "Desafio: Como avaliar produções multimodais?",
  "conteudo": "Qual é a melhor forma de...",
  "categoria": "DESAFIOS",
  "tags": ["avaliação", "produção"]
}
```

### POST /forum/:id/comentarios
Comentar em post

**Request:**
```json
{
  "conteudo": "Excelente pergunta!"
}
```

### POST /forum/:id/like
Curtir post

---

## User Profile

### GET /user/profile
Obter perfil do usuário autenticado

### PUT /user/profile
Atualizar perfil

**Request:**
```json
{
  "name": "João Silva",
  "components": ["Português", "Literatura"],
  "yearsTeaching": [6, 7, 8, 9]
}
```

### GET /user/dashboard
Dashboard completo do usuário

**Response:**
```json
{
  "user": {...},
  "planejamentosSalvos": [...],
  "formacaoConcluida": [...],
  "proximosCursos": [...],
  "contribuicoes": {
    "planosCompartilhados": 5,
    "avaliacoes": 12,
    "comentarios": 8
  }
}
```

---

## Autenticação

Todos os endpoints (exceto auth) requerem header:
```
Authorization: Bearer {token}
```

O token é um JWT que expires em 7 dias. Para refresh, use:
```
POST /auth/refresh
Body: { "refreshToken": "..." }
```

---

## Tratamento de Erros

Respostas de erro seguem formato:
```json
{
  "error": "Invalid request",
  "code": "VALIDATION_ERROR",
  "details": [
    {
      "field": "email",
      "message": "Email inválido"
    }
  ]
}
```

**Status codes principais:**
- 200: OK
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Server Error
