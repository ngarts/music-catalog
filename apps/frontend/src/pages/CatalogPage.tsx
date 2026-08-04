import { Alert, CircularProgress, Container, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import type { SingleResponseDto } from "@music-catalog/shared";
import { catalogService } from "../services/catalog.service";

export function CatalogPage() {
    const [singles, setSingles] = useState<SingleResponseDto[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadSingles(): Promise<void> {
            try {
                const loadSingles = await catalogService.getSingles();
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

                {isLoading && <CircularProgress />}

                {error && <Alert severity="error">{error}</Alert>}

                {!isLoading && !error && (
                    <List>
                        {singles.map((single) => (
                            <ListItem key={single.id} disableGutters>
                                <ListItemText primary={single.title} secondary={single.artist} />
                            </ListItem>
                        ))}
                    </List>
                )}
            </Stack>
        </Container>
    );
}