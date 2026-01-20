# BarqiBazar C&F Portal

A comprehensive admin management portal for managing cities, franchises, and riders across the BarqiBazar network.

## Overview

BarqiBazar C&F Portal is a React-based admin dashboard built with modern technologies to efficiently manage:
- **Cities** - Add, edit, and manage city operations
- **Franchises** - oversee franchise locations and operations
- **Franchise Admins** - manage administrative access
- **Riders** - track rider applications, documents, and status

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components
- **React Router v6** - Client-side routing
- **React Query (TanStack)** - Server state management
- **Axios** - HTTP client
- **Zod** - Schema validation
- **Recharts** - Data visualization
- **Vitest** - Unit testing

## Project Structure

```
src/
├── api/              # API configurations and endpoints
├── components/       # React components
│   ├── auth/         # Authentication components
│   ├── common/       # Shared components (Header, Sidebar, DataTable, etc.)
│   ├── dashboard/    # Dashboard widgets
│   ├── layout/       # Layout wrappers
│   └── ui/           # shadcn/ui component library
├── contexts/         # React contexts (AuthContext)
├── hooks/            # Custom React hooks
├── pages/            # Page components
├── utils/            # Utility functions
└── test/             # Test files and setup
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Features

### Authentication
- JWT-based authentication
- Role-based access control (ADMIN, FRANCHISE_ADMIN)
- Protected routes with session management

### Dashboard
- Overview statistics across all entities
- Visual analytics with charts

### City Management
- Create, view, update, and deactivate cities
- Pagination and filtering support

### Franchise Management
- Manage franchise locations
- Track franchise status and capacity
- Associate franchises with cities

### Rider Management
- Complete rider lifecycle management
- Document handling (CNIC, license, insurance, etc.)
- Status tracking (APPLIED → INTERVIEWED → APPROVED → ACTIVE → SUSPENDED → BLOCKED)
- Rider history and audit trail

### Document Management
- Upload and verify rider documents
- Document type validation
- Version control through document replacement

## API Integration

The portal connects to a backend API with the following endpoints:

| Resource | Base URL | Access |
|----------|----------|--------|
| Cities | `/api/cities` | ADMIN |
| Franchises | `/api/franchises` | ADMIN |
| Franchise Admins | `/api/franchise-admins` | ADMIN |
| Riders | `/api/riders` | ADMIN, FRANCHISE_ADMIN |
| Rider Documents | `/api/rider-docs` | ADMIN, FRANCHISE_ADMIN |
| Statistics | `/api/stats` | ADMIN, FRANCHISE_ADMIN |

All API requests require:
```
Authorization: Bearer <JWT>
Content-Type: application/json
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run lint` | Lint codebase |
| `npm run test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run preview` | Preview production build |

## Environment Variables

Create a `.env` file based on `.env.example`:

```
VITE_API_URL=your_api_url
```

## License

Proprietary - BarqiBazar

