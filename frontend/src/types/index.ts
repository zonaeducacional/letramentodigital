// User & Auth
export interface User {
  id: string
  email: string
  name: string
  role: 'teacher' | 'coordinator' | 'admin'
  profileImage?: string
  components: string[]
  yearsTeaching: number[]
  createdAt: Date
}

export interface AuthToken {
  token: string
  refreshToken: string
  expiresIn: number
}

// Educational Content
export interface Habilidade {
  id: string
  codigo: string
  descricao: string
  eixo: 'LER' | 'ESCREVER' | 'PARTICIPAR'
  conceituoCritico: 'Linguagem' | 'Representação' | 'Produção' | 'Público'
  anoEscolar: number
  componente: string
  objetosConhecimento: string[]
}

export interface PlanoDidatico {
  id: string
  titulo: string
  descricao: string
  anoEscolar: number
  componentes: string[]
  duracao: number // em aulas
  eixos: Array<'LER' | 'ESCREVER' | 'PARTICIPAR'>
  habilidades: Habilidade[]
  objetivos: string[]
  problematizacao: string
  desenvolvimento: string
  producaoAvaliacao: string
  recursos: Recurso[]
  autorId: string
  compartilhado: boolean
  curtidas: number
  createdAt: Date
  updatedAt: Date
}

export interface Recurso {
  id: string
  titulo: string
  tipo: 'video' | 'articulo' | 'infografico' | 'ferramenta' | 'dinamica' | 'avaliacao'
  descricao: string
  url?: string
  anoRecomendado: number
  eixo: 'LER' | 'ESCREVER' | 'PARTICIPAR'
  tags: string[]
  roteiros?: string
  perguntasOrientadoras?: string[]
  atividades?: Atividade[]
}

export interface Atividade {
  id: string
  titulo: string
  descricao: string
  duracao: number
  metodologia: string
  instrucoes: string
}

// Learning Paths
export interface TrilhaAprendizagem {
  id: string
  titulo: string
  descricao: string
  nivel: 'basico' | 'intermediario' | 'avancado'
  duracao: number // em horas
  modulos: Modulo[]
  certificado: boolean
}

export interface Modulo {
  id: string
  titulo: string
  descricao: string
  conteudo: string
  duracao: number
  ordem: number
  quiz?: Quiz
}

export interface Quiz {
  id: string
  questoes: Questao[]
  pontuacaoMinima: number
}

export interface Questao {
  id: string
  titulo: string
  tipo: 'multipla' | 'discursiva'
  opcoes?: string[]
  respostaCorreta?: string
}

// Community
export interface PostForum {
  id: string
  titulo: string
  conteudo: string
  categoria: 'duvidas' | 'praticas' | 'casos' | 'desafios'
  autorId: string
  curtidas: number
  comentarios: Comentario[]
  tags: string[]
  createdAt: Date
}

export interface Comentario {
  id: string
  conteudo: string
  autorId: string
  createdAt: Date
  respostas: Comentario[]
}

// Dashboard User
export interface DashboardUser {
  user: User
  planejamentosSalvos: PlanoDidatico[]
  formacaoConcluida: TrilhaAprendizagem[]
  proximosCursos: TrilhaAprendizagem[]
  conexoes: User[]
  contribuicoes: {
    planosCompartilhados: number
    avaliacoes: number
    comentarios: number
  }
}

// Pagination
export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}
