# Black Market Bazaar - Cyberpunk Web App

## Overview

Black Market Bazaar is a single-page cyberpunk web application that presents users with an underground marketplace of illegal futuristic goods. The app creates an immersive shopping experience where users browse cyberware items, but with a twist - it secretly tracks their interactions to build a psychological profile. When users click on a special trigger item, the app reveals that they themselves are the product being sold, creating a dramatic narrative reversal that explores themes of surveillance capitalism and digital commodification.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based frontend built with Vite for fast development and optimized production builds. The UI is implemented using shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable interface elements. The design system leverages Tailwind CSS for styling with custom cyberpunk-themed color variables and animations.

**Key Frontend Decisions:**
- **React with TypeScript**: Provides type safety and component-based architecture for maintainable code
- **Vite Build Tool**: Chosen for fast hot module replacement during development and optimized production builds
- **shadcn/ui + Radix UI**: Ensures accessibility compliance while maintaining design flexibility
- **Tailwind CSS**: Enables rapid styling with utility classes and custom cyberpunk theme variables
- **Wouter Router**: Lightweight client-side routing solution suitable for single-page applications

### Component Structure
The application follows a three-phase user experience:
1. **Marketplace Phase**: Product grid displaying cyberware items with hover effects and click tracking
2. **Twist Reveal Phase**: Dramatic transition revealing the user as a product listing
3. **Final Transaction Phase**: Completion screen showing the user has been "sold"

**Core Components:**
- `BlackMarketBazaar`: Main application component managing state transitions
- `ProductCard`: Individual product display with click tracking integration
- `TwistReveal`: Profile generation and revelation interface
- `FinalTransaction`: Terminal screen showing transaction completion

### State Management
The application uses React's built-in state management with useState hooks to track user interactions and application phases. User behavior is captured in a profile object that accumulates personality traits based on product clicks.

**State Architecture:**
- Application phase tracking (marketplace → twist → final)
- User profile accumulation with trait scoring
- Product interaction history for profile generation

### Styling and Theming
Custom CSS variables define the cyberpunk aesthetic with neon colors, glitch effects, and futuristic typography. The design system includes specialized animations for text glitching, scan lines, and neon border effects.

**Design Decisions:**
- **Color Palette**: Deep blacks with neon cyan, pink, and purple accents
- **Typography**: Orbitron and Share Tech Mono fonts for futuristic aesthetic
- **Animations**: CSS-based glitch effects and transitions for immersive experience
- **Responsive Design**: Mobile-first approach ensuring accessibility across devices

### Data Layer
Product data is statically defined with associated personality traits that contribute to user profiling. The tracking system operates entirely client-side, storing interaction data in component state without external persistence.

**Data Structure:**
- Product catalog with embedded personality trait mappings
- User profile object accumulating trait scores
- Cyberpunk alias generation from predefined word lists

## External Dependencies

### UI Framework Dependencies
- **@radix-ui/react-***: Complete suite of accessible UI primitives for dialogs, dropdowns, tooltips, and form controls
- **@tanstack/react-query**: Data fetching and caching library (currently unused but available for future API integration)
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx & tailwind-merge**: Conditional CSS class utilities for dynamic styling

### Database and ORM
- **drizzle-orm**: TypeScript ORM configured for PostgreSQL with schema definitions
- **drizzle-kit**: Database migration and schema management tools
- **@neondatabase/serverless**: Serverless PostgreSQL adapter (configured but not currently utilized)

### Development Tools
- **Vite**: Modern build tool with React plugin for fast development experience
- **TypeScript**: Static type checking across client, server, and shared code
- **PostCSS & Autoprefixer**: CSS processing pipeline for cross-browser compatibility

### Server Infrastructure
- **Express.js**: Backend server framework with route registration system
- **tsx**: TypeScript execution environment for development server
- **esbuild**: Fast JavaScript bundler for production server builds

### Fonts and Assets
- **Google Fonts**: Orbitron and Share Tech Mono fonts loaded via CDN for cyberpunk typography
- **Unsplash Images**: Stock photography for product imagery and profile pictures

The application is architected as a full-stack TypeScript project with clear separation between client, server, and shared code, though the current implementation focuses primarily on the frontend experience with backend infrastructure prepared for future expansion.