# Próximos Passos - Checklist Implementação

## 🎯 Objetivo Imediato
Transformar scaffolding em MVP funcional (Fase 1 MVP)

## 📋 Tarefas Prioritárias (Ordem de Execução)

### 🔴 CRITICAL - Setup Necessário
- [ ] **Setup Local Development**
  - [ ] PostgreSQL instalado e rodando
  - [ ] Crie .env.local com DATABASE_URL
  - [ ] Execute: `npm install` em todos workspaces
  - [ ] Execute: `npm run db:push` no backend
  - [ ] Verifique: `npm run dev` (Frontend + Backend rodando)

- [ ] **Import BNCC Data**
  - [ ] Parse arquivo: `annexo_mapeamento_bncc.md`
  - [ ] Crie seed script em `backend/prisma/seed.ts`
  - [ ] Execute: `npx prisma db seed`
  - [ ] Valide: 150+ habilidades no banco

### 🟡 HIGH - Autenticação (1-2 dias)
- [ ] **JWT Setup**
  - [ ] Instale bcrypt + jsonwebtoken
  - [ ] Crie `backend/src/middlewares/auth.ts`
  - [ ] Crie `backend/src/services/auth.service.ts`

- [ ] **Auth Routes**
  - [ ] POST `/api/auth/register`
  - [ ] POST `/api/auth/login`
  - [ ] POST `/api/auth/refresh`
  - [ ] GET `/api/auth/me`

- [ ] **Frontend Auth Pages**
  - [ ] `/login` page com form
  - [ ] `/register` page
  - [ ] Update `AuthStore` com login/register methods
  - [ ] Protected routes middleware

### 🟡 HIGH - Dashboard Básico (1 dia)
- [ ] **Dashboard Page**
  - [ ] `/dashboard` page
  - [ ] Protected route (requer autenticação)
  - [ ] Mostrar: usuário, planejamentos salvos
  - [ ] Ações rápidas (novo plano, ver formação)

### 🟢 MEDIUM - Gerador de Planejamento v1 (2-3 dias)
- [ ] **Formulário Multi-Step**
  - [ ] Step 1: Contexto (ano, componente)
  - [ ] Step 2: Habilidades (filtros + multi-select)
  - [ ] Step 3: Conceitos (checkboxes)
  - [ ] Step 4: Sequência (textarea + sugestões)
  - [ ] Step 5: Recursos (banco)
  - [ ] Step 6: Review + exportação

- [ ] **Backend Planos Routes**
  - [ ] POST `/api/planos` (crear)
  - [ ] GET `/api/planos` (listar)
  - [ ] GET `/api/planos/:id`
  - [ ] PUT `/api/planos/:id`
  - [ ] DELETE `/api/planos/:id`

### 🟢 MEDIUM - Framework Conceitual UI (1-2 dias)
- [ ] **Conceitos Críticos Pages**
  - [ ] `/entender/conceitos` main page
  - [ ] `/entender/conceitos/linguagem`
  - [ ] `/entender/conceitos/representacao`
  - [ ] `/entender/conceitos/producao`
  - [ ] `/entender/conceitos/publico`
  - [ ] Components: Card conceitual, quiz inline

### 🔵 LOW - Extras (Depois de MVP)
- [ ] Biblioteca planos prontos
- [ ] Fórum discussão
- [ ] Trilhas formação
- [ ] Midiateca

---

## 📊 Timeline Estimada

```
Week 1:
├─ Setup + BNCC data import (2 dias)
├─ Autenticação JWT (2 dias)
└─ Dashboard básico (1 dia)

Week 2:
├─ Gerador planejamento v1 (2.5 dias)
├─ Conceitos críticos pages (1 dia)
└─ Testing + refinements (1.5 dias)

Week 3:
├─ Biblioteca planos prontos
├─ Mapeamento BNCC interativo
└─ Performance + Accessibility

Week 4:
├─ Beta testing
├─ Feedback & improvements
└─ Deploy inicial
```

---

## 🛠️ Setup Rápido (Agora!)

```bash
# 1. Instale dependências
npm install

# 2. Crie .env.local na RAIZ
cat > .env.local << EOF
DATABASE_URL=postgresql://user:password@localhost:5432/educacao_midiatica
JWT_SECRET=mudar_isso_em_producao_com_algo_seguro
JWT_EXPIRATION=7d
NEXT_PUBLIC_API_URL=http://localhost:3001/api
EOF

# 3. Configure database (certifique PostgreSQL rodando)
createdb educacao_midiatica
npm run db:push --workspace=backend

# 4. Rode em dev
npm run dev

# Frontend: http://localhost:3000
# Backend: http://localhost:3001
```

