import * as React from 'react';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from '@mui/system';


const itemData = [
  {
    url: 'comedero.jpg',
    title: 'Comedero para pajaros',
    author: 'manualidad hecha con botellas de plastico',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    url: 'macetaplastico.jpg',
    title: 'Maceta',
    author: 'manualidad hecha con botella de plsatico',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    url: 'alcancia.jpg',
    title: 'alcancia',
    author: 'manualidad hecha con botellas',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    url: 'estuche.jpg',
    title: 'estuche',
    author: 'manualidad hecha con botellas',
    rows: 2,
    cols: 2,
    featured: true,
  },
  
];

export default function MultiActionAreaCard() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 2 }}
      columns={{ xs: 1, md: 11 }}

    >
      {itemData.map((image) => (
        <Grid item xs={2} md={4} key={image}>
          <Stack direction={'column'}>
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
                  manualidad hecha con botellas de platico
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Ver mas
              </Button>
            </CardActions>
          </Card>
          </Stack>
          <Stack>

          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}