import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { useEffect } from 'react';
import { Box, Button, CardActionArea, Container, CssBaseline, Grid, Stack } from '@mui/material';
const API = "http://localhost:3001/API/Reciclaje/Manualidad";
const hoy=new Date();
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
    const [oData, setData] = useState();

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch(API)
            .then(response => response.json())
            .then(data => setData(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
  const [expanded, setExpanded] = React.useState(false);
  const [like, setLike] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
     <CssBaseline />
      <main>
        <Stack >
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
              <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {oData?.map((dato) => (
              <Grid item xs={2} sm={4} md={4} key={dato._id}>
                <Card sx={{ maxWidth: 345 }}>
                 <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        A
                      </Avatar>
                    }
                  
                    title={dato.oTitulo}        subheader= {hoy.toDateString()}
                  />
                  <CardActionArea disableSpacing>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {dato.oContenido}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {dato.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon onClick={() => {
                              setLike(!like);   
                            }}
                            color={like ? "primary" : "action"}      
                            />
                            
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                    <Button size="small" color="primary" href={dato.data} >
                    Ver mas 
                    </Button>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                  
                    <Typography paragraph>
                    <Box fontWeight='bold' display='inline'>Autor: </Box>
                    {dato.oAutor}
                    </Typography>
                    <Typography paragraph>
                    <Box fontWeight='bold' display='inline'>Materiales: </Box>
                    {dato.oCategorias[0]}
                    </Typography>
                  </CardContent>
                </Collapse>
                </Card>
              </Grid>
            ))}
          </Grid>
          </Grid>
        </Container>
        </Stack>
      </main>
    
    </>
   
    
    
  );
}