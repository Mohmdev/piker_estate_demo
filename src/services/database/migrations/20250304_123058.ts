import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_properties_amenities_select" AS ENUM('fastInternet', 'washerDryer', 'airConditioning', 'heating', 'parking', 'swimmingPool', 'gym', 'petFriendly', 'furnished', 'securitySystem');
  CREATE TYPE "public"."enum__properties_v_version_amenities_select" AS ENUM('fastInternet', 'washerDryer', 'airConditioning', 'heating', 'parking', 'swimmingPool', 'gym', 'petFriendly', 'furnished', 'securitySystem');
  CREATE TABLE IF NOT EXISTS "properties_amenities_select" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_properties_amenities_select",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_version_amenities_select" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__properties_v_version_amenities_select",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "properties_amenities_select" ADD CONSTRAINT "properties_amenities_select_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_amenities_select" ADD CONSTRAINT "_properties_v_version_amenities_select_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "properties_amenities_select_order_idx" ON "properties_amenities_select" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "properties_amenities_select_parent_idx" ON "properties_amenities_select" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_amenities_select_order_idx" ON "_properties_v_version_amenities_select" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_amenities_select_parent_idx" ON "_properties_v_version_amenities_select" USING btree ("parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "properties_amenities_select" CASCADE;
  DROP TABLE "_properties_v_version_amenities_select" CASCADE;
  DROP TYPE "public"."enum_properties_amenities_select";
  DROP TYPE "public"."enum__properties_v_version_amenities_select";`)
}
