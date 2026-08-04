export interface SingleResponseDto {
  id: string;
  slug: string;
  title: string;
  artist: string;
  releaseDate: string | null;
  genres: string[];
  coverUrl: string;
}