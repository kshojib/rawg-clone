# 🏗️ Application Architecture

## Overview

```
┌─────────────────────────────────────────────────────┐
│                    Browser                          │
│  ┌───────────────────────────────────────────────┐ │
│  │              Header Component                  │ │
│  │  [Logo]  [Search Bar]  [Nav Links] [Sign In]  │ │
│  └───────────────────────────────────────────────┘ │
│  ┌────────┬──────────────────────────────────────┐ │
│  │        │                                       │ │
│  │ Side   │         Main Content                 │ │
│  │ bar    │                                       │ │
│  │        │  ┌──────┐ ┌──────┐ ┌──────┐         │ │
│  │ Genre  │  │ Game │ │ Game │ │ Game │         │ │
│  │ Filter │  │ Card │ │ Card │ │ Card │         │ │
│  │        │  └──────┘ └──────┘ └──────┘         │ │
│  │ Plat   │  ┌──────┐ ┌──────┐ ┌──────┐         │ │
│  │ form   │  │ Game │ │ Game │ │ Game │         │ │
│  │ Filter │  │ Card │ │ Card │ │ Card │         │ │
│  │        │  └──────┘ └──────┘ └──────┘         │ │
│  │        │                                       │ │
│  │ Sort   │    [Previous] [Page 1] [Next]        │ │
│  └────────┴──────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
App
├── Layout (Root)
│   ├── Header
│   │   ├── Logo
│   │   ├── SearchBar
│   │   └── Navigation
│   └── {children}
│
├── Home Page (/)
│   ├── Sidebar
│   │   ├── Genre Filters
│   │   ├── Platform Filters
│   │   └── Sort Options
│   └── GamesGrid
│       └── GameCard (x N)
│
├── Game Detail Page (/games/[slug])
│   ├── Hero Section
│   │   ├── Background Image
│   │   ├── Game Title
│   │   └── Quick Stats
│   ├── Main Content
│   │   ├── Description
│   │   └── Screenshots Grid
│   └── Sidebar Info
│       ├── Platforms
│       ├── Genres
│       ├── Release Date
│       ├── Developers
│       └── Publishers
│
└── Search Page (/search)
    ├── Sidebar
    ├── Search Results Header
    └── GamesGrid
```

## Data Flow

```
┌──────────────┐
│   Browser    │
└──────┬───────┘
       │ Request page
       ▼
┌──────────────┐
│  Next.js     │ ◄─── Uses Server Components
│  Server      │
└──────┬───────┘
       │ Calls API functions
       ▼
┌──────────────┐
│   lib/api.ts │ ◄─── Handles API calls
└──────┬───────┘
       │ HTTP Request
       ▼
┌──────────────┐
│  RAWG API    │ ◄─── External API
└──────┬───────┘
       │ JSON Response
       ▼
┌──────────────┐
│  TypeScript  │ ◄─── Type checking
│  Types       │
└──────┬───────┘
       │ Typed data
       ▼
┌──────────────┐
│  Components  │ ◄─── Render UI
└──────┬───────┘
       │ HTML/CSS
       ▼
┌──────────────┐
│   Browser    │
└──────────────┘
```

## File Structure

```
rawg-project/
│
├── 📁 app/                    # Next.js App Router
│   ├── 📄 layout.tsx          # Root layout (wraps all pages)
│   ├── 📄 page.tsx            # Homepage (/)
│   ├── 📄 loading.tsx         # Loading UI for homepage
│   ├── 📄 globals.css         # Global styles
│   │
│   ├── 📁 games/
│   │   └── 📁 [slug]/         # Dynamic route for game details
│   │       ├── 📄 page.tsx    # Game detail page
│   │       └── 📄 loading.tsx # Loading UI for game page
│   │
│   └── 📁 search/
│       └── 📄 page.tsx        # Search results page
│
├── 📁 components/             # Reusable React components
│   ├── 📄 Header.tsx          # Navigation header
│   ├── 📄 Sidebar.tsx         # Filter sidebar
│   ├── 📄 GameCard.tsx        # Individual game card
│   └── 📄 GamesGrid.tsx       # Grid layout
│
├── 📁 lib/                    # Utility functions
│   ├── 📄 api.ts              # RAWG API functions
│   └── 📄 types.ts            # TypeScript types
│
├── 📁 public/                 # Static assets
│
├── 📄 .env.local              # Environment variables (API key)
├── 📄 next.config.ts          # Next.js configuration
├── 📄 tailwind.config.ts      # Tailwind CSS config
├── 📄 tsconfig.json           # TypeScript config
└── 📄 package.json            # Dependencies

```

