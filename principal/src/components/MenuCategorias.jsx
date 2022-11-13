import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MenuCategorias() {
  const [categorias, setcategorias] = React.useState("");

  const handleChange = (event) => {
    setcategorias(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="categoria">
          Categoría
        </InputLabel>
        <Select
          labelId="categoria"
          id="categoria"
          value={categorias}
          onChange={handleChange}
          autoWidth
          label="Categoría"
        >
          <MenuItem value="Metales">Metales</MenuItem>
          <MenuItem value="Plásticos">Plásticos</MenuItem>
          <MenuItem value="Textiles">Textiles</MenuItem>
          <MenuItem value="Madera">Madera</MenuItem>
          <MenuItem value="Papel">Papel/Cartón</MenuItem>
          <MenuItem value="Vidrio">Vidrio</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
