import { Alert, CircularProgress, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import type { SingleResponseDto } from "@music-catalog/shared";
import { singlesService } from "../services/singles.service";
import { SingleCard } from "../components/singles/SingleCard";

export function CatalogPage() {
    const [singles, setSingles] = useState<SingleResponseDto[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadSingles(): Promise<void> {
            try {
                const loadSingles = await singlesService.getSingles();
                setSingles(loadSingles);
            } catch (error: unknown) {
                setError(
                    error instanceof Error
                        ? error.message
                        : "Unable to load the catalog."
                );
            } finally {
                setIsLoading(false);
            }
        }

        void loadSingles();
    }, []);

    return (
        <Container maxWidth="lg">
            <Stack spacing={3} sx={{ py: 4 }}>
                <Typography component="h1" variant="h3" sx={{ mt: 4 }}>
                    NGArts Music Catalog
                </Typography>

                <Typography color="text.secondary" sx={{ mt: 1 }}>
                    Singles published by Nicola Gullo
                </Typography>

                {isLoading && <CircularProgress />}

                {error && <Alert severity="error">{error}</Alert>}

                {!isLoading && !error && (
                    <Grid container spacing={3}>
                        {singles.map((single) => (
                            <Grid key={single.id} size={{ xs: 12, sm: 6, md: 4 }}>
                                <SingleCard single={single} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Stack>
        </Container>
    );
}