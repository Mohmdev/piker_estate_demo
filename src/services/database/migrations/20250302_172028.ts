import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "properties" ADD COLUMN "specs_average_rating" numeric;
  ALTER TABLE "properties" ADD COLUMN "specs_number_of_reviews" numeric;
  ALTER TABLE "properties" ADD COLUMN "specs_is_pets_allowed" boolean;
  ALTER TABLE "properties" ADD COLUMN "specs_is_parking_included" boolean;
  ALTER TABLE "_properties_v" ADD COLUMN "version_specs_average_rating" numeric;
  ALTER TABLE "_properties_v" ADD COLUMN "version_specs_number_of_reviews" numeric;
  ALTER TABLE "_properties_v" ADD COLUMN "version_specs_is_pets_allowed" boolean;
  ALTER TABLE "_properties_v" ADD COLUMN "version_specs_is_parking_included" boolean;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "properties" DROP COLUMN IF EXISTS "specs_average_rating";
  ALTER TABLE "properties" DROP COLUMN IF EXISTS "specs_number_of_reviews";
  ALTER TABLE "properties" DROP COLUMN IF EXISTS "specs_is_pets_allowed";
  ALTER TABLE "properties" DROP COLUMN IF EXISTS "specs_is_parking_included";
  ALTER TABLE "_properties_v" DROP COLUMN IF EXISTS "version_specs_average_rating";
  ALTER TABLE "_properties_v" DROP COLUMN IF EXISTS "version_specs_number_of_reviews";
  ALTER TABLE "_properties_v" DROP COLUMN IF EXISTS "version_specs_is_pets_allowed";
  ALTER TABLE "_properties_v" DROP COLUMN IF EXISTS "version_specs_is_parking_included";`)
}
