# 🎨 Customization Guide

## Quick Customization Tips

### 1. Change the Site Name

**File:** `components/Header.tsx`

Find this line:

```tsx
<Link
  href="/"
  className="text-2xl font-bold text-white hover:text-gray-300 transition"
>
  RAWG
</Link>
```

Change `RAWG` to your preferred name:

```tsx
<Link
  href="/"
  className="text-2xl font-bold text-white hover:text-gray-300 transition"
>
  GameHub
</Link>
```

**Also update:** `app/layout.tsx` metadata:

```tsx
export const metadata: Metadata = {
  title: "GameHub - Video Game Discovery",
  description: "Discover your next favorite game.",
};
```

### 2. Change Colors

**File:** `app/globals.css`

Add custom colors at the top:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #9333ea; /* Purple */
  --primary-hover: #7e22ce;
  --background: #0a0e1a; /* Dark blue */
  --card: #1f2937; /* Gray */
}
```

Then use in components:

```tsx
<div className="bg-[var(--card)]">
```

### 3. Add a Logo

1. Add your logo image to `public/logo.png`
2. Update `components/Header.tsx`:

```tsx
import Image from "next/image";

// Replace the text logo with:
<Link href="/" className="flex items-center gap-2">
  <Image src="/logo.png" alt="Logo" width={40} height={40} />
  <span className="text-2xl font-bold">Your Site</span>
</Link>;
```

### 4. Customize Game Cards

**File:** `components/GameCard.tsx`

Change card hover effect:

```tsx
<div className="... hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50">
```

Add a border:

```tsx
<div className="... border-2 border-transparent hover:border-purple-500">
```

Change image height:

```tsx
<div className="relative h-64 bg-gray-700">  {/* was h-48 */}
```

### 5. Add More Filters

**File:** `components/Sidebar.tsx`

Add a new filter section:

```tsx
{
  /* ESRB Rating */
}
<div>
  <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4">
    Rating
  </h3>
  <ul className="space-y-2">
    <li>
      <Link href="/?esrb=everyone" className="...">
        Everyone
      </Link>
    </li>
    <li>
      <Link href="/?esrb=teen" className="...">
        Teen
      </Link>
    </li>
    <li>
      <Link href="/?esrb=mature" className="...">
        Mature
      </Link>
    </li>
  </ul>
</div>;
```

### 6. Change Pagination Style

**File:** `app/page.tsx`

Replace the pagination section with numbered buttons:

```tsx
<div className="mt-8 flex justify-center gap-2">
  {gamesData.previous && (
    <a href={`?page=${page - 1}`} className="...">
      ←
    </a>
  )}

  {[...Array(5)].map((_, i) => {
    const pageNum = page - 2 + i;
    if (pageNum < 1) return null;
    return (
      <a
        key={pageNum}
        href={`?page=${pageNum}`}
        className={pageNum === page ? "bg-purple-600" : "bg-gray-800"}
      >
        {pageNum}
      </a>
    );
  })}

  {gamesData.next && (
    <a href={`?page=${page + 1}`} className="...">
      →
    </a>
  )}
</div>
```

### 7. Add Animations

Install framer-motion:

```bash
npm install framer-motion
```

**File:** `components/GameCard.tsx`

```tsx
"use client";
import { motion } from "framer-motion";

export default function GameCard({ game }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* rest of card */}
    </motion.div>
  );
}
```

### 8. Change Font

**File:** `app/layout.tsx`

Replace Inter with another Google Font:

```tsx
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Then use:
<body className={`${poppins.className} ...`}>
```

### 9. Add Dark/Light Theme Toggle

Create `components/ThemeToggle.tsx`:

```tsx
"use client";
import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  return (
    <button
      onClick={() => {
        setDark(!dark);
        document.documentElement.classList.toggle("light");
      }}
      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
    >
      {dark ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
}
```

Add to Header and define light theme colors in `globals.css`.

### 10. Customize Loading States

**File:** `app/loading.tsx`

Add a custom spinner:

```tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500" />
    </div>
  );
}
```

Or use a skeleton with custom colors:

```tsx
<div className="h-48 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
```

### 11. Add Footer

Create `components/Footer.tsx`:

```tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center text-gray-400">
          <p>Powered by RAWG API</p>
          <p className="text-sm mt-2">© 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

Add to `app/layout.tsx`:

```tsx
import Footer from "@/components/Footer";

// In the layout:
<body>
  <Header />
  {children}
  <Footer />
</body>;
```

### 12. Change Grid Columns

**File:** `components/GamesGrid.tsx`

```tsx
// Original: 1 → 2 → 3 columns
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

// Make it: 1 → 2 → 4 columns
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

// Or: 1 → 3 → 5 columns
<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
```

### 13. Add Favorites Feature (Advanced)

Use localStorage to save favorites:

Create `lib/favorites.ts`:

```tsx
export const getFavorites = (): number[] => {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem("favorites");
  return saved ? JSON.parse(saved) : [];
};

export const toggleFavorite = (gameId: number): void => {
  const favorites = getFavorites();
  const index = favorites.indexOf(gameId);

  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(gameId);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};
```

Add a heart button to `GameCard.tsx`.

## 🎯 Pro Tips

1. **Keep it simple** - Don't over-customize at first
2. **Test changes** - Always check mobile view
3. **Git commits** - Commit before major changes
4. **Performance** - Monitor bundle size when adding libraries
5. **Accessibility** - Keep color contrast high

## 🚀 Next Level

Once you're comfortable:

- Add TypeScript strict mode
- Set up ESLint rules
- Add unit tests with Jest
- Implement E2E tests with Playwright
- Deploy to Vercel

---

Happy customizing! 🎨
