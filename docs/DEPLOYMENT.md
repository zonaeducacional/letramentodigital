# Guia de Deployment

Instruções para deployar o Portal de Educação Midiática em ambiente de produção.

## Overview

```
┌─────────────────┐
│  Frontend       │  Vercel
│  (Next.js)      │
└────────┬────────┘
         │ (HTTPS)
         ▼
┌─────────────────┐
│  Backend        │  Railway/Render
│  (Express)      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Database       │  Supabase/Railway
│  (PostgreSQL)   │
└─────────────────┘
```

---

## Frontend - Vercel

### 1. Preparar Código

```bash
# Certifique-se de que build funciona localmente
npm run build --workspace=frontend

# Sem erros de TypeScript
npm run type-check --workspace=frontend
```

### 2. Conectar Repositório

1. Vá para [vercel.com](https://vercel.com)
2. Clique "New Project"
3. Selecione seu repositório GitHub
4. Selecione `./frontend` como root directory

### 3. Configurar Variáveis

No Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_API_URL=https://api.educamidia.com/api
```

### 4. Deploy

```bash
# Após conectar, Vercel deploya automaticamente em cada push para main
# Ou clique "Deploy" manualmente

# Para preview de PRs:
# Vercel cria URLs de preview automaticamente
```

### 5. Custom Domain

1. Vá para Domains
2. Adicione `educamidia.com`
3. Siga instruções de DNS
4. Enable HTTPS automático

---

## Backend - Railway

### 1. Preparar Código

```bash
# Build deve funcionar
npm run build --workspace=backend

# Verifique que há arquivo .env.example com todas as vars
cat backend/.env.example
```

### 2. Criar Projeto Railway

1. Vá para [railway.app](https://railway.app)
2. Clique "New Project"
3. Selecione "GitHub Repo"  
4. Selecione seu repositório

### 3. Configurar Serviços

**Opção A: Railway Ephemeral Disk (Simples)**

```bash
# Railway carrega código e roda automaticamente
# Configure Root Directory: ./backend
```

**Opção B: Railway + PostgreSQL Nativo**

```bash
# No Railway Dashboard:
# 1. Add Service → PostgreSQL
# 2. Add Service → GitHub Repo (seu code)
```

### 4. Variáveis de Ambiente

Railway → Variables:

```
NODE_ENV=production
PORT=3001

# Database (obtém automaticamente se usar Railway PostgreSQL)
DATABASE_URL=postgresql://user:pass@host:5432/db

# Gerar uma chave segura:
# Linux/Mac: openssl rand -hex 32
JWT_SECRET=sua_chave_super_secreta_aqui
JWT_EXPIRATION=7d

# Optional
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
```

### 5. Deploy

```bash
# Railway deploya automaticamente quando você faz push
# Monitore em Railway Dashboard

# Verificar logs:
# railway logs -f
```

---

## Database - Supabase

### 1. Criar Projeto Supabase

1. Vá para [supabase.com](https://supabase.com)
2. Clique "New Project"
3. Escolha região (São Paulo se possível)
4. Configure senha super admin

### 2. Obter Connection String

Settings → Database → Connection String:

```
postgresql://user:password@db.xxxxx.supabase.co:5432/postgres
```

### 3. Executar Migrations

```bash
# De sua máquina local:
cd backend

# Configure DATABASE_URL
export DATABASE_URL="postgresql://user:pass@db.xxxx.supabase.co:5432/postgres"

# Push schema
npm run db:push

# Ou execute migrations
npx prisma migrate deploy
```

### 4. Backup e Recovery

```bash
# Backup automático (Supabase faz diariamente)
# Manual backup:
# Supabase Dashboard → Backups → Download

# Restaurar:
# Supabase Dashboard → Backups → Restore
```

---

## Pipeline CI/CD - GitHub Actions

### 1. Criar Workflow

Arquivo: `.github/workflows/deploy.yml`

```yaml
name: Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm install
      
      - run: npm run lint
      
      - run: npm run type-check
      
      - run: npm run build

  deploy-frontend:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v3
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
      
      - uses: vercel/action@main
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./frontend

  deploy-backend:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Railway
        run: |
          npm install -g @railway/cli
          railway up
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}
```

### 2. Setup Secrets

GitHub → Settings → Secrets and variables:

```
VERCEL_TOKEN=...
VERCEL_ORG_ID=...
VERCEL_PROJECT_ID=...
RAILWAY_TOKEN=...
```

---

## Checklist Pre-Deploy

- [ ] Todos testes passando
- [ ] TypeScript sem erros (`npm run type-check`)
- [ ] Build funciona localmente
- [ ] .env.example com todas as variáveis
- [ ] README atualizado
- [ ] Version bumped (package.json)
- [ ] CHANGELOG.md atualizado
- [ ] Database migrations testadas
- [ ] SSL/HTTPS configurado
- [ ] DNS records configurados
- [ ] Rate limiting habilitado
- [ ] Monitoring/logging ativo
- [ ] Backup strategy definida
- [ ] Disaster recovery plan
- [ ] Compliance verificado (LGPD)

---

## Monitoramento Post-Deploy

### Sentry (Error Tracking)

```typescript
// backend/src/index.ts
import * as Sentry from '@sentry/node'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
})

app.use(Sentry.Handlers.errorHandler())
```

### Google Analytics (Frontend)

```typescript
// frontend/src/app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <>
      {/* ... */}
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </>
  )
}
```

### Health Checks

```bash
# Configure monitores em:
# - UptimeRobot
# - Healthchecks.io
# - Railway alerts

# Endpoint de health check
curl https://api.educamidia.com/api/health
# { "status": "ok", "timestamp": "..." }
```

---

## Troubleshooting

### Build Falha no Vercel

```bash
# Verifique logs locally
npm run build --workspace=frontend

# Limpe cache Vercel
vercel env pull .env.production.local
```

### Database Connection Error

```bash
# Teste conexão
psql $DATABASE_URL

# Verifique firewall
# Railway/Supabase → Settings → Network

# Reset password se necessário
```

### API Retorna 502/503

```bash
# Verifique aplicação
railway logs -f

# Restart
railway up --detach

# Verificar recursos
# Railway Dashboard → Metrics
```

---

## Rollback

### Frontend (Vercel)

1. Vercel Dashboard → Deployments
2. Selecione deployment anterior
3. Clique "Redeploy"

### Backend (Railway)

1. Railway Dashboard → Deployments
2. Selecione git commit anterior
3. Clique "Redeploy"

### Database

```bash
# Supabase Dashboard → Backups → Restore
# Escolha backup anterior
# Confirme
```

---

## Scaling (Futuro)

Se receber muito tráfego:

**Frontend:**
- Vercel escala automaticamente
- Edge caching em +180 regiões

**Backend:**
- Railway: aumentar RAM/CPU
- Implementar database connection pooling
- Adicionar Redis cache

**Database:**
- Supabase: upgrade plan
- Read replicas
- Sharding se necessário

---

## Documentação Links

- [Vercel Docs](https://vercel.com/docs)
- [Railway Docs](https://docs.railway.app)
- [Supabase Docs](https://supabase.com/docs)
- [GitHub Actions](https://github.com/features/actions)
- [Prisma Deploy](https://www.prisma.io/docs/guides/deployment/deployment)