## API Integration Flow

### 1. User visits homepage

```
User → / → page.tsx
           ↓
       fetchGames() + fetchGenres()
           ↓
       RAWG API
           ↓
       Render with data
```

### 2. User searches for a game

```
User types in search bar → Submit
                           ↓
                    /search?q=query
                           ↓
                    fetchGames({search: query})
                           ↓
                    RAWG API
                           ↓
                    Display results
```

### 3. User clicks on a game

```
User clicks card → /games/game-slug
                   ↓
            fetchGameDetails(slug)
                   ↓
            RAWG API
                   ↓
            Show game details
```

### 4. User filters by genre

```
User clicks genre → /?genres=4
                    ↓
             fetchGames({genres: 4})
                    ↓
             RAWG API
                    ↓
             Show filtered games
```

## State Management

This app uses **URL-based state management** - no Redux or Context needed!

```
State is stored in URL parameters:
- /?page=2              → Pagination
- /?genres=4            → Genre filter
- /?platforms=4         → Platform filter
- /?ordering=-rating    → Sort order
- /search?q=witcher     → Search query
```

Benefits:
✅ Shareable URLs
✅ Browser back/forward works
✅ SEO-friendly
✅ No client-side state management complexity

## Caching Strategy

```
┌─────────────┐
│  Browser    │
│  Request    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Next.js     │ ◄─── Check cache
│ Cache       │
└──────┬──────┘
       │ Cache miss
       ▼
┌─────────────┐
│ RAWG API    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Next.js     │ ◄─── Store in cache
│ Cache       │      (1 hour for games)
└──────┬──────┘      (24 hours for genres)
       │
       ▼
┌─────────────┐
│ Browser     │
└─────────────┘
```

## Responsive Design Breakpoints

```
Mobile          Tablet          Desktop         Large Desktop
(< 640px)      (640-1024px)    (1024-1280px)   (> 1280px)

┌────┐         ┌─────────┐     ┌──────────────┐ ┌────────────────┐
│ 📱 │         │  📱 📱  │     │  📁 📱 📱 📱 │ │  📁 📱 📱 📱  │
│ 📱 │         │  📱 📱  │     │  📁 📱 📱 📱 │ │  📁 📱 📱 📱  │
│ 📱 │         │  📱 📱  │     │  📁 📱 📱 📱 │ │  📁 📱 📱 📱  │
└────┘         └─────────┘     └──────────────┘ └────────────────┘
1 column       2 columns       Sidebar +        Sidebar +
No sidebar     No sidebar      3 columns        3 columns
```

## Performance Optimizations

1. **Server-Side Rendering**

   - Pages rendered on server
   - Faster initial load
   - Better SEO

2. **Image Optimization**

   - Next.js Image component
   - Automatic WebP conversion
   - Lazy loading
   - Responsive images

3. **API Caching**

   - Reduces API calls
   - Faster page loads
   - Stays within rate limits

4. **Code Splitting**
   - Each page is a separate bundle
   - Only load what you need
   - Faster navigation

## Security Features

✅ Environment variables for API key
✅ `.env.local` in `.gitignore`
✅ No sensitive data in client code
✅ TypeScript for type safety
✅ Next.js built-in security features

---

This architecture provides a solid foundation for a scalable, performant web application! 🚀
