import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import MenuCategorias from "../components/MenuCategorias";
import TextoListaMateriales from "../components/TextoListaMateriales";
import TextoInstrucciones from "../components/TextoInstrucciones";
import BotonImagen from "../components/BotonImagen";
import { Card,  CardContent, Stack } from "@mui/material";

export default function AddressForm() {
  return (
     <>
     <CssBaseline />
      <main>
        <Stack justifyContent={"center"}>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={2}>
              <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 4, md: 12 }}
          >
              <Grid item xs={2} sm={4} md={8}>
                <Card sx={{ maxWidth: 600}}>
                  <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Información de Usuario
                  </Typography>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="autor"
                        name="autor"
                        label="Autor"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <MenuCategorias />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <TextoListaMateriales />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <TextoInstrucciones />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <BotonImagen />
                    </Grid>
                  </Grid>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
          </Grid>
        </Container>
        </Stack>
      </main>
    
    </>
  );
}
