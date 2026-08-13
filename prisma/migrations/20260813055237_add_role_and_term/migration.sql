-- AlterTable
ALTER TABLE "user" ADD COLUMN     "acceptTerms" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'user';
