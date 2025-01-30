import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_properties_location_country" AS ENUM('AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'HR', 'CU', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KP', 'KR', 'XK', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'AN', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'RE', 'RO', 'RU', 'RW', 'SH', 'KN', 'LC', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW');
  CREATE TYPE "public"."enum_properties_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__properties_v_version_location_country" AS ENUM('AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'HR', 'CU', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KP', 'KR', 'XK', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'AN', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'RE', 'RO', 'RU', 'RW', 'SH', 'KN', 'LC', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW');
  CREATE TYPE "public"."enum__properties_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "properties_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "properties" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"location_address_line1" varchar,
  	"location_address_line2" varchar,
  	"location_unit" varchar,
  	"location_postcode" varchar,
  	"location_city" varchar,
  	"location_state" varchar,
  	"location_country" "enum_properties_location_country" DEFAULT 'US',
  	"location_coordinates_latitude" numeric,
  	"location_coordinates_longitude" numeric,
  	"specs_property_size" numeric,
  	"specs_block_size" numeric,
  	"specs_num_bedrooms" numeric,
  	"specs_num_bathrooms" numeric,
  	"specs_num_carspaces" numeric,
  	"gallery_video_id" integer,
  	"description" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"noindex" boolean,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_properties_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "properties_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer,
  	"tags_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_location_address_line1" varchar,
  	"version_location_address_line2" varchar,
  	"version_location_unit" varchar,
  	"version_location_postcode" varchar,
  	"version_location_city" varchar,
  	"version_location_state" varchar,
  	"version_location_country" "enum__properties_v_version_location_country" DEFAULT 'US',
  	"version_location_coordinates_latitude" numeric,
  	"version_location_coordinates_longitude" numeric,
  	"version_specs_property_size" numeric,
  	"version_specs_block_size" numeric,
  	"version_specs_num_bedrooms" numeric,
  	"version_specs_num_bathrooms" numeric,
  	"version_specs_num_carspaces" numeric,
  	"version_gallery_video_id" integer,
  	"version_description" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_noindex" boolean,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__properties_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer,
  	"tags_id" integer,
  	"users_id" integer
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "properties_id" integer;
  DO $$ BEGIN
   ALTER TABLE "properties_populated_authors" ADD CONSTRAINT "properties_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties" ADD CONSTRAINT "properties_gallery_video_id_media_id_fk" FOREIGN KEY ("gallery_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties" ADD CONSTRAINT "properties_meta_image_id_meta_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."meta_media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_populated_authors" ADD CONSTRAINT "_properties_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v" ADD CONSTRAINT "_properties_v_parent_id_properties_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."properties"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v" ADD CONSTRAINT "_properties_v_version_gallery_video_id_media_id_fk" FOREIGN KEY ("version_gallery_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v" ADD CONSTRAINT "_properties_v_version_meta_image_id_meta_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."meta_media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "properties_populated_authors_order_idx" ON "properties_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_populated_authors_parent_id_idx" ON "properties_populated_authors" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "properties_title_idx" ON "properties" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "properties_gallery_gallery_video_idx" ON "properties" USING btree ("gallery_video_id");
  CREATE INDEX IF NOT EXISTS "properties_meta_meta_image_idx" ON "properties" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "properties_slug_idx" ON "properties" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "properties_updated_at_idx" ON "properties" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "properties_created_at_idx" ON "properties" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "properties__status_idx" ON "properties" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "properties_rels_order_idx" ON "properties_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "properties_rels_parent_idx" ON "properties_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_path_idx" ON "properties_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "properties_rels_media_id_idx" ON "properties_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_tags_id_idx" ON "properties_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_users_id_idx" ON "properties_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_populated_authors_order_idx" ON "_properties_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_populated_authors_parent_id_idx" ON "_properties_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_parent_idx" ON "_properties_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version_title_idx" ON "_properties_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_gallery_version_gallery_video_idx" ON "_properties_v" USING btree ("version_gallery_video_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_meta_version_meta_image_idx" ON "_properties_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version_slug_idx" ON "_properties_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version_updated_at_idx" ON "_properties_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version_created_at_idx" ON "_properties_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version__status_idx" ON "_properties_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_properties_v_created_at_idx" ON "_properties_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_properties_v_updated_at_idx" ON "_properties_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_properties_v_latest_idx" ON "_properties_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_properties_v_autosave_idx" ON "_properties_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_order_idx" ON "_properties_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_parent_idx" ON "_properties_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_path_idx" ON "_properties_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_media_id_idx" ON "_properties_v_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_tags_id_idx" ON "_properties_v_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_users_id_idx" ON "_properties_v_rels" USING btree ("users_id");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_properties_fk" FOREIGN KEY ("properties_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_properties_id_idx" ON "payload_locked_documents_rels" USING btree ("properties_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "properties_populated_authors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "properties" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "properties_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_properties_v_version_populated_authors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_properties_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_properties_v_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "properties_populated_authors" CASCADE;
  DROP TABLE "properties" CASCADE;
  DROP TABLE "properties_rels" CASCADE;
  DROP TABLE "_properties_v_version_populated_authors" CASCADE;
  DROP TABLE "_properties_v" CASCADE;
  DROP TABLE "_properties_v_rels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_properties_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_properties_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "properties_id";
  DROP TYPE "public"."enum_properties_location_country";
  DROP TYPE "public"."enum_properties_status";
  DROP TYPE "public"."enum__properties_v_version_location_country";
  DROP TYPE "public"."enum__properties_v_version_status";`)
}
