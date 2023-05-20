-- DropIndex
DROP INDEX "public"."Profile_id_key" CASCADE;

-- AlterTable
ALTER TABLE "public"."Profile" ADD CONSTRAINT "Profile_pkey" PRIMARY KEY ("id");
