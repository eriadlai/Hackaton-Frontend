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
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Categoría
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={categorias}
          onChange={handleChange}
          autoWidth
          label="Categoría"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Metales</MenuItem>
          <MenuItem value={21}>Plásticos</MenuItem>
          <MenuItem value={22}>Textiles</MenuItem>
          <MenuItem value={22}>Madera</MenuItem>
          <MenuItem value={22}>Papel/Cartón</MenuItem>
          <MenuItem value={22}>Vidrio</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
