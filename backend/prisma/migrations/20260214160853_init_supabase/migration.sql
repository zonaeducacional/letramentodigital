-- CreateEnum
CREATE TYPE "Role" AS ENUM ('TEACHER', 'COORDINATOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "Eixo" AS ENUM ('LER', 'ESCREVER', 'PARTICIPAR');

-- CreateEnum
CREATE TYPE "ConceituoCritico" AS ENUM ('LINGUAGEM', 'REPRESENTACAO', 'PRODUCAO', 'PUBLICO');

-- CreateEnum
CREATE TYPE "TipoRecurso" AS ENUM ('VIDEO', 'ARTICULO', 'INFOGRAFICO', 'FERRAMENTA', 'DINAMICA', 'AVALIACAO');

-- CreateEnum
CREATE TYPE "Nivel" AS ENUM ('BASICO', 'INTERMEDIARIO', 'AVANCADO');

-- CreateEnum
CREATE TYPE "TipoQuestao" AS ENUM ('MULTIPLA', 'DISCURSIVA');

-- CreateEnum
CREATE TYPE "Categoria" AS ENUM ('DUVIDAS', 'PRATICAS', 'CASOS', 'DESAFIOS');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'TEACHER',
    "profileImage" TEXT,
    "components" TEXT[],
    "yearsTeaching" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habilidades" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "eixo" "Eixo" NOT NULL,
    "conceituoCritico" "ConceituoCritico" NOT NULL,
    "anoEscolar" INTEGER NOT NULL,
    "componente" TEXT NOT NULL,
    "objetosConhecimento" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "habilidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planos_didaticos" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "anoEscolar" INTEGER NOT NULL,
    "componentes" TEXT[],
    "duracao" INTEGER NOT NULL,
    "eixos" "Eixo"[],
    "objetivos" TEXT[],
    "problematizacao" TEXT,
    "desenvolvimento" TEXT,
    "producaoAvaliacao" TEXT,
    "autorId" TEXT NOT NULL,
    "compartilhado" BOOLEAN NOT NULL DEFAULT false,
    "curtidas" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "planos_didaticos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recursos" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "tipo" "TipoRecurso" NOT NULL,
    "descricao" TEXT NOT NULL,
    "url" TEXT,
    "anoRecomendado" INTEGER,
    "eixo" "Eixo" NOT NULL,
    "tags" TEXT[],
    "roteiros" TEXT,
    "perguntasOrientadoras" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atividades" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,
    "metodologia" TEXT NOT NULL,
    "instrucoes" TEXT NOT NULL,
    "recursoId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "atividades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trilhas_aprendizagem" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "nivel" "Nivel" NOT NULL,
    "duracao" INTEGER NOT NULL,
    "certificado" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trilhas_aprendizagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modulos" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,
    "ordem" INTEGER NOT NULL,
    "trilhaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "modulos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quizzes" (
    "id" TEXT NOT NULL,
    "pontuacaoMinima" INTEGER NOT NULL DEFAULT 70,
    "moduloId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quizzes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questoes" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "tipo" "TipoQuestao" NOT NULL,
    "opcoes" TEXT[],
    "respostaCorreta" TEXT,
    "quizId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "questoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trilha_progressos" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "trilhaId" TEXT NOT NULL,
    "percentualConcluido" INTEGER NOT NULL DEFAULT 0,
    "completado" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trilha_progressos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_forum" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "categoria" "Categoria" NOT NULL,
    "autorId" TEXT NOT NULL,
    "curtidas" INTEGER NOT NULL DEFAULT 0,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "post_forum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comentarios" (
    "id" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "autorId" TEXT NOT NULL,
    "postId" TEXT,
    "respostaParaId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comentarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HabilidadeToPlanoDidatico" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanoDidaticoToRecurso" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
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

-- AddForeignKey
ALTER TABLE "planos_didaticos" ADD CONSTRAINT "planos_didaticos_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atividades" ADD CONSTRAINT "atividades_recursoId_fkey" FOREIGN KEY ("recursoId") REFERENCES "recursos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "modulos" ADD CONSTRAINT "modulos_trilhaId_fkey" FOREIGN KEY ("trilhaId") REFERENCES "trilhas_aprendizagem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizzes" ADD CONSTRAINT "quizzes_moduloId_fkey" FOREIGN KEY ("moduloId") REFERENCES "modulos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questoes" ADD CONSTRAINT "questoes_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quizzes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trilha_progressos" ADD CONSTRAINT "trilha_progressos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trilha_progressos" ADD CONSTRAINT "trilha_progressos_trilhaId_fkey" FOREIGN KEY ("trilhaId") REFERENCES "trilhas_aprendizagem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_forum" ADD CONSTRAINT "post_forum_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post_forum"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_respostaParaId_fkey" FOREIGN KEY ("respostaParaId") REFERENCES "comentarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HabilidadeToPlanoDidatico" ADD CONSTRAINT "_HabilidadeToPlanoDidatico_A_fkey" FOREIGN KEY ("A") REFERENCES "habilidades"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HabilidadeToPlanoDidatico" ADD CONSTRAINT "_HabilidadeToPlanoDidatico_B_fkey" FOREIGN KEY ("B") REFERENCES "planos_didaticos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanoDidaticoToRecurso" ADD CONSTRAINT "_PlanoDidaticoToRecurso_A_fkey" FOREIGN KEY ("A") REFERENCES "planos_didaticos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanoDidaticoToRecurso" ADD CONSTRAINT "_PlanoDidaticoToRecurso_B_fkey" FOREIGN KEY ("B") REFERENCES "recursos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
