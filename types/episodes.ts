export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface EpisodesResponse {
  data: {
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
    results: Episode[];
  };
}

export interface SingleEpisodeResponse {
  data: Episode;
}