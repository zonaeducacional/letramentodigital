# Roadmap de Desenvolvimento

## Status: MVP em Scaffolding (Fase 1 - 20% - Em Andamento)

---

## Fase 1: MVP - Estrutura Base (Semanas 1-4)

### ✅ Completed
- [x] Arquitetura monorepo Next.js + Express
- [x] TypeScript setup completo
- [x] Database schema com Prisma
- [x] Frontend com Tailwind CSS
- [x] Página inicial responsiva
- [x] Estrutura de tipos/interfaces
- [x] Configuração de API services
- [x] Zustand store para auth
- [x] Documentação (ARQUITETURA, API, DEVELOPMENT)

### 🔄 In Progress
- [ ] Autenticação JWT (Login/Registro)
  - [ ] Backend auth routes
  - [ ] Password hashing + validation
  - [ ] Frontend auth pages
  - [ ] Protected routes middleware

- [ ] Seção ENTENDER - Fundamentos
  - [ ] Página "O que é Educação Midiática"
  - [ ] Glossário interativo
  - [ ] Timeline interativa com marcos legais
  - [ ] Componentes de cards conceituais

### 📋 Ready to Start
- [ ] Importar dados BNCC (anexo_mapeamento_bncc.md)
  - [ ] Parse CSV/JSON
  - [ ] Seed database com seed script
  - [ ] Validar integridade dos dados

- [ ] Seção ENTENDER - Framework Conceitual
  - [ ] 4 Conceitos Críticos de Buckingham
  - [ ] 3 Eixos EducaMídia (Ler/Escrever/Participar)
  - [ ] Quiz interativo por conceito
  - [ ] Comparação interativa 6º-9º vs Ensino Médio

- [ ] Gerador de Planejamento v1
  - [ ] Etapa 1: Contexto (segmento, ano, componente)
  - [ ] Etapa 2: Seleção de habilidades (filtros automáticos)
  - [ ] Etapa 3: Conceitos críticos
  - [ ] Etapa 4: Estrutura da sequência
  - [ ] Etapa 5: Banco de recursos
  - [ ] Etapa 6: Revisão e exportação (PDF/DOCX)

- [ ] Biblioteca de Planos Prontos
  - [ ] Criar 20 planos exemplo
  - [ ] Página com filtros avançados
  - [ ] Card com preview
  - [ ] Sistema de likes/comments

- [ ] Dashboard Pessoal Básico
  - [ ] Página /dashboard
  - [ ] Meus planejamentos
  - [ ] Indicador de progresso
  - [ ] Ações rápidas

### 🎯 Metrics (Fase 1)
- [ ] Performance
  - [ ] Lighthouse score > 80
  - [ ] FCP < 1.5s
  - [ ] LCP < 2.5s

- [ ] Qualidade
  - [ ] TypeScript strict mode sem erros
  - [ ] >80% test coverage (futuro: add testes)
  - [ ] Zero console errors

- [ ] Accessibility
  - [ ] WCAG 2.1 Level AA
  - [ ] Teclado navegável
  - [ ] Screen reader friendly

---

## Fase 2: Expansão (Semanas 5-8)

### 📚 Seção Formação
- [ ] 3 Trilhas de Aprendizagem
  - [ ] Trilha Básica (4h)
    - [ ] Módulo 1: Fundamentos
    - [ ] Módulo 2: Marco Legal
    - [ ] Módulo 3: Framework
  
  - [ ] Trilha Intermediária (8h)
    - [ ] Módulo 1: Planejamento Transversal
    - [ ] Módulo 2: Análise Crítica
    - [ ] Módulo 3: Produção Criativa

  - [ ] Trilha Avançada (12h)
    - [ ] Módulo 1: IA e Mídias Sintéticas
    - [ ] Módulo 2: Cidadania Digital
    - [ ] Módulo 3: Projeto Interdisciplinar

- [ ] Sistema de Quiz interativo
- [ ] Certificados digitais
- [ ] Badges e gamificação

### 🎬 Midiateca Completa
- [ ] Importar 100+ recursos
- [ ] Upload de vídeos (YouTube embeds)
- [ ] Infográficos e PDFs
- [ ] Roteiros de análise por recurso
- [ ] Sistema de favoritos

