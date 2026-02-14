import { create } from 'zustand'
import { User } from '@/types'

interface AuthStore {
  user: User | null
  token: string | null
  isLoading: boolean
  error: string | null
  setUser: (user: User) => void
  setToken: (token: string) => void
  logout: () => void
  setError: (error: string | null) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  isLoading: false,
  error: null,
  setUser: (user) => set({ user }),
  setToken: (token) => {
    localStorage.setItem('token', token)
    set({ token })
  },
  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    set({ user: null, token: null })
  },
  setError: (error) => set({ error }),
}))
