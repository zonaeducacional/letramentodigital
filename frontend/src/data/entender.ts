// Dados sobre os 4 Conceitos Críticos de Buckingham
export interface ConceituoCritico {
  id: string
  nome: string
  descricao: string
  perguntas: string[]
  exemplos: string[]
  anoRecomendado: number[]
}

export const conceitos: ConceituoCritico[] = [
  {
    id: 'linguagem',
    nome: 'Linguagem',
    descricao:
      'Compreender como a mídia usa símbolos, sons, imagens e palavras para criar significado. Cada mídia tem suas próprias linguagens e convenções.',
    perguntas: [
      'Que técnicas visuais foram usadas?',
      'Como o som e a música influenciam a mensagem?',
      'Qual é a linguagem expressa? Formal, informal, coloquial?',
      'Quais cores, tipografia e layout foram escolhidos?',
    ],
    exemplos: [
      'Análise de um comercial: cores quentes para criar urgência',
      'Filme: trilha sonora que manipula emoções',
      'Rede social: uso de emojis para expressar sentimentos',
      'Notícia: manchete chamativa vs corpo do texto equilibrado',
    ],
    anoRecomendado: [6, 7, 8, 9],
  },
  {
    id: 'representacao',
    nome: 'Representação',
    descricao:
      'Analisar como as pessoas, grupos e ideias são representadas (ou não representadas) nas mídias. Reconhecer vieses, estereótipos e exclusões deliberadas.',
    perguntas: [
      'Quem está representado e quem está ausente?',
      'Como são retratadas diferentes etnias, gêneros e classes sociais?',
      'Quais são os estereótipos presentes?',
      'Qual visão de mundo é apresentada como "normal"?',
    ],
    exemplos: [
      'Análise de propagandas: quem aparece nos comerciais de produtos premium?',
      'Noticiários: cobertura desproporcional de certos grupos',
      'Redes sociais: filtros que alteram aparência',
      'Filmes: representação de mulheres em posições de poder',
    ],
    anoRecomendado: [7, 8, 9, 10, 11, 12],
  },
  {
    id: 'producao',
    nome: 'Produção',
    descricao:
      'Entender como as mídias são produzidas, as decisões técnicas e financeiras envolvidas. Quem tem poder de produzir? Com que recursos? Com que intenções?',
    perguntas: [
      'Quem é o produtor? Quem financiou isso?',
      'Qual é a intenção do produtor?',
      'Que tecnologia foi usada?',
      'Quanto custou produzir? Quem banca?',
    ],
    exemplos: [
      'Deep fake: tecnologia usada para criar vídeos falsos',
      'YouTube: algoritmo que recomenda conteúdo',
      'Jornal: linhas editoriais e donos',
      'Influenciador: patrocínios escondidos em posts',
    ],
    anoRecomendado: [8, 9, 10, 11, 12],
  },
  {
    id: 'publico',
    nome: 'Público',
    descricao:
      'Refletir sobre como diferentes públicos interpretam a mesma mensagem de formas diferentes. Considerar impacto, recepção e resposta ativa do público.',
    perguntas: [
      'Para qual público foi feito?',
      'Como diferentes grupos podem interpretar diferente?',
      'Qual é meu papel como espectador?',
      'Como os ambientes moldam a interpretação?',
    ],
    exemplos: [
      'Mesma piada: cômica para alguns, ofensiva para outros',
      'Vídeo viral: recebe interpretações contraditórias nos comentários',
      'Publicidade: diferentes segmentações para diferentes públicos',
      'Notícia: viés político de quem consome',
    ],
    anoRecomendado: [6, 7, 8, 9, 10, 11, 12],
  },
]

// Dados sobre os 3 Eixos EducaMídia
export interface EixoEducamidia {
  id: string
  nome: string
  descPequena: string
  descricao: string
  competencias: string[]
  metodologias: string[]
  ferramentas: string[]
}

