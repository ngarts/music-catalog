import type { MusicService } from "../entities/music-service.js";

export const initialMusicServices: MusicService[] = [
  {
    id: "spotify",
    name: "Spotify",
    slug: "spotify",
    icon: "spotify"
  },
  {
    id: "apple-music",
    name: "Apple Music",
    slug: "apple-music",
    icon: "apple-music"
  },
  {
    id: "youtube-music",
    name: "YouTube Music",
    slug: "youtube-music",
    icon: "youtube-music"
  },
  {
    id: "amazon-music",
    name: "Amazon Music",
    slug: "amazon-music",
    icon: "amazon-music"
  }
];