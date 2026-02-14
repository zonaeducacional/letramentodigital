# Portal de Educação Midiática

Plataforma web completa para apoiar professores da educação básica na implementação da educação midiática, alinhada à **Resolução CNE/CEB nº2 (2025)** e **Lei 15.100/2025**.

## 📋 Visão Geral

Este portal oferece um **ecossistema integrado** de formação, planejamento e recursos para educação midiática, com:

- ✅ Página inicial moderna e responsiva
- 📚 Seção ENTENDER: Fundamentos e framework conceitual
- 📋 Seção PLANEJAR: Gerador de situações didáticas
- 🎬 Seção RECURSOS: Midiateca curada
- 🎓 Seção FORMAÇÃO: Trilhas de aprendizagem
- 👥 COMUNIDADE: Fórum e rede colaborativa
- 📊 Dashboard pessoal com progresso

## 🏗️ Arquitetura do Projeto

```
portal-educacao-midiatica/
├── frontend/                    # Next.js 14 com React 18
│   ├── src/
│   │   ├── app/               # App Router
│   │   ├── components/        # Componentes reutilizáveis
│   │   ├── services/          # Chamadas API
│   │   ├── store/             # Zustand stores
│   │   ├── types/             # TypeScript interfaces
│   │   ├── hooks/             # Custom hooks
│   │   └── utils/             # Utilidades
│   └── package.json
│
├── backend/                     # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── routes/            # API routes
│   │   ├── controllers/       # Business logic
│   │   ├── services/          # Database services
│   │   ├── middlewares/       # Express middlewares
│   │   └── db/                # Database config
│   ├── prisma/
│   │   └── schema.prisma      # Database schema
│   └── package.json
│
└── docs/                       # Documentação
```

## 🚀 Quick Start

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- PostgreSQL 12+ (ou MySQL/MongoDB)

### Instalação

1. **Clonar repositório e instalar dependências:**

```bash
cd portal-educacao-midiatica

# Instalar dependências do projeto raiz (monorepo)
npm install

# Instalar dependências individuais
npm install --workspace=frontend
npm install --workspace=backend
```

2. **Configurar variáveis de ambiente:**

```bash
# Copiar arquivo de exemplo
cp .env.example .env.local

# Preencher com suas configurações
# DATABASE_URL, JWT_SECRET, etc.
```

3. **Preparar banco de dados:**

```bash
# Frontend vai usar dados mockados inicialmente
# Backend vai usar Prisma com PostgreSQL

cd backend
npm run db:push  # Executar migrations do Prisma
```

4. **Rodar em desenvolvimento:**

```bash
# Raiz do projeto
npm run dev

# Frontend em: http://localhost:3000
# Backend em: http://localhost:3001
```

## 📁 Estrutura de Dados: BNCC Integrada

O projeto usa dados do arquivo `anexo_mapeamento_bncc.md` para:

- **Habilidades por ano escolar** (6º ao 9º + Ensino Médio)
- **Eixos EducaMídia**: Ler, Escrever, Participar
- **Conceitos Críticos**: Linguagem, Representação, Produção, Público
- **Componentes curriculares**: Todos com integração midiática

### Database Schema

**Modelo Principal de Habilidades:**

```typescript
Habilidade {
  id: string
  codigo: string          // Ex: EF06CO10
  descricao: string
  eixo: 'LER' | 'ESCREVER' | 'PARTICIPAR'
  conceituoCritico: 'Linguagem' | 'Representação' | 'Produção' | 'Público'
  anoEscolar: number      // 6-9 ou 10-12
  componente: string      // Português, História, etc.
  objetosConhecimento: string[]
}
```

## 🔑 Funcionalidades Principais

### 1. Autenticação
- Login/Cadastro com JWT
- Role-based access (Professor, Coordenador, Admin)
- Perfect para integração OAuth

### 2. Gerador de Planejamento (Fase 1 MVP)
- Formulário guiado em 6 etapas
- Seleção automática de habilidades BNCC
- Geração de sequência didática
- Exportação em PDF/DOCX

### 3. Biblioteca de Planos
- 20+ planos prontos
- Filtros avançados
- Sistema de avaliação
- Adaptação/reutilização

### 4. Recursos
- Categorização por tipo (vídeo, artigo, ferramenta)
- Links curados para ferramentas seguras
- Roteiros de análise para professores

### 5. Formação
- 3 trilhas (Básica, Intermediária, Avançada)
- Quizzes interativos
- Certificados digitais
- Gamificação com badges

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca de UI
- **Tailwind CSS** - Styling utilitário
- **Zustand** - State management leve
- **Axios** - HTTP client
- **TypeScript** - Type safety
- **Framer Motion** - Animações
- **Recharts** - Visualizações de dados

### Backend
- **Express.js** - Framework web
- **TypeScript** - Type safety
- **Prisma ORM** - Database abstraction
- **PostgreSQL** - Database relacional
- **JWT** - Autenticação
- **Zod** - Validação de schemas

### Hospedagem Sugerida
- **Frontend**: Vercel, Netlify
- **Backend**: Railway, Render, AWS
- **Database**: AWS RDS, Railway, Supabase

## 📚 Documentação Adicional

```
docs/
├── ARQUITETURA.md          # Decisões arquiteturais
├── API_ENDPOINTS.md        # Documentação das rotas
├── DEVELOPMENT.md          # Guia de desenvolvimento
├── DEPLOYMENT.md           # Guia de deployment
└── DATABASE.md             # Documentação do banco
```

## 🎯 Roadmap

### Fase 1: MVP (Atual)
- [x] Estrutura base do projeto
- [x] Página inicial responsiva
- [ ] Autenticação (em desenvolvimento)
- [ ] Seção ENTENDER com conteúdo básico
- [ ] Gerador de planejamento v1

### Fase 2 (Q2 2025)
- [ ] Trilhas de formação completas
- [ ] Midiateca com 100+ recursos
- [ ] Fórum de comunidade funcional
- [ ] Dashboard institucional

### Fase 3 (Q3 2025)
- [ ] App mobile
- [ ] Integrações com plataformas LMS
- [ ] Analytics avançado
- [ ] Sistema de recomendações por IA

## 🤝 Contribuindo

Este é um projeto colaborativo. Para contribuir:

1. Crie uma branch para sua feature
2. Commit suas mudanças
3. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT. Veja arquivo LICENSE para detalhes.

## 📞 Suporte

- **Email**: contato@educamidia.com
- **Comunidade**: Fórum do portal
- **Issues**: GitHub Issues

---

**Desenvolvido para transformar a educação midiática em realidade nas escolas brasileiras.**