### 🛠️ Ferramentas Digitais
- [ ] Curadoria de ferramentas gratuitas
- [ ] Tutoriais passo a passo
- [ ] Vídeos demonstrativos
- [ ] Casos de uso em aula

### 👥 Comunidade v1
- [ ] Fórum de discussão
  - [ ] Categorias (Dúvidas, Práticas, Casos, Desafios)
  - [ ] Sistema de tags
  - [ ] Likes e comentários

### 📊 Dashboard Expandido
- [ ] Estatísticas de uso
- [ ] Grafos de progresso
- [ ] Recomendações personalizadas

---

## Fase 3: Otimização (Semanas 9-12)

### 📱 Mobile App
- [ ] React Native/Flutter
- [ ] Sync offline
- [ ] Push notifications

### 🤖 Recursos Avançados
- [ ] Dashboard Institucional
  - [ ] Para coordenadores pedagógicos
  - [ ] Monitoramento de rede
  - [ ] Diagnóstico inicial
  - [ ] Plano de formação continuada

- [ ] Sistema de Recomendações por IA
  - [ ] Sugestão de planos
  - [ ] Conteúdo personalizado
  - [ ] Próximos passos sugeridos

- [ ] Webinários Integrados
  - [ ] Agenda de lives
  - [ ] Arquivo de gravações
  - [ ] Materiais complementares

### 🔌 Integrações
- [ ] Login com Google/Microsoft
- [ ] Integração com Google Drive
- [ ] Sincronização com LMS (Moodle, Classroom)
- [ ] Calendário de eventos

### 📈 Analytics Avançado
- [ ] Dashboard de insights
- [ ] Heatmaps de uso
- [ ] Relatórios PDF
- [ ] Export de dados (LGPD)

---

## Tecnologia & Infra

### Frontend (Ongoing)
- [ ] Testing (Jest + React Testing Library)
  - [ ] Unit tests: 60% coverage
  - [ ] Integration tests
  - [ ] E2E com Playwright/Cypress
  
- [ ] Performance
  - [ ] Webpack analysis
  - [ ] Image optimization
  - [ ] Code splitting
  - [ ] Caching strategy

- [ ] Accessibility
  - [ ] ARIA labels
  - [ ] Keyboard navigation
  - [ ] Color contrast
  - [ ] Screen reader testing

### Backend (Ongoing)
- [ ] Testing
  - [ ] Unit tests (services)
  - [ ] Integration tests (routes)
  - [ ] API contract tests

- [ ] Segurança
  - [ ] Rate limiting
  - [ ] Input validation (Zod)
  - [ ] CORS configuration
  - [ ] CSRF protection
  - [ ] LGPD compliance

- [ ] Performance
  - [ ] Database query optimization
  - [ ] Caching layer (Redis)
  - [ ] Pagination
  - [ ] Index optimization

### DevOps (Future)
- [ ] CI/CD Pipeline
  - [ ] GitHub Actions
  - [ ] Automated testing
  - [ ] Pre-deployment checks

- [ ] Monitoring
  - [ ] Error tracking (Sentry)
  - [ ] Performance monitoring
  - [ ] Uptime monitoring

- [ ] Deployment
  - [ ] Docker containerization
  - [ ] Kubernetes orchestration (futuro)
  - [ ] Auto-scaling

---

## Dependências & Blockers

- [ ] Dados BNCC completos (✅ Já temos!)
  - Usar: `/home/sergio/Área de trabalho/letramento_digital/anexo_mapeamento_bncc.md`

- [ ] Autorização para usar recursos (vídeos, imagens)
  - Priorizar: YouTube, Creative Commons, Open Access

- [ ] Integração com plataformas educacionais
  - Contato com MEC/Secretarias de Educação

---

## Success Metrics

### Fase 1 (MVP)
- 100+ usuários registrados
- 50+ planos criados/ano
- 95% uptime
- <500ms response time

### Fase 2
- 1.000+ usuários ativos
- 500+ planos públicos
- 2.000+ horas de conteúdo formativo
- NPS > 50

### Fase 3
- 5.000+ usuários
- 10.000+ planos compartilhados
- 50% de retenção mensal
- NPS > 70

---

## Notes

- Adicionar testes conforme features são implementadas
- Documentação deve estar sempre atualizada
- Code reviews em todo PR
- Deploy staging antes de production
- Feedback de usuários beta a cada sprint
