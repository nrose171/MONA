import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
  },
  media: {
    height: 150,
    width: 100,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function RandomMuseum() {
  const classes = useStyles();
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);
  const [expanded6, setExpanded6] = React.useState(false);
  const [expanded7, setExpanded7] = React.useState(false);
  const [expanded8, setExpanded8] = React.useState(false);
  const [expanded9, setExpanded9] = React.useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };

  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
  };

  const handleExpandClick7 = () => {
    setExpanded7(!expanded7);
  };

  const handleExpandClick8 = () => {
    setExpanded8(!expanded8);
  };

  const handleExpandClick9 = () => {
    setExpanded9(!expanded9);
  };

  return (
      <div>
          <h1 style={{marginTop: '0vh'}}> Just Another Museum</h1>
          <Grid container spacing={1} direction="column">
            <Grid item xs={12} container spacing={3}>

              {/* 1st element */}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="Mona Lisa"
                    subheader="Leonardo Da Vinci"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={3}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.media}
                          image="https://i.imgur.com/lmJy0b5.jpg"
                          title="Paella dish"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                    </Grid>
                  </Grid>
                  <CardActions disableSpacing>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded1,
                      })}
                      onClick={handleExpandClick1}
                      aria-expanded1={expanded1}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded1} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
              
              {/* 2nd element */}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="Mona Lisa"
                    subheader="Leonardo Da Vinci"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={3}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.media}
                          image="https://i.imgur.com/lmJy0b5.jpg"
                          title="Paella dish"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                    </Grid>
                  </Grid>
                  <CardActions disableSpacing>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded2,
                      })}
                      onClick={handleExpandClick2}
                      aria-expanded2={expanded2}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded2} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
              
              {/* 3rd element */}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="Mona Lisa"
                    subheader="Leonardo Da Vinci"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={3}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.media}
                          image="https://i.imgur.com/lmJy0b5.jpg"
                          title="Paella dish"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                    </Grid>
                  </Grid>
                  <CardActions disableSpacing>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded3,
                      })}
                      onClick={handleExpandClick3}
                      aria-expanded3={expanded3}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded3} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            
              {/* 4th element*/}
              <Grid item xs={4}>
                  <Card className={classes.root}>
                    <CardHeader
                      title="Mona Lisa"
                      subheader="Leonardo Da Vinci"
                    />
                    <Grid item xs={12} container >
                      <Grid item xs={3}>
                        <Box pl={2} pt={2}>
                          <CardMedia
                            className={classes.media}
                            image="https://i.imgur.com/lmJy0b5.jpg"
                            title="Paella dish"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={8}>
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          This impressive paella is a perfect party dish and a fun meal to cook together with your
                          guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                      </CardContent>
                      </Grid>
                    </Grid>
                    <CardActions disableSpacing>
                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded4,
                        })}
                        onClick={handleExpandClick4}
                        aria-expanded4={expanded4}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </CardActions>
                    <Collapse in={expanded4} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                          minutes.
                        </Typography>
                        <Typography paragraph>
                          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                          heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                          browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                          and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                          pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                          saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                          Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                          without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                          medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                          again without stirring, until mussels have opened and rice is just tender, 5 to 7
                          minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                          Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
                </Grid>
              
              {/* 5th element*/}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="Mona Lisa"
                    subheader="Leonardo Da Vinci"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={3}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.media}
                          image="https://i.imgur.com/lmJy0b5.jpg"
                          title="Paella dish"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                    </Grid>
                  </Grid>
                  <CardActions disableSpacing>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded4,
                      })}
                      onClick={handleExpandClick5}
                      aria-expanded5={expanded5}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded5} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
              
              {/* 6th element*/}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="Mona Lisa"
                    subheader="Leonardo Da Vinci"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={3}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.media}
                          image="https://i.imgur.com/lmJy0b5.jpg"
                          title="Paella dish"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                    </Grid>
                  </Grid>
                  <CardActions disableSpacing>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded6,
                      })}
                      onClick={handleExpandClick6}
                      aria-expanded6={expanded6}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded6} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>

              {/* 7th element*/}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="Mona Lisa"
                    subheader="Leonardo Da Vinci"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={3}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.media}
                          image="https://i.imgur.com/lmJy0b5.jpg"
                          title="Paella dish"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                    </Grid>
                  </Grid>
                  <CardActions disableSpacing>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded7,
                      })}
                      onClick={handleExpandClick7}
                      aria-expanded7={expanded7}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded7} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>

              {/*8th element*/}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="Mona Lisa"
                    subheader="Leonardo Da Vinci"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={3}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.media}
                          image="https://i.imgur.com/lmJy0b5.jpg"
                          title="Paella dish"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                    </Grid>
                  </Grid>
                  <CardActions disableSpacing>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded8,
                      })}
                      onClick={handleExpandClick8}
                      aria-expanded8={expanded8}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded8} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>

              {/*9th element*/}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="Mona Lisa"
                    subheader="Leonardo Da Vinci"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={3}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.media}
                          image="https://i.imgur.com/lmJy0b5.jpg"
                          title="Paella dish"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                    </Grid>
                  </Grid>
                  <CardActions disableSpacing>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded9,
                      })}
                      onClick={handleExpandClick9}
                      aria-expanded9={expanded9}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded9} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            
            
            </Grid>
          </Grid>
                
      </div>
  );
}

export default RandomMuseum;