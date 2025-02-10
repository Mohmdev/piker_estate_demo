import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_icon_grid_icon" AS ENUM('house', 'booking', 'garage', 'bath', 'bed', 'area', 'price', 'rooms', 'parking', 'pool', 'garden', 'land', 'other');
  CREATE TYPE "public"."enum_pages_hero_icon_grid_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_search_filters_config_button_style" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_hero_search_filters_config_button_icon" AS ENUM('house', 'booking', 'garage');
  CREATE TYPE "public"."enum__pages_v_version_hero_icon_grid_icon" AS ENUM('house', 'booking', 'garage', 'bath', 'bed', 'area', 'price', 'rooms', 'parking', 'pool', 'garden', 'land', 'other');
  CREATE TYPE "public"."enum__pages_v_version_hero_icon_grid_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_search_filters_config_button_style" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_version_hero_search_filters_config_button_icon" AS ENUM('house', 'booking', 'garage');
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'filtersSearchSlider';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'filtersSearchSlider';
  CREATE TABLE IF NOT EXISTS "pages_hero_icon_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_hero_icon_grid_icon",
  	"label" varchar,
  	"link_type" "enum_pages_hero_icon_grid_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_icon_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_version_hero_icon_grid_icon",
  	"label" varchar,
  	"link_type" "enum__pages_v_version_hero_icon_grid_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  ALTER TABLE "pages" ADD COLUMN "hero_search_filters_config_enable_property_status" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "hero_search_filters_config_enable_property_type" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "hero_search_filters_config_enable_rooms" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "hero_search_filters_config_enable_beds" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "hero_search_filters_config_enable_baths" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "hero_search_filters_config_price_range_enabled" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "hero_search_filters_config_price_range_min" numeric DEFAULT 2500;
  ALTER TABLE "pages" ADD COLUMN "hero_search_filters_config_price_range_max" numeric DEFAULT 8500;
  ALTER TABLE "pages" ADD COLUMN "hero_search_filters_config_area_range_enabled" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "hero_search_filters_config_area_range_min" numeric DEFAULT 2500;
  ALTER TABLE "pages" ADD COLUMN "hero_search_filters_config_area_range_max" numeric DEFAULT 8500;
  ALTER TABLE "pages" ADD COLUMN "hero_search_filters_config_button_label" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_search_filters_config_button_style" "enum_pages_hero_search_filters_config_button_style";
  ALTER TABLE "pages" ADD COLUMN "hero_search_filters_config_button_icon" "enum_pages_hero_search_filters_config_button_icon";
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_search_filters_config_enable_property_status" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_search_filters_config_enable_property_type" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_search_filters_config_enable_rooms" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_search_filters_config_enable_beds" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_search_filters_config_enable_baths" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_search_filters_config_price_range_enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_search_filters_config_price_range_min" numeric DEFAULT 2500;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_search_filters_config_price_range_max" numeric DEFAULT 8500;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_search_filters_config_area_range_enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_search_filters_config_area_range_min" numeric DEFAULT 2500;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_search_filters_config_area_range_max" numeric DEFAULT 8500;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_search_filters_config_button_label" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_search_filters_config_button_style" "enum__pages_v_version_hero_search_filters_config_button_style";
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_search_filters_config_button_icon" "enum__pages_v_version_hero_search_filters_config_button_icon";
  DO $$ BEGIN
   ALTER TABLE "pages_hero_icon_grid" ADD CONSTRAINT "pages_hero_icon_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_icon_grid" ADD CONSTRAINT "_pages_v_version_hero_icon_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_hero_icon_grid_order_idx" ON "pages_hero_icon_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_icon_grid_parent_id_idx" ON "pages_hero_icon_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_icon_grid_order_idx" ON "_pages_v_version_hero_icon_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_icon_grid_parent_id_idx" ON "_pages_v_version_hero_icon_grid" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_icon_grid" CASCADE;
  DROP TABLE "_pages_v_version_hero_icon_grid" CASCADE;
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_search_filters_config_enable_property_status";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_search_filters_config_enable_property_type";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_search_filters_config_enable_rooms";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_search_filters_config_enable_beds";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_search_filters_config_enable_baths";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_search_filters_config_price_range_enabled";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_search_filters_config_price_range_min";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_search_filters_config_price_range_max";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_search_filters_config_area_range_enabled";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_search_filters_config_area_range_min";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_search_filters_config_area_range_max";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_search_filters_config_button_label";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_search_filters_config_button_style";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_search_filters_config_button_icon";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_search_filters_config_enable_property_status";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_search_filters_config_enable_property_type";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_search_filters_config_enable_rooms";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_search_filters_config_enable_beds";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_search_filters_config_enable_baths";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_search_filters_config_price_range_enabled";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_search_filters_config_price_range_min";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_search_filters_config_price_range_max";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_search_filters_config_area_range_enabled";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_search_filters_config_area_range_min";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_search_filters_config_area_range_max";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_search_filters_config_button_label";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_search_filters_config_button_style";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_search_filters_config_button_icon";
  ALTER TABLE "public"."pages" ALTER COLUMN "hero_type" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_hero_type";
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  ALTER TABLE "public"."pages" ALTER COLUMN "hero_type" SET DATA TYPE "public"."enum_pages_hero_type" USING "hero_type"::"public"."enum_pages_hero_type";
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__pages_v_version_hero_type" USING "version_hero_type"::"public"."enum__pages_v_version_hero_type";
  DROP TYPE "public"."enum_pages_hero_icon_grid_icon";
  DROP TYPE "public"."enum_pages_hero_icon_grid_link_type";
  DROP TYPE "public"."enum_pages_hero_search_filters_config_button_style";
  DROP TYPE "public"."enum_pages_hero_search_filters_config_button_icon";
  DROP TYPE "public"."enum__pages_v_version_hero_icon_grid_icon";
  DROP TYPE "public"."enum__pages_v_version_hero_icon_grid_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_search_filters_config_button_style";
  DROP TYPE "public"."enum__pages_v_version_hero_search_filters_config_button_icon";`)
}
