CREATE TABLE "property" (
  "id" INT PRIMARY KEY,
  "address_line1" VARCHAR,
  "address_line2" VARCHAR,
  "city" varchar,
  "country" varchar,
  "region" varchar,
  "property_type_id" INT,
  "property_size" INT,
  "block_size" INT,
  "num_bedrooms" INT,
  "num_bathrooms" INT,
  "num_carspaces" INT,
  "description" VARCHAR,
  "listing_type_id" INT,
  "price" INT
);

CREATE TABLE "property_type" (
  "id" INT PRIMARY KEY,
  "description" VARCHAR
);

CREATE TABLE "feature" (
  "id" INT PRIMARY KEY,
  "feature_name" VARCHAR
);

CREATE TABLE "property_feature" (
  "property_id" INT,
  "feature_id" INT
);

CREATE TABLE "listing" (
  "id" INT PRIMARY KEY,
  "property_id" INT,
  "listing_status_id" INT,
  "listing_type_id" INT,
  "price" INT,
  "created_data" DATE
);

CREATE TABLE "listing_type" (
  "id" INT PRIMARY KEY,
  "description" VARCHAR
);

CREATE TABLE "listing_status" (
  "id" INT PRIMARY KEY,
  "description" VARCHAR
);

CREATE TABLE "employee" (
  "id" INT PRIMARY KEY,
  "first_name" VARCHAR,
  "last_name" VARCHAR,
  "employment_start_date" DATE,
  "employment_end_date" DATE,
  "job_title" VARCHAR
);

CREATE TABLE "property_employee" (
  "property_id" INT,
  "employee_id" INT,
  "role_type_id" INT,
  "effective_from" DATE,
  "effective_to" DATE
);

CREATE TABLE "role_type" (
  "id" INT,
  "description" VARCHAR
);

CREATE TABLE "inspection" (
  "id" INT PRIMARY KEY,
  "property_id" INT,
  "inspection_datetime" DATETIME,
  "responsible_employee_id" INT
);

CREATE TABLE "client" (
  "id" INT PRIMARY KEY,
  "first_name" VARCHAR,
  "last_name" VARCHAR,
  "email_address" VARCHAR,
  "phone_number" VARCHAR
);

CREATE TABLE "client_property_interest" (
  "client_id" INT,
  "property_id" INT
);

CREATE TABLE "client_inspection" (
  "client_id" INT,
  "inspection_id" INT
);

CREATE TABLE "offer" (
  "id" INT PRIMARY KEY,
  "client_id" INT,
  "property_id" INT,
  "offer_status_id" INT,
  "offer_amount" INT
);

CREATE TABLE "offer_status" (
  "id" INT PRIMARY KEY,
  "description" VARCHAR
);

CREATE TABLE "contract" (
  "id" INT PRIMARY KEY,
  "property_id" INT,
  "listing_type_id" INT,
  "contract_document" VARCHAR,
  "responsible_employee_id" INT,
  "client_id" INT,
  "contract_status_id" INT,
  "signed_date" DATE,
  "start_date" DATE,
  "end_date" DATE
);

CREATE TABLE "contract_status" (
  "id" INT PRIMARY KEY,
  "description" VARCHAR
);

COMMENT ON COLUMN "property"."price" IS 'Stores either a sale price or a rental price';

COMMENT ON TABLE "property_type" IS 'Examples: house, unitm townhouse';

COMMENT ON TABLE "feature" IS 'Examples are washing machine, alaram, garage';

COMMENT ON TABLE "listing_type" IS 'Stores either For Rent or For Sale';

COMMENT ON TABLE "listing_status" IS 'Stores the lifecycle of the property';

COMMENT ON TABLE "role_type" IS 'Examples are Property Manager or Selling Agent';

COMMENT ON TABLE "offer_status" IS 'Stores values such as Accepted, Rejected, In Review';

COMMENT ON TABLE "contract_status" IS 'Examples such as Signed or In Progress';

ALTER TABLE "property" ADD FOREIGN KEY ("property_type_id") REFERENCES "property_type" ("id");

ALTER TABLE "property_feature" ADD FOREIGN KEY ("property_id") REFERENCES "property" ("id");

ALTER TABLE "property_feature" ADD FOREIGN KEY ("feature_id") REFERENCES "feature" ("id");

ALTER TABLE "listing" ADD FOREIGN KEY ("listing_type_id") REFERENCES "listing_type" ("id");

ALTER TABLE "listing" ADD FOREIGN KEY ("listing_status_id") REFERENCES "listing_status" ("id");

ALTER TABLE "listing" ADD FOREIGN KEY ("property_id") REFERENCES "property" ("id");

ALTER TABLE "property_employee" ADD FOREIGN KEY ("property_id") REFERENCES "property" ("id");

ALTER TABLE "property_employee" ADD FOREIGN KEY ("employee_id") REFERENCES "employee" ("id");

ALTER TABLE "property_employee" ADD FOREIGN KEY ("role_type_id") REFERENCES "role_type" ("id");

ALTER TABLE "inspection" ADD FOREIGN KEY ("property_id") REFERENCES "property" ("id");

ALTER TABLE "inspection" ADD FOREIGN KEY ("responsible_employee_id") REFERENCES "employee" ("id");

ALTER TABLE "client_property_interest" ADD FOREIGN KEY ("client_id") REFERENCES "client" ("id");

ALTER TABLE "client_property_interest" ADD FOREIGN KEY ("property_id") REFERENCES "property" ("id");

ALTER TABLE "client_inspection" ADD FOREIGN KEY ("client_id") REFERENCES "client" ("id");

ALTER TABLE "client_inspection" ADD FOREIGN KEY ("inspection_id") REFERENCES "inspection" ("id");

ALTER TABLE "offer" ADD FOREIGN KEY ("client_id") REFERENCES "client" ("id");

ALTER TABLE "offer" ADD FOREIGN KEY ("property_id") REFERENCES "property" ("id");

ALTER TABLE "offer" ADD FOREIGN KEY ("offer_status_id") REFERENCES "offer_status" ("id");

ALTER TABLE "contract" ADD FOREIGN KEY ("property_id") REFERENCES "property" ("id");

ALTER TABLE "contract" ADD FOREIGN KEY ("listing_type_id") REFERENCES "listing_type" ("id");

ALTER TABLE "contract" ADD FOREIGN KEY ("contract_status_id") REFERENCES "contract_status" ("id");

ALTER TABLE "contract" ADD FOREIGN KEY ("client_id") REFERENCES "client" ("id");

ALTER TABLE "contract" ADD FOREIGN KEY ("responsible_employee_id") REFERENCES "employee" ("id");
