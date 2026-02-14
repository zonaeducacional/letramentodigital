# Guia de Desenvolvimento

Instruções para desenvolvedores trabalhando no projeto.

## Setup Inicial

### 1. Clone e Instale

```bash
# Clone o repositório
git clone https://github.com/seu-org/portal-educacao-midiatica.git
cd portal-educacao-midiatica

# Instale dependências
npm install

# Instale workspace dependencies
npm install --workspace=frontend
npm install --workspace=backend
```

### 2. Configure Ambiente

```bash
# Copie arquivo de example
cp .env.example .env.local

# Preencha as variáveis necessárias:
# - DATABASE_URL: postgresql://user:password@localhost:5432/db
# - JWT_SECRET: uma chave secreta aleatória
# - NEXT_PUBLIC_API_URL: http://localhost:3001/api
```

### 3. Configure Database

```bash
cd backend

# Crie banco de dados (PostgreSQL)
createdb educacao_midiatica

# Execute migrations Prisma
npm run db:push

# (Opcional) Abra Prisma Studio
npm run db:studio
```

### 4. Rode em Desenvolvimento

```bash
# Na raiz do projeto
npm run dev

# O script vai iniciar:
# - Frontend em http://localhost:3000
# - Backend em http://localhost:3001
```

## Estrutura de Diretórios

### Frontend

```
frontend/src/
├── app/                  # Next.js app router
│   ├── layout.tsx       # Layout root
│   ├── page.tsx         # Home page
│   ├── (auth)/          # Group - páginas de auth
│   ├── (dashboard)/     # Group - área pessoal  
│   └── globals.css      # Estilos globais
│
├── components/          # Componentes React
│   ├── common/          # Reutilizáveis
│   ├── features/        # Feature-specific
│   └── layout/          # Layout components
│
├── services/            # APIs e HTTP calls
│   └── api.ts          # Configuração axios
│
├── store/               # Zustand stores
│   └── auth.ts         # Auth store
│
├── types/               # TypeScript interfaces
│   └── index.ts        # Tipos aplicação
│
└── utils/               # Helper functions
```

### Backend

```
backend/src/
├── index.ts             # Entry point
├── routes/              # Express routes
│   ├── auth.ts
│   ├── habilidades.ts
│   └── planos.ts
│
├── controllers/         # Business logic
│   ├── auth.ts
│   └── planos.ts
│
├── services/            # Database operations
│   ├── user.service.ts
│   └── plano.service.ts
│
├── middlewares/         # Express middlewares
│   ├── auth.ts
│   └── validation.ts
│
└── db/                  # Database config
    └── client.ts
```

## Convenções de Código

### Naming

**Arquivos:**
- Components: PascalCase (Header.tsx)
- Utils: camelCase (formatDate.ts)
- Types: PascalCase (Habilidade.ts)

**Variáveis/Funções:**
- camelCase: `const handleClick = () => {}`
- Booleans com is/has: `isLoading`, `hasError`

### Componentes React

```typescript
// ✅ BOM
export interface HeaderProps {
  title: string
  onClose?: () => void
}

export const Header: React.FC<HeaderProps> = ({ title, onClose }) => {
  return <header>{title}</header>
}

// ❌ RUIM
export const Header = ({ title, onClose }) => {
  ...
}
```

### Backend

```typescript
// ✅ BOM - Controllers
export const createPlano = async (req: Request, res: Response) => {
  const { id } = req.user
  const data = req.body
  
  try {
    const plano = await planoService.create(id, data)
    res.status(201).json(plano)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// ✅ BOM - Services
export const planoService = {
  async create(userId: string, data: any) {
    return await prisma.planoDidatico.create({
      data: {
        ...data,
        autorId: userId,
      },
      include: {
        habilidades: true,
      },
    })
  },
}
```

## Workflow Git

### Branch Naming

