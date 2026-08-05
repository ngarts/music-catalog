import type { MusicServiceLinkDto } from "@music-catalog/shared";
import {
  Apple,
  MusicNote,
  ShoppingCart,
  YouTube
} from "@mui/icons-material";
import {
  IconButton,
  Stack,
  Tooltip
} from "@mui/material";
import type { ReactNode } from "react";

interface MusicServiceLinksProps {
  links: MusicServiceLinkDto[];
}

interface MusicServicePresentation {
  label: string;
  icon: ReactNode;
}

function getServicePresentation(
  serviceId: string
): MusicServicePresentation {
  switch (serviceId) {
    case "spotify":
      return {
        label: "Spotify",
        icon: <MusicNote />
      };

    case "apple-music":
      return {
        label: "Apple Music",
        icon: <Apple />
      };

    case "youtube-music":
      return {
        label: "YouTube Music",
        icon: <YouTube />
      };

    case "amazon-music":
      return {
        label: "Amazon Music",
        icon: <ShoppingCart />
      };

    default:
      return {
        label: serviceId,
        icon: <MusicNote />
      };
  }
}

export function MusicServiceLinks({
  links
}: MusicServiceLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ flexWrap: "wrap", justifyContent: "center" }}
      useFlexGap
    >
      {links.map((link) => {
        const presentation = getServicePresentation(link.serviceId);

        return (
          <Tooltip
            key={link.serviceId}
            title={`Ascolta su ${presentation.label}`}
          >
            <IconButton
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ascolta su ${presentation.label}`}
              sx={{
                color: "common.white",
                backgroundColor: "rgba(255,255,255,0.12)",

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.24)"
                }
              }}
            >
              {presentation.icon}
            </IconButton>
          </Tooltip>
        );
      })}
    </Stack>
  );
}