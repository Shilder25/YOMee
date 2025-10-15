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

**Animation & Interaction Libraries**
- **framer-motion**: Production-ready motion library for React animations
  - Scroll-triggered animations for section reveals
  - Hover effects on interactive elements
  - Hero section entrance animations
- **react-snowfall**: Winter-themed particle animation system
  - 100 white snowflake particles across viewport
  - Configurable speed (0.5-1.5), wind (-0.5 to 0.5), and radius (0.5-3.0)
  - Non-interactive overlay (pointer-events: none)

**Assets & Media**
- Static penguin character images stored in `attached_assets/`
- Content markdown file with original reference material
- AI-generated penguin images for various sections
- **Douyin video embeds**: Real viral penguin videos from Douyin platform integrated via iframe embeds
  - DouyinEmbed component for responsive video display (340px × 600px fixed dimensions)
  - Videos showcase authentic YoMee moments from Chinese social media
  - Mix of user-provided images and real viral content for authenticity

## Animation System

### Global Effects
**Snowfall Animation**
- Continuous winter-themed snow particles across entire page
- Fixed position overlay at z-index 9999
- 100 snowflakes with varying sizes, speeds, and wind patterns
- Non-intrusive (pointer-events disabled for user interactions)

### Scroll Animations
**AnimatedSection Component**
- Reusable wrapper for all major sections (Meet, Story, HowTo, Community)
- Fade-in effect: opacity 0 → 1
- Slide-up effect: translateY(50px) → 0
- Viewport trigger with -100px margin for early activation
- Animations fire once per session using `viewport.once: true`
- Custom easing curve for smooth, professional motion

### Hero Section - Maximum Visual Impact Design
**Size & Scale (October 2025 Redesign)**
- **Penguin Image**: Dramatically enlarged from 320px to 500px on desktop (156% increase)
  - Mobile: 256px (w-64 h-64)
  - Tablet: 384px (w-96 h-96)  
  - Desktop: 500px (w-[500px] h-[500px])
- **Main Title "YoMee"**: text-9xl (128px on desktop) - massive and attention-grabbing
- **Chinese Title**: text-8xl (96px on desktop)
- **Subtitle**: text-3xl (30px on desktop) - 50% larger than previous
- **CTA Buttons**: 
  - Font size: text-2xl (24px)
  - Padding: px-12 py-8 for substantial presence
  - Min height: 60px
  - Text: "Buy Now" and "Chart" (matching crypto landing page style)
- **Contract Address Banner**:
  - Bright pink background (#FF6B9D) with inline style for guaranteed rendering
  - 4px black border for strong visual separation
  - Larger text (text-lg on desktop) with generous padding (px-8 py-5)
  - Rounded corners (rounded-xl)
- **Spacing Optimization**: Reduced gaps and padding for compact, impactful layout with minimal empty space

**Entrance Animations**
- Penguin image: slides in from left with fade (800ms duration)
- Text content: slides in from right with fade (800ms duration, 200ms delay)
- Staggered entrance creates dynamic first impression

**Interactive Effects**
- Penguin hover: scale(1.05) + rotate(5deg) transformation
- Smooth 300ms transition on all hover states

### Image Hover Effects
**HowTo Section**
- Waddling penguin: scale(1.03) + rotate(2deg) on hover
- Subtle transformation maintains playful character

**Community Section**
- Community penguin: scale(1.03) + rotate(-2deg) on hover (counter-rotation)
- Heart icon: continuous pulse animation (scale 1 → 1.1 → 1)
- 1.5s loop with easeInOut timing for breathing effect

### Technical Implementation
- All animations use framer-motion's production-optimized engine
- Hardware-accelerated transforms (scale, rotate, translateY)
- Viewport-based triggers prevent animation overload
- Smooth 60fps performance on modern devices