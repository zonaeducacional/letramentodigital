# Arquitetura e Decisões Técnicas

## Overview

Portal de Educação Midiática é uma aplicação full-stack que utiliza arquitetura moderna de separação frontend/backend com banco de dados relacional.

## Tecnologias Principais

### Frontend - Next.js 14

**Por que Next.js?**
- Server-side rendering (SSR) para melhor SEO
- Static Site Generation (SSG) para páginas estáticas
- App Router (13+) mais moderno
- API routes para lambdas simples
- Otimização automática de imagens
- Deploy simplificado (Vercel)

**Stack:**
```
Next.js 14
├── React 18
├── TypeScript
├── Tailwind CSS (utility-first)
├── Zustand (state management)
├── Axios (HTTP client)
└── Framer Motion (animações)
```

### Backend - Express.js

**Por que Express?**
- Ecosistema maduro e bem documentado
- Flexibilidade para estruturar como desejar
- Suporta TypeScript nativamente
- Simples para prototipagem rápida

**Stack:**
```
Express.js
├── TypeScript
├── Prisma ORM
├── PostgreSQL (production)
├── JWT (autenticação)
└── CORS (segurança)
```

### Database - PostgreSQL

**Schema Relacional:**
- Users (autenticação)
- Habilidades (dados BNCC)
- PlanoDidático (planejamentos)
- Recursos (midiateca)
- TrilhaAprendizagem (formação)
- PostForum (comunidade)
- Módulos, Quizzes, Questões

**Características:**
- Foreign keys para integridade referencial
- Indexes em campos frequentemente consultados
- Soft deletes quando necessário
- Auditoria com created_at/updated_at

## Padrões Arquiteturais

### Frontend - Component-Based

```
components/
├── Common/          # Componentes reutilizáveis
├── Sections/        # Sections da página (Hero, Features)
├── Modals/          # Modals e overlays
└── Forms/           # Componentes de formulário
```

**State Management:**
- Zustand para auth, UI state
- React Query (futuro) para cache de dados
- localStorage para persistência

### Backend - Layered Architecture

```
src/
├── routes/          # Express routes/endpoints
├── controllers/     # Business logic
├── services/        # Database operations
├── middlewares/     # Auth, validation, error handling
└── db/              # Database connection
```

**Padrão de Requisição:**
```
Route → Controller → Service → Database
         ↓           ↓
       Validation  Error Handling
```

## Fluxos Principais

### Autenticação
```
POST /api/auth/register
├── Validar email/senha (Zod)
├── Hash password (bcrypt)
├── Criar user no DB
└── Retornar JWT token

POST /api/auth/login
├── Validar credentials
├── Comparar password hash
├── Gerar JWT
└── Retornar auth token
```

### Criação de Planejamento
```
POST /api/planos
├── Validar token JWT (middleware)
├── Validar dados (schema)
├── Buscar habilidades BNCC
├── Criar PlanoDidático
├── Retornar plano criado
└── (Opcional) Triggerar IA para gerar conteúdo
```

### Busca de Habilidades
```
GET /api/habilidades?ano=8&componente=Português
├── Query database
├── Cache em memória (Redis futuro)
└── Retornar com relacionamentos
```

## Decisões de Design

### 1. Monorepo com Workspaces npm
**Benefício**: Compartilhar tipos TypeScript entre frontend/backend
**Trade-off**: Mais complexo para separar depois se necessário

### 2. Prisma como ORM
**Benefício**: Type-safe queries, migrações automáticas, ótima DX
**Trade-off**: Abstração um pouco mais pesada

### 3. Tailwind CSS
**Benefício**: Utility-first, bundle pequeno, temas consistentes
**Trade-off**: Markup mais verboso

### 4. Zustand vs Redux
**Benefício**: API simples, bundle pequeno, menos boilerplate
**Trade-off**: Menos ferramentas de debug

## Performance

### Frontend
- **Code splitting**: Automático com Next.js
- **Image optimization**: next/image
- **Font optimization**: next/font
- **Route prefetching**: Automático
- **CSS purging**: Tailwind

### Backend
- **Database indexing**: Campos frequentemente consultados
- **Query optimization**: Select campos específicos
- **Pagination**: Limitar resultados
- **Caching**: Redis (futuro)

## Segurança

### Frontend
- CORS habilitado apenas para backend
- No storage de senha em localStorage
- HTTPS enforcement em production
- CSP headers

### Backend
- JWT com expiração
- Bcrypt para password hashing
- SQL injection prevention (Prisma)
- Rate limiting (futuro)
- LGPD compliance (futuro)

## Escalabilidade

### Curto Prazo (MVP)
- Servidor single Node.js
- PostgreSQL single-node
- Vercel para frontend

### Médio Prazo
- Load balancing (nginx)
- Connection pooling (PgBouncer)
- Cache layer (Redis)
- CDN para assets

### Longo Prazo
- Microserviços (se necessário)
- Message queues (RabbitMQ, Kafka)
- Database replication
- Kubernetes orchestration

## Observabilidade

### Logging
```typescript
// Estruturado com Winston/Pino
logger.info('user_created', { 
  userId: user.id, 
  email: user.email 
})
```

### Metrics
- Google Analytics 4 (frontend)
- Prometheus (backend, futuro)
- Custom dashboards

### Error Tracking
- Sentry para exceptions
- Logs estruturados

## Testing

### Frontend
- Jest + React Testing Library
- E2E com Cypress/Playwright

### Backend
- Jest para unit tests
- Supertest para integration tests

## Deployment

### Frontend (Vercel)
```bash
npm run build
vercel deploy
```

### Backend (Railway/Render)
```bash
npm run build
npm start
```

### Database (PostgreSQL Managed)
- Supabase, Railway, AWS RDS

## Ambiente Local

```bash
# Docker compose (futuro)
docker-compose up

# Manual
npm install
npm run dev
```

---

Esta arquitetura foi escolhida para balancear **simplicidade** (MVP rápido) com **escalabilidade** (para crescimento futuro).
