import type { MusicServiceLink } from "./music-service-link.js";

export interface Single {
  id: string;
  title: string;
  slug: string;
  artist: string;
  releaseDate: string | null;
  genres: string[];
  musicServices: MusicServiceLink[];
}