export const eixos: EixoEducamidia[] = [
  {
    id: 'ler',
    nome: '🔍 LER',
    descPequena: 'Análise Crítica de Mídias',
    descricao:
      'Desenvolver pensamento crítico para análise, avaliação e interpretação de conteúdos midiáticos. Questionar fontes, identificar vieses, verificar fatos.',
    competencias: [
      'Verificar confiabilidade de fontes',
      'Identificar fake news e desinformação',
      'Reconhecer vieses editoriais',
      'Analisar persuasão e propaganda',
      'Compreender algoritmos e filtragem',
    ],
    metodologias: [
      'Fact-checking em grupo',
      'Análise de discurso',
      'Comparação de fontes',
      'Debates estruturados',
      'Estudos de caso',
    ],
    ferramentas: [
      'Google Reverse Image Search',
      'Fact-check.com.br',
      'NewsGuard',
      'Checker.io',
    ],
  },
  {
    id: 'escrever',
    nome: '✍️ ESCREVER',
    descPequena: 'Produção e Autoexpressão',
    descricao:
      'Criar conteúdos midiáticos com responsabilidade ética, utilizando múltiplas linguagens. Expressar-se de forma criativa e fundamentada.',
    competencias: [
      'Produzir vídeos educativos',
      'Criar infográficos e apresentações',
      'Escrever com clareza e propósito',
      'Usar ética nas redes sociais',
      'Editar e curadores conteúdo',
    ],
    metodologias: [
      'Projetos de produção colaborativa',
      'Tutoriais passo a passo',
      'Criação de campanhas temáticas',
      'Editing e post-produção',
      'Storytelling digital',
    ],
    ferramentas: [
      'Canva',
      'CapCut',
      'OBS Studio',
      'Audacity',
      'Anchor/Spotify Podcasts',
    ],
  },
  {
    id: 'participar',
    nome: '🤝 PARTICIPAR',
    descPequena: 'Cidadania Digital',
    descricao:
      'Engajar-se de forma responsável nas redes sociais, conhecer direitos digitais, resolver conflitos online e participar criticamente da vida pública digital.',
    competencias: [
      'Respeito e empatia online',
      'Conhecer direitos e deveres digitais',
      'Combater cyberbullying',
      'Entender privacidade e LGPD',
      'Participação civic responsável',
    ],
    metodologias: [
      'Campanhas de conscientização',
      'Mediação de conflitos online',
      'Debates sobre direitos digitais',
      'Análise de políticas de privacidade',
      'Projetos de engajamento comunitário',
    ],
    ferramentas: [
      'Discord/Slack (para comunidades)',
      'Fóruns de discussão',
      'Redes sociais éticas',
      'Documentos colaborativos',
    ],
  },
]

// Dados de Marcos Legais
export interface MarcoLegal {
  data: string
  titulo: string
  descricao: string
  destaque?: boolean
  implicacoes?: string[]
}

export const marcosLegais: MarcoLegal[] = [
  {
    data: 'Março 2025',
    titulo: 'Resolução CNE/CEB nº2',
    descricao:
      'Estabelece a obrigatoriedade da educação digital e midiática a partir de 2026 em todos os currículos da educação básica das escolas brasileiras.',
    destaque: true,
    implicacoes: [
      'Implementação em todas as redes (pública e privada)',
      'Formação continuada de professores obrigatória',
      'Reorganização curricular em 3 etapas',
      'Integração transversal em componentes',
    ],
  },
  {
    data: 'Abril 2025',
    titulo: 'Lei nº 15.100/2025',
    descricao:
      'Define regras para o uso pedagógico de dispositivos celulares nas escolas e a integração de tecnologias digitais e midiáticas de forma orientada.',
    implicacoes: [
      'Celular pode ser recurso pedagógico',
      'Delimita horários de uso',
      'Exige concordância de pais/responsáveis',
      'Protege dados de estudantes',
    ],
  },
  {
    data: '2022',
    titulo: 'BNCC Computação',
    descricao:
      'Currículo de Computação da BNCC com 17 habilidades para anos finais e 13 para ensino médio, envolvendo pensamento computacional e cultura digital.',
    implicacoes: [
      '17 habilidades para 6º-9º ano',
      '13 habilidades para Ensino Médio',
      '3 eixos estruturantes',
      'Integrada com educação midiática',
    ],
  },
  {
    data: '2024-2034',
    titulo: 'PNE - Plano Nacional de Educação',
    descricao: 'Estabelece metas de educação digital e inclusão tecnológica nas escolas brasileiras.',
    implicacoes: [
      'Ampliação de internet nas escolas',
      'Laboratórios de informática',
      'Formação docente em tecnologia',
      'Equidade no acesso digital',
    ],
  },
]

