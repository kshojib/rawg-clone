# RAWG.io Clone - Video Game Discovery Platform

A modern, responsive video game discovery platform built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This project replicates the core features of RAWG.io, allowing users to browse, search, and discover games from a database of 850,000+ titles.

## 🌐 Live Demo

**[View Live Site](https://rawg-clone-drab.vercel.app/)**

![RAWG Clone](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎮 **Browse Games** - Discover trending and popular games
- 🔍 **Advanced Search** - Search through 850,000+ games
- 🎯 **Filtering** - Filter by genre, platform, release date, and rating
- 📱 **Responsive Design** - Fully responsive UI with mobile support
- 🌙 **Dark Theme** - Beautiful dark mode interface
- ⚡ **Fast Performance** - Server-side rendering with Next.js 15
- 🖼️ **Game Details** - Detailed game pages with screenshots, descriptions, and metadata
- 🎨 **Modern UI** - Clean design with Heroicons and Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A RAWG API key (free from [https://rawg.io/apidocs](https://rawg.io/apidocs))

### Installation

1. **Get your RAWG API key**

   - Visit [https://rawg.io/apidocs](https://rawg.io/apidocs)
   - Sign up for a free account
   - Copy your API key

2. **Set up environment variables**

   Open the `.env.local` file and replace `your_api_key_here` with your actual API key:

   ```env
   NEXT_PUBLIC_RAWG_API_KEY=your_actual_api_key_here
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
rawg-project/
├── app/
│   ├── games/
│   │   └── [slug]/
│   │       ├── page.tsx         # Individual game detail page
│   │       └── loading.tsx      # Loading state for game page
│   ├── search/
│   │   └── page.tsx             # Search results page
│   ├── layout.tsx               # Root layout with header
│   ├── page.tsx                 # Home page with game grid
│   ├── loading.tsx              # Loading state for home page
│   └── globals.css              # Global styles
├── components/
│   ├── Header.tsx               # Navigation header with search
│   ├── Sidebar.tsx              # Sidebar with filters
│   ├── GameCard.tsx             # Individual game card
│   └── GamesGrid.tsx            # Grid layout for games
├── lib/
│   ├── api.ts                   # API functions for RAWG
│   └── types.ts                 # TypeScript type definitions
├── .env.local                   # Environment variables (API key)
└── next.config.ts               # Next.js configuration
```

## 🛠️ Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Heroicons](https://heroicons.com/)** - Beautiful hand-crafted SVG icons
- **[RAWG API](https://rawg.io/apidocs)** - Video game database API

## 🎯 Key Features Explained

### Server-Side Rendering

All pages use Next.js server components for optimal performance and SEO.

### API Integration

The app uses the RAWG API to fetch:

- Game listings with filters
- Individual game details
- Genres and platforms
- Search results

### Responsive Design

- Mobile-first approach
- Adaptive sidebar (hidden on mobile, visible on desktop)
- Responsive grid layout
- Touch-friendly navigation

### Type Safety

Full TypeScript coverage with detailed type definitions for all API responses.

## 🎨 Customization

### Changing the Theme

Edit `app/globals.css` to customize colors and styles.

### Adding More Filters

Modify `components/Sidebar.tsx` to add additional filter options.

### Adjusting API Calls

Update `lib/api.ts` to modify caching strategies or add new endpoints.

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## 🌐 API Usage

This project uses the free RAWG API. Please be respectful of rate limits:

- Free tier: 20,000 requests per month
- Caching is implemented to minimize API calls

## 📄 License

This is a learning project. Feel free to use it as a reference for your own projects.

## 🙏 Acknowledgments

- [RAWG.io](https://rawg.io/) for the amazing API
- [Next.js](https://nextjs.org/) team for the excellent framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling utilities

## 🤝 Contributing

This is a demo project, but feel free to fork and customize it for your own needs!

---

**Happy Gaming! 🎮**
