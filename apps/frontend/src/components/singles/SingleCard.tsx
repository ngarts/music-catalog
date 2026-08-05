import type { SingleResponseDto } from "@music-catalog/shared";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography
} from "@mui/material";

import styles from "./SingleCard.module.css";

interface SingleCardProps {
  single: SingleResponseDto;
}

import { MusicServiceLinks } from "../music-services/MusicServiceLinks";

function formatReleaseDate(releaseDate: string | null): string {
  if (!releaseDate) {
    return "Data di pubblicazione non disponibile";
  }

  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(`${releaseDate}T00:00:00`));
}

export function SingleCard({ single }: SingleCardProps) {
  return (
    <div
      className={styles.card}
      tabIndex={0}
      aria-label={`Mostra i dettagli di ${single.title}`}
    >
      <div className={styles.inner}>
        <Card className={styles.face} elevation={3}>
          <CardMedia
            component="img"
            image={single.coverUrl}
            alt={`Copertina di ${single.title}`}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </Card>

        <Card
          className={`${styles.face} ${styles.back}`}
          elevation={3}
          sx={{
            background:
              "linear-gradient(145deg, rgba(20,20,20,0.98), rgba(55,10,10,0.96))",
            color: "common.white"
          }}
        >
          <CardContent
            sx={{
              height: "100%",
              boxSizing: "border-box"
            }}
          >
            <Stack
              spacing={2}
              sx={{
                height: "100%",
                justifyContent: "space-between"
              }}
            >
              <Stack spacing={1}>
                <Typography component="h2" variant="h5" sx={{ fontWeight: 600 }}>
                  {single.title}
                </Typography>

                <Typography color="grey.300">
                  {single.artist}
                </Typography>
              </Stack>

              {single.genres.length > 0 && (
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ flexWrap: "wrap" }}
                >
                  {single.genres.map((genre) => (
                    <Chip
                      key={genre}
                      label={genre}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.14)",
                        color: "common.white"
                      }}
                    />
                  ))}
                </Stack>
              )}

              <MusicServiceLinks links={single.musicServices} />

              <Typography variant="body2" color="grey.300">
                {formatReleaseDate(single.releaseDate)}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}