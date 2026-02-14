import { PrismaClient, Eixo, ConceituoCritico } from '@prisma/client'

const prisma = new PrismaClient()

// Mapeamento manual baseado na análise dos dados BNCC
const habilidadesData = [
  // 6º ANO
  {
    codigo: 'EF06CO10',
    descricao: 'Analisar o consumo de tecnologia, obsolescência e sustentabilidade',
    eixo: Eixo.LER, // Análise Crítica
    conceituoCritico: ConceituoCritico.REPRESENTACAO,
    anoEscolar: 6,
    componente: 'Ciências',
    objetosConhecimento: ['Obsolescência programada', 'lixo eletrônico', 'consumo consciente']
  },
  {
    codigo: 'EF-AC1',
    descricao: 'Refletir sobre autoria e propósito de mensagens midiáticas',
    eixo: Eixo.LER,
    conceituoCritico: ConceituoCritico.LINGUAGEM,
    anoEscolar: 6,
    componente: 'Língua Portuguesa',
    objetosConhecimento: ['Propósitos das mídias', 'emissor/receptor/prossumidor', 'autoria']
  },
  {
    codigo: 'EF-LI1',
    descricao: 'Avaliar confiabilidade, compreender fake news e recorrer a múltiplas fontes',
    eixo: Eixo.LER,
    conceituoCritico: ConceituoCritico.REPRESENTACAO,
    anoEscolar: 6,
    componente: 'História',
    objetosConhecimento: ['Fontes confiáveis', 'fake news', 'verificação']
  },
  {
    codigo: 'EF-AE1',
    descricao: 'Criar mensagens midiáticas sobre temas das juventudes',
    eixo: Eixo.ESCREVER, // Autoexpressão
    conceituoCritico: ConceituoCritico.PRODUCAO,
    anoEscolar: 6,
    componente: 'Artes',
    objetosConhecimento: ['Protótipos', 'pautas juvenis', 'linguagem visual digital']
  },

  // 7º ANO
  {
    codigo: 'EF-AC2',
    descricao: 'Analisar criticamente imagens, gráficos e mapas, identificando vieses',
    eixo: Eixo.LER,
    conceituoCritico: ConceituoCritico.REPRESENTACAO,
    anoEscolar: 7,
    componente: 'Matemática/Geografia',
    objetosConhecimento: ['Leitura visual', 'pontos de vista', 'viés implícito/explícito']
  },

  // 8º ANO
  {
    codigo: 'EF08CO11',
    descricao: 'Avaliar precisão, relevância e vieses em fontes eletrônicas',
    eixo: Eixo.LER,
    conceituoCritico: ConceituoCritico.REPRESENTACAO,
    anoEscolar: 8,
    componente: 'Língua Portuguesa',
    objetosConhecimento: ['Tipos de fonte', 'critérios de confiabilidade', 'vieses']
  },

  // 9º ANO
  {
    codigo: 'EF-AC4',
    descricao: 'Identificar manipulação em propaganda e teorias conspiratórias',
    eixo: Eixo.LER,
    conceituoCritico: ConceituoCritico.REPRESENTACAO,
    anoEscolar: 9,
    componente: 'História',
    objetosConhecimento: ['Propaganda', 'teorias conspiratórias', 'negacionismo']
  },
]

async function main() {
  console.log('🌱 Starting PostgreSQL seed...')

  // Limpar habilidades existentes primeiro (opcional, cuidado em prod)
  // await prisma.habilidade.deleteMany()

  for (const h of habilidadesData) {
    const existing = await prisma.habilidade.findUnique({
      where: { codigo: h.codigo }
    })

    if (!existing) {
      await prisma.habilidade.create({
        data: h
      })
      console.log(`✅ Habilidade criada: ${h.codigo}`)
    } else {
      console.log(`ℹ️ Habilidade já existe: ${h.codigo}`)
    }
  }

  // Criar um usuário admin de exemplo
  const adminEmail = 'admin@educamidia.com'
  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } })

  if (!existingAdmin) {
    // Em um app real, use bcrypt para hash, aqui é só exemplo, o controller fará o hash
    // Mas para seed direto, precisamos simular um hash ou permitir login sem hash no dev (não recomendado)
    // Vamos assumir que criaremos via API depois, ou criar um usuário com senha "admin123" (hash simulado)
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Administrador',
        password: '$2a$10$X7V.j5T.tFk.qW.zX.yU.eO.pQ.rS.tU.vW.xY.z', // Hash mock para "admin123" (placeholder)
        role: 'ADMIN',
        components: ['Tecnologia'],
        yearsTeaching: [2025]
      }
    })
    console.log(`✅ Admin user created: ${adminEmail}`)
  }

  console.log('✅ Seed finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
