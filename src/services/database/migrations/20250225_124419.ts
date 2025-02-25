import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX IF EXISTS "projects_gallery_gallery_thumb_url_idx";
  DROP INDEX IF EXISTS "_projects_v_version_gallery_version_gallery_thumb_url_idx";
  DROP INDEX IF EXISTS "properties_gallery_gallery_thumb_url_idx";
  DROP INDEX IF EXISTS "_properties_v_version_gallery_version_gallery_thumb_url_idx";
  ALTER TABLE "projects" DROP COLUMN IF EXISTS "gallery_thumb_url";
  ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_gallery_thumb_url";
  ALTER TABLE "properties" DROP COLUMN IF EXISTS "gallery_thumb_url";
  ALTER TABLE "_properties_v" DROP COLUMN IF EXISTS "version_gallery_thumb_url";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" ADD COLUMN "gallery_thumb_url" varchar;
  ALTER TABLE "_projects_v" ADD COLUMN "version_gallery_thumb_url" varchar;
  ALTER TABLE "properties" ADD COLUMN "gallery_thumb_url" varchar;
  ALTER TABLE "_properties_v" ADD COLUMN "version_gallery_thumb_url" varchar;
  CREATE INDEX IF NOT EXISTS "projects_gallery_gallery_thumb_url_idx" ON "projects" USING btree ("gallery_thumb_url");
  CREATE INDEX IF NOT EXISTS "_projects_v_version_gallery_version_gallery_thumb_url_idx" ON "_projects_v" USING btree ("version_gallery_thumb_url");
  CREATE INDEX IF NOT EXISTS "properties_gallery_gallery_thumb_url_idx" ON "properties" USING btree ("gallery_thumb_url");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_gallery_version_gallery_thumb_url_idx" ON "_properties_v" USING btree ("version_gallery_thumb_url");`)
}
