import React,{useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid} from "@mui/material";
const images = [
  {
    url: "madera.jpg",
    title: "Madera",
    data:"/PageMadera",
    description: "Descripcion del apartado de MADERA",
    width: "25%",
  },
  {
    url: "papel.jpg",
    title: "Papel/Cartón",
    data:"/PagePapel",
    description: "Descripcion del apartado de PAPEL",
    width: "25%",
  },
  {
    url: "vidrio.jpg",
    title: "Vidirio",
    data:"/PageVidrio",
    description: "Descripcion del apartado de VIDRIO",
    width: "25%",
  },
  {
    url: "plastico.jpg",
    title: "Plastico",
    data:"/PagePlastico",
    description: "Descripcion del apartado de PLASTICO",
    width: "25%",
  },
  {
    url: "metales.jpg",
    title: "Metales",
    data:"/PageMetales",
    description: "Descripcion del apartado de METALES",
    width: "25%",
  },
  {
    url: "textilws.jpg",
    title: "Textiles",
    data:"/PageTextiles",
    description: "Descripcion del apartado de TEXTILES",
    width: "25%",
  },
];

export default function MultiActionAreaCard() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {images.map((image) => (
        <Grid item xs={2} sm={4} md={4} key={image}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={image.url}
                alt={image.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {image.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {image.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href={image.data} >
              Ver mas 
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
