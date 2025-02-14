import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_properties_market" AS ENUM('economy', 'mid-market', 'luxury', 'ultra-luxury');
  CREATE TYPE "public"."enum_properties_specs_facility_facility_type" AS ENUM('security', 'community', 'utilities', 'smart-home');
  CREATE TYPE "public"."enum_properties_specs_measurements_size_range" AS ENUM('small', 'medium', 'large', 'xlarge');
  CREATE TYPE "public"."enum_properties_specs_construction_construction_type" AS ENUM('brick', 'timber', 'concrete', 'steel', 'mixed');
  CREATE TYPE "public"."enum_properties_specs_utilities_energy_rating" AS ENUM('A', 'B', 'C', 'D', 'E');
  CREATE TYPE "public"."enum_properties_specs_utilities_heating_type" AS ENUM('central', 'electric', 'gas', 'heat-pump', 'none');
  CREATE TYPE "public"."enum_properties_specs_utilities_cooling_type" AS ENUM('central', 'split', 'window', 'none');
  CREATE TYPE "public"."enum_properties_location_country_select_country" AS ENUM('AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'HR', 'CU', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KP', 'KR', 'XK', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'AN', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'RE', 'RO', 'RU', 'RW', 'SH', 'KN', 'LC', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW');
  CREATE TYPE "public"."enum_properties_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__properties_v_version_market" AS ENUM('economy', 'mid-market', 'luxury', 'ultra-luxury');
  CREATE TYPE "public"."enum__properties_v_version_specs_facility_facility_type" AS ENUM('security', 'community', 'utilities', 'smart-home');
  CREATE TYPE "public"."enum__properties_v_version_specs_measurements_size_range" AS ENUM('small', 'medium', 'large', 'xlarge');
  CREATE TYPE "public"."enum__properties_v_version_specs_construction_construction_type" AS ENUM('brick', 'timber', 'concrete', 'steel', 'mixed');
  CREATE TYPE "public"."enum__properties_v_version_specs_utilities_energy_rating" AS ENUM('A', 'B', 'C', 'D', 'E');
  CREATE TYPE "public"."enum__properties_v_version_specs_utilities_heating_type" AS ENUM('central', 'electric', 'gas', 'heat-pump', 'none');
  CREATE TYPE "public"."enum__properties_v_version_specs_utilities_cooling_type" AS ENUM('central', 'split', 'window', 'none');
  CREATE TYPE "public"."enum__properties_v_version_location_country_select_country" AS ENUM('AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'HR', 'CU', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KP', 'KR', 'XK', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'AN', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'RE', 'RO', 'RU', 'RW', 'SH', 'KN', 'LC', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW');
  CREATE TYPE "public"."enum__properties_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_classifications_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__classifications_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_amenities_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__amenities_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_availability_color" AS ENUM('green', 'blue', 'yellow', 'red', 'gray');
  CREATE TYPE "public"."enum_availability_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__availability_v_version_color" AS ENUM('green', 'blue', 'yellow', 'red', 'gray');
  CREATE TYPE "public"."enum__availability_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_contracts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__contracts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_pages_heros_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_heros_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_heros_icon_grid_icon" AS ENUM('house', 'booking', 'garage', 'bath', 'bed', 'area', 'price', 'rooms', 'parking', 'pool', 'garden', 'land', 'other');
  CREATE TYPE "public"."enum_pages_heros_icon_grid_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('blog');
  CREATE TYPE "public"."enum_listingBlock_card_enabled_fields" AS ENUM('price', 'bedrooms', 'bathrooms', 'lotSize', 'yearBuilt', 'areaSize', 'parkingSpaces', 'description', 'categories', 'thumbnail', 'tags');
  CREATE TYPE "public"."enum_listingBlock_view_layout" AS ENUM('grid', 'list', 'ftrd', 'crsl');
  CREATE TYPE "public"."enum_listingBlock_card_thumbnail_fit" AS ENUM('cover', 'contain', 'fill');
  CREATE TYPE "public"."enum_listingBlock_card_thumbnail_position" AS ENUM('top', 'center', 'bottom');
  CREATE TYPE "public"."enum_listingBlock_card_thumbnail_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum_listingBlock_card_price_decimals" AS ENUM('none', 'one', 'two');
  CREATE TYPE "public"."enum_listingBlock_card_price_currency_format" AS ENUM('text', 'symbol');
  CREATE TYPE "public"."enum_listingBlock_card_price_override_global_currency" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_listingBlock_card_price_currency_select" AS ENUM('د.إ', 'AU$', 'R$', 'CA$', 'CHF', 'CN¥', '€', '£', 'HK$', '₹', '¥', 'MX$', 'NZ$', '₽', 'SG$', '฿', 'US$', '₫', 'R');
  CREATE TYPE "public"."enum_listingBlock_card_tags_button_style" AS ENUM('primary', 'secondary', 'outline');
  CREATE TYPE "public"."enum_listingArchiveBlock_card_enabled_fields" AS ENUM('price', 'bedrooms', 'bathrooms', 'lotSize', 'yearBuilt', 'areaSize', 'parkingSpaces', 'description', 'categories', 'thumbnail', 'tags');
  CREATE TYPE "public"."enum_listingArchiveBlock_layout_layout_type" AS ENUM('grid', 'list', 'carousel');
  CREATE TYPE "public"."enum_listingArchiveBlock_archive_populate_by" AS ENUM('latest', 'custom');
  CREATE TYPE "public"."enum_listingArchiveBlock_archive_pagination" AS ENUM('paginated', 'loadMore');
  CREATE TYPE "public"."enum_listingArchiveBlock_card_button_style" AS ENUM('primary', 'secondary', 'outline');
  CREATE TYPE "public"."enum_listingArchiveBlock_card_fit" AS ENUM('cover', 'contain', 'fill');
  CREATE TYPE "public"."enum_listingArchiveBlock_card_position" AS ENUM('top', 'center', 'bottom');
  CREATE TYPE "public"."enum_listingArchiveBlock_card_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum_listingArchiveBlock_card_decimals" AS ENUM('none', 'one', 'two');
  CREATE TYPE "public"."enum_listingArchiveBlock_card_currency_format" AS ENUM('text', 'symbol');
  CREATE TYPE "public"."enum_listingArchiveBlock_card_override_global_currency" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_listingArchiveBlock_card_currency_select" AS ENUM('د.إ', 'AU$', 'R$', 'CA$', 'CHF', 'CN¥', '€', '£', 'HK$', '₹', '¥', 'MX$', 'NZ$', '₽', 'SG$', '฿', 'US$', '₫', 'R');
  CREATE TYPE "public"."enum_pages_heros_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'advancedComponents');
  CREATE TYPE "public"."enum_pages_heros_search_component_button_style" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_heros_search_component_button_icon" AS ENUM('house', 'booking', 'garage');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_heros_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_heros_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_version_heros_icon_grid_icon" AS ENUM('house', 'booking', 'garage', 'bath', 'bed', 'area', 'price', 'rooms', 'parking', 'pool', 'garden', 'land', 'other');
  CREATE TYPE "public"."enum__pages_v_version_heros_icon_grid_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('blog');
  CREATE TYPE "public"."enum__listingBlock_v_card_enabled_fields" AS ENUM('price', 'bedrooms', 'bathrooms', 'lotSize', 'yearBuilt', 'areaSize', 'parkingSpaces', 'description', 'categories', 'thumbnail', 'tags');
  CREATE TYPE "public"."enum__listingBlock_v_view_layout" AS ENUM('grid', 'list', 'ftrd', 'crsl');
  CREATE TYPE "public"."enum__listingBlock_v_card_thumbnail_fit" AS ENUM('cover', 'contain', 'fill');
  CREATE TYPE "public"."enum__listingBlock_v_card_thumbnail_position" AS ENUM('top', 'center', 'bottom');
  CREATE TYPE "public"."enum__listingBlock_v_card_thumbnail_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum__listingBlock_v_card_price_decimals" AS ENUM('none', 'one', 'two');
  CREATE TYPE "public"."enum__listingBlock_v_card_price_currency_format" AS ENUM('text', 'symbol');
  CREATE TYPE "public"."enum__listingBlock_v_card_price_override_global_currency" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum__listingBlock_v_card_price_currency_select" AS ENUM('د.إ', 'AU$', 'R$', 'CA$', 'CHF', 'CN¥', '€', '£', 'HK$', '₹', '¥', 'MX$', 'NZ$', '₽', 'SG$', '฿', 'US$', '₫', 'R');
  CREATE TYPE "public"."enum__listingBlock_v_card_tags_button_style" AS ENUM('primary', 'secondary', 'outline');
  CREATE TYPE "public"."enum__listingArchiveBlock_v_card_enabled_fields" AS ENUM('price', 'bedrooms', 'bathrooms', 'lotSize', 'yearBuilt', 'areaSize', 'parkingSpaces', 'description', 'categories', 'thumbnail', 'tags');
  CREATE TYPE "public"."enum__listingArchiveBlock_v_layout_layout_type" AS ENUM('grid', 'list', 'carousel');
  CREATE TYPE "public"."enum__listingArchiveBlock_v_archive_populate_by" AS ENUM('latest', 'custom');
  CREATE TYPE "public"."enum__listingArchiveBlock_v_archive_pagination" AS ENUM('paginated', 'loadMore');
  CREATE TYPE "public"."enum__listingArchiveBlock_v_card_button_style" AS ENUM('primary', 'secondary', 'outline');
  CREATE TYPE "public"."enum__listingArchiveBlock_v_card_fit" AS ENUM('cover', 'contain', 'fill');
  CREATE TYPE "public"."enum__listingArchiveBlock_v_card_position" AS ENUM('top', 'center', 'bottom');
  CREATE TYPE "public"."enum__listingArchiveBlock_v_card_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum__listingArchiveBlock_v_card_decimals" AS ENUM('none', 'one', 'two');
  CREATE TYPE "public"."enum__listingArchiveBlock_v_card_currency_format" AS ENUM('text', 'symbol');
  CREATE TYPE "public"."enum__listingArchiveBlock_v_card_override_global_currency" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum__listingArchiveBlock_v_card_currency_select" AS ENUM('د.إ', 'AU$', 'R$', 'CA$', 'CHF', 'CN¥', '€', '£', 'HK$', '₹', '¥', 'MX$', 'NZ$', '₽', 'SG$', '฿', 'US$', '₫', 'R');
  CREATE TYPE "public"."enum__pages_v_version_heros_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'advancedComponents');
  CREATE TYPE "public"."enum__pages_v_version_heros_search_component_button_style" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_version_heros_search_component_button_icon" AS ENUM('house', 'booking', 'garage');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_blog_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__blog_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_tags_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__tags_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor', 'public');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_navGroups_dscrp_area_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_navItems_ftrd_link_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_navItems_list_links_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_navItems_style" AS ENUM('default', 'featured', 'list');
  CREATE TYPE "public"."enum_navItems_default_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_navGroups_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_main_menu_menu_cta_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_main_menu_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__navGroups_v_dscrp_area_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__navItems_v_ftrd_link_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__navItems_v_list_links_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__navItems_v_style" AS ENUM('default', 'featured', 'list');
  CREATE TYPE "public"."enum__navItems_v_default_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__navGroups_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__main_menu_v_version_menu_cta_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__main_menu_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_footer_columns_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__footer_v_version_columns_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__footer_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "properties_location_neighborhood_landmarks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"distance" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "properties_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"username" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "properties" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"market" "enum_properties_market",
  	"price" numeric,
  	"contract_id" integer,
  	"availability_id" integer,
  	"gallery_video_id" integer,
  	"gallery_virtual_tour_url" varchar,
  	"contract_details_requires_contract" boolean DEFAULT true,
  	"contract_details_requires_deposit" boolean DEFAULT false,
  	"specs_facility_facility_type" "enum_properties_specs_facility_facility_type",
  	"specs_facility_has_units" boolean DEFAULT false,
  	"specs_facility_is_land_only" boolean DEFAULT false,
  	"specs_measurements_size_range" "enum_properties_specs_measurements_size_range",
  	"specs_measurements_property_size" numeric,
  	"specs_measurements_block_size" numeric,
  	"specs_measurements_frontage" numeric,
  	"specs_measurements_depth" numeric,
  	"specs_rooms_num_bedrooms" numeric,
  	"specs_rooms_num_bathrooms" numeric,
  	"specs_rooms_num_carspaces" numeric,
  	"specs_rooms_num_floors" numeric,
  	"specs_construction_year_built" numeric,
  	"specs_construction_last_renovated" numeric,
  	"specs_construction_construction_type" "enum_properties_specs_construction_construction_type",
  	"specs_utilities_energy_rating" "enum_properties_specs_utilities_energy_rating",
  	"specs_utilities_heating_type" "enum_properties_specs_utilities_heating_type",
  	"specs_utilities_cooling_type" "enum_properties_specs_utilities_cooling_type",
  	"location_address_line1" varchar,
  	"location_unit" varchar,
  	"location_address_line2" varchar,
  	"location_city" varchar,
  	"location_state" varchar,
  	"location_postcode" varchar,
  	"location_country_select_country" "enum_properties_location_country_select_country" DEFAULT 'US',
  	"location_coordinates_latitude" numeric,
  	"location_coordinates_longitude" numeric,
  	"location_neighborhood_area" varchar,
  	"description" jsonb,
  	"is_featured" boolean DEFAULT false,
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
  	"classifications_id" integer,
  	"amenities_id" integer,
  	"media_id" integer,
  	"blog_categories_id" integer,
  	"contracts_id" integer,
  	"availability_id" integer,
  	"tags_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_version_location_neighborhood_landmarks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"distance" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"username" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_market" "enum__properties_v_version_market",
  	"version_price" numeric,
  	"version_contract_id" integer,
  	"version_availability_id" integer,
  	"version_gallery_video_id" integer,
  	"version_gallery_virtual_tour_url" varchar,
  	"version_contract_details_requires_contract" boolean DEFAULT true,
  	"version_contract_details_requires_deposit" boolean DEFAULT false,
  	"version_specs_facility_facility_type" "enum__properties_v_version_specs_facility_facility_type",
  	"version_specs_facility_has_units" boolean DEFAULT false,
  	"version_specs_facility_is_land_only" boolean DEFAULT false,
  	"version_specs_measurements_size_range" "enum__properties_v_version_specs_measurements_size_range",
  	"version_specs_measurements_property_size" numeric,
  	"version_specs_measurements_block_size" numeric,
  	"version_specs_measurements_frontage" numeric,
  	"version_specs_measurements_depth" numeric,
  	"version_specs_rooms_num_bedrooms" numeric,
  	"version_specs_rooms_num_bathrooms" numeric,
  	"version_specs_rooms_num_carspaces" numeric,
  	"version_specs_rooms_num_floors" numeric,
  	"version_specs_construction_year_built" numeric,
  	"version_specs_construction_last_renovated" numeric,
  	"version_specs_construction_construction_type" "enum__properties_v_version_specs_construction_construction_type",
  	"version_specs_utilities_energy_rating" "enum__properties_v_version_specs_utilities_energy_rating",
  	"version_specs_utilities_heating_type" "enum__properties_v_version_specs_utilities_heating_type",
  	"version_specs_utilities_cooling_type" "enum__properties_v_version_specs_utilities_cooling_type",
  	"version_location_address_line1" varchar,
  	"version_location_unit" varchar,
  	"version_location_address_line2" varchar,
  	"version_location_city" varchar,
  	"version_location_state" varchar,
  	"version_location_postcode" varchar,
  	"version_location_country_select_country" "enum__properties_v_version_location_country_select_country" DEFAULT 'US',
  	"version_location_coordinates_latitude" numeric,
  	"version_location_coordinates_longitude" numeric,
  	"version_location_neighborhood_area" varchar,
  	"version_description" jsonb,
  	"version_is_featured" boolean DEFAULT false,
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
  	"classifications_id" integer,
  	"amenities_id" integer,
  	"media_id" integer,
  	"blog_categories_id" integer,
  	"contracts_id" integer,
  	"availability_id" integer,
  	"tags_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "classifications_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"username" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "classifications_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "classifications" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"icon_id" integer,
  	"noindex" boolean,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_classifications_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "classifications_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_classifications_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"username" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_classifications_v_version_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_classifications_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_description" jsonb,
  	"version_image_id" integer,
  	"version_icon_id" integer,
  	"version_noindex" boolean,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_parent_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__classifications_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_classifications_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "amenities_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"username" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "amenities_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "amenities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"is_premium" boolean DEFAULT false,
  	"description" jsonb,
  	"image_id" integer,
  	"noindex" boolean,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_amenities_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "amenities_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_amenities_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"username" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_amenities_v_version_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_amenities_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_is_premium" boolean DEFAULT false,
  	"version_description" jsonb,
  	"version_image_id" integer,
  	"version_noindex" boolean,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_parent_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__amenities_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_amenities_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "availability_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"username" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "availability_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "availability" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"color" "enum_availability_color" DEFAULT 'blue',
  	"image_id" integer,
  	"icon_id" integer,
  	"extra_allow_inquiries" boolean DEFAULT true,
  	"extra_show_in_search" boolean DEFAULT true,
  	"noindex" boolean,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_availability_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "availability_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_availability_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"username" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_availability_v_version_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_availability_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_description" jsonb,
  	"version_color" "enum__availability_v_version_color" DEFAULT 'blue',
  	"version_image_id" integer,
  	"version_icon_id" integer,
  	"version_extra_allow_inquiries" boolean DEFAULT true,
  	"version_extra_show_in_search" boolean DEFAULT true,
  	"version_noindex" boolean,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_parent_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__availability_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_availability_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "contracts_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"username" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "contracts_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "contracts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"noindex" boolean,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_contracts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "contracts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_contracts_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"username" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_contracts_v_version_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_contracts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_description" jsonb,
  	"version_image_id" integer,
  	"version_noindex" boolean,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_parent_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__contracts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_contracts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_heros_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_heros_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_heros_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_heros_icon_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_heros_icon_grid_icon",
  	"label" varchar,
  	"link_type" "enum_pages_heros_icon_grid_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum_pages_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_pages_blocks_archive_relation_to" DEFAULT 'blog',
  	"limit" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "listingBlock_card_enabled_fields" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_listingBlock_card_enabled_fields",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "listingBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"view_layout" "enum_listingBlock_view_layout" DEFAULT 'grid',
  	"view_grid_columns" numeric DEFAULT 3,
  	"view_list_columns" numeric DEFAULT 6,
  	"view_ftrd_columns" numeric DEFAULT 1,
  	"card_thumbnail_fit" "enum_listingBlock_card_thumbnail_fit" DEFAULT 'cover',
  	"card_thumbnail_position" "enum_listingBlock_card_thumbnail_position" DEFAULT 'center',
  	"card_thumbnail_size" "enum_listingBlock_card_thumbnail_size" DEFAULT 'medium',
  	"card_price_decimals" "enum_listingBlock_card_price_decimals" DEFAULT 'none',
  	"card_price_currency_format" "enum_listingBlock_card_price_currency_format" DEFAULT 'symbol',
  	"card_price_override_global_currency" "enum_listingBlock_card_price_override_global_currency" DEFAULT 'no',
  	"card_price_currency_select" "enum_listingBlock_card_price_currency_select",
  	"card_tags_button_style" "enum_listingBlock_card_tags_button_style",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "listingArchiveBlock_card_enabled_fields" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_listingArchiveBlock_card_enabled_fields",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "listingArchiveBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"main_title" varchar DEFAULT 'Latest Listings',
  	"sub_title" jsonb,
  	"layout_layout_type" "enum_listingArchiveBlock_layout_layout_type" DEFAULT 'grid',
  	"archive_populate_by" "enum_listingArchiveBlock_archive_populate_by" DEFAULT 'latest',
  	"archive_limit" numeric DEFAULT 36,
  	"archive_pagination" "enum_listingArchiveBlock_archive_pagination" DEFAULT 'paginated',
  	"card_button_style" "enum_listingArchiveBlock_card_button_style",
  	"card_fit" "enum_listingArchiveBlock_card_fit" DEFAULT 'cover',
  	"card_position" "enum_listingArchiveBlock_card_position" DEFAULT 'center',
  	"card_size" "enum_listingArchiveBlock_card_size" DEFAULT 'medium',
  	"card_decimals" "enum_listingArchiveBlock_card_decimals" DEFAULT 'none',
  	"card_currency_format" "enum_listingArchiveBlock_card_currency_format" DEFAULT 'symbol',
  	"card_override_global_currency" "enum_listingArchiveBlock_card_override_global_currency" DEFAULT 'no',
  	"card_currency_select" "enum_listingArchiveBlock_card_currency_select",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"username" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"heros_type" "enum_pages_heros_type" DEFAULT 'advancedComponents',
  	"heros_rich_text" jsonb,
  	"heros_media_id" integer,
  	"heros_search_component_enable_property_status" boolean DEFAULT true,
  	"heros_search_component_enable_property_type" boolean DEFAULT true,
  	"heros_search_component_enable_rooms" boolean DEFAULT true,
  	"heros_search_component_enable_beds" boolean DEFAULT true,
  	"heros_search_component_enable_baths" boolean DEFAULT true,
  	"heros_search_component_price_range_enabled" boolean DEFAULT true,
  	"heros_search_component_price_range_min" numeric DEFAULT 2500,
  	"heros_search_component_price_range_max" numeric DEFAULT 8500,
  	"heros_search_component_area_range_enabled" boolean DEFAULT true,
  	"heros_search_component_area_range_min" numeric DEFAULT 2500,
  	"heros_search_component_area_range_max" numeric DEFAULT 8500,
  	"heros_search_component_button_label" varchar,
  	"heros_search_component_button_style" "enum_pages_heros_search_component_button_style",
  	"heros_search_component_button_icon" "enum_pages_heros_search_component_button_icon",
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"noindex" boolean,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blog_id" integer,
  	"properties_id" integer,
  	"blog_categories_id" integer,
  	"classifications_id" integer,
  	"amenities_id" integer,
  	"contracts_id" integer,
  	"availability_id" integer,
  	"tags_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_heros_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_version_heros_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_version_heros_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_heros_icon_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_version_heros_icon_grid_icon",
  	"label" varchar,
  	"link_type" "enum__pages_v_version_heros_icon_grid_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum__pages_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__pages_v_blocks_archive_relation_to" DEFAULT 'blog',
  	"limit" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_listingBlock_v_card_enabled_fields" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__listingBlock_v_card_enabled_fields",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_listingBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"view_layout" "enum__listingBlock_v_view_layout" DEFAULT 'grid',
  	"view_grid_columns" numeric DEFAULT 3,
  	"view_list_columns" numeric DEFAULT 6,
  	"view_ftrd_columns" numeric DEFAULT 1,
  	"card_thumbnail_fit" "enum__listingBlock_v_card_thumbnail_fit" DEFAULT 'cover',
  	"card_thumbnail_position" "enum__listingBlock_v_card_thumbnail_position" DEFAULT 'center',
  	"card_thumbnail_size" "enum__listingBlock_v_card_thumbnail_size" DEFAULT 'medium',
  	"card_price_decimals" "enum__listingBlock_v_card_price_decimals" DEFAULT 'none',
  	"card_price_currency_format" "enum__listingBlock_v_card_price_currency_format" DEFAULT 'symbol',
  	"card_price_override_global_currency" "enum__listingBlock_v_card_price_override_global_currency" DEFAULT 'no',
  	"card_price_currency_select" "enum__listingBlock_v_card_price_currency_select",
  	"card_tags_button_style" "enum__listingBlock_v_card_tags_button_style",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_listingArchiveBlock_v_card_enabled_fields" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__listingArchiveBlock_v_card_enabled_fields",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_listingArchiveBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"main_title" varchar DEFAULT 'Latest Listings',
  	"sub_title" jsonb,
  	"layout_layout_type" "enum__listingArchiveBlock_v_layout_layout_type" DEFAULT 'grid',
  	"archive_populate_by" "enum__listingArchiveBlock_v_archive_populate_by" DEFAULT 'latest',
  	"archive_limit" numeric DEFAULT 36,
  	"archive_pagination" "enum__listingArchiveBlock_v_archive_pagination" DEFAULT 'paginated',
  	"card_button_style" "enum__listingArchiveBlock_v_card_button_style",
  	"card_fit" "enum__listingArchiveBlock_v_card_fit" DEFAULT 'cover',
  	"card_position" "enum__listingArchiveBlock_v_card_position" DEFAULT 'center',
  	"card_size" "enum__listingArchiveBlock_v_card_size" DEFAULT 'medium',
  	"card_decimals" "enum__listingArchiveBlock_v_card_decimals" DEFAULT 'none',
  	"card_currency_format" "enum__listingArchiveBlock_v_card_currency_format" DEFAULT 'symbol',
  	"card_override_global_currency" "enum__listingArchiveBlock_v_card_override_global_currency" DEFAULT 'no',
  	"card_currency_select" "enum__listingArchiveBlock_v_card_currency_select",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"username" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_heros_type" "enum__pages_v_version_heros_type" DEFAULT 'advancedComponents',
  	"version_heros_rich_text" jsonb,
  	"version_heros_media_id" integer,
  	"version_heros_search_component_enable_property_status" boolean DEFAULT true,
  	"version_heros_search_component_enable_property_type" boolean DEFAULT true,
  	"version_heros_search_component_enable_rooms" boolean DEFAULT true,
  	"version_heros_search_component_enable_beds" boolean DEFAULT true,
  	"version_heros_search_component_enable_baths" boolean DEFAULT true,
  	"version_heros_search_component_price_range_enabled" boolean DEFAULT true,
  	"version_heros_search_component_price_range_min" numeric DEFAULT 2500,
  	"version_heros_search_component_price_range_max" numeric DEFAULT 8500,
  	"version_heros_search_component_area_range_enabled" boolean DEFAULT true,
  	"version_heros_search_component_area_range_min" numeric DEFAULT 2500,
  	"version_heros_search_component_area_range_max" numeric DEFAULT 8500,
  	"version_heros_search_component_button_label" varchar,
  	"version_heros_search_component_button_style" "enum__pages_v_version_heros_search_component_button_style",
  	"version_heros_search_component_button_icon" "enum__pages_v_version_heros_search_component_button_icon",
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_noindex" boolean,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_parent_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blog_id" integer,
  	"properties_id" integer,
  	"blog_categories_id" integer,
  	"classifications_id" integer,
  	"amenities_id" integer,
  	"contracts_id" integer,
  	"availability_id" integer,
  	"tags_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "blog_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"username" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"noindex" boolean,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_blog_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "blog_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"blog_categories_id" integer,
  	"classifications_id" integer,
  	"amenities_id" integer,
  	"contracts_id" integer,
  	"availability_id" integer,
  	"pages_id" integer,
  	"blog_id" integer,
  	"properties_id" integer,
  	"tags_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"username" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_noindex" boolean,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__blog_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"blog_categories_id" integer,
  	"classifications_id" integer,
  	"amenities_id" integer,
  	"contracts_id" integer,
  	"availability_id" integer,
  	"pages_id" integer,
  	"blog_id" integer,
  	"properties_id" integer,
  	"tags_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "blog_categories_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" jsonb,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "tags" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"image_id" integer,
  	"description" jsonb,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_tags_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_tags_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_image_id" integer,
  	"version_description" jsonb,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__tags_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" jsonb,
  	"prefix" varchar DEFAULT 'media',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_original_url" varchar,
  	"sizes_original_width" numeric,
  	"sizes_original_height" numeric,
  	"sizes_original_mime_type" varchar,
  	"sizes_original_filesize" numeric,
  	"sizes_original_filename" varchar,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "media_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"tags_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "assets" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"asset_dark_mode_fallback_id" integer,
  	"prefix" varchar DEFAULT 'assets',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"photo_id" integer,
  	"first_name" varchar,
  	"last_name" varchar,
  	"role" "enum_users_role" DEFAULT 'public' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"username" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"_verified" boolean,
  	"_verificationtoken" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "user_photos" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"prefix" varchar DEFAULT 'user-photos',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_avatar_url" varchar,
  	"sizes_avatar_width" numeric,
  	"sizes_avatar_height" numeric,
  	"sizes_avatar_mime_type" varchar,
  	"sizes_avatar_filesize" numeric,
  	"sizes_avatar_filename" varchar,
  	"sizes_original_url" varchar,
  	"sizes_original_width" numeric,
  	"sizes_original_height" numeric,
  	"sizes_original_mime_type" varchar,
  	"sizes_original_filesize" numeric,
  	"sizes_original_filename" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "search_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"relation_to" varchar,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "search" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"priority" numeric,
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"blog_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''''ve received a new message.' NOT NULL,
  	"message" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blog_id" integer,
  	"properties_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"properties_id" integer,
  	"classifications_id" integer,
  	"amenities_id" integer,
  	"availability_id" integer,
  	"contracts_id" integer,
  	"pages_id" integer,
  	"blog_id" integer,
  	"blog_categories_id" integer,
  	"tags_id" integer,
  	"media_id" integer,
  	"assets_id" integer,
  	"users_id" integer,
  	"user_photos_id" integer,
  	"search_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"redirects_id" integer,
  	"payload_jobs_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "navGroups_dscrp_area_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_navGroups_dscrp_area_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "navItems_ftrd_link_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_navItems_ftrd_link_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "navItems_list_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_navItems_list_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "navItems" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_navItems_style" DEFAULT 'default',
  	"default_link_link_type" "enum_navItems_default_link_link_type" DEFAULT 'reference',
  	"default_link_link_new_tab" boolean,
  	"default_link_link_url" varchar,
  	"default_link_link_label" varchar,
  	"default_link_description" varchar,
  	"ftrd_link_tag" varchar,
  	"ftrd_link_label" jsonb,
  	"list_links_tag" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "navGroups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"group_label" varchar,
  	"enable_direct_link" boolean,
  	"enable_dropdown" boolean,
  	"link_type" "enum_navGroups_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"dscrp_area_enable" boolean,
  	"dscrp_area_text" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "main_menu" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"menu_cta_enable_cta" boolean DEFAULT true,
  	"menu_cta_link_type" "enum_main_menu_menu_cta_link_type" DEFAULT 'reference',
  	"menu_cta_link_new_tab" boolean,
  	"menu_cta_link_url" varchar,
  	"menu_cta_link_label" varchar,
  	"_status" "enum_main_menu_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "main_menu_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blog_id" integer,
  	"properties_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_navGroups_v_dscrp_area_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__navGroups_v_dscrp_area_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_navItems_v_ftrd_link_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__navItems_v_ftrd_link_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_navItems_v_list_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__navItems_v_list_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_navItems_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style" "enum__navItems_v_style" DEFAULT 'default',
  	"default_link_link_type" "enum__navItems_v_default_link_link_type" DEFAULT 'reference',
  	"default_link_link_new_tab" boolean,
  	"default_link_link_url" varchar,
  	"default_link_link_label" varchar,
  	"default_link_description" varchar,
  	"ftrd_link_tag" varchar,
  	"ftrd_link_label" jsonb,
  	"list_links_tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_navGroups_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"group_label" varchar,
  	"enable_direct_link" boolean,
  	"enable_dropdown" boolean,
  	"link_type" "enum__navGroups_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"dscrp_area_enable" boolean,
  	"dscrp_area_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_main_menu_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_menu_cta_enable_cta" boolean DEFAULT true,
  	"version_menu_cta_link_type" "enum__main_menu_v_version_menu_cta_link_type" DEFAULT 'reference',
  	"version_menu_cta_link_new_tab" boolean,
  	"version_menu_cta_link_url" varchar,
  	"version_menu_cta_link_label" varchar,
  	"version__status" "enum__main_menu_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_main_menu_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blog_id" integer,
  	"properties_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "footer_columns_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_columns_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_status" "enum_footer_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blog_id" integer,
  	"properties_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_footer_v_version_columns_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__footer_v_version_columns_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_footer_v_version_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_footer_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version__status" "enum__footer_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_footer_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blog_id" integer,
  	"properties_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "global_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_identity_site_name" varchar,
  	"site_identity_site_description" varchar,
  	"branding_logo_id" integer,
  	"branding_logo_square_id" integer,
  	"branding_favicon_id" integer,
  	"contact_info_contact_name" varchar,
  	"contact_info_contact_email" varchar,
  	"contact_info_contact_phone" varchar,
  	"contact_info_contact_address" varchar,
  	"contact_info_social_media_facebook" varchar,
  	"contact_info_social_media_twitter" varchar,
  	"contact_info_social_media_instagram" varchar,
  	"contact_info_social_media_linkedin" varchar,
  	"contact_info_social_media_youtube" varchar,
  	"contact_info_social_media_whatsapp" varchar,
  	"contact_info_social_media_telegram" varchar,
  	"global_seo_keywords" varchar,
  	"global_seo_og_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DO $$ BEGIN
   ALTER TABLE "properties_location_neighborhood_landmarks" ADD CONSTRAINT "properties_location_neighborhood_landmarks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_populated_authors" ADD CONSTRAINT "properties_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties" ADD CONSTRAINT "properties_contract_id_contracts_id_fk" FOREIGN KEY ("contract_id") REFERENCES "public"."contracts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties" ADD CONSTRAINT "properties_availability_id_availability_id_fk" FOREIGN KEY ("availability_id") REFERENCES "public"."availability"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties" ADD CONSTRAINT "properties_gallery_video_id_media_id_fk" FOREIGN KEY ("gallery_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties" ADD CONSTRAINT "properties_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_classifications_fk" FOREIGN KEY ("classifications_id") REFERENCES "public"."classifications"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_amenities_fk" FOREIGN KEY ("amenities_id") REFERENCES "public"."amenities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_blog_categories_fk" FOREIGN KEY ("blog_categories_id") REFERENCES "public"."blog_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_contracts_fk" FOREIGN KEY ("contracts_id") REFERENCES "public"."contracts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_availability_fk" FOREIGN KEY ("availability_id") REFERENCES "public"."availability"("id") ON DELETE cascade ON UPDATE no action;
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
   ALTER TABLE "_properties_v_version_location_neighborhood_landmarks" ADD CONSTRAINT "_properties_v_version_location_neighborhood_landmarks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
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
   ALTER TABLE "_properties_v" ADD CONSTRAINT "_properties_v_version_contract_id_contracts_id_fk" FOREIGN KEY ("version_contract_id") REFERENCES "public"."contracts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v" ADD CONSTRAINT "_properties_v_version_availability_id_availability_id_fk" FOREIGN KEY ("version_availability_id") REFERENCES "public"."availability"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v" ADD CONSTRAINT "_properties_v_version_gallery_video_id_media_id_fk" FOREIGN KEY ("version_gallery_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v" ADD CONSTRAINT "_properties_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_classifications_fk" FOREIGN KEY ("classifications_id") REFERENCES "public"."classifications"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_amenities_fk" FOREIGN KEY ("amenities_id") REFERENCES "public"."amenities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_blog_categories_fk" FOREIGN KEY ("blog_categories_id") REFERENCES "public"."blog_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_contracts_fk" FOREIGN KEY ("contracts_id") REFERENCES "public"."contracts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_availability_fk" FOREIGN KEY ("availability_id") REFERENCES "public"."availability"("id") ON DELETE cascade ON UPDATE no action;
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
  
  DO $$ BEGIN
   ALTER TABLE "classifications_populated_authors" ADD CONSTRAINT "classifications_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."classifications"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "classifications_breadcrumbs" ADD CONSTRAINT "classifications_breadcrumbs_doc_id_classifications_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."classifications"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "classifications_breadcrumbs" ADD CONSTRAINT "classifications_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."classifications"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "classifications" ADD CONSTRAINT "classifications_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "classifications" ADD CONSTRAINT "classifications_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "classifications" ADD CONSTRAINT "classifications_parent_id_classifications_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."classifications"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "classifications_rels" ADD CONSTRAINT "classifications_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."classifications"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "classifications_rels" ADD CONSTRAINT "classifications_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_classifications_v_version_populated_authors" ADD CONSTRAINT "_classifications_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_classifications_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_classifications_v_version_breadcrumbs" ADD CONSTRAINT "_classifications_v_version_breadcrumbs_doc_id_classifications_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."classifications"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_classifications_v_version_breadcrumbs" ADD CONSTRAINT "_classifications_v_version_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_classifications_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_classifications_v" ADD CONSTRAINT "_classifications_v_parent_id_classifications_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."classifications"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_classifications_v" ADD CONSTRAINT "_classifications_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_classifications_v" ADD CONSTRAINT "_classifications_v_version_icon_id_media_id_fk" FOREIGN KEY ("version_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_classifications_v" ADD CONSTRAINT "_classifications_v_version_parent_id_classifications_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."classifications"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_classifications_v_rels" ADD CONSTRAINT "_classifications_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_classifications_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_classifications_v_rels" ADD CONSTRAINT "_classifications_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "amenities_populated_authors" ADD CONSTRAINT "amenities_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."amenities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "amenities_breadcrumbs" ADD CONSTRAINT "amenities_breadcrumbs_doc_id_amenities_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."amenities"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "amenities_breadcrumbs" ADD CONSTRAINT "amenities_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."amenities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "amenities" ADD CONSTRAINT "amenities_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "amenities" ADD CONSTRAINT "amenities_parent_id_amenities_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."amenities"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "amenities_rels" ADD CONSTRAINT "amenities_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."amenities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "amenities_rels" ADD CONSTRAINT "amenities_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_amenities_v_version_populated_authors" ADD CONSTRAINT "_amenities_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_amenities_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_amenities_v_version_breadcrumbs" ADD CONSTRAINT "_amenities_v_version_breadcrumbs_doc_id_amenities_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."amenities"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_amenities_v_version_breadcrumbs" ADD CONSTRAINT "_amenities_v_version_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_amenities_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_amenities_v" ADD CONSTRAINT "_amenities_v_parent_id_amenities_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."amenities"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_amenities_v" ADD CONSTRAINT "_amenities_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_amenities_v" ADD CONSTRAINT "_amenities_v_version_parent_id_amenities_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."amenities"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_amenities_v_rels" ADD CONSTRAINT "_amenities_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_amenities_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_amenities_v_rels" ADD CONSTRAINT "_amenities_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "availability_populated_authors" ADD CONSTRAINT "availability_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."availability"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "availability_breadcrumbs" ADD CONSTRAINT "availability_breadcrumbs_doc_id_availability_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."availability"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "availability_breadcrumbs" ADD CONSTRAINT "availability_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."availability"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "availability" ADD CONSTRAINT "availability_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "availability" ADD CONSTRAINT "availability_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "availability" ADD CONSTRAINT "availability_parent_id_availability_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."availability"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "availability_rels" ADD CONSTRAINT "availability_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."availability"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "availability_rels" ADD CONSTRAINT "availability_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_availability_v_version_populated_authors" ADD CONSTRAINT "_availability_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_availability_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_availability_v_version_breadcrumbs" ADD CONSTRAINT "_availability_v_version_breadcrumbs_doc_id_availability_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."availability"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_availability_v_version_breadcrumbs" ADD CONSTRAINT "_availability_v_version_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_availability_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_availability_v" ADD CONSTRAINT "_availability_v_parent_id_availability_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."availability"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_availability_v" ADD CONSTRAINT "_availability_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_availability_v" ADD CONSTRAINT "_availability_v_version_icon_id_media_id_fk" FOREIGN KEY ("version_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_availability_v" ADD CONSTRAINT "_availability_v_version_parent_id_availability_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."availability"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_availability_v_rels" ADD CONSTRAINT "_availability_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_availability_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_availability_v_rels" ADD CONSTRAINT "_availability_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "contracts_populated_authors" ADD CONSTRAINT "contracts_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contracts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "contracts_breadcrumbs" ADD CONSTRAINT "contracts_breadcrumbs_doc_id_contracts_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."contracts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "contracts_breadcrumbs" ADD CONSTRAINT "contracts_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contracts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "contracts" ADD CONSTRAINT "contracts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "contracts" ADD CONSTRAINT "contracts_parent_id_contracts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contracts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "contracts_rels" ADD CONSTRAINT "contracts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contracts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "contracts_rels" ADD CONSTRAINT "contracts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_contracts_v_version_populated_authors" ADD CONSTRAINT "_contracts_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_contracts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_contracts_v_version_breadcrumbs" ADD CONSTRAINT "_contracts_v_version_breadcrumbs_doc_id_contracts_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."contracts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_contracts_v_version_breadcrumbs" ADD CONSTRAINT "_contracts_v_version_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_contracts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_contracts_v" ADD CONSTRAINT "_contracts_v_parent_id_contracts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contracts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_contracts_v" ADD CONSTRAINT "_contracts_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_contracts_v" ADD CONSTRAINT "_contracts_v_version_parent_id_contracts_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."contracts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_contracts_v_rels" ADD CONSTRAINT "_contracts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_contracts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_contracts_v_rels" ADD CONSTRAINT "_contracts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_heros_links" ADD CONSTRAINT "pages_heros_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_heros_icon_grid" ADD CONSTRAINT "pages_heros_icon_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_archive" ADD CONSTRAINT "pages_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listingBlock_card_enabled_fields" ADD CONSTRAINT "listingBlock_card_enabled_fields_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."listingBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listingBlock" ADD CONSTRAINT "listingBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listingArchiveBlock_card_enabled_fields" ADD CONSTRAINT "listingArchiveBlock_card_enabled_fields_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."listingArchiveBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "listingArchiveBlock" ADD CONSTRAINT "listingArchiveBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_populated_authors" ADD CONSTRAINT "pages_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_breadcrumbs" ADD CONSTRAINT "pages_breadcrumbs_doc_id_pages_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_breadcrumbs" ADD CONSTRAINT "pages_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_heros_media_id_media_id_fk" FOREIGN KEY ("heros_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_properties_fk" FOREIGN KEY ("properties_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_blog_categories_fk" FOREIGN KEY ("blog_categories_id") REFERENCES "public"."blog_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_classifications_fk" FOREIGN KEY ("classifications_id") REFERENCES "public"."classifications"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_amenities_fk" FOREIGN KEY ("amenities_id") REFERENCES "public"."amenities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_contracts_fk" FOREIGN KEY ("contracts_id") REFERENCES "public"."contracts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_availability_fk" FOREIGN KEY ("availability_id") REFERENCES "public"."availability"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_heros_links" ADD CONSTRAINT "_pages_v_version_heros_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_heros_icon_grid" ADD CONSTRAINT "_pages_v_version_heros_icon_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_archive" ADD CONSTRAINT "_pages_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listingBlock_v_card_enabled_fields" ADD CONSTRAINT "_listingBlock_v_card_enabled_fields_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_listingBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listingBlock_v" ADD CONSTRAINT "_listingBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listingArchiveBlock_v_card_enabled_fields" ADD CONSTRAINT "_listingArchiveBlock_v_card_enabled_fields_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_listingArchiveBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_listingArchiveBlock_v" ADD CONSTRAINT "_listingArchiveBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_populated_authors" ADD CONSTRAINT "_pages_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_breadcrumbs" ADD CONSTRAINT "_pages_v_version_breadcrumbs_doc_id_pages_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_breadcrumbs" ADD CONSTRAINT "_pages_v_version_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_heros_media_id_media_id_fk" FOREIGN KEY ("version_heros_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_parent_id_pages_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_properties_fk" FOREIGN KEY ("properties_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_blog_categories_fk" FOREIGN KEY ("blog_categories_id") REFERENCES "public"."blog_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_classifications_fk" FOREIGN KEY ("classifications_id") REFERENCES "public"."classifications"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_amenities_fk" FOREIGN KEY ("amenities_id") REFERENCES "public"."amenities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_contracts_fk" FOREIGN KEY ("contracts_id") REFERENCES "public"."contracts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_availability_fk" FOREIGN KEY ("availability_id") REFERENCES "public"."availability"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_populated_authors" ADD CONSTRAINT "blog_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog" ADD CONSTRAINT "blog_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog" ADD CONSTRAINT "blog_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_blog_categories_fk" FOREIGN KEY ("blog_categories_id") REFERENCES "public"."blog_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_classifications_fk" FOREIGN KEY ("classifications_id") REFERENCES "public"."classifications"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_amenities_fk" FOREIGN KEY ("amenities_id") REFERENCES "public"."amenities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_contracts_fk" FOREIGN KEY ("contracts_id") REFERENCES "public"."contracts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_availability_fk" FOREIGN KEY ("availability_id") REFERENCES "public"."availability"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_properties_fk" FOREIGN KEY ("properties_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_version_populated_authors" ADD CONSTRAINT "_blog_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v" ADD CONSTRAINT "_blog_v_parent_id_blog_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v" ADD CONSTRAINT "_blog_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v" ADD CONSTRAINT "_blog_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_rels" ADD CONSTRAINT "_blog_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_blog_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_rels" ADD CONSTRAINT "_blog_v_rels_blog_categories_fk" FOREIGN KEY ("blog_categories_id") REFERENCES "public"."blog_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_rels" ADD CONSTRAINT "_blog_v_rels_classifications_fk" FOREIGN KEY ("classifications_id") REFERENCES "public"."classifications"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_rels" ADD CONSTRAINT "_blog_v_rels_amenities_fk" FOREIGN KEY ("amenities_id") REFERENCES "public"."amenities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_rels" ADD CONSTRAINT "_blog_v_rels_contracts_fk" FOREIGN KEY ("contracts_id") REFERENCES "public"."contracts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_rels" ADD CONSTRAINT "_blog_v_rels_availability_fk" FOREIGN KEY ("availability_id") REFERENCES "public"."availability"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_rels" ADD CONSTRAINT "_blog_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_rels" ADD CONSTRAINT "_blog_v_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_rels" ADD CONSTRAINT "_blog_v_rels_properties_fk" FOREIGN KEY ("properties_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_rels" ADD CONSTRAINT "_blog_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_rels" ADD CONSTRAINT "_blog_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_categories_breadcrumbs" ADD CONSTRAINT "blog_categories_breadcrumbs_doc_id_blog_categories_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."blog_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_categories_breadcrumbs" ADD CONSTRAINT "blog_categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_categories" ADD CONSTRAINT "blog_categories_parent_id_blog_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tags" ADD CONSTRAINT "tags_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_tags_v" ADD CONSTRAINT "_tags_v_parent_id_tags_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_tags_v" ADD CONSTRAINT "_tags_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_rels" ADD CONSTRAINT "media_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_rels" ADD CONSTRAINT "media_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "assets" ADD CONSTRAINT "assets_asset_dark_mode_fallback_id_assets_id_fk" FOREIGN KEY ("asset_dark_mode_fallback_id") REFERENCES "public"."assets"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users" ADD CONSTRAINT "users_photo_id_user_photos_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."user_photos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_categories" ADD CONSTRAINT "search_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search" ADD CONSTRAINT "search_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_properties_fk" FOREIGN KEY ("properties_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_properties_fk" FOREIGN KEY ("properties_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_classifications_fk" FOREIGN KEY ("classifications_id") REFERENCES "public"."classifications"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_amenities_fk" FOREIGN KEY ("amenities_id") REFERENCES "public"."amenities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_availability_fk" FOREIGN KEY ("availability_id") REFERENCES "public"."availability"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contracts_fk" FOREIGN KEY ("contracts_id") REFERENCES "public"."contracts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blog_categories_fk" FOREIGN KEY ("blog_categories_id") REFERENCES "public"."blog_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_assets_fk" FOREIGN KEY ("assets_id") REFERENCES "public"."assets"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_user_photos_fk" FOREIGN KEY ("user_photos_id") REFERENCES "public"."user_photos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navGroups_dscrp_area_links" ADD CONSTRAINT "navGroups_dscrp_area_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navGroups"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navItems_ftrd_link_links" ADD CONSTRAINT "navItems_ftrd_link_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navItems"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navItems_list_links_links" ADD CONSTRAINT "navItems_list_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navItems"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navItems" ADD CONSTRAINT "navItems_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navGroups"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navGroups" ADD CONSTRAINT "navGroups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."main_menu"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_rels" ADD CONSTRAINT "main_menu_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."main_menu"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_rels" ADD CONSTRAINT "main_menu_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_rels" ADD CONSTRAINT "main_menu_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_rels" ADD CONSTRAINT "main_menu_rels_properties_fk" FOREIGN KEY ("properties_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_navGroups_v_dscrp_area_links" ADD CONSTRAINT "_navGroups_v_dscrp_area_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navGroups_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_navItems_v_ftrd_link_links" ADD CONSTRAINT "_navItems_v_ftrd_link_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navItems_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_navItems_v_list_links_links" ADD CONSTRAINT "_navItems_v_list_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navItems_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_navItems_v" ADD CONSTRAINT "_navItems_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navGroups_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_navGroups_v" ADD CONSTRAINT "_navGroups_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_main_menu_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_main_menu_v_rels" ADD CONSTRAINT "_main_menu_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_main_menu_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_main_menu_v_rels" ADD CONSTRAINT "_main_menu_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_main_menu_v_rels" ADD CONSTRAINT "_main_menu_v_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_main_menu_v_rels" ADD CONSTRAINT "_main_menu_v_rels_properties_fk" FOREIGN KEY ("properties_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_columns_nav_items" ADD CONSTRAINT "footer_columns_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_columns" ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_properties_fk" FOREIGN KEY ("properties_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_footer_v_version_columns_nav_items" ADD CONSTRAINT "_footer_v_version_columns_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v_version_columns"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_footer_v_version_columns" ADD CONSTRAINT "_footer_v_version_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_footer_v_rels" ADD CONSTRAINT "_footer_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_footer_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_footer_v_rels" ADD CONSTRAINT "_footer_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_footer_v_rels" ADD CONSTRAINT "_footer_v_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_footer_v_rels" ADD CONSTRAINT "_footer_v_rels_properties_fk" FOREIGN KEY ("properties_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_settings" ADD CONSTRAINT "global_settings_branding_logo_id_assets_id_fk" FOREIGN KEY ("branding_logo_id") REFERENCES "public"."assets"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_settings" ADD CONSTRAINT "global_settings_branding_logo_square_id_assets_id_fk" FOREIGN KEY ("branding_logo_square_id") REFERENCES "public"."assets"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_settings" ADD CONSTRAINT "global_settings_branding_favicon_id_assets_id_fk" FOREIGN KEY ("branding_favicon_id") REFERENCES "public"."assets"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_settings" ADD CONSTRAINT "global_settings_global_seo_og_image_id_assets_id_fk" FOREIGN KEY ("global_seo_og_image_id") REFERENCES "public"."assets"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "properties_location_neighborhood_landmarks_order_idx" ON "properties_location_neighborhood_landmarks" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_location_neighborhood_landmarks_parent_id_idx" ON "properties_location_neighborhood_landmarks" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_populated_authors_order_idx" ON "properties_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_populated_authors_parent_id_idx" ON "properties_populated_authors" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "properties_title_idx" ON "properties" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "properties_contract_idx" ON "properties" USING btree ("contract_id");
  CREATE INDEX IF NOT EXISTS "properties_availability_idx" ON "properties" USING btree ("availability_id");
  CREATE INDEX IF NOT EXISTS "properties_gallery_gallery_video_idx" ON "properties" USING btree ("gallery_video_id");
  CREATE INDEX IF NOT EXISTS "properties_meta_meta_image_idx" ON "properties" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "properties_slug_idx" ON "properties" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "properties_updated_at_idx" ON "properties" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "properties_created_at_idx" ON "properties" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "properties__status_idx" ON "properties" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "properties_rels_order_idx" ON "properties_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "properties_rels_parent_idx" ON "properties_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_path_idx" ON "properties_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "properties_rels_classifications_id_idx" ON "properties_rels" USING btree ("classifications_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_amenities_id_idx" ON "properties_rels" USING btree ("amenities_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_media_id_idx" ON "properties_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_blog_categories_id_idx" ON "properties_rels" USING btree ("blog_categories_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_contracts_id_idx" ON "properties_rels" USING btree ("contracts_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_availability_id_idx" ON "properties_rels" USING btree ("availability_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_tags_id_idx" ON "properties_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_users_id_idx" ON "properties_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_location_neighborhood_landmarks_order_idx" ON "_properties_v_version_location_neighborhood_landmarks" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_location_neighborhood_landmarks_parent_id_idx" ON "_properties_v_version_location_neighborhood_landmarks" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_populated_authors_order_idx" ON "_properties_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_populated_authors_parent_id_idx" ON "_properties_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_parent_idx" ON "_properties_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version_title_idx" ON "_properties_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version_contract_idx" ON "_properties_v" USING btree ("version_contract_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version_availability_idx" ON "_properties_v" USING btree ("version_availability_id");
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
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_classifications_id_idx" ON "_properties_v_rels" USING btree ("classifications_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_amenities_id_idx" ON "_properties_v_rels" USING btree ("amenities_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_media_id_idx" ON "_properties_v_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_blog_categories_id_idx" ON "_properties_v_rels" USING btree ("blog_categories_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_contracts_id_idx" ON "_properties_v_rels" USING btree ("contracts_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_availability_id_idx" ON "_properties_v_rels" USING btree ("availability_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_tags_id_idx" ON "_properties_v_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_users_id_idx" ON "_properties_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "classifications_populated_authors_order_idx" ON "classifications_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "classifications_populated_authors_parent_id_idx" ON "classifications_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "classifications_breadcrumbs_order_idx" ON "classifications_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "classifications_breadcrumbs_parent_id_idx" ON "classifications_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "classifications_breadcrumbs_doc_idx" ON "classifications_breadcrumbs" USING btree ("doc_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "classifications_title_idx" ON "classifications" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "classifications_image_idx" ON "classifications" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "classifications_icon_idx" ON "classifications" USING btree ("icon_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "classifications_slug_idx" ON "classifications" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "classifications_parent_idx" ON "classifications" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "classifications_updated_at_idx" ON "classifications" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "classifications_created_at_idx" ON "classifications" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "classifications__status_idx" ON "classifications" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "classifications_rels_order_idx" ON "classifications_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "classifications_rels_parent_idx" ON "classifications_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "classifications_rels_path_idx" ON "classifications_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "classifications_rels_users_id_idx" ON "classifications_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_classifications_v_version_populated_authors_order_idx" ON "_classifications_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_classifications_v_version_populated_authors_parent_id_idx" ON "_classifications_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_classifications_v_version_breadcrumbs_order_idx" ON "_classifications_v_version_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_classifications_v_version_breadcrumbs_parent_id_idx" ON "_classifications_v_version_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_classifications_v_version_breadcrumbs_doc_idx" ON "_classifications_v_version_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX IF NOT EXISTS "_classifications_v_parent_idx" ON "_classifications_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_classifications_v_version_version_title_idx" ON "_classifications_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_classifications_v_version_version_image_idx" ON "_classifications_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_classifications_v_version_version_icon_idx" ON "_classifications_v" USING btree ("version_icon_id");
  CREATE INDEX IF NOT EXISTS "_classifications_v_version_version_slug_idx" ON "_classifications_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_classifications_v_version_version_parent_idx" ON "_classifications_v" USING btree ("version_parent_id");
  CREATE INDEX IF NOT EXISTS "_classifications_v_version_version_updated_at_idx" ON "_classifications_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_classifications_v_version_version_created_at_idx" ON "_classifications_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_classifications_v_version_version__status_idx" ON "_classifications_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_classifications_v_created_at_idx" ON "_classifications_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_classifications_v_updated_at_idx" ON "_classifications_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_classifications_v_latest_idx" ON "_classifications_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_classifications_v_autosave_idx" ON "_classifications_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_classifications_v_rels_order_idx" ON "_classifications_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_classifications_v_rels_parent_idx" ON "_classifications_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_classifications_v_rels_path_idx" ON "_classifications_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_classifications_v_rels_users_id_idx" ON "_classifications_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "amenities_populated_authors_order_idx" ON "amenities_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "amenities_populated_authors_parent_id_idx" ON "amenities_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "amenities_breadcrumbs_order_idx" ON "amenities_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "amenities_breadcrumbs_parent_id_idx" ON "amenities_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "amenities_breadcrumbs_doc_idx" ON "amenities_breadcrumbs" USING btree ("doc_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "amenities_title_idx" ON "amenities" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "amenities_image_idx" ON "amenities" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "amenities_slug_idx" ON "amenities" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "amenities_parent_idx" ON "amenities" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "amenities_updated_at_idx" ON "amenities" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "amenities_created_at_idx" ON "amenities" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "amenities__status_idx" ON "amenities" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "amenities_rels_order_idx" ON "amenities_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "amenities_rels_parent_idx" ON "amenities_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "amenities_rels_path_idx" ON "amenities_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "amenities_rels_users_id_idx" ON "amenities_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_amenities_v_version_populated_authors_order_idx" ON "_amenities_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_amenities_v_version_populated_authors_parent_id_idx" ON "_amenities_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_amenities_v_version_breadcrumbs_order_idx" ON "_amenities_v_version_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_amenities_v_version_breadcrumbs_parent_id_idx" ON "_amenities_v_version_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_amenities_v_version_breadcrumbs_doc_idx" ON "_amenities_v_version_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX IF NOT EXISTS "_amenities_v_parent_idx" ON "_amenities_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_amenities_v_version_version_title_idx" ON "_amenities_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_amenities_v_version_version_image_idx" ON "_amenities_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_amenities_v_version_version_slug_idx" ON "_amenities_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_amenities_v_version_version_parent_idx" ON "_amenities_v" USING btree ("version_parent_id");
  CREATE INDEX IF NOT EXISTS "_amenities_v_version_version_updated_at_idx" ON "_amenities_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_amenities_v_version_version_created_at_idx" ON "_amenities_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_amenities_v_version_version__status_idx" ON "_amenities_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_amenities_v_created_at_idx" ON "_amenities_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_amenities_v_updated_at_idx" ON "_amenities_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_amenities_v_latest_idx" ON "_amenities_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_amenities_v_autosave_idx" ON "_amenities_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_amenities_v_rels_order_idx" ON "_amenities_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_amenities_v_rels_parent_idx" ON "_amenities_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_amenities_v_rels_path_idx" ON "_amenities_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_amenities_v_rels_users_id_idx" ON "_amenities_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "availability_populated_authors_order_idx" ON "availability_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "availability_populated_authors_parent_id_idx" ON "availability_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "availability_breadcrumbs_order_idx" ON "availability_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "availability_breadcrumbs_parent_id_idx" ON "availability_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "availability_breadcrumbs_doc_idx" ON "availability_breadcrumbs" USING btree ("doc_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "availability_title_idx" ON "availability" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "availability_image_idx" ON "availability" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "availability_icon_idx" ON "availability" USING btree ("icon_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "availability_slug_idx" ON "availability" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "availability_parent_idx" ON "availability" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "availability_updated_at_idx" ON "availability" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "availability_created_at_idx" ON "availability" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "availability__status_idx" ON "availability" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "availability_rels_order_idx" ON "availability_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "availability_rels_parent_idx" ON "availability_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "availability_rels_path_idx" ON "availability_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "availability_rels_users_id_idx" ON "availability_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_availability_v_version_populated_authors_order_idx" ON "_availability_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_availability_v_version_populated_authors_parent_id_idx" ON "_availability_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_availability_v_version_breadcrumbs_order_idx" ON "_availability_v_version_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_availability_v_version_breadcrumbs_parent_id_idx" ON "_availability_v_version_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_availability_v_version_breadcrumbs_doc_idx" ON "_availability_v_version_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX IF NOT EXISTS "_availability_v_parent_idx" ON "_availability_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_availability_v_version_version_title_idx" ON "_availability_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_availability_v_version_version_image_idx" ON "_availability_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_availability_v_version_version_icon_idx" ON "_availability_v" USING btree ("version_icon_id");
  CREATE INDEX IF NOT EXISTS "_availability_v_version_version_slug_idx" ON "_availability_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_availability_v_version_version_parent_idx" ON "_availability_v" USING btree ("version_parent_id");
  CREATE INDEX IF NOT EXISTS "_availability_v_version_version_updated_at_idx" ON "_availability_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_availability_v_version_version_created_at_idx" ON "_availability_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_availability_v_version_version__status_idx" ON "_availability_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_availability_v_created_at_idx" ON "_availability_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_availability_v_updated_at_idx" ON "_availability_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_availability_v_latest_idx" ON "_availability_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_availability_v_autosave_idx" ON "_availability_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_availability_v_rels_order_idx" ON "_availability_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_availability_v_rels_parent_idx" ON "_availability_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_availability_v_rels_path_idx" ON "_availability_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_availability_v_rels_users_id_idx" ON "_availability_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "contracts_populated_authors_order_idx" ON "contracts_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "contracts_populated_authors_parent_id_idx" ON "contracts_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "contracts_breadcrumbs_order_idx" ON "contracts_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "contracts_breadcrumbs_parent_id_idx" ON "contracts_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "contracts_breadcrumbs_doc_idx" ON "contracts_breadcrumbs" USING btree ("doc_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "contracts_title_idx" ON "contracts" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "contracts_image_idx" ON "contracts" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "contracts_slug_idx" ON "contracts" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "contracts_parent_idx" ON "contracts" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "contracts_updated_at_idx" ON "contracts" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "contracts_created_at_idx" ON "contracts" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "contracts__status_idx" ON "contracts" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "contracts_rels_order_idx" ON "contracts_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "contracts_rels_parent_idx" ON "contracts_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "contracts_rels_path_idx" ON "contracts_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "contracts_rels_users_id_idx" ON "contracts_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_contracts_v_version_populated_authors_order_idx" ON "_contracts_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_contracts_v_version_populated_authors_parent_id_idx" ON "_contracts_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_contracts_v_version_breadcrumbs_order_idx" ON "_contracts_v_version_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_contracts_v_version_breadcrumbs_parent_id_idx" ON "_contracts_v_version_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_contracts_v_version_breadcrumbs_doc_idx" ON "_contracts_v_version_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX IF NOT EXISTS "_contracts_v_parent_idx" ON "_contracts_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_contracts_v_version_version_title_idx" ON "_contracts_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_contracts_v_version_version_image_idx" ON "_contracts_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_contracts_v_version_version_slug_idx" ON "_contracts_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_contracts_v_version_version_parent_idx" ON "_contracts_v" USING btree ("version_parent_id");
  CREATE INDEX IF NOT EXISTS "_contracts_v_version_version_updated_at_idx" ON "_contracts_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_contracts_v_version_version_created_at_idx" ON "_contracts_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_contracts_v_version_version__status_idx" ON "_contracts_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_contracts_v_created_at_idx" ON "_contracts_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_contracts_v_updated_at_idx" ON "_contracts_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_contracts_v_latest_idx" ON "_contracts_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_contracts_v_autosave_idx" ON "_contracts_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_contracts_v_rels_order_idx" ON "_contracts_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_contracts_v_rels_parent_idx" ON "_contracts_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_contracts_v_rels_path_idx" ON "_contracts_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_contracts_v_rels_users_id_idx" ON "_contracts_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "pages_heros_links_order_idx" ON "pages_heros_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_heros_links_parent_id_idx" ON "pages_heros_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_heros_icon_grid_order_idx" ON "pages_heros_icon_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_heros_icon_grid_parent_id_idx" ON "pages_heros_icon_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_links_order_idx" ON "pages_blocks_cta_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_links_parent_id_idx" ON "pages_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_media_idx" ON "pages_blocks_media_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_archive_order_idx" ON "pages_blocks_archive" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_archive_parent_id_idx" ON "pages_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_archive_path_idx" ON "pages_blocks_archive" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_form_idx" ON "pages_blocks_form_block" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "listingBlock_card_enabled_fields_order_idx" ON "listingBlock_card_enabled_fields" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "listingBlock_card_enabled_fields_parent_idx" ON "listingBlock_card_enabled_fields" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "listingBlock_order_idx" ON "listingBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "listingBlock_parent_id_idx" ON "listingBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "listingBlock_path_idx" ON "listingBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "listingArchiveBlock_card_enabled_fields_order_idx" ON "listingArchiveBlock_card_enabled_fields" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "listingArchiveBlock_card_enabled_fields_parent_idx" ON "listingArchiveBlock_card_enabled_fields" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "listingArchiveBlock_order_idx" ON "listingArchiveBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "listingArchiveBlock_parent_id_idx" ON "listingArchiveBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "listingArchiveBlock_path_idx" ON "listingArchiveBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_populated_authors_order_idx" ON "pages_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_populated_authors_parent_id_idx" ON "pages_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_breadcrumbs_order_idx" ON "pages_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_breadcrumbs_parent_id_idx" ON "pages_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_breadcrumbs_doc_idx" ON "pages_breadcrumbs" USING btree ("doc_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_title_idx" ON "pages" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "pages_heros_heros_media_idx" ON "pages" USING btree ("heros_media_id");
  CREATE INDEX IF NOT EXISTS "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_parent_idx" ON "pages" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_blog_id_idx" ON "pages_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_properties_id_idx" ON "pages_rels" USING btree ("properties_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_blog_categories_id_idx" ON "pages_rels" USING btree ("blog_categories_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_classifications_id_idx" ON "pages_rels" USING btree ("classifications_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_amenities_id_idx" ON "pages_rels" USING btree ("amenities_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_contracts_id_idx" ON "pages_rels" USING btree ("contracts_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_availability_id_idx" ON "pages_rels" USING btree ("availability_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_tags_id_idx" ON "pages_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_users_id_idx" ON "pages_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_heros_links_order_idx" ON "_pages_v_version_heros_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_heros_links_parent_id_idx" ON "_pages_v_version_heros_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_heros_icon_grid_order_idx" ON "_pages_v_version_heros_icon_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_heros_icon_grid_parent_id_idx" ON "_pages_v_version_heros_icon_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_links_order_idx" ON "_pages_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_links_parent_id_idx" ON "_pages_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_media_idx" ON "_pages_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_archive_order_idx" ON "_pages_v_blocks_archive" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_archive_parent_id_idx" ON "_pages_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_archive_path_idx" ON "_pages_v_blocks_archive" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_form_idx" ON "_pages_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "_listingBlock_v_card_enabled_fields_order_idx" ON "_listingBlock_v_card_enabled_fields" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_listingBlock_v_card_enabled_fields_parent_idx" ON "_listingBlock_v_card_enabled_fields" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_listingBlock_v_order_idx" ON "_listingBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_listingBlock_v_parent_id_idx" ON "_listingBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_listingBlock_v_path_idx" ON "_listingBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_listingArchiveBlock_v_card_enabled_fields_order_idx" ON "_listingArchiveBlock_v_card_enabled_fields" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_listingArchiveBlock_v_card_enabled_fields_parent_idx" ON "_listingArchiveBlock_v_card_enabled_fields" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_listingArchiveBlock_v_order_idx" ON "_listingArchiveBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_listingArchiveBlock_v_parent_id_idx" ON "_listingArchiveBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_listingArchiveBlock_v_path_idx" ON "_listingArchiveBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_populated_authors_order_idx" ON "_pages_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_populated_authors_parent_id_idx" ON "_pages_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_breadcrumbs_order_idx" ON "_pages_v_version_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_breadcrumbs_parent_id_idx" ON "_pages_v_version_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_breadcrumbs_doc_idx" ON "_pages_v_version_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_title_idx" ON "_pages_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_heros_version_heros_media_idx" ON "_pages_v" USING btree ("version_heros_media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_parent_idx" ON "_pages_v" USING btree ("version_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_blog_id_idx" ON "_pages_v_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_properties_id_idx" ON "_pages_v_rels" USING btree ("properties_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_blog_categories_id_idx" ON "_pages_v_rels" USING btree ("blog_categories_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_classifications_id_idx" ON "_pages_v_rels" USING btree ("classifications_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_amenities_id_idx" ON "_pages_v_rels" USING btree ("amenities_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_contracts_id_idx" ON "_pages_v_rels" USING btree ("contracts_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_availability_id_idx" ON "_pages_v_rels" USING btree ("availability_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_tags_id_idx" ON "_pages_v_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_users_id_idx" ON "_pages_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "blog_populated_authors_order_idx" ON "blog_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_populated_authors_parent_id_idx" ON "blog_populated_authors" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_title_idx" ON "blog" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "blog_hero_image_idx" ON "blog" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "blog_meta_meta_image_idx" ON "blog" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_slug_idx" ON "blog" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "blog_updated_at_idx" ON "blog" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "blog_created_at_idx" ON "blog" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "blog__status_idx" ON "blog" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "blog_rels_order_idx" ON "blog_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "blog_rels_parent_idx" ON "blog_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "blog_rels_path_idx" ON "blog_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "blog_rels_blog_categories_id_idx" ON "blog_rels" USING btree ("blog_categories_id");
  CREATE INDEX IF NOT EXISTS "blog_rels_classifications_id_idx" ON "blog_rels" USING btree ("classifications_id");
  CREATE INDEX IF NOT EXISTS "blog_rels_amenities_id_idx" ON "blog_rels" USING btree ("amenities_id");
  CREATE INDEX IF NOT EXISTS "blog_rels_contracts_id_idx" ON "blog_rels" USING btree ("contracts_id");
  CREATE INDEX IF NOT EXISTS "blog_rels_availability_id_idx" ON "blog_rels" USING btree ("availability_id");
  CREATE INDEX IF NOT EXISTS "blog_rels_pages_id_idx" ON "blog_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "blog_rels_blog_id_idx" ON "blog_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "blog_rels_properties_id_idx" ON "blog_rels" USING btree ("properties_id");
  CREATE INDEX IF NOT EXISTS "blog_rels_tags_id_idx" ON "blog_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "blog_rels_users_id_idx" ON "blog_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_populated_authors_order_idx" ON "_blog_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_populated_authors_parent_id_idx" ON "_blog_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_parent_idx" ON "_blog_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_title_idx" ON "_blog_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_hero_image_idx" ON "_blog_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_meta_version_meta_image_idx" ON "_blog_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_slug_idx" ON "_blog_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_updated_at_idx" ON "_blog_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_created_at_idx" ON "_blog_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version__status_idx" ON "_blog_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_blog_v_created_at_idx" ON "_blog_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_updated_at_idx" ON "_blog_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_latest_idx" ON "_blog_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_blog_v_autosave_idx" ON "_blog_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_order_idx" ON "_blog_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_parent_idx" ON "_blog_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_path_idx" ON "_blog_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_blog_categories_id_idx" ON "_blog_v_rels" USING btree ("blog_categories_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_classifications_id_idx" ON "_blog_v_rels" USING btree ("classifications_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_amenities_id_idx" ON "_blog_v_rels" USING btree ("amenities_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_contracts_id_idx" ON "_blog_v_rels" USING btree ("contracts_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_availability_id_idx" ON "_blog_v_rels" USING btree ("availability_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_pages_id_idx" ON "_blog_v_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_blog_id_idx" ON "_blog_v_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_properties_id_idx" ON "_blog_v_rels" USING btree ("properties_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_tags_id_idx" ON "_blog_v_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_users_id_idx" ON "_blog_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "blog_categories_breadcrumbs_order_idx" ON "blog_categories_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_categories_breadcrumbs_parent_id_idx" ON "blog_categories_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_categories_breadcrumbs_doc_idx" ON "blog_categories_breadcrumbs" USING btree ("doc_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_categories_title_idx" ON "blog_categories" USING btree ("title");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_categories_slug_idx" ON "blog_categories" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "blog_categories_parent_idx" ON "blog_categories" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "blog_categories_updated_at_idx" ON "blog_categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "blog_categories_created_at_idx" ON "blog_categories" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "tags_title_idx" ON "tags" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "tags_image_idx" ON "tags" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "tags_slug_idx" ON "tags" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "tags_updated_at_idx" ON "tags" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "tags_created_at_idx" ON "tags" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "tags__status_idx" ON "tags" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_tags_v_parent_idx" ON "_tags_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_tags_v_version_version_title_idx" ON "_tags_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_tags_v_version_version_image_idx" ON "_tags_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_tags_v_version_version_slug_idx" ON "_tags_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_tags_v_version_version_updated_at_idx" ON "_tags_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_tags_v_version_version_created_at_idx" ON "_tags_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_tags_v_version_version__status_idx" ON "_tags_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_tags_v_created_at_idx" ON "_tags_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_tags_v_updated_at_idx" ON "_tags_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_tags_v_latest_idx" ON "_tags_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_original_sizes_original_filename_idx" ON "media" USING btree ("sizes_original_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX IF NOT EXISTS "media_rels_order_idx" ON "media_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "media_rels_parent_idx" ON "media_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "media_rels_path_idx" ON "media_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "media_rels_tags_id_idx" ON "media_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "assets_asset_dark_mode_fallback_idx" ON "assets" USING btree ("asset_dark_mode_fallback_id");
  CREATE INDEX IF NOT EXISTS "assets_updated_at_idx" ON "assets" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "assets_created_at_idx" ON "assets" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "assets_filename_idx" ON "assets" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "users_photo_idx" ON "users" USING btree ("photo_id");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_username_idx" ON "users" USING btree ("username");
  CREATE INDEX IF NOT EXISTS "user_photos_updated_at_idx" ON "user_photos" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "user_photos_created_at_idx" ON "user_photos" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "user_photos_filename_idx" ON "user_photos" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "user_photos_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "user_photos" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "user_photos_sizes_avatar_sizes_avatar_filename_idx" ON "user_photos" USING btree ("sizes_avatar_filename");
  CREATE INDEX IF NOT EXISTS "user_photos_sizes_original_sizes_original_filename_idx" ON "user_photos" USING btree ("sizes_original_filename");
  CREATE INDEX IF NOT EXISTS "search_categories_order_idx" ON "search_categories" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "search_categories_parent_id_idx" ON "search_categories" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "search_slug_idx" ON "search" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "search_meta_meta_image_idx" ON "search" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "search_updated_at_idx" ON "search" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "search_created_at_idx" ON "search" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "search_rels_blog_id_idx" ON "search_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX IF NOT EXISTS "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_blog_id_idx" ON "redirects_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_properties_id_idx" ON "redirects_rels" USING btree ("properties_id");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX IF NOT EXISTS "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX IF NOT EXISTS "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX IF NOT EXISTS "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX IF NOT EXISTS "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX IF NOT EXISTS "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX IF NOT EXISTS "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_properties_id_idx" ON "payload_locked_documents_rels" USING btree ("properties_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_classifications_id_idx" ON "payload_locked_documents_rels" USING btree ("classifications_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_amenities_id_idx" ON "payload_locked_documents_rels" USING btree ("amenities_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_availability_id_idx" ON "payload_locked_documents_rels" USING btree ("availability_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_contracts_id_idx" ON "payload_locked_documents_rels" USING btree ("contracts_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_blog_id_idx" ON "payload_locked_documents_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_blog_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("blog_categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_tags_id_idx" ON "payload_locked_documents_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_assets_id_idx" ON "payload_locked_documents_rels" USING btree ("assets_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_user_photos_id_idx" ON "payload_locked_documents_rels" USING btree ("user_photos_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_payload_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_jobs_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "navGroups_dscrp_area_links_order_idx" ON "navGroups_dscrp_area_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navGroups_dscrp_area_links_parent_id_idx" ON "navGroups_dscrp_area_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navItems_ftrd_link_links_order_idx" ON "navItems_ftrd_link_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navItems_ftrd_link_links_parent_id_idx" ON "navItems_ftrd_link_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navItems_list_links_links_order_idx" ON "navItems_list_links_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navItems_list_links_links_parent_id_idx" ON "navItems_list_links_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navItems_order_idx" ON "navItems" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navItems_parent_id_idx" ON "navItems" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navGroups_order_idx" ON "navGroups" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navGroups_parent_id_idx" ON "navGroups" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "main_menu__status_idx" ON "main_menu" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "main_menu_rels_order_idx" ON "main_menu_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "main_menu_rels_parent_idx" ON "main_menu_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "main_menu_rels_path_idx" ON "main_menu_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "main_menu_rels_pages_id_idx" ON "main_menu_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "main_menu_rels_blog_id_idx" ON "main_menu_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "main_menu_rels_properties_id_idx" ON "main_menu_rels" USING btree ("properties_id");
  CREATE INDEX IF NOT EXISTS "_navGroups_v_dscrp_area_links_order_idx" ON "_navGroups_v_dscrp_area_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_navGroups_v_dscrp_area_links_parent_id_idx" ON "_navGroups_v_dscrp_area_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_navItems_v_ftrd_link_links_order_idx" ON "_navItems_v_ftrd_link_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_navItems_v_ftrd_link_links_parent_id_idx" ON "_navItems_v_ftrd_link_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_navItems_v_list_links_links_order_idx" ON "_navItems_v_list_links_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_navItems_v_list_links_links_parent_id_idx" ON "_navItems_v_list_links_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_navItems_v_order_idx" ON "_navItems_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_navItems_v_parent_id_idx" ON "_navItems_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_navGroups_v_order_idx" ON "_navGroups_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_navGroups_v_parent_id_idx" ON "_navGroups_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_main_menu_v_version_version__status_idx" ON "_main_menu_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_main_menu_v_created_at_idx" ON "_main_menu_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_main_menu_v_updated_at_idx" ON "_main_menu_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_main_menu_v_latest_idx" ON "_main_menu_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_main_menu_v_autosave_idx" ON "_main_menu_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_main_menu_v_rels_order_idx" ON "_main_menu_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_main_menu_v_rels_parent_idx" ON "_main_menu_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_main_menu_v_rels_path_idx" ON "_main_menu_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_main_menu_v_rels_pages_id_idx" ON "_main_menu_v_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "_main_menu_v_rels_blog_id_idx" ON "_main_menu_v_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "_main_menu_v_rels_properties_id_idx" ON "_main_menu_v_rels" USING btree ("properties_id");
  CREATE INDEX IF NOT EXISTS "footer_columns_nav_items_order_idx" ON "footer_columns_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_columns_nav_items_parent_id_idx" ON "footer_columns_nav_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_columns_order_idx" ON "footer_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_columns_parent_id_idx" ON "footer_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer__status_idx" ON "footer" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_blog_id_idx" ON "footer_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_properties_id_idx" ON "footer_rels" USING btree ("properties_id");
  CREATE INDEX IF NOT EXISTS "_footer_v_version_columns_nav_items_order_idx" ON "_footer_v_version_columns_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_footer_v_version_columns_nav_items_parent_id_idx" ON "_footer_v_version_columns_nav_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_footer_v_version_columns_order_idx" ON "_footer_v_version_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_footer_v_version_columns_parent_id_idx" ON "_footer_v_version_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_footer_v_version_version__status_idx" ON "_footer_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_footer_v_created_at_idx" ON "_footer_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_footer_v_updated_at_idx" ON "_footer_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_footer_v_latest_idx" ON "_footer_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_footer_v_autosave_idx" ON "_footer_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_footer_v_rels_order_idx" ON "_footer_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_footer_v_rels_parent_idx" ON "_footer_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_footer_v_rels_path_idx" ON "_footer_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_footer_v_rels_pages_id_idx" ON "_footer_v_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "_footer_v_rels_blog_id_idx" ON "_footer_v_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "_footer_v_rels_properties_id_idx" ON "_footer_v_rels" USING btree ("properties_id");
  CREATE INDEX IF NOT EXISTS "global_settings_branding_branding_logo_idx" ON "global_settings" USING btree ("branding_logo_id");
  CREATE INDEX IF NOT EXISTS "global_settings_branding_branding_logo_square_idx" ON "global_settings" USING btree ("branding_logo_square_id");
  CREATE INDEX IF NOT EXISTS "global_settings_branding_branding_favicon_idx" ON "global_settings" USING btree ("branding_favicon_id");
  CREATE INDEX IF NOT EXISTS "global_settings_global_seo_global_seo_og_image_idx" ON "global_settings" USING btree ("global_seo_og_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "properties_location_neighborhood_landmarks" CASCADE;
  DROP TABLE "properties_populated_authors" CASCADE;
  DROP TABLE "properties" CASCADE;
  DROP TABLE "properties_rels" CASCADE;
  DROP TABLE "_properties_v_version_location_neighborhood_landmarks" CASCADE;
  DROP TABLE "_properties_v_version_populated_authors" CASCADE;
  DROP TABLE "_properties_v" CASCADE;
  DROP TABLE "_properties_v_rels" CASCADE;
  DROP TABLE "classifications_populated_authors" CASCADE;
  DROP TABLE "classifications_breadcrumbs" CASCADE;
  DROP TABLE "classifications" CASCADE;
  DROP TABLE "classifications_rels" CASCADE;
  DROP TABLE "_classifications_v_version_populated_authors" CASCADE;
  DROP TABLE "_classifications_v_version_breadcrumbs" CASCADE;
  DROP TABLE "_classifications_v" CASCADE;
  DROP TABLE "_classifications_v_rels" CASCADE;
  DROP TABLE "amenities_populated_authors" CASCADE;
  DROP TABLE "amenities_breadcrumbs" CASCADE;
  DROP TABLE "amenities" CASCADE;
  DROP TABLE "amenities_rels" CASCADE;
  DROP TABLE "_amenities_v_version_populated_authors" CASCADE;
  DROP TABLE "_amenities_v_version_breadcrumbs" CASCADE;
  DROP TABLE "_amenities_v" CASCADE;
  DROP TABLE "_amenities_v_rels" CASCADE;
  DROP TABLE "availability_populated_authors" CASCADE;
  DROP TABLE "availability_breadcrumbs" CASCADE;
  DROP TABLE "availability" CASCADE;
  DROP TABLE "availability_rels" CASCADE;
  DROP TABLE "_availability_v_version_populated_authors" CASCADE;
  DROP TABLE "_availability_v_version_breadcrumbs" CASCADE;
  DROP TABLE "_availability_v" CASCADE;
  DROP TABLE "_availability_v_rels" CASCADE;
  DROP TABLE "contracts_populated_authors" CASCADE;
  DROP TABLE "contracts_breadcrumbs" CASCADE;
  DROP TABLE "contracts" CASCADE;
  DROP TABLE "contracts_rels" CASCADE;
  DROP TABLE "_contracts_v_version_populated_authors" CASCADE;
  DROP TABLE "_contracts_v_version_breadcrumbs" CASCADE;
  DROP TABLE "_contracts_v" CASCADE;
  DROP TABLE "_contracts_v_rels" CASCADE;
  DROP TABLE "pages_heros_links" CASCADE;
  DROP TABLE "pages_heros_icon_grid" CASCADE;
  DROP TABLE "pages_blocks_cta_links" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_content_columns" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_media_block" CASCADE;
  DROP TABLE "pages_blocks_archive" CASCADE;
  DROP TABLE "pages_blocks_form_block" CASCADE;
  DROP TABLE "listingBlock_card_enabled_fields" CASCADE;
  DROP TABLE "listingBlock" CASCADE;
  DROP TABLE "listingArchiveBlock_card_enabled_fields" CASCADE;
  DROP TABLE "listingArchiveBlock" CASCADE;
  DROP TABLE "pages_populated_authors" CASCADE;
  DROP TABLE "pages_breadcrumbs" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_heros_links" CASCADE;
  DROP TABLE "_pages_v_version_heros_icon_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_media_block" CASCADE;
  DROP TABLE "_pages_v_blocks_archive" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block" CASCADE;
  DROP TABLE "_listingBlock_v_card_enabled_fields" CASCADE;
  DROP TABLE "_listingBlock_v" CASCADE;
  DROP TABLE "_listingArchiveBlock_v_card_enabled_fields" CASCADE;
  DROP TABLE "_listingArchiveBlock_v" CASCADE;
  DROP TABLE "_pages_v_version_populated_authors" CASCADE;
  DROP TABLE "_pages_v_version_breadcrumbs" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "blog_populated_authors" CASCADE;
  DROP TABLE "blog" CASCADE;
  DROP TABLE "blog_rels" CASCADE;
  DROP TABLE "_blog_v_version_populated_authors" CASCADE;
  DROP TABLE "_blog_v" CASCADE;
  DROP TABLE "_blog_v_rels" CASCADE;
  DROP TABLE "blog_categories_breadcrumbs" CASCADE;
  DROP TABLE "blog_categories" CASCADE;
  DROP TABLE "tags" CASCADE;
  DROP TABLE "_tags_v" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "media_rels" CASCADE;
  DROP TABLE "assets" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "user_photos" CASCADE;
  DROP TABLE "search_categories" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "navGroups_dscrp_area_links" CASCADE;
  DROP TABLE "navItems_ftrd_link_links" CASCADE;
  DROP TABLE "navItems_list_links_links" CASCADE;
  DROP TABLE "navItems" CASCADE;
  DROP TABLE "navGroups" CASCADE;
  DROP TABLE "main_menu" CASCADE;
  DROP TABLE "main_menu_rels" CASCADE;
  DROP TABLE "_navGroups_v_dscrp_area_links" CASCADE;
  DROP TABLE "_navItems_v_ftrd_link_links" CASCADE;
  DROP TABLE "_navItems_v_list_links_links" CASCADE;
  DROP TABLE "_navItems_v" CASCADE;
  DROP TABLE "_navGroups_v" CASCADE;
  DROP TABLE "_main_menu_v" CASCADE;
  DROP TABLE "_main_menu_v_rels" CASCADE;
  DROP TABLE "footer_columns_nav_items" CASCADE;
  DROP TABLE "footer_columns" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TABLE "_footer_v_version_columns_nav_items" CASCADE;
  DROP TABLE "_footer_v_version_columns" CASCADE;
  DROP TABLE "_footer_v" CASCADE;
  DROP TABLE "_footer_v_rels" CASCADE;
  DROP TABLE "global_settings" CASCADE;
  DROP TYPE "public"."enum_properties_market";
  DROP TYPE "public"."enum_properties_specs_facility_facility_type";
  DROP TYPE "public"."enum_properties_specs_measurements_size_range";
  DROP TYPE "public"."enum_properties_specs_construction_construction_type";
  DROP TYPE "public"."enum_properties_specs_utilities_energy_rating";
  DROP TYPE "public"."enum_properties_specs_utilities_heating_type";
  DROP TYPE "public"."enum_properties_specs_utilities_cooling_type";
  DROP TYPE "public"."enum_properties_location_country_select_country";
  DROP TYPE "public"."enum_properties_status";
  DROP TYPE "public"."enum__properties_v_version_market";
  DROP TYPE "public"."enum__properties_v_version_specs_facility_facility_type";
  DROP TYPE "public"."enum__properties_v_version_specs_measurements_size_range";
  DROP TYPE "public"."enum__properties_v_version_specs_construction_construction_type";
  DROP TYPE "public"."enum__properties_v_version_specs_utilities_energy_rating";
  DROP TYPE "public"."enum__properties_v_version_specs_utilities_heating_type";
  DROP TYPE "public"."enum__properties_v_version_specs_utilities_cooling_type";
  DROP TYPE "public"."enum__properties_v_version_location_country_select_country";
  DROP TYPE "public"."enum__properties_v_version_status";
  DROP TYPE "public"."enum_classifications_status";
  DROP TYPE "public"."enum__classifications_v_version_status";
  DROP TYPE "public"."enum_amenities_status";
  DROP TYPE "public"."enum__amenities_v_version_status";
  DROP TYPE "public"."enum_availability_color";
  DROP TYPE "public"."enum_availability_status";
  DROP TYPE "public"."enum__availability_v_version_color";
  DROP TYPE "public"."enum__availability_v_version_status";
  DROP TYPE "public"."enum_contracts_status";
  DROP TYPE "public"."enum__contracts_v_version_status";
  DROP TYPE "public"."enum_pages_heros_links_link_type";
  DROP TYPE "public"."enum_pages_heros_links_link_appearance";
  DROP TYPE "public"."enum_pages_heros_icon_grid_icon";
  DROP TYPE "public"."enum_pages_heros_icon_grid_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_content_columns_size";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_archive_populate_by";
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  DROP TYPE "public"."enum_listingBlock_card_enabled_fields";
  DROP TYPE "public"."enum_listingBlock_view_layout";
  DROP TYPE "public"."enum_listingBlock_card_thumbnail_fit";
  DROP TYPE "public"."enum_listingBlock_card_thumbnail_position";
  DROP TYPE "public"."enum_listingBlock_card_thumbnail_size";
  DROP TYPE "public"."enum_listingBlock_card_price_decimals";
  DROP TYPE "public"."enum_listingBlock_card_price_currency_format";
  DROP TYPE "public"."enum_listingBlock_card_price_override_global_currency";
  DROP TYPE "public"."enum_listingBlock_card_price_currency_select";
  DROP TYPE "public"."enum_listingBlock_card_tags_button_style";
  DROP TYPE "public"."enum_listingArchiveBlock_card_enabled_fields";
  DROP TYPE "public"."enum_listingArchiveBlock_layout_layout_type";
  DROP TYPE "public"."enum_listingArchiveBlock_archive_populate_by";
  DROP TYPE "public"."enum_listingArchiveBlock_archive_pagination";
  DROP TYPE "public"."enum_listingArchiveBlock_card_button_style";
  DROP TYPE "public"."enum_listingArchiveBlock_card_fit";
  DROP TYPE "public"."enum_listingArchiveBlock_card_position";
  DROP TYPE "public"."enum_listingArchiveBlock_card_size";
  DROP TYPE "public"."enum_listingArchiveBlock_card_decimals";
  DROP TYPE "public"."enum_listingArchiveBlock_card_currency_format";
  DROP TYPE "public"."enum_listingArchiveBlock_card_override_global_currency";
  DROP TYPE "public"."enum_listingArchiveBlock_card_currency_select";
  DROP TYPE "public"."enum_pages_heros_type";
  DROP TYPE "public"."enum_pages_heros_search_component_button_style";
  DROP TYPE "public"."enum_pages_heros_search_component_button_icon";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_heros_links_link_type";
  DROP TYPE "public"."enum__pages_v_version_heros_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_version_heros_icon_grid_icon";
  DROP TYPE "public"."enum__pages_v_version_heros_icon_grid_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__listingBlock_v_card_enabled_fields";
  DROP TYPE "public"."enum__listingBlock_v_view_layout";
  DROP TYPE "public"."enum__listingBlock_v_card_thumbnail_fit";
  DROP TYPE "public"."enum__listingBlock_v_card_thumbnail_position";
  DROP TYPE "public"."enum__listingBlock_v_card_thumbnail_size";
  DROP TYPE "public"."enum__listingBlock_v_card_price_decimals";
  DROP TYPE "public"."enum__listingBlock_v_card_price_currency_format";
  DROP TYPE "public"."enum__listingBlock_v_card_price_override_global_currency";
  DROP TYPE "public"."enum__listingBlock_v_card_price_currency_select";
  DROP TYPE "public"."enum__listingBlock_v_card_tags_button_style";
  DROP TYPE "public"."enum__listingArchiveBlock_v_card_enabled_fields";
  DROP TYPE "public"."enum__listingArchiveBlock_v_layout_layout_type";
  DROP TYPE "public"."enum__listingArchiveBlock_v_archive_populate_by";
  DROP TYPE "public"."enum__listingArchiveBlock_v_archive_pagination";
  DROP TYPE "public"."enum__listingArchiveBlock_v_card_button_style";
  DROP TYPE "public"."enum__listingArchiveBlock_v_card_fit";
  DROP TYPE "public"."enum__listingArchiveBlock_v_card_position";
  DROP TYPE "public"."enum__listingArchiveBlock_v_card_size";
  DROP TYPE "public"."enum__listingArchiveBlock_v_card_decimals";
  DROP TYPE "public"."enum__listingArchiveBlock_v_card_currency_format";
  DROP TYPE "public"."enum__listingArchiveBlock_v_card_override_global_currency";
  DROP TYPE "public"."enum__listingArchiveBlock_v_card_currency_select";
  DROP TYPE "public"."enum__pages_v_version_heros_type";
  DROP TYPE "public"."enum__pages_v_version_heros_search_component_button_style";
  DROP TYPE "public"."enum__pages_v_version_heros_search_component_button_icon";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_blog_status";
  DROP TYPE "public"."enum__blog_v_version_status";
  DROP TYPE "public"."enum_tags_status";
  DROP TYPE "public"."enum__tags_v_version_status";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_navGroups_dscrp_area_links_link_type";
  DROP TYPE "public"."enum_navItems_ftrd_link_links_link_type";
  DROP TYPE "public"."enum_navItems_list_links_links_link_type";
  DROP TYPE "public"."enum_navItems_style";
  DROP TYPE "public"."enum_navItems_default_link_link_type";
  DROP TYPE "public"."enum_navGroups_link_type";
  DROP TYPE "public"."enum_main_menu_menu_cta_link_type";
  DROP TYPE "public"."enum_main_menu_status";
  DROP TYPE "public"."enum__navGroups_v_dscrp_area_links_link_type";
  DROP TYPE "public"."enum__navItems_v_ftrd_link_links_link_type";
  DROP TYPE "public"."enum__navItems_v_list_links_links_link_type";
  DROP TYPE "public"."enum__navItems_v_style";
  DROP TYPE "public"."enum__navItems_v_default_link_link_type";
  DROP TYPE "public"."enum__navGroups_v_link_type";
  DROP TYPE "public"."enum__main_menu_v_version_menu_cta_link_type";
  DROP TYPE "public"."enum__main_menu_v_version_status";
  DROP TYPE "public"."enum_footer_columns_nav_items_link_type";
  DROP TYPE "public"."enum_footer_status";
  DROP TYPE "public"."enum__footer_v_version_columns_nav_items_link_type";
  DROP TYPE "public"."enum__footer_v_version_status";`)
}
