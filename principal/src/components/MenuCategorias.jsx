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
      <FormControl sx={{ m: 1, minWidth: 200 }}>
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
          <MenuItem value={"Metales"}>Metales</MenuItem>
          <MenuItem value={"Plasticos"}>Plásticos</MenuItem>
          <MenuItem value={"Textiles"}>Textiles</MenuItem>
          <MenuItem value={"Madera"}>Madera</MenuItem>
          <MenuItem value={"Papel"}>Papel/Cartón</MenuItem>
          <MenuItem value={"Vidrio"}>Vidrio</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
