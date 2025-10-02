import { Game } from "@/lib/types";
import GameCard from "./GameCard";

interface GamesGridProps {
  games: Game[];
}

export default function GamesGrid({ games }: GamesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
