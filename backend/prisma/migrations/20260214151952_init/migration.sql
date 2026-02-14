-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'TEACHER',
    "profileImage" TEXT,
    "components" TEXT NOT NULL DEFAULT '[]',
    "yearsTeaching" TEXT NOT NULL DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "habilidades" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "codigo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "eixo" TEXT NOT NULL,
    "conceituoCritico" TEXT NOT NULL,
    "anoEscolar" INTEGER NOT NULL,
    "componente" TEXT NOT NULL,
    "objetosConhecimento" TEXT NOT NULL DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "planos_didaticos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "anoEscolar" INTEGER NOT NULL,
    "componentes" TEXT NOT NULL DEFAULT '[]',
    "duracao" INTEGER NOT NULL,
    "eixos" TEXT NOT NULL DEFAULT '[]',
    "objetivos" TEXT NOT NULL DEFAULT '[]',
    "problematizacao" TEXT,
    "desenvolvimento" TEXT,
    "producaoAvaliacao" TEXT,
    "autorId" TEXT NOT NULL,
    "compartilhado" BOOLEAN NOT NULL DEFAULT false,
    "curtidas" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "planos_didaticos_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "recursos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "url" TEXT,
    "anoRecomendado" INTEGER,
    "eixo" TEXT NOT NULL,
    "tags" TEXT NOT NULL DEFAULT '[]',
    "roteiros" TEXT,
    "perguntasOrientadoras" TEXT NOT NULL DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "atividades" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,
    "metodologia" TEXT NOT NULL,
    "instrucoes" TEXT NOT NULL,
    "recursoId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "atividades_recursoId_fkey" FOREIGN KEY ("recursoId") REFERENCES "recursos" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "trilhas_aprendizagem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,
    "certificado" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "modulos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,
    "ordem" INTEGER NOT NULL,
    "trilhaId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "modulos_trilhaId_fkey" FOREIGN KEY ("trilhaId") REFERENCES "trilhas_aprendizagem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "quizzes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pontuacaoMinima" INTEGER NOT NULL DEFAULT 70,
    "moduloId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "quizzes_moduloId_fkey" FOREIGN KEY ("moduloId") REFERENCES "modulos" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "questoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "opcoes" TEXT NOT NULL DEFAULT '[]',
    "respostaCorreta" TEXT,
    "quizId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "questoes_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quizzes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "trilha_progressos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "usuarioId" TEXT NOT NULL,
    "trilhaId" TEXT NOT NULL,
    "percentualConcluido" INTEGER NOT NULL DEFAULT 0,
    "completado" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "trilha_progressos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "trilha_progressos_trilhaId_fkey" FOREIGN KEY ("trilhaId") REFERENCES "trilhas_aprendizagem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "post_forum" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "autorId" TEXT NOT NULL,
    "curtidas" INTEGER NOT NULL DEFAULT 0,
    "tags" TEXT NOT NULL DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "post_forum_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "comentarios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "conteudo" TEXT NOT NULL,
    "autorId" TEXT NOT NULL,
    "postId" TEXT,
    "respostaParaId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "comentarios_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "comentarios_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post_forum" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "comentarios_respostaParaId_fkey" FOREIGN KEY ("respostaParaId") REFERENCES "comentarios" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_HabilidadeToPlanoDidatico" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_HabilidadeToPlanoDidatico_A_fkey" FOREIGN KEY ("A") REFERENCES "habilidades" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_HabilidadeToPlanoDidatico_B_fkey" FOREIGN KEY ("B") REFERENCES "planos_didaticos" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PlanoDidaticoToRecurso" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PlanoDidaticoToRecurso_A_fkey" FOREIGN KEY ("A") REFERENCES "planos_didaticos" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PlanoDidaticoToRecurso_B_fkey" FOREIGN KEY ("B") REFERENCES "recursos" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "habilidades_codigo_key" ON "habilidades"("codigo");

-- CreateIndex
CREATE INDEX "habilidades_anoEscolar_idx" ON "habilidades"("anoEscolar");

-- CreateIndex
CREATE INDEX "habilidades_componente_idx" ON "habilidades"("componente");

-- CreateIndex
CREATE INDEX "planos_didaticos_autorId_idx" ON "planos_didaticos"("autorId");

-- CreateIndex
CREATE INDEX "planos_didaticos_anoEscolar_idx" ON "planos_didaticos"("anoEscolar");

-- CreateIndex
CREATE INDEX "recursos_tipo_idx" ON "recursos"("tipo");

-- CreateIndex
CREATE INDEX "recursos_eixo_idx" ON "recursos"("eixo");

-- CreateIndex
CREATE INDEX "modulos_trilhaId_idx" ON "modulos"("trilhaId");

-- CreateIndex
CREATE UNIQUE INDEX "quizzes_moduloId_key" ON "quizzes"("moduloId");

-- CreateIndex
CREATE INDEX "questoes_quizId_idx" ON "questoes"("quizId");

-- CreateIndex
CREATE UNIQUE INDEX "trilha_progressos_usuarioId_trilhaId_key" ON "trilha_progressos"("usuarioId", "trilhaId");

-- CreateIndex
CREATE INDEX "post_forum_autorId_idx" ON "post_forum"("autorId");

-- CreateIndex
CREATE INDEX "post_forum_categoria_idx" ON "post_forum"("categoria");

-- CreateIndex
CREATE INDEX "comentarios_autorId_idx" ON "comentarios"("autorId");

-- CreateIndex
CREATE INDEX "comentarios_postId_idx" ON "comentarios"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "_HabilidadeToPlanoDidatico_AB_unique" ON "_HabilidadeToPlanoDidatico"("A", "B");

-- CreateIndex
CREATE INDEX "_HabilidadeToPlanoDidatico_B_index" ON "_HabilidadeToPlanoDidatico"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanoDidaticoToRecurso_AB_unique" ON "_PlanoDidaticoToRecurso"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanoDidaticoToRecurso_B_index" ON "_PlanoDidaticoToRecurso"("B");
