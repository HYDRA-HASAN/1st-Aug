# Our Love Story Timeline

## Overview

This is a romantic animated web application that creates an interactive timeline showcasing a couple's love story. The application features beautiful animations, a photo gallery with lightbox functionality, and smooth scrolling navigation through different relationship milestones. Built as a single-page application with a focus on visual storytelling and user engagement through animated elements and romantic design aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React + TypeScript**: Modern React application with TypeScript for type safety
- **Vite**: Fast build tool and development server with hot module replacement
- **ShadCN/UI Components**: Pre-built, accessible UI components based on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework for responsive design and custom styling
- **Wouter**: Lightweight client-side routing library for navigation
- **TanStack Query**: Data fetching and state management library (though minimal backend integration currently)

### Backend Architecture
- **Express.js**: Node.js web framework serving as the API layer
- **TypeScript**: Full-stack TypeScript implementation
- **Memory Storage**: In-memory data storage for user management (development/prototype phase)
- **Modular Route System**: Organized route handlers with separation of concerns

### Database Schema
- **Drizzle ORM**: Type-safe SQL query builder and schema definition
- **PostgreSQL**: Primary database (configured via Neon Database serverless)
- **User Management**: Basic user schema with username/password authentication
- **Schema Location**: Shared schema definitions in `/shared/schema.ts` for type consistency

### UI/UX Design Patterns
- **Animation Integration**: AOS (Animate On Scroll) library for entrance animations
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Component Architecture**: Reusable components for timeline sections, navigation, and gallery
- **Theme System**: CSS custom properties for consistent color theming
- **Interactive Elements**: Lightbox gallery, smooth scrolling navigation, floating heart animations

### Development Workflow
- **Monorepo Structure**: Client and server code in organized directories
- **Shared Types**: Common TypeScript definitions shared between frontend and backend
- **Hot Reloading**: Vite development server with Express middleware integration
- **Build Process**: Separate client (Vite) and server (esbuild) build pipelines

## External Dependencies

### Core Frameworks
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend web server framework
- **Vite**: Build tool and development server

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **ShadCN/UI**: Component library built on Radix UI primitives
- **Radix UI**: Accessible component primitives for complex UI elements
- **AOS (Animate On Scroll)**: Animation library for scroll-triggered animations
- **Google Fonts**: Typography (Dancing Script, Great Vibes, Poppins)

### Database and ORM
- **Drizzle ORM**: Type-safe database toolkit
- **Neon Database**: Serverless PostgreSQL database hosting
- **@neondatabase/serverless**: Neon's serverless database driver

### Development Tools
- **TypeScript**: Static type checking across the full stack
- **ESBuild**: Fast JavaScript bundler for server-side code
- **PostCSS**: CSS processing with Autoprefixer

### State Management and Data Fetching
- **TanStack React Query**: Server state management and data fetching
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition

### Routing and Navigation
- **Wouter**: Lightweight client-side routing library

### Image and Media
- **Unsplash**: Stock photography API for placeholder images
- **Embla Carousel**: Touch-friendly carousel component

### Utility Libraries
- **Date-fns**: Date manipulation and formatting
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for conditional CSS class names
- **Nanoid**: URL-safe unique string ID generator