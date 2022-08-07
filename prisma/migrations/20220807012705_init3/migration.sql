/*
  Warnings:

  - The required column `id` was added to the `Action` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "Action_type_action_date_key";

-- AlterTable
ALTER TABLE "Action" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Action_pkey" PRIMARY KEY ("id");
