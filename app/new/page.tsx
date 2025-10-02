import { fetchGames, fetchGenres } from "@/lib/api";
import Sidebar from "@/components/Sidebar";
import GamesList from "@/components/GamesList";
import ApiKeyMissing from "@/components/ApiKeyMissing";

interface NewPageProps {
  searchParams: Promise<{
    page?: string;
    genres?: string;
    platforms?: string;
  }>;
}

export default async function NewPage({ searchParams }: NewPageProps) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");

  // Check if API key is configured
  const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;
  if (
    !apiKey ||
    apiKey === "YOUR_API_KEY_HERE" ||
    apiKey === "your_api_key_here"
  ) {
    return <ApiKeyMissing />;
  }

  try {
    // Calculate date range for new releases (last 6 months)
    const today = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 6);

    const endDate = today.toISOString().split("T")[0];
    const startDate = sixMonthsAgo.toISOString().split("T")[0];

    // Fetch games ordered by release date (newest first) and genres in parallel
    const [gamesData, genresData] = await Promise.all([
      fetchGames({
        page,
        page_size: 24,
        ordering: "-released",
        dates: `${startDate},${endDate}`,
        genres: params.genres,
        platforms: params.platforms,
      }),
      fetchGenres(),
    ]);

    return (
      <div className="flex min-h-screen">
        <Sidebar genres={genresData.results} />

        <main className="flex-1 px-6 py-10 lg:px-12 lg:py-12">
          <div className="max-w-[1600px] mx-auto">
            {/* Header Section */}
            <section className="mb-10">
              <h1 className="text-5xl font-bold mb-3 tracking-tight text-white">
                New Releases
              </h1>
              <p className="text-gray-400 text-base">
                Check out the latest games released in the past 6 months
              </p>
            </section>

            {/* Games List with Load More */}
            <GamesList
              initialGames={gamesData.results}
              initialPage={page}
              hasMore={!!gamesData.next}
              searchParams={{
                genres: params.genres,
                platforms: params.platforms,
                ordering: "-released",
                dates: `${startDate},${endDate}`,
              }}
            />
          </div>
        </main>
      </div>
    );
  } catch (error) {
    // If API call fails, show the API key missing component
    return <ApiKeyMissing />;
  }
}
