// RAWG API Response Types
export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: EsrbRating;
  platforms: PlatformInfo[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  stores: StoreInfo[];
  tags: Tag[];
  short_screenshots: Screenshot[];
}

export interface GameDetails extends Game {
  description_raw: string;
  description: string;
  website: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  publishers: Publisher[];
  developers: Developer[];
  genres: Genre[];
  clip: null;
  tags: Tag[];
  esrb_rating: EsrbRating;
  alternative_names: string[];
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface EsrbRating {
  id: number;
  slug: string;
  name: string;
}

export interface PlatformInfo {
  platform: Platform;
  released_at: string;
  requirements: Requirements;
}

export interface Platform {
  id: number;
  slug: string;
  name: string;
  image: string;
  year_end: number | null;
  year_start: number | null;
  games_count: number;
  image_background: string;
}

export interface ParentPlatform {
  platform: {
    id: number;
    slug: string;
    name: string;
  };
}

export interface Requirements {
  minimum?: string;
  recommended?: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface StoreInfo {
  id: number;
  url: string;
  store: Store;
}

export interface Store {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface Screenshot {
  id: number;
  image: string;
}

export interface Publisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Developer {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface GamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export interface GenresResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Genre[];
}

export interface PlatformsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Platform[];
}
