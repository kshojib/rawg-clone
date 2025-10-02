"use client";

import { useState } from "react";
import { Game } from "@/lib/types";
import GamesGrid from "./GamesGrid";
import { fetchGames } from "@/lib/api";

interface GamesListProps {
  initialGames: Game[];
  initialPage: number;
  hasMore: boolean;
  searchParams: {
    genres?: string;
    platforms?: string;
    ordering?: string;
    dates?: string;
    search?: string;
  };
}

export default function GamesList({
  initialGames,
  initialPage,
  hasMore,
  searchParams,
}: GamesListProps) {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [page, setPage] = useState(initialPage);
  const [hasMoreGames, setHasMoreGames] = useState(hasMore);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      const data = await fetchGames({
        page: nextPage,
        page_size: 24,
        genres: searchParams.genres,
        platforms: searchParams.platforms,
        ordering: searchParams.ordering,
        dates: searchParams.dates,
        search: searchParams.search,
      });

      setGames([...games, ...data.results]);
      setPage(nextPage);
      setHasMoreGames(!!data.next);
    } catch (error) {
      console.error("Failed to load more games:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GamesGrid games={games} />

      {/* Load More Button */}
      {hasMoreGames && (
        <div className="mt-16 mb-8 flex justify-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-gray-700 disabled:to-gray-800 text-white px-16 py-4 rounded-xl transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl disabled:cursor-not-allowed transform hover:scale-105 disabled:scale-100 min-w-[240px]"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Loading...
              </span>
            ) : (
              "Load More Games"
            )}
          </button>
        </div>
      )}

      {!hasMoreGames && games.length > 0 && (
        <div className="mt-16 mb-8 text-center text-gray-500">
          <p className="text-lg">You've reached the end! 🎮</p>
        </div>
      )}
    </>
  );
}
