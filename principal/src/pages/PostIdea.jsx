import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import MenuCategorias from "../components/MenuCategorias";
import TextoListaMateriales from "../components/TextoListaMateriales";
import TextoInstrucciones from "../components/TextoInstrucciones";
import BotonAzul from "../components/BotonAzul";
import BotonImagen from "../components/BotonImagen";

export default function AddressForm() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="sm">
        <Typography variant="h6" gutterBottom>
          Información de Usuario
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nombre"
              name="nombre"
              label="Nombre"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="apellido"
              name="apellido"
              label="Apellido"
              fullWidth
              autoComplete="family-name"
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
      </Container>
    </React.Fragment>
  );
}
