/**
 * Returns the public URL of a cover image.
 * Images are served by the frontend following a naming convention.
 */
export function getCoverUrl(slug: string): string {
  return `/covers/${slug}.webp`;
}