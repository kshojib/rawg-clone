import { GamesResponse, GameDetails, GenresResponse, PlatformsResponse } from './types';

const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY || 'YOUR_API_KEY_HERE';
const BASE_URL = 'https://api.rawg.io/api';

export interface FetchGamesParams {
  page?: number;
  page_size?: number;
  search?: string;
  genres?: string;
  platforms?: string;
  ordering?: string;
  dates?: string;
}

export async function fetchGames(params: FetchGamesParams = {}): Promise<GamesResponse> {
  const queryParams = new URLSearchParams({
    key: API_KEY,
    page: String(params.page || 1),
    page_size: String(params.page_size || 24),
    ...(params.search && { search: params.search }),
    ...(params.genres && { genres: params.genres }),
    ...(params.platforms && { platforms: params.platforms }),
    ...(params.ordering && { ordering: params.ordering }),
    ...(params.dates && { dates: params.dates }),
  });

  const response = await fetch(`${BASE_URL}/games?${queryParams}`, {
    next: { revalidate: 3600 } // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }

  return response.json();
}

export async function fetchGameDetails(slug: string): Promise<GameDetails> {
  const response = await fetch(`${BASE_URL}/games/${slug}?key=${API_KEY}`, {
    next: { revalidate: 3600 }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch game details');
  }

  return response.json();
}

export async function fetchGenres(): Promise<GenresResponse> {
  const response = await fetch(`${BASE_URL}/genres?key=${API_KEY}`, {
    next: { revalidate: 86400 } // Cache for 24 hours
  });

  if (!response.ok) {
    throw new Error('Failed to fetch genres');
  }

  return response.json();
}

export async function fetchPlatforms(): Promise<PlatformsResponse> {
  const response = await fetch(`${BASE_URL}/platforms?key=${API_KEY}`, {
    next: { revalidate: 86400 } // Cache for 24 hours
  });

  if (!response.ok) {
    throw new Error('Failed to fetch platforms');
  }

  return response.json();
}

export async function searchGames(query: string, page: number = 1): Promise<GamesResponse> {
  return fetchGames({ search: query, page });
}

export async function fetchSimilarGames(gameSlug: string): Promise<GamesResponse> {
  const response = await fetch(`${BASE_URL}/games/${gameSlug}/game-series?key=${API_KEY}`, {
    next: { revalidate: 3600 }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch similar games');
  }

  return response.json();
}