// Glossário de Termos
export interface TermoGlossario {
  termo: string
  definicao: string
  exemplo: string
  sinonimos?: string[]
  verMais?: string[]
}

export const glossario: TermoGlossario[] = [
  {
    termo: 'Desinformação',
    definicao:
      'Quando informações falsas, imprecisas ou enganosas são compartilhadas, independentemente de intencionalidade. Pode ser acidental (erro) ou proposital.',
    exemplo:
      'Um vídeo que afirma que um remédio cura uma doença quando não há comprovação científica.',
    sinonimos: ['Fake news', 'notícia falsa', 'informação enganosa'],
    verMais: ['Verificação de fatos', 'Fontes confiáveis'],
  },
  {
    termo: 'Deep Fake',
    definicao:
      'Vídeos ou áudios manipulados usando inteligência artificial para fazer uma pessoa parecer estar fazendo algo que nunca fez. Combina deep + fake.',
    exemplo:
      'Um vídeo editado para parecer que um político disse algo que nunca disse',
    sinonimos: ['Vídeo manipulado', 'Síntese facial'],
    verMais: ['Inteligência Artificial', 'Autenticidade digital'],
  },
  {
    termo: 'Bolha Algorítmica',
    definicao:
      'Fenômeno onde algoritmos mostram apenas conteúdo similar ao que você já consome, criando uma "bolha" de informações parciais e personalizadas.',
    exemplo:
      'Se você segue apenas perfis de um partido político, seu feed só mostra posts daquele lado político.',
    sinonimos: ['Câmara de eco', 'Filter bubble'],
    verMais: ['Algoritmo', 'Personalização'],
  },
  {
    termo: 'Verificação de Fatos',
    definicao:
      'Processo sistemático de checagem de afirmações contra evidências, fontes confiáveis e dados comprovados.',
    exemplo:
      'Uma agência de fact-checking verifica se uma estatística em um discurso politique é verdadeira.',
    sinonimos: ['Fact-checking', 'Checagem'],
    verMais: ['Fontes confiáveis', 'Metodologia científica'],
  },
  {
    termo: 'Discurso de Ódio',
    definicao:
      'Conteúdo que promove violência, discrimination ou aversão contra pessoas por motivos de raça, religião, gênero, orientação sexual ou origem.',
    exemplo: 'Posts ou mensagens que depreciam um grupo social específico.',
    sinonimos: ['Hate speech', 'Conteúdo ofensivo'],
    verMais: ['Cyberbullying', 'Respeito online'],
  },
  {
    termo: 'Coleta de Dados',
    definicao:
      'Processo onde plataformas digitais coletam informações sobre usuários: hábitos, preferências, localização, etc., geralmente sem consentimento explícito.',
    exemplo:
      'Seu celular rastreia para qual lugar você vai e depois aparece publicidade de lojas próximas.',
    sinonimos: ['Rastreamento', 'Monitoramento'],
    verMais: ['Privacidade', 'LGPD'],
  },
  {
    termo: 'LGPD',
    definicao:
      'Lei Geral de Proteção de Dados Pessoais - Lei brasileira que regula como empresas devem coletar, armazenar e usar dados pessoais dos cidadãos.',
    exemplo:
      'Uma rede social deve ter sua permissão para coletar e vender seus dados de navegação.',
    sinonimos: ['Lei 13.709/2018', 'GDPR brasileiro'],
    verMais: ['Privacidade', 'Direitos digitais'],
  },
  {
    termo: 'Curadoria de Conteúdo',
    definicao:
      'Processo de seleção, organização e compartilhamento de informações relevantes para um público específico, garantindo qualidade e originalidade.',
    exemplo:
      'Um professor que seleciona os 5 melhores artigos sobre um tema e compartilha com a turma.',
    sinonimos: ['Cura de conteúdo', 'Filtragem informacional'],
    verMais: ['Hierarquia de informação', 'Fontes'],
  },
]
