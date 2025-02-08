import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_features_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__features_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_listing_status_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__listing_status_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_listing_types_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__listing_types_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "features_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "features" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"noindex" boolean,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_features_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "features_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"tags_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_features_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_features_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_description" jsonb,
  	"version_image_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_noindex" boolean,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__features_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_features_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"tags_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "listing_status_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "listing_status" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"noindex" boolean,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_listing_status_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "listing_status_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"tags_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_listing_status_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_listing_status_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_description" jsonb,
  	"version_image_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_noindex" boolean,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__listing_status_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_listing_status_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"tags_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "listing_types_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "listing_types" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"noindex" boolean,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_listing_types_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "listing_types_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"tags_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_listing_types_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_listing_types_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_description" jsonb,
  	"version_image_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_noindex" boolean,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__listing_types_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_listing_types_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"tags_id" integer,
  	"users_id" integer
  );
  
  ALTER TABLE "properties" ADD COLUMN "listing_status_id" integer;
  ALTER TABLE "properties" ADD COLUMN "listing_type_id" integer;
  ALTER TABLE "properties_rels" ADD COLUMN "features_id" integer;
  ALTER TABLE "_properties_v" ADD COLUMN "version_listing_status_id" integer;
  ALTER TABLE "_properties_v" ADD COLUMN "version_listing_type_id" integer;
  ALTER TABLE "_properties_v_rels" ADD COLUMN "features_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "features_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "listing_status_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "listing_types_id" integer;
  DO $$ BEGIN
   ALTER TABLE "features_populated_authors" ADD CONSTRAINT "features_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "features" ADD CONSTRAINT "features_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "features" ADD CONSTRAINT "features_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "features_rels" ADD CONSTRAINT "features_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "features_rels" ADD CONSTRAINT "features_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "features_rels" ADD CONSTRAINT "features_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_features_v_version_populated_authors" ADD CONSTRAINT "_features_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_features_v" ADD CONSTRAINT "_features_v_parent_id_features_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."features"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_features_v" ADD CONSTRAINT "_features_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_features_v" ADD CONSTRAINT "_features_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_features_v_rels" ADD CONSTRAINT "_features_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_features_v_rels" ADD CONSTRAINT "_features_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_features_v_rels" ADD CONSTRAINT "_features_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listing_status_populated_authors" ADD CONSTRAINT "listing_status_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."listing_status"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listing_status" ADD CONSTRAINT "listing_status_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listing_status" ADD CONSTRAINT "listing_status_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listing_status_rels" ADD CONSTRAINT "listing_status_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."listing_status"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listing_status_rels" ADD CONSTRAINT "listing_status_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listing_status_rels" ADD CONSTRAINT "listing_status_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listing_status_v_version_populated_authors" ADD CONSTRAINT "_listing_status_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_listing_status_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listing_status_v" ADD CONSTRAINT "_listing_status_v_parent_id_listing_status_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."listing_status"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listing_status_v" ADD CONSTRAINT "_listing_status_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listing_status_v" ADD CONSTRAINT "_listing_status_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listing_status_v_rels" ADD CONSTRAINT "_listing_status_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_listing_status_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listing_status_v_rels" ADD CONSTRAINT "_listing_status_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listing_status_v_rels" ADD CONSTRAINT "_listing_status_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listing_types_populated_authors" ADD CONSTRAINT "listing_types_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."listing_types"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listing_types" ADD CONSTRAINT "listing_types_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listing_types" ADD CONSTRAINT "listing_types_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listing_types_rels" ADD CONSTRAINT "listing_types_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."listing_types"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listing_types_rels" ADD CONSTRAINT "listing_types_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listing_types_rels" ADD CONSTRAINT "listing_types_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listing_types_v_version_populated_authors" ADD CONSTRAINT "_listing_types_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_listing_types_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listing_types_v" ADD CONSTRAINT "_listing_types_v_parent_id_listing_types_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."listing_types"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listing_types_v" ADD CONSTRAINT "_listing_types_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listing_types_v" ADD CONSTRAINT "_listing_types_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listing_types_v_rels" ADD CONSTRAINT "_listing_types_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_listing_types_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listing_types_v_rels" ADD CONSTRAINT "_listing_types_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listing_types_v_rels" ADD CONSTRAINT "_listing_types_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "features_populated_authors_order_idx" ON "features_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "features_populated_authors_parent_id_idx" ON "features_populated_authors" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "features_title_idx" ON "features" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "features_image_idx" ON "features" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "features_meta_meta_image_idx" ON "features" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "features_slug_idx" ON "features" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "features_updated_at_idx" ON "features" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "features_created_at_idx" ON "features" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "features__status_idx" ON "features" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "features_rels_order_idx" ON "features_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "features_rels_parent_idx" ON "features_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "features_rels_path_idx" ON "features_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "features_rels_tags_id_idx" ON "features_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "features_rels_users_id_idx" ON "features_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_features_v_version_populated_authors_order_idx" ON "_features_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_features_v_version_populated_authors_parent_id_idx" ON "_features_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_features_v_parent_idx" ON "_features_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_features_v_version_version_title_idx" ON "_features_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_features_v_version_version_image_idx" ON "_features_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_features_v_version_meta_version_meta_image_idx" ON "_features_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_features_v_version_version_slug_idx" ON "_features_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_features_v_version_version_updated_at_idx" ON "_features_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_features_v_version_version_created_at_idx" ON "_features_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_features_v_version_version__status_idx" ON "_features_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_features_v_created_at_idx" ON "_features_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_features_v_updated_at_idx" ON "_features_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_features_v_latest_idx" ON "_features_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_features_v_autosave_idx" ON "_features_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_features_v_rels_order_idx" ON "_features_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_features_v_rels_parent_idx" ON "_features_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_features_v_rels_path_idx" ON "_features_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_features_v_rels_tags_id_idx" ON "_features_v_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "_features_v_rels_users_id_idx" ON "_features_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "listing_status_populated_authors_order_idx" ON "listing_status_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "listing_status_populated_authors_parent_id_idx" ON "listing_status_populated_authors" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "listing_status_title_idx" ON "listing_status" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "listing_status_image_idx" ON "listing_status" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "listing_status_meta_meta_image_idx" ON "listing_status" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "listing_status_slug_idx" ON "listing_status" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "listing_status_updated_at_idx" ON "listing_status" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "listing_status_created_at_idx" ON "listing_status" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "listing_status__status_idx" ON "listing_status" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "listing_status_rels_order_idx" ON "listing_status_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "listing_status_rels_parent_idx" ON "listing_status_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "listing_status_rels_path_idx" ON "listing_status_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "listing_status_rels_tags_id_idx" ON "listing_status_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "listing_status_rels_users_id_idx" ON "listing_status_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_version_populated_authors_order_idx" ON "_listing_status_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_version_populated_authors_parent_id_idx" ON "_listing_status_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_parent_idx" ON "_listing_status_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_version_version_title_idx" ON "_listing_status_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_version_version_image_idx" ON "_listing_status_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_version_meta_version_meta_image_idx" ON "_listing_status_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_version_version_slug_idx" ON "_listing_status_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_version_version_updated_at_idx" ON "_listing_status_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_version_version_created_at_idx" ON "_listing_status_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_version_version__status_idx" ON "_listing_status_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_created_at_idx" ON "_listing_status_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_updated_at_idx" ON "_listing_status_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_latest_idx" ON "_listing_status_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_autosave_idx" ON "_listing_status_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_rels_order_idx" ON "_listing_status_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_rels_parent_idx" ON "_listing_status_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_rels_path_idx" ON "_listing_status_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_rels_tags_id_idx" ON "_listing_status_v_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "_listing_status_v_rels_users_id_idx" ON "_listing_status_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "listing_types_populated_authors_order_idx" ON "listing_types_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "listing_types_populated_authors_parent_id_idx" ON "listing_types_populated_authors" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "listing_types_title_idx" ON "listing_types" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "listing_types_image_idx" ON "listing_types" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "listing_types_meta_meta_image_idx" ON "listing_types" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "listing_types_slug_idx" ON "listing_types" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "listing_types_updated_at_idx" ON "listing_types" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "listing_types_created_at_idx" ON "listing_types" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "listing_types__status_idx" ON "listing_types" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "listing_types_rels_order_idx" ON "listing_types_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "listing_types_rels_parent_idx" ON "listing_types_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "listing_types_rels_path_idx" ON "listing_types_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "listing_types_rels_tags_id_idx" ON "listing_types_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "listing_types_rels_users_id_idx" ON "listing_types_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_version_populated_authors_order_idx" ON "_listing_types_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_version_populated_authors_parent_id_idx" ON "_listing_types_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_parent_idx" ON "_listing_types_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_version_version_title_idx" ON "_listing_types_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_version_version_image_idx" ON "_listing_types_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_version_meta_version_meta_image_idx" ON "_listing_types_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_version_version_slug_idx" ON "_listing_types_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_version_version_updated_at_idx" ON "_listing_types_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_version_version_created_at_idx" ON "_listing_types_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_version_version__status_idx" ON "_listing_types_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_created_at_idx" ON "_listing_types_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_updated_at_idx" ON "_listing_types_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_latest_idx" ON "_listing_types_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_autosave_idx" ON "_listing_types_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_rels_order_idx" ON "_listing_types_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_rels_parent_idx" ON "_listing_types_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_rels_path_idx" ON "_listing_types_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_rels_tags_id_idx" ON "_listing_types_v_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "_listing_types_v_rels_users_id_idx" ON "_listing_types_v_rels" USING btree ("users_id");
  DO $$ BEGIN
   ALTER TABLE "properties" ADD CONSTRAINT "properties_listing_status_id_listing_status_id_fk" FOREIGN KEY ("listing_status_id") REFERENCES "public"."listing_status"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties" ADD CONSTRAINT "properties_listing_type_id_listing_types_id_fk" FOREIGN KEY ("listing_type_id") REFERENCES "public"."listing_types"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_features_fk" FOREIGN KEY ("features_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v" ADD CONSTRAINT "_properties_v_version_listing_status_id_listing_status_id_fk" FOREIGN KEY ("version_listing_status_id") REFERENCES "public"."listing_status"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v" ADD CONSTRAINT "_properties_v_version_listing_type_id_listing_types_id_fk" FOREIGN KEY ("version_listing_type_id") REFERENCES "public"."listing_types"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_features_fk" FOREIGN KEY ("features_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_features_fk" FOREIGN KEY ("features_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_listing_status_fk" FOREIGN KEY ("listing_status_id") REFERENCES "public"."listing_status"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_listing_types_fk" FOREIGN KEY ("listing_types_id") REFERENCES "public"."listing_types"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "properties_listing_status_idx" ON "properties" USING btree ("listing_status_id");
  CREATE INDEX IF NOT EXISTS "properties_listing_type_idx" ON "properties" USING btree ("listing_type_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_features_id_idx" ON "properties_rels" USING btree ("features_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version_listing_status_idx" ON "_properties_v" USING btree ("version_listing_status_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version_listing_type_idx" ON "_properties_v" USING btree ("version_listing_type_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_features_id_idx" ON "_properties_v_rels" USING btree ("features_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_features_id_idx" ON "payload_locked_documents_rels" USING btree ("features_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_listing_status_id_idx" ON "payload_locked_documents_rels" USING btree ("listing_status_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_listing_types_id_idx" ON "payload_locked_documents_rels" USING btree ("listing_types_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "features_populated_authors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "features_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_features_v_version_populated_authors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_features_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_features_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "listing_status_populated_authors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "listing_status" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "listing_status_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_listing_status_v_version_populated_authors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_listing_status_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_listing_status_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "listing_types_populated_authors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "listing_types" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "listing_types_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_listing_types_v_version_populated_authors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_listing_types_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_listing_types_v_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "features_populated_authors" CASCADE;
  DROP TABLE "features" CASCADE;
  DROP TABLE "features_rels" CASCADE;
  DROP TABLE "_features_v_version_populated_authors" CASCADE;
  DROP TABLE "_features_v" CASCADE;
  DROP TABLE "_features_v_rels" CASCADE;
  DROP TABLE "listing_status_populated_authors" CASCADE;
  DROP TABLE "listing_status" CASCADE;
  DROP TABLE "listing_status_rels" CASCADE;
  DROP TABLE "_listing_status_v_version_populated_authors" CASCADE;
  DROP TABLE "_listing_status_v" CASCADE;
  DROP TABLE "_listing_status_v_rels" CASCADE;
  DROP TABLE "listing_types_populated_authors" CASCADE;
  DROP TABLE "listing_types" CASCADE;
  DROP TABLE "listing_types_rels" CASCADE;
  DROP TABLE "_listing_types_v_version_populated_authors" CASCADE;
  DROP TABLE "_listing_types_v" CASCADE;
  DROP TABLE "_listing_types_v_rels" CASCADE;
  ALTER TABLE "properties" DROP CONSTRAINT "properties_listing_status_id_listing_status_id_fk";
  
  ALTER TABLE "properties" DROP CONSTRAINT "properties_listing_type_id_listing_types_id_fk";
  
  ALTER TABLE "properties_rels" DROP CONSTRAINT "properties_rels_features_fk";
  
  ALTER TABLE "_properties_v" DROP CONSTRAINT "_properties_v_version_listing_status_id_listing_status_id_fk";
  
  ALTER TABLE "_properties_v" DROP CONSTRAINT "_properties_v_version_listing_type_id_listing_types_id_fk";
  
  ALTER TABLE "_properties_v_rels" DROP CONSTRAINT "_properties_v_rels_features_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_features_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_listing_status_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_listing_types_fk";
  
  DROP INDEX IF EXISTS "properties_listing_status_idx";
  DROP INDEX IF EXISTS "properties_listing_type_idx";
  DROP INDEX IF EXISTS "properties_rels_features_id_idx";
  DROP INDEX IF EXISTS "_properties_v_version_version_listing_status_idx";
  DROP INDEX IF EXISTS "_properties_v_version_version_listing_type_idx";
  DROP INDEX IF EXISTS "_properties_v_rels_features_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_features_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_listing_status_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_listing_types_id_idx";
  ALTER TABLE "properties" DROP COLUMN IF EXISTS "listing_status_id";
  ALTER TABLE "properties" DROP COLUMN IF EXISTS "listing_type_id";
  ALTER TABLE "properties_rels" DROP COLUMN IF EXISTS "features_id";
  ALTER TABLE "_properties_v" DROP COLUMN IF EXISTS "version_listing_status_id";
  ALTER TABLE "_properties_v" DROP COLUMN IF EXISTS "version_listing_type_id";
  ALTER TABLE "_properties_v_rels" DROP COLUMN IF EXISTS "features_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "features_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "listing_status_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "listing_types_id";
  DROP TYPE "public"."enum_features_status";
  DROP TYPE "public"."enum__features_v_version_status";
  DROP TYPE "public"."enum_listing_status_status";
  DROP TYPE "public"."enum__listing_status_v_version_status";
  DROP TYPE "public"."enum_listing_types_status";
  DROP TYPE "public"."enum__listing_types_v_version_status";`)
}
