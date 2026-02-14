import axios, { AxiosInstance } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Auth Service
export const authService = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  register: (data: any) =>
    api.post('/auth/register', data),
  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },
}

// Habilidades Service
export const habilidadesService = {
  list: (params?: any) =>
    api.get('/habilidades', { params }),
  getByAno: (ano: number) =>
    api.get(`/habilidades/ano/${ano}`),
  getByComponente: (componente: string) =>
    api.get(`/habilidades/componente/${componente}`),
}

// Planos Service
export const planosService = {
  list: (params?: any) =>
    api.get('/planos', { params }),
  create: (data: any) =>
    api.post('/planos', data),
  update: (id: string, data: any) =>
    api.put(`/planos/${id}`, data),
  delete: (id: string) =>
    api.delete(`/planos/${id}`),
  getById: (id: string) =>
    api.get(`/planos/${id}`),
  share: (id: string) =>
    api.post(`/planos/${id}/share`, {}),
  like: (id: string) =>
    api.post(`/planos/${id}/like`, {}),
}

// Recursos Service
export const recursosService = {
  list: (params?: any) =>
    api.get('/recursos', { params }),
  getById: (id: string) =>
    api.get(`/recursos/${id}`),
  search: (query: string) =>
    api.get('/recursos/search', { params: { q: query } }),
}

// Formação Service
export const formacaoService = {
  trilhas: (params?: any) =>
    api.get('/trilhas', { params }),
  modulos: (trilhaId: string) =>
    api.get(`/trilhas/${trilhaId}/modulos`),
  completarModulo: (moduloId: string) =>
    api.post(`/modulos/${moduloId}/complete`, {}),
  resolverQuiz: (quizId: string, respostas: any) =>
    api.post(`/quiz/${quizId}/submit`, respostas),
}

// Comunidade Service
export const comunidadeService = {
  postsForum: (params?: any) =>
    api.get('/forum', { params }),
  criarPost: (data: any) =>
    api.post('/forum', data),
  comentar: (postId: string, conteudo: string) =>
    api.post(`/forum/${postId}/comentarios`, { conteudo }),
}

// User Service
export const userService = {
  profile: () =>
    api.get('/user/profile'),
  updateProfile: (data: any) =>
    api.put('/user/profile', data),
  dashboard: () =>
    api.get('/user/dashboard'),
}

export default api
