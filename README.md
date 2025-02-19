# Webora Estates

A modern, enterprise-grade real estate management platform built with Next.js 15 and Payload CMS v3.

## Overview

Webora Estates is a comprehensive real estate management system that enables users to manage properties, listings, tenants, and all aspects of an enterprise real estate business. The platform combines a powerful headless CMS backend with a modern, responsive frontend to deliver a seamless experience for property management professionals.

## Key Features

- 🏢 Property Management
- 📋 Listing Management
- 👥 Tenant Management
- 📊 Reporting & Analytics
- 👤 User Management with RBAC
- 🔄 Third-Party Service Integration
- 🏢 Multi-tenancy Support
- 📱 Responsive Design
- 🎨 Customizable Admin Dashboard
- 🔑 Role-based Access Control

## Tech Stack

### Core Technologies
- **Runtime:** Node.js 22
- **Framework:** Next.js 15 (App Router)
- **CMS:** Payload CMS v3
- **Language:** TypeScript 5.7.3
- **Package Manager:** pnpm
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn UI
- **Animations:** Motion/React

### Infrastructure
- **Deployment:** Vercel
- **Database:** Vercel Postgres
- **Storage:** Vercel Blob
- **Authentication:** Payload CMS Auth

## Project Structure

```
src/
├── app/
│   ├── (frontend)/    # Public-facing website routes
│   └── (payload)/     # Admin dashboard routes
├── components/        # Reusable UI components
├── providers/         # React context providers
├── services/         # Backend services
├── styles/           # Global styles
└── CMS/             # CMS configurations
```

## Getting Started

### Prerequisites
- Node.js >= 18.20.2
- pnpm >= 9

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Mohmdev/webora-estates.git
cd webora-estates
```

2. Install dependencies:
```bash
pnpm install
```

3. Copy the environment variables:
```bash
cp .env.example .env.local
```

4. Set up your environment variables in `.env.local`

### Development

Start the development server:
```bash
pnpm dev
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Admin Dashboard: `http://localhost:3000/admin`

### Build

```bash
pnpm build
```

### Database Management

- Generate types: `pnpm generate:types`
- Create migration: `pnpm migrate:create`
- Run migrations: `pnpm migrate`
- Reset database: `pnpm db:reset`

## Architecture

Webora Estates uses a unified repository approach where both frontend and backend coexist in a single Next.js instance. This is made possible by Payload CMS's deep integration with Next.js.

- **Frontend Routes:** `/src/app/(frontend)/`
- **Admin Dashboard:** `/src/app/(payload)/admin/`

The admin dashboard is customizable through Payload configurations rather than direct route modifications.

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License

This project is licensed under the MIT License.
