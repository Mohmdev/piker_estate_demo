# Properties Seeding System Legend

## Core Collections

1. `properties` - Main collection for real estate properties
   - Contains property listings with all their details
   - References other collections through relationships

2. `property-types` - Types of properties available
   - House
   - Apartment
   - Townhouse
   - Villa
   - etc.

3. `listing-types` - Types of property listings
   - For Sale
   - For Rent
   - For Lease
   - etc.

4. `listing-status` - Current status of listings
   - Available
   - Under Contract
   - Sold
   - Rented
   - etc.

5. `features` - Property amenities and features
   - Swimming Pool
   - Security System
   - Garden
   - Garage
   - etc.

6. `media` - Property images and media files
   - Supports multiple images per property
   - Stores metadata like alt text

## Relationships

- Properties → Property Types (one-to-one)
- Properties → Listing Types (one-to-one)
- Properties → Listing Status (one-to-one)
- Properties → Features (many-to-many)
- Properties → Media (one-to-many)

## Seeding Process

1. Clears existing data from all collections
2. Seeds media files first
3. Seeds supporting collections (property-types, listing-types, listing-status, features)
4. Finally seeds properties with relationships to all other collections

This structure allows for a complete real estate property management system with rich relationships and detailed property information.

# Mock Data on a High Level

This section outlines the mock data structure and examples we need for a comprehensive real estate platform.

## Property Types

Core property categories that define the main types of real estate:

TODO:
- [ ] Residential Properties
  - Apartment (Multi-story residential units)
  - House (Single-family detached)
  - Townhouse (Multi-level attached)
  - Villa (Luxury detached)
  - Studio (Compact single-room)
- [ ] Commercial Properties
  - Office Space
  - Retail Store
  - Restaurant Space
  - Warehouse
- [ ] Special Properties
  - Land/Plot
  - Farm
  - Industrial

## Listing Types

Different ways properties can be offered in the market:

TODO:
- [ ] Primary Listings
  - For Sale (Traditional purchase)
  - For Rent (Long-term rental)
  - For Lease (Commercial lease)
- [ ] Special Listings
  - Short-term Rental
  - Vacation Rental
  - Investment Property
  - New Development
  - Off-plan

## Listing Status

Current state of the property in the market:

TODO:
- [ ] Active Statuses
  - Available (Ready for viewing/purchase)
  - Featured (Premium listing)
  - New Listing (< 30 days)
- [ ] Process Statuses
  - Under Contract
  - Pending Inspection
  - Price Reduced
- [ ] Closed Statuses
  - Sold
  - Rented
  - Off Market
  - Temporarily Unavailable

## Features

Property amenities and characteristics:

TODO:
- [ ] Interior Features
  - Bedrooms (1-10+)
  - Bathrooms (1-7+)
  - Kitchen Type (Modern, Traditional, etc.)
  - Flooring Types
  - Smart Home Features
- [ ] Exterior Features
  - Swimming Pool
  - Garden/Yard
  - Parking (Garage, Carport)
  - Security System
  - Outdoor Kitchen
- [ ] Building Features
  - Year Built
  - Construction Type
  - Energy Efficiency
  - Building Security
- [ ] Community Features
  - Gym
  - Tennis Court
  - Clubhouse
  - Children's Play Area

## Properties (Main Collection)

Complete property listings combining all above elements:

TODO:
- [ ] Basic Information
  - Title
  - Description
  - Price Range ($100k - $10M+)
  - Square Footage (500-10000+ sq ft)
  - Location Data
- [ ] Media Content
  - High-quality Photos (min 5 per property)
  - Virtual Tours
  - Floor Plans
  - Property Documents
- [ ] Relationships
  - Property Type (from types above)
  - Listing Type (from types above)
  - Status (from statuses above)
  - Features (multiple from features above)
- [ ] Additional Details
  - Year Built
  - Last Renovated
  - Property Taxes
  - HOA Fees
