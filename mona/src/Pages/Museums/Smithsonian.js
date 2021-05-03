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
  landscape: {
    height: 100,
    width: 150,
  },
  portrait: {
    height: 150,
    width: 120,
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

function Smithsonian() {
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
          <h1 style={{marginTop: '0vh'}}> Smithsonian</h1>
          <Grid container spacing={1} direction="column">
            <Grid item xs={12} container spacing={3}>

              {/* 1st element */}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="Electronic Superhighway"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={4}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.landscape}
                          image="https://i.imgur.com/j4Uesox.jpg"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" component="p">Artist: Nam June Paik</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Year: 1995</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Type: Abstract</Typography>
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
                      <Typography paragraph>
                        When Nam June Paik came to the United States in 1964, the interstate highway system was only nine years old, and superhighways offered everyone the freedom to ​“see the U.S.A. in your Chevrolet.” Walking along the entire length of this installation suggests the enormous scale of the nation that confronted the young Korean artist when he arrived. Neon outlines the monitors, recalling the multicolored maps and glowing enticements of motels and restaurants that beckoned Americans to the open road. The different colors remind us that individual states still have distinct identities and cultures, even in today’s information age.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
              
              {/* 2nd element */}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="Among the Sierra Nevada Mountains, California"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={4}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.landscape}
                          image="https://i.imgur.com/LgOBJoB.jpg"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" component="p">Artist: Albert Bierstadt</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Year: 1868</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Type: Oil Paint</Typography>
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
                      <Typography paragraph>
                      Among the Sierra Nevada, California (also known as Among the Sierra Nevada Mountains) is an 1868 oil-on-canvas painting by German-American artist Albert Bierstadt which depicts a landscape scene of the Sierra Nevada mountain range in California. Created at his studio in Rome, the painting was exhibited throughout Europe, creating interest in immigration to the United States. Measuring 72 by 120 1⁄8 inches (1.83 by 3.05 m), the painting is a centerpiece of the 19th-century landscape collection at the Smithsonian American Art Museum in Washington, D.C.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
              
              {/* 3rd element */}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="A Visit from the Old Mistress"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={4}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.landscape}
                          image="https://i.imgur.com/2eOJm2x.jpg"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" component="p">Artist: Winslow Homer</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Year: 1876</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Type: Oil Paint</Typography>
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
                      <Typography paragraph>
                      A Visit from the Old Mistress is an 1876 painting by American artist Winslow Homer. It was one of several works that Homer created during a mid-1870s visit to Virginia, where he had served as a war correspondent during the Civil War. Scholars have noted that the painting's composition is taken from Homer's earlier painting Prisoners from the Front, which depicts a group of captive Confederate soldiers defiantly regarding a Union officer. It, along with Homer's other paintings of black southern life from this period, have been praised as an "invaluable record of an important segment of life in Virginia during the Reconstruction 
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            
              {/* 4th element*/}
              <Grid item xs={4}>
                  <Card className={classes.root}>
                    <CardHeader
                      title="Moon Masque"
                    />
                    <Grid item xs={12} container >
                      <Grid item xs={4}>
                        <Box pl={2} pt={2}>
                          <CardMedia
                            className={classes.landscape}
                            image="https://i.imgur.com/1cc0ifw.jpg"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={8}>
                      <CardContent>
                        <Typography variant="h6" color="textPrimary" component="p">Artist: Lois Mailou Jones</Typography>
                        <Typography variant="h6" color="textPrimary" component="p">Year: 1971</Typography>
                        <Typography variant="h6" color="textPrimary" component="p">Type: Oil Paint</Typography>
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
                        <Typography paragraph>
                          At the center of Moon Masque is a papier-mâché replica of a heart-shaped white Kwele mask from Zaire surrounded by masklike profiles and designs drawn from Ethiopian textiles. Though stylized, the faces resemble actual individuals whose profiles are juxtaposed with tears falling from the eyes of the mask. It is tempting to speculate that the mask, representing heritage and tradition, weeps for the situation of contemporary African peoples.
                        </Typography>                    
                      </CardContent>
                    </Collapse>
                  </Card>
                </Grid>
              
              {/* 5th element*/}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="Initiation, Liberia"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={4}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.portrait}
                          image="https://i.imgur.com/uwDLzAh.jpg"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" component="p">Artist: Lois Mailou Jones</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Year: 1983</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Type: Acrylic on Canvas</Typography>
					  
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
                      <Typography paragraph>
                        Jones was especially sensitive to the rights and roles of women. For many years she felt forced to ship rather than deliver her work in person to exhibitions so museums would not reject them because they had been done by a black female artist. In Initiation, Liberia, she interpreted the Sande society initiation ritual. The swath of white paint across the young woman’s eyes indicates her role as an initiate. The mask partly obscures her distinctive personality but combined with the receding profiles at the left of her head, suggests continuity over generations that is implied by the ritual ceremony.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
              
              {/* 6th element*/}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="Washington Sea Eagle"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={4}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.portrait}
                          image="https://i.imgur.com/vDbfESJ.jpg"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" component="p">Artist: John James Audubon</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Year: 1836-1839</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Type: Oil Paint</Typography>
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
                      <Typography paragraph>
                          In 1814 artist and ornithologist John James Audubon first saw the elusive gigantic eagle he called ​“The Bird of Washington” flying along the bluffs of the upper Mississippi river, near the Great Lakes. Audubon documented four more sightings of this bird before finally acquiring a specimen. Larger than any known species of eagle found anywhere in the world, the eagle Audubon shot measured almost four feet tall, with a wingspan over ten feet wide. Due to its impressive size, Audubon immediately named it falco Washingtonii, or Washington’s Eagle, and declared it to be a new species native to North America. Specimens of the ​“Bird of Washington” graced museum collections in Philadelphia, Boston, and London during the 19th century. 
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>

              {/* 7th element*/}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="Can Fire in the Park"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={4}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.landscape}
                          image="https://i.imgur.com/t6glCdt.jpg"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" component="p">Artist: Beauford Delaney</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Year: 1946</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Type: Oil Paint</Typography>
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
                      <Typography paragraph>
                        Can Fire in the Park is as much a swirling vignette of thickly applied paint as it is an image of a place. Delaney developed a vocabulary of signs — streetlights, fire hydrants, manhole covers, and zigzagging fire escapes — that became emblematic riffs on city life. In Can Fire, the bright yellow orbs of streetlamps and the glow of the moon against a cloud-filled night sky and hear from the fire embrace the men with waves of color and light. Delaney struggled financially for most of his life, so this empathetic scene may also represent a night he once spent on a park bench and the amity he shared with other homeless men.   
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>

              {/*8th element*/}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="The Last Race, Mandan O-kee-pa Ceremony"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={4}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.landscape}
                          image="https://i.imgur.com/toOTHu9.jpg"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" component="p">Artist: George Catlin</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Year: 1832</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Type: Oil Paint</Typography>
					  
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
                      <Typography paragraph>
                        The O kee-pa ceremony, which George Catlin witnessed on his travels along the Upper Missouri in 1832, was the centerpiece of the Mandan religious calendar. The annual enactment of the O kee-pa was a four-day ritual that included the painful initiation of the most promising young men of the tribe. Catlin documented the ceremony in a series of paintings that were among the most important of his scenes of Native American rituals. The O kee-pa began with the men sequestered inside a medicine lodge, where the initiates underwent a four-day fast and feats of endurance that required them to be suspended from the roof of the lodge by chords anchored in their chests and shoulders. Outside the lodge, members of the Mandan tribe wearing buffalo robes performed the Bull Dance, to petition the Great Spirit for fertility and abundant bison. The final part of the ceremony, shown here, was called the last race. The men were ushered out of the medicine lodge (“pale and ghastly from abstinence” as Catlin later wrote), and in one last test of their strength and courage, ran (or were dragged by the wrists) around the “Big Canoe,” shown here in the center of the circle.  
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>

              {/*9th element*/}
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title="Old Arrow Maker"
                  />
                  <Grid item xs={12} container >
                    <Grid item xs={4}>
                      <Box pl={2} pt={2}>
                        <CardMedia
                          className={classes.portrait}
                          image="https://i.imgur.com/p53s3jZ.jpg"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" component="p">Artist: Edmonia Lewis</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Year: 1866-1872</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Type: Carved Marble</Typography>
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
                      <Typography paragraph>
                      Edmonia Lewis’s Old Arrow Maker illustrates an excerpt from the Song of Hiawatha by Henry Wadsworth Longfellow, in which the character Minnehaha plaits ​“mats of flags and rushes” while her father makes ​“arrow-heads of jasper.” They both look up to greet Hiawatha, whose presence is implied by the deer he brought as a token of marriage. Lewis often created sculptures of Native Americans, and possibly chose the character of Hiawatha because he was from the Ojibwa tribe, like her mother. The coming together of the Ojibwa and Dakota tribes may refer to Lewis’s hopes for reconciliation between the North and South after the Civil War. In the story, Hiawatha later marries Minnehaha with the wish that “… old feuds might be forgotten/​And old wounds be healed forever.
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

export default Smithsonian;