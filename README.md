# Lead Management Dashboard - Frontend

A modern, responsive Next.js frontend application for managing leads with real-time analytics, search, filtering, and pagination capabilities.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Application Pages](#application-pages)
- [Components](#components)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Authentication](#authentication)
- [Deployment](#deployment)
- [Browser Support](#browser-support)

## Overview

This frontend application is built with Next.js 14 using the App Router architecture. It provides a complete CRM-style interface for managing leads with a focus on user experience, performance, and mobile responsiveness.

## Tech Stack

### Core Technologies

- **Next.js 14.2.18** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type-safe development
- **TailwindCSS 3.4** - Utility-first CSS framework

### State Management & Data Fetching

- **Zustand 5.0** - Lightweight state management for auth
- **TanStack React Query 5.59** - Server state management, caching, and data fetching
- **Axios 1.7** - HTTP client for API requests

### Validation & Types

- **Zod 3.23** - TypeScript-first schema validation
- **TypeScript** - Full type safety throughout the application

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Features

### Authentication
- Secure JWT-based authentication
- Persistent login state
- Automatic token management
- Protected routes with middleware
- Auto-redirect on logout

### Dashboard
- 4 key analytics metrics displayed in cards:
  - Total Leads
  - Active Leads
  - Converted Leads
  - Total Value
- Real-time data updates
- Responsive grid layout

### Lead Management
- **Search**: Full-text search across name, email, company, phone
- **Filtering**:
  - By Stage (NEW, CONTACTED, QUALIFIED, PROPOSAL, NEGOTIATION, CLOSED_WON, CLOSED_LOST)
  - By Status (ACTIVE, INACTIVE, CONVERTED, REJECTED)
- **Sorting**:
  - By Created Date
  - By First Name
  - By Last Name
  - By Company
  - By Value
  - Ascending/Descending order
- **Pagination**:
  - 10 leads per page
  - Page navigation controls
  - Total count display
  - Current page indicator

### Lead Details
- Complete lead profile view
- Contact information with clickable email/phone
- Company and position details
- Location information (country, city)
- Stage and status badges with color coding
- Notes display
- Timestamps (created/updated)
- Back navigation

### Responsive Design
- Mobile-first approach
- Touch-friendly interface
- Adaptive layouts for all screen sizes:
  - Mobile (< 640px)
  - Tablet (640px - 1024px)
  - Desktop (> 1024px)
- Hamburger menu on mobile
- Collapsible filters
- Responsive tables/cards

## Project Structure

```
frontend/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── dashboard/               # Dashboard routes
│   │   │   ├── leads/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx    # Lead detail page
│   │   │   └── page.tsx            # Dashboard home
│   │   ├── login/
│   │   │   └── page.tsx            # Login page
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page (redirects)
│   │   └── providers.tsx           # React Query provider
│   │
│   ├── components/                  # React components
│   │   ├── AnalyticsCards.tsx      # Metrics display cards
│   │   ├── LeadFilters.tsx         # Search and filter controls
│   │   ├── LeadsTable.tsx          # Lead list table
│   │   ├── Navbar.tsx              # Navigation bar
│   │   ├── Pagination.tsx          # Pagination controls
│   │   └── ProtectedRoute.tsx      # Auth guard HOC
│   │
│   ├── lib/                         # Utilities
│   │   └── api.ts                  # Axios instance & API client
│   │
│   ├── store/                       # State management
│   │   └── authStore.ts            # Zustand auth store
│   │
│   └── types/                       # TypeScript types
│       └── index.ts                # Shared type definitions
│
├── .env.local                       # Environment variables
├── .env.example                     # Environment template
├── .gitignore                       # Git ignore rules
├── next.config.js                   # Next.js configuration
├── package.json                     # Dependencies
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.ts               # Tailwind configuration
└── tsconfig.json                    # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm
- Backend API running (see backend README)

### Installation

1. **Install dependencies**:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Set up environment variables**:

Create a `.env.local` file in the frontend root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

For production, update with your backend URL:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

3. **Run the development server**:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**:

Navigate to [http://localhost:3000](http://localhost:3000)

The application will automatically redirect to the login page if you're not authenticated.

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | Yes | http://localhost:5000 |

**Note**: All environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Available Scripts

### Development

```bash
npm run dev
```
Starts the development server with hot reload at `http://localhost:3000`

### Production Build

```bash
npm run build
```
Creates an optimized production build

### Start Production Server

```bash
npm start
```
Starts the production server (requires `npm run build` first)

### Linting

```bash
npm run lint
```
Runs ESLint to check code quality

## Application Pages

### Login Page (`/login`)

- Email and password authentication
- Form validation
- Error handling
- Auto-redirect on successful login
- Responsive design

**Demo Credentials**:
```
Email: demo@example.com
Password: demo123
```

### Dashboard (`/dashboard`)

Protected route that displays:
- Analytics cards with key metrics
- Lead search functionality
- Advanced filters (stage, status, sort)
- Paginated leads table
- Quick actions

### Lead Detail (`/dashboard/leads/[id]`)

Protected route showing:
- Complete lead information
- Contact details
- Company information
- Location data
- Stage and status
- Notes
- Timeline

## Components

### AnalyticsCards

Displays key metrics in a responsive grid:
- Total Leads
- Active Leads
- Converted Leads
- Total Value

**Props**: None (fetches data internally)

**Features**:
- Loading states
- Error handling
- Number formatting
- Currency formatting
- Responsive grid (1-2-4 columns)

### LeadFilters

Comprehensive filtering interface:
- Search input
- Stage dropdown
- Status dropdown
- Sort by dropdown
- Sort order toggle

**Props**:
```typescript
{
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  stageFilter: string;
  setStageFilter: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
}
```

### LeadsTable

Responsive table displaying leads:
- Mobile: Card layout
- Desktop: Table layout
- Clickable rows
- Status badges
- Value formatting

**Props**:
```typescript
{
  leads: Lead[];
  isLoading: boolean;
}
```

### Navbar

Application navigation bar:
- Logo/title
- User info
- Logout button
- Responsive design

**Features**:
- Sticky positioning
- Mobile hamburger menu
- Logout confirmation

### Pagination

Page navigation controls:
- Previous/Next buttons
- Page information
- Total count
- Disabled states

**Props**:
```typescript
{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
```

### ProtectedRoute

Higher-order component for route protection:
- Checks authentication status
- Redirects to login if not authenticated
- Shows loading state during verification

**Usage**:
```typescript
<ProtectedRoute>
  <YourComponent />
</ProtectedRoute>
```

## State Management

### Zustand Store (authStore)

Global authentication state:

```typescript
{
  token: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}
```

**Features**:
- Persistent storage (localStorage)
- Automatic token management
- Type-safe actions

**Usage**:
```typescript
import { useAuthStore } from '@/store/authStore';

const { token, user, login, logout } = useAuthStore();
```

### React Query

Server state management for API data:

**Configuration**:
- Stale time: 5 minutes
- Automatic refetch on window focus
- Error retry: 3 attempts
- Cache time: 10 minutes

**Usage Example**:
```typescript
const { data, isLoading, error } = useQuery({
  queryKey: ['leads', page, filters],
  queryFn: () => api.get('/leads', { params: filters })
});
```

## API Integration

### API Client (`lib/api.ts`)

Axios instance with:
- Base URL configuration
- Automatic token injection
- Request/response interceptors
- Error handling

**Configuration**:
```typescript
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

**Interceptors**:
- Request: Adds Bearer token
- Response: Handles 401 unauthorized

### API Endpoints Used

#### Authentication
- `POST /api/auth/login` - User login

#### Leads
- `GET /api/leads` - Get leads with filters/pagination
- `GET /api/leads/:id` - Get single lead
- `GET /api/leads/analytics` - Get analytics data

## Styling

### TailwindCSS Configuration

Custom theme extensions:

```typescript
{
  colors: {
    // Custom color palette
  },
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  }
}
```

### Global Styles

Located in `app/globals.css`:
- CSS reset
- Base typography
- Utility classes
- Custom animations

### Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Design System

**Colors**:
- Primary: Blue (#3B82F6)
- Success: Green (#10B981)
- Warning: Yellow (#F59E0B)
- Danger: Red (#EF4444)
- Gray scale: Tailwind default

**Typography**:
- Font family: System font stack
- Base size: 16px
- Scale: 1.25 (Major third)

## Authentication

### Flow

1. User submits login form
2. Frontend sends credentials to backend
3. Backend returns JWT token and user info
4. Token stored in Zustand + localStorage
5. Token included in all API requests
6. Protected routes check token validity

### Token Management

- Stored in localStorage for persistence
- Managed by Zustand store
- Auto-injected in API headers
- Cleared on logout
- Validated on protected routes

### Protected Routes

All routes under `/dashboard` are protected:
- Check for valid token
- Redirect to login if missing
- Show loading during check

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**:
```bash
git push origin main
```

2. **Import to Vercel**:
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your repository

3. **Configure Environment Variables**:
```
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

4. **Deploy**:
- Vercel will automatically build and deploy
- Get your deployment URL

### Other Platforms

#### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables

#### AWS Amplify
1. Connect repository
2. Configure build settings
3. Add environment variables
4. Deploy

### Build Output

Production build creates:
- Optimized JavaScript bundles
- Static HTML pages
- CSS files
- Image optimizations
- Server components

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

### Next.js Features
- Automatic code splitting
- Image optimization
- Font optimization
- Route prefetching

### React Query
- Request deduplication
- Background refetching
- Cache management
- Optimistic updates

### Rendering Strategy
- Server-side rendering for SEO
- Client-side hydration
- Streaming where applicable

## Development Best Practices

### Code Organization
- Feature-based component structure
- Shared types in `/types`
- Reusable utilities in `/lib`
- Centralized state in `/store`

### TypeScript
- Strict mode enabled
- No implicit any
- Type all props and state
- Use interfaces for objects

### Component Guidelines
- One component per file
- Use functional components
- Implement proper prop types
- Handle loading and error states

## Troubleshooting

### Common Issues

**1. "Cannot connect to API"**
- Check backend is running
- Verify `NEXT_PUBLIC_API_URL` is correct
- Check CORS configuration on backend

**2. "Token invalid or expired"**
- Clear localStorage and login again
- Check backend JWT configuration

**3. "Page not loading"**
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

**4. "Styles not applying"**
- Check Tailwind configuration
- Verify PostCSS is configured
- Clear browser cache

### Debug Mode

Enable debug logging:
```typescript
// In api.ts
api.interceptors.request.use((config) => {
  console.log('Request:', config);
  return config;
});
```

## Contributing

### Development Workflow

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Create pull request

### Code Standards

- Use TypeScript for all files
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful commit messages

## License

MIT

## Support

For issues or questions:
1. Check this README
2. Review backend README
3. Check GitHub issues
4. Contact the development team

---

**Built with**: Next.js 14, TypeScript, TailwindCSS
**Last Updated**: January 2026