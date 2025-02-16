import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_availability_color" ADD VALUE 'purple';
  ALTER TYPE "public"."enum__availability_v_version_color" ADD VALUE 'purple';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "public"."availability" ALTER COLUMN "color" SET DATA TYPE text;
  DROP TYPE "public"."enum_availability_color";
  CREATE TYPE "public"."enum_availability_color" AS ENUM('green', 'blue', 'yellow', 'red', 'gray');
  ALTER TABLE "public"."availability" ALTER COLUMN "color" SET DATA TYPE "public"."enum_availability_color" USING "color"::"public"."enum_availability_color";
  ALTER TABLE "public"."_availability_v" ALTER COLUMN "version_color" SET DATA TYPE text;
  DROP TYPE "public"."enum__availability_v_version_color";
  CREATE TYPE "public"."enum__availability_v_version_color" AS ENUM('green', 'blue', 'yellow', 'red', 'gray');
  ALTER TABLE "public"."_availability_v" ALTER COLUMN "version_color" SET DATA TYPE "public"."enum__availability_v_version_color" USING "version_color"::"public"."enum__availability_v_version_color";`)
}
