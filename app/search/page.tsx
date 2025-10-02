import { fetchGames, fetchGenres } from "@/lib/api";
import GamesList from "@/components/GamesList";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q || "";
  const page = parseInt(params.page || "1");

  const [gamesData, genresData] = await Promise.all([
    fetchGames({ search: query, page, page_size: 24 }),
    fetchGenres(),
  ]);

  return (
    <div className="flex min-h-screen">
      <Sidebar genres={genresData.results} />

      <main className="flex-1 px-6 py-10 lg:px-12 lg:py-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to home
          </Link>

          {/* Search Header */}
          <section className="mb-10">
            <h1 className="text-5xl font-bold mb-3 tracking-tight">
              {query ? `Search results for "${query}"` : "Search"}
            </h1>
            <p className="text-gray-400 text-base">
              Found {gamesData.count.toLocaleString()} games
            </p>
          </section>

          {/* Games Grid */}
          {gamesData.results.length > 0 ? (
            <GamesList
              initialGames={gamesData.results}
              initialPage={page}
              hasMore={!!gamesData.next}
              searchParams={{
                search: query,
              }}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No games found matching your search.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
