import Link from "next/link";
import Image from "next/image";
import { Game } from "@/lib/types";
import { StarIcon } from "@heroicons/react/24/solid";
import { WindowIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const getPlatformIcons = () => {
    const platforms = game.parent_platforms?.map((p) => p.platform.slug) || [];
    const icons = [];

    if (platforms.includes("pc")) {
      icons.push(<WindowIcon key="pc" className="w-4 h-4" title="PC" />);
    }
    if (platforms.includes("playstation")) {
      icons.push(
        <span key="ps" className="text-xs font-bold" title="PlayStation">
          PS
        </span>
      );
    }
    if (platforms.includes("xbox")) {
      icons.push(
        <span key="xbox" className="text-xs font-bold" title="Xbox">
          XB
        </span>
      );
    }
    if (platforms.includes("nintendo")) {
      icons.push(
        <span key="nintendo" className="text-xs font-bold" title="Nintendo">
          N
        </span>
      );
    }
    if (platforms.includes("ios") || platforms.includes("android")) {
      icons.push(
        <DevicePhoneMobileIcon
          key="mobile"
          className="w-4 h-4"
          title="Mobile"
        />
      );
    }

    return icons;
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return "text-green-500";
    if (rating >= 3.5) return "text-blue-500";
    if (rating >= 2.5) return "text-yellow-500";
    return "text-gray-500";
  };

  return (
    <Link href={`/games/${game.slug}`}>
      <div className="bg-[#202020] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer group shadow-md hover:shadow-xl">
        {/* Game Image */}
        <div className="relative h-48 bg-gray-900">
          {game.background_image ? (
            <Image
              src={game.background_image}
              alt={game.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
        </div>

        {/* Game Info */}
        <div className="p-6">
          {/* Platforms and Metacritic */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              {getPlatformIcons()}
            </div>
            {game.metacritic && (
              <div className="border-2 border-green-500 text-green-500 px-2.5 py-1 text-xs font-bold rounded">
                {game.metacritic}
              </div>
            )}
          </div>

          {/* Game Title */}
          <h3 className="text-white font-bold text-xl mb-4 line-clamp-2 group-hover:text-gray-100 transition-colors leading-snug">
            {game.name}
          </h3>

          {/* Rating and Release Date */}
          <div className="flex items-center justify-between text-sm mb-4">
            {game.rating > 0 ? (
              <div className="flex items-center gap-2">
                <StarIcon
                  className={`w-5 h-5 ${getRatingColor(game.rating)}`}
                />
                <span className="text-gray-300 font-semibold text-base">
                  {game.rating.toFixed(1)}
                </span>
              </div>
            ) : (
              <div></div>
            )}
            {game.released && (
              <span className="text-gray-500 text-xs">
                {new Date(game.released).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            )}
          </div>

          {/* Genres */}
          {game.genres && game.genres.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {game.genres.slice(0, 2).map((genre) => (
                <span
                  key={genre.id}
                  className="text-xs text-gray-400 bg-gray-700/30 px-3 py-1.5 rounded-md"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