```
feature/nome-feature          # Nova funcionalidade
bugfix/breve-descricao        # Correção de bug
docs/melhorias-documentacao   # Documentação
refactor/melhorias-codigo     # Refatoração
```

### Commit Messages

```
feat: adicionar gerador de planejamento
fix: corrigir filtro de habilidades
docs: atualizar API endpoints
refactor: simplificar lógica de autenticação
test: adicionar testes de auth
```

### Pull Requests

1. Atualize sua branch com `main`
2. Crie PR com descrição clara
3. Aguarde review (mín. 1 aprovação)
4. Resolve comentários
5. Merge com "Squash and merge"

## Adicionando Novas Features

### Exemplo: Nova Seção "Recursos"

**1. Criar tipos:**
```typescript
// frontend/src/types/index.ts
export interface Recurso {
  id: string
  titulo: string
  // ... resto do tipo
}
```

**2. Criar API call:**
```typescript
// frontend/src/services/api.ts
export const recursosService = {
  list: (params?: any) =>
    api.get('/recursos', { params }),
  getById: (id: string) =>
    api.get(`/recursos/${id}`),
}
```

**3. Criar componente:**
```typescript
// frontend/src/components/features/RecursoCard.tsx
export const RecursoCard: React.FC<RecursoCardProps> = ({ recurso }) => {
  return (
    <div className="card p-6">
      <h3>{recurso.titulo}</h3>
      <p>{recurso.descricao}</p>
    </div>
  )
}
```

**4. Criar página:**
```typescript
// frontend/src/app/recursos/page.tsx
export default function RecursosPage() {
  const [recursos, setRecursos] = useState([])
  
  useEffect(() => {
    recursosService.list().then(({ data }) => setRecursos(data))
  }, [])
  
  return <div>{recursos.map(r => <RecursoCard key={r.id} recurso={r} />)}</div>
}
```

**5. Backend route:**
```typescript
// backend/src/routes/recursos.ts
router.get('/', async (req, res) => {
  const recursos = await prisma.recurso.findMany({
    where: {
      tipo: req.query.tipo,
    },
  })
  res.json(recursos)
})
```

## Testing

### Frontend (Jest + React Testing Library)

```bash
# Rodar testes
npm run test --workspace=frontend

# Watch mode
npm run test:watch --workspace=frontend
```

```typescript
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/Button'

test('renders button', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
```

### Backend (Jest + Supertest)

```bash
npm run test --workspace=backend
```

```typescript
import request from 'supertest'
import app from '@/index'

describe('Auth Routes', () => {
  it('POST /auth/login', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@test.com',
        password: 'password123',
      })
    
    expect(res.status).toBe(200)
    expect(res.body.token).toBeDefined()
  })
})
```

## Debugging

### Frontend
```bash
# Chrome DevTools
npm run dev
# Abra http://localhost:3000
# F12 para DevTools
```

### Backend
```bash
# Insomnia/Postman
curl -X GET http://localhost:3001/api/health

# Node Inspector
node --inspect dist/index.js
# chrome://inspect
```

### Database
```bash
# Prisma Studio
npm run db:studio --workspace=backend

# psql
psql -U user -d educacao_midiatica
# SELECT * FROM users;
```

## Performance

### Frontend
- Use `React.memo()` para componentes que recebem props complexas
- Lazy load images com `next/image`
- Code splitting automático com Next.js

### Backend
- AddIndex em campos consultados frequentemente
- Use select específico no Prisma
- Implemente paginação

## Troubleshooting

### "ENOENT: no such file or directory"
```bash
# Limpe node_modules
rm -rf node_modules
npm install
```

### "DATABASE_URL not found"
```bash
# Verifique .env.local
cat .env.local

# Database não rodando?
psql -l  # verificar
```

### Port 3000/3001 em uso
```bash
# Encontre processo
lsof -i :3000
# Mate processo
kill -9 <PID>
```

## Recursos Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Prisma Docs](https://www.prisma.io/docs/)
- [Express Docs](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