---

## 📁 Arquivos a Criar (Ordem)

### Backend

```
backend/src/
├── middlewares/
│   └── auth.ts                    # JWT validation
├── routes/
│   ├── auth.ts                    # Login, register
│   ├── habilidades.ts             # GET habilidades
│   └── planos.ts                  # CRUD planos
├── controllers/
│   ├── auth.controller.ts
│   └── planos.controller.ts
├── services/
│   ├── auth.service.ts
│   ├── user.service.ts
│   ├── habilidades.service.ts
│   └── planos.service.ts
├── utils/
│   └── errors.ts
└── prisma/
    └── seed.ts                    # BNCC data seed
```

### Frontend

```
frontend/src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── dashboard/page.tsx
│   │   ├── planejamentos/page.tsx
│   │   └── layout.tsx
│   └── entender/
│       ├── conceitos/layout.tsx
│       ├── conceitos/page.tsx
│       ├── conceitos/[id]/page.tsx
│       └── marcos-legais/page.tsx
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
│   ├── forms/
│   │   ├── PlanejamentoForm.tsx
│   │   └── StepIndicator.tsx
│   └── sections/
│       ├── HeroHome.tsx
│       ├── QuickAccess.tsx
│       └── Timeline.tsx
└── services/
    └── seed-bncc.ts               # Helper para import
```

---

## 🔗 Importante - Usar Dados Existentes

O arquivo `/home/sergio/Área de trabalho/letramento_digital/anexo_mapeamento_bncc.md` contém:

- ✅ 6 habilidades 6º ano
- ✅ 7 habilidades 7º ano
- ✅ 10 habilidades 8º ano
- ✅ (Presumivelmente mais anos)

**Use este arquivo para:**
1. Criar seed script que popula banco
2. Validar contra BNCC oficial
3. Gerar filtros automáticos no gerador

Exemplo seed:
```typescript
// backend/prisma/seed.ts
const bnccData = [
  {
    codigo: "EF06CO10",
    descricao: "Analisar o consumo de tecnologia...",
    eixo: "LER",
    conceituoCritico: "LINGUAGEM",
    anoEscolar: 6,
    componente: "Educação Física",
  },
  // ... mais habilidades
]

for (const h of bnccData) {
  await prisma.habilidade.create({ data: h })
}
```

---

## 📞 Decisões de Design Pendentes

- [ ] **Termos de Uso / Política Privacidade**: Usar template ou customs?
- [ ] **Logo do Portal**: Usar/adaptar existing ou design novo?
- [ ] **Cores**: Confirmou paleta azul/verde/laranja?
- [ ] **Video Hero**: Usar placeholder ou video real?
- [ ] **Recursos Externos**: Permissão para linkear YouTube/Canva?

---

## ✅ Success Criteria - MVP Completo

- [ ] Usuário pode registrar/fazer login
- [ ] Dashboard mostra planejamentos salvos
- [ ] Gerador gera plano válido com habilidades BNCC
- [ ] Página Entender mostra fundamentos + marcos
- [ ] Exportação PDF/DOCX funciona
- [ ] Mobile responsivo (375px+)
- [ ] Lighthouse score > 75
- [ ] Zero console errors
- [ ] Database persistindo dados corretamente

---

## 🚀 Próximo Passo Imediato

**Ação #1:** Execute setup rápido acima e confirme que:
```
✅ npm run dev
- Frontend rodando em :3000
- Backend rodando em :3001
- Página inicial demonstrando sem erros
```

**Ação #2:** Comece auth backend:
```
criar backend/src/middlewares/auth.ts
criar backend/src/services/auth.service.ts
criar backend/src/routes/auth.ts
```

---

## 📚 Referências Rápidas

- BNCC Data: `/home/sergio/Área de trabalho/letramento_digital/anexo_mapeamento_bncc.md`
- Stack: Next.js 14 + Express + Prisma + PostgreSQL
- Docs: `/portal-educacao-midiatica/docs/*`

---

**Status:** Scaffolding 20% completo - Pronto para implementação! 🚀
