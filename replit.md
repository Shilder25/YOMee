# YoMee - Penguin Character Landing Page

## Overview

YoMee is a character-centric landing page featuring a viral Chinese penguin mascot. The application is built as a single-page promotional website showcasing the adorable penguin character through various sections including hero, story, community engagement, and purchase instructions. The site is designed to capture the playful, winter-themed charm of the viral Douyin penguin phenomenon, inspired by the junjunbnb.com reference design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server for fast Hot Module Replacement (HMR)
- **Wouter** for lightweight client-side routing (chosen over React Router for simplicity)
- **TanStack Query v5** for server state management and data fetching (prepared for future API integration)

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design system
- **CVA (Class Variance Authority)** for managing component variants
- Component structure follows the "New York" style from shadcn/ui
- Custom theming with light/dark mode support via CSS variables

**Design System**
- Color palette inspired by the reference site with penguin character theme:
  - Primary: Soft Pink (#FF6B9D) for CTAs and accents
  - Secondary: Teal (#4ECDC4) for interactive elements
  - Accent: Warm Yellow (#FFE66D) for highlights
  - Additional Coral accent for hover states
- Typography stack:
  - Nunito (700, 800) for headings
  - Inter (400, 500, 600) for body text
  - Poppins (600, 700) for CTAs
- Spacing system based on Tailwind's 4px scale (4, 6, 8, 12, 16, 20, 24)
- Responsive breakpoints: mobile-first approach with md (768px) and lg (1024px) breakpoints

**State Management Pattern**
- Local component state with React hooks
- Toast notifications via custom useToast hook
- Theme persistence in localStorage
- Future-ready with TanStack Query for API integration

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- ES modules (type: "module") for modern JavaScript syntax
- Middleware-based request processing pipeline
- Custom logging middleware for request tracking
- Error handling middleware for centralized error responses

**Development vs Production**
- Development: Vite middleware integration for HMR and SSR
- Production: Static file serving from compiled assets
- Environment-aware configuration via NODE_ENV

**API Design Pattern**
- RESTful API structure with `/api` prefix reserved for future endpoints
- Currently minimal backend logic (prepared for expansion)
- Storage abstraction layer ready for implementation

### Data Storage Solutions

**Database Configuration**
- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** dialect configured (via Neon serverless driver)
- Schema-first approach with Drizzle Kit for migrations
- Connection via DATABASE_URL environment variable

**Current Schema**
- Users table with UUID primary keys
- Username/password authentication fields prepared
- Zod schema validation integration via drizzle-zod

**Storage Abstraction**
- IStorage interface defining CRUD operations
- MemStorage in-memory implementation (development/testing)
- Ready for PostgreSQL implementation swap
- Allows easy transition from prototype to production database

**Rationale**: The application currently uses in-memory storage as it's primarily a static landing page. The database infrastructure is prepared for future features like user authentication, community features, or token holder verification.

### External Dependencies

**UI & Styling Libraries**
- **@radix-ui/* components**: Accessible, unstyled UI primitives (accordion, dialog, dropdown, tooltip, etc.)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS
- **class-variance-authority**: Type-safe variant management
- **tailwind-merge & clsx**: Conditional class name utilities

**Form & Validation**
- **react-hook-form**: Performant form state management
- **@hookform/resolvers**: Validation resolver for Zod schemas
- **zod**: TypeScript-first schema validation

**Developer Experience**
- **TypeScript**: Type safety across the entire stack
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast bundling for production server build
- **@replit/* plugins**: Vite plugins for Replit-specific features (error overlay, cartographer, dev banner)

**Database & ORM**
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: Lightweight TypeScript ORM
- **drizzle-kit**: Schema management and migrations
- **connect-pg-simple**: PostgreSQL session store (prepared for session management)

**Utilities**
- **date-fns**: Date manipulation library
- **embla-carousel-react**: Carousel functionality (available for future image galleries)
- **lucide-react**: Icon library
- **react-icons**: Additional icon sets (TikTok, etc.)
- **cmdk**: Command palette component (available for future keyboard shortcuts)
- **nanoid**: Unique ID generation

**Assets & Media**
- Static penguin character images stored in `attached_assets/`
- Content markdown file with original reference material
- AI-generated penguin images for various sections
- **Douyin video embeds**: Real viral penguin videos from Douyin platform integrated via iframe embeds
  - DouyinEmbed component for responsive video display
  - Videos showcase authentic YoMee moments from Chinese social media
  - Mix of user-provided images and real viral content for authenticity