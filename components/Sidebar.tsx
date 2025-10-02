"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Genre } from "@/lib/types";

interface SidebarProps {
  genres: Genre[];
}

export default function Sidebar({ genres }: SidebarProps) {
  const pathname = usePathname();

  const platforms = [
    { id: 4, name: "PC", slug: "pc" },
    { id: 187, name: "PlayStation 5", slug: "playstation5" },
    { id: 1, name: "Xbox One", slug: "xbox-one" },
    { id: 18, name: "PlayStation 4", slug: "playstation4" },
    { id: 186, name: "Xbox Series X", slug: "xbox-series-x" },
    { id: 7, name: "Nintendo Switch", slug: "nintendo-switch" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="w-56 bg-[#151516] min-h-screen pt-6 pb-8 px-0 sticky top-14 overflow-y-auto hidden lg:block border-r border-gray-800/30">
      <div className="space-y-8">
        {/* New Releases */}
        <div>
          <h3 className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-3 px-5">
            New Releases
          </h3>
          <ul className="space-y-0">
            <li>
              <Link
                href="/?dates=2024-09-01,2024-10-01"
                className="block text-[15px] text-gray-300 hover:text-white hover:bg-[#1f1f23] transition-all duration-150 px-5 py-2"
              >
                Last 30 days
              </Link>
            </li>
            <li>
              <Link
                href="/?dates=2024-09-30,2024-10-07"
                className="block text-[15px] text-gray-300 hover:text-white hover:bg-[#1f1f23] transition-all duration-150 px-5 py-2"
              >
                This week
              </Link>
            </li>
            <li>
              <Link
                href="/?dates=2024-10-07,2024-10-14"
                className="block text-[15px] text-gray-300 hover:text-white hover:bg-[#1f1f23] transition-all duration-150 px-5 py-2"
              >
                Next week
              </Link>
            </li>
          </ul>
        </div>

        {/* Top Filters */}
        <div>
          <h3 className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-3 px-5">
            Top
          </h3>
          <ul className="space-y-0">
            <li>
              <Link
                href="/?ordering=-rating"
                className="block text-[15px] text-gray-300 hover:text-white hover:bg-[#1f1f23] transition-all duration-150 px-5 py-2"
              >
                Best of the year
              </Link>
            </li>
            <li>
              <Link
                href="/?ordering=-added"
                className="block text-[15px] text-gray-300 hover:text-white hover:bg-[#1f1f23] transition-all duration-150 px-5 py-2"
              >
                Popular in 2024
              </Link>
            </li>
            <li>
              <Link
                href="/?ordering=-metacritic"
                className="block text-[15px] text-gray-300 hover:text-white hover:bg-[#1f1f23] transition-all duration-150 px-5 py-2"
              >
                All time top
              </Link>
            </li>
          </ul>
        </div>

        {/* Platforms */}
        <div>
          <h3 className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-3 px-5">
            Platforms
          </h3>
          <ul className="space-y-0">
            {platforms.map((platform) => (
              <li key={platform.id}>
                <Link
                  href={`/?platforms=${platform.id}`}
                  className="block text-[15px] text-gray-300 hover:text-white hover:bg-[#1f1f23] transition-all duration-150 px-5 py-2"
                >
                  {platform.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Genres */}
        <div>
          <h3 className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-3 px-5">
            Genres
          </h3>
          <ul className="space-y-0">
            {genres.slice(0, 10).map((genre) => (
              <li key={genre.id}>
                <Link
                  href={`/?genres=${genre.id}`}
                  className="block text-[15px] text-gray-300 hover:text-white hover:bg-[#1f1f23] transition-all duration-150 px-5 py-2"
                >
                  {genre.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
