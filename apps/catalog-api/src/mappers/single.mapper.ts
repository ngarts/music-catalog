import type { Single } from "../domain/entities/single.js";
import type { SingleResponseDto } from "../dtos/single-response.dto.js";
import { getCoverUrl } from "../utils/media.js";

export function toSingleResponse(
  single: Single
): SingleResponseDto {
  return {
    ...single,
    coverUrl: getCoverUrl(single.slug)
  };
}

export function toSinglesResponse(
  singles: Single[]
): SingleResponseDto[] {
  return singles.map(toSingleResponse);
}