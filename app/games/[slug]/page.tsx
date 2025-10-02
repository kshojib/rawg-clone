import { fetchGameDetails, fetchSimilarGames } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import {
  StarIcon,
  CalendarIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import GameCard from "@/components/GameCard";
import { Game } from "@/lib/types";

interface GamePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = await fetchGameDetails(slug);

  // Fetch similar games
  let similarGames: Game[] = [];
  try {
    const similarGamesData = await fetchSimilarGames(slug);
    similarGames = similarGamesData.results.slice(0, 6);
  } catch (error) {
    console.error("Failed to fetch similar games:", error);
  }

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to games
        </Link>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-96 w-full">
        {game.background_image && (
          <div className="absolute inset-0">
            <Image
              src={game.background_image}
              alt={game.name}
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">{game.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-300">
              {game.rating && (
                <div className="flex items-center gap-1">
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">
                    {game.rating.toFixed(1)}
                  </span>
                </div>
              )}
              {game.released && (
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-5 h-5" />
                  <span>{new Date(game.released).toLocaleDateString()}</span>
                </div>
              )}
              {game.metacritic && (
                <div className="border-2 border-green-500 text-green-500 px-3 py-1 font-bold rounded">
                  {game.metacritic}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">About</h2>
              <div
                className="text-gray-300 prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{
                  __html: game.description || game.description_raw,
                }}
              />
            </section>

            {/* Screenshots */}
            {game.short_screenshots && game.short_screenshots.length > 1 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Screenshots
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {game.short_screenshots.slice(1).map((screenshot) => (
                    <div
                      key={screenshot.id}
                      className="relative h-48 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={screenshot.image}
                        alt="Screenshot"
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Platforms */}
            {game.platforms && game.platforms.length > 0 && (
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((p) => (
                    <span
                      key={p.platform.id}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm"
                    >
                      {p.platform.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Genre */}
            {game.genres && game.genres.length > 0 && (
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Genre</h3>
                <div className="flex flex-wrap gap-2">
                  {game.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Release Date */}
            {game.released && (
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Release date
                </h3>
                <p className="text-gray-300">
                  {new Date(game.released).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            )}

            {/* Developers */}
            {game.developers && game.developers.length > 0 && (
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Developer
                </h3>
                <div className="space-y-1">
                  {game.developers.map((dev) => (
                    <p key={dev.id} className="text-gray-300">
                      {dev.name}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Publishers */}
            {game.publishers && game.publishers.length > 0 && (
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Publisher
                </h3>
                <div className="space-y-1">
                  {game.publishers.map((pub) => (
                    <p key={pub.id} className="text-gray-300">
                      {pub.name}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Website */}
            {game.website && (
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Website
                </h3>
                <a
                  href={game.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                >
                  <GlobeAltIcon className="w-5 h-5" />
                  Visit website
                </a>
              </div>
            )}

            {/* Tags */}
            {game.tags && game.tags.length > 0 && (
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {game.tags.slice(0, 10).map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Similar Games Section */}
        {similarGames.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Similar Games
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarGames.map((similarGame) => (
                <GameCard key={similarGame.id} game={similarGame} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
