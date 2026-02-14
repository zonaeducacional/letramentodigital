import 'dotenv/config'
import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import 'express-async-errors'

// Import routes when ready
// import authRoutes from './routes/auth'
// import habilidadesRoutes from './routes/habilidades'

const app: Express = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Routes
import authRoutes from './routes/auth'
import habilidadesRoutes from './routes/habilidades'
import planosRoutes from './routes/planos'

app.use('/api/auth', authRoutes)
app.use('/api/habilidades', habilidadesRoutes)
app.use('/api/planos', planosRoutes)

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err)
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
