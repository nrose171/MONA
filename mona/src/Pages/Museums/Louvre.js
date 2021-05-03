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

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { MapContainer, TileLayer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { Button } from "@material-ui/core";
import { borders } from "@material-ui/system";

import ArtworkMarkerList from "../../components/ArtworkMarkerList.js"
import RoomLabelList from "../../components/RoomLabelList.js"

import '../Pages.css';

var center = [-34.43537, 150.45502];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    backgroundColor: "#a3baff",
    border: '2px solid',
    borderColor: "#668cff"
  },
  media: {
    height: 150,
    width: 100,
  },
  media1: {
    height: 150,
    width: 100,
  },
  media2: {
    height: 150,
    width: 187.5,
  },
  media3: {
    height: 150,
    width: 200,
  },
  media4: {
    height: 150,
    width: 100,
  },
  media5: {
    height: 150,
    width: 100,
  },
  media6: {
    height: 150,
    width: 100,
  },
  media7: {
    height: 150,
    width: 100,
  },
  media8: {
    height: 150,
    width: 100,
  },
  media9: {
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

function Louvre() {
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
      <div>
            <br/>
            <h1>lOUVRE MUSEUM</h1>
            <div
              style = {{
                display: "flex", justifyContent: "center", alignItems: "center"
              }}
            >
              <Box
                border={2}
                style = {{
                  display: "flex", justifyContent: "center", alignItems: "center", width: "70vw"
                }}
              >
                <MapContainer
                  center={center}
                  zoom={10}
                  scrollWheelZoom={true}
                  zoomDelta={0.8}
                  maxZoom={12}
                  minZoom={9}
                >

                  <ImageOverlay
                    url="https://i.imgur.com/i7A6p9R.jpg"
                    bounds={[center, [center[0]-0.3, center[1]-0.3]]}
                  />

                  <ArtworkMarkerList center={center}></ArtworkMarkerList>

                  <RoomLabelList center={center}></RoomLabelList>

                </MapContainer>
              </Box>
            </div>
        </div>

        <br/><br/>
        <center>
          <h1 style={{marginTop: '0vh'}}>Featured Artwork</h1>
        </center>
        <Grid container spacing={1} direction="column">
          <Grid item xs={12} container spacing={3}>

            {/* 1st element */}
            <Grid item xs={4}>
              <Card className={classes.root} style={{backgroundColor: "#8da6f0"}}>
                  <CardHeader
                    title="Mona Lisa"
                  />
                  <Grid item xs={12} container >
                  <Grid item xs={3}>
                    <Box pl={2} pt={2}>
                      <CardMedia
                        className={classes.media1}
                        image="https://i.imgur.com/lmJy0b5.jpg"
                        title="Mona Lisa"
                      />
                    </Box>
                  </Grid>
                    <Grid item xs={7}>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" component="p">Artist: Leonardo Da Vinci</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Year: 1503</Typography>
                      <Typography variant="h6" color="textPrimary" component="p">Type: Oil Painting</Typography>
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
                      <Typography paragraph >
                        This is the most famous portrait in the world. It
                        shows Lisa Gherardini, wife of the Florentine silk
                        merchant Francesco del Giocondo – hence her Italian
                        name La Gioconda and her French name La Joconde.
                        Painted against a distant landscape, she stares out
                        at us with her famously enigmatic smile...but another
                        aspect of the painting that makes it so special is
                        Leonardo da Vinci’s sfumato technique, based on the
                        use of glazes to create a ‘smoky’ effect with subtle
                        contours and contrasts. Leonardo captured the sitter
                        turning towards the viewer in a natural movement that
                        brings the painting to life.
                      </Typography>
                      <Typography paragraph>
                      On 21 August 1911, panic broke out at the Louvre…the
                      Mona Lisa had disappeared! The news spread like wildfire
                      and generous rewards were promised for her return – but
                      all in vain. Nothing was heard of the painting for over
                      two years. Then one day, Vincenzo Peruggia, a glazier who
                      had worked at the Louvre, tried to sell the world’s most
                      famous painting to an Italian art dealer...who alerted the
                      authorities. So the Mona Lisa was recovered – and her fame
                      was all the greater.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>

            {/* 2nd element */}
            <Grid item xs={4}>
              <Card className={classes.root} style={{backgroundColor: "#8da6f0"}}>
                <CardHeader
                  title="Liberty Leading the People"
                />
                <Grid item xs={12} color='85a5ff' container >
                  <Grid item xs={5}>
                    <Box pl={2} pt={2}>
                      <CardMedia
                        color='85a5ff'
                        className={classes.media2}
                        image="https://i.imgur.com/KEZnomN.jpg"
                        title="Liberty Leading the People"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={7}>
                  <CardContent>
                    <Typography variant="h6" color="textPrimary" component="p">Artist: Eugène Delacroix</Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Year: 1830</Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Type: Oil on Canvas</Typography>
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
                  <Typography>
                    Delacroix is best known today for this painting. It was inspired
                    by the ‘Three Glorious Days’ of the July 1830 Revolution when the
                    people of Paris rose up against King Charles X.
                    </Typography>
                    <Typography>
                      The Parisians are depicted breaking through a barricade. The
                      female figure at the top of the composition – part classical
                      goddess, part woman of the people – urges the crowd forward and
                      waves the tricolour flag. She is presented as a symbol of Liberty.
                      Delacroix deliberately used the colours blue, white and red in
                      combination several times in his painting: the French flag, a
                      symbol of the 1789 Revolution then of the Empire, was banned
                      when the Monarchy returned to power between 1815 and 1830.
                      This famous allegorical/historical painting, often referenced
                      in art and advertising, stands as a symbol of liberty and freedom
                      fights.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            {/* 3rd element */}
            <Grid item xs={4}>
              <Card className={classes.root} style={{backgroundColor: "#8da6f0"}}>
                <CardHeader
                  title="Portrait of René Descartes"
                />
                <Grid item xs={12} container >
                  <Grid item xs={3}>
                    <Box pl={2} pt={2}>
                      <CardMedia
                        className={classes.media1}
                        image="https://i.imgur.com/CTbtiOB.jpg"
                        title="Portrait of René Descartes"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={8}>
                  <CardContent>
                    <Typography variant="h6" color="textPrimary" component="p">Artist: Frans Hals</Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Year: 1649</Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Type: Oil on Canvas</Typography>
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
                      A portrait of the 17th-century French philosopher René Descartes.
                      Hals paints him in three-quarters view. Descartes looks at the viewer
                      with a confident, thoughtful, and inquisitive expression. The fingers
                      of his left hand are visible in the bottom right. He holds his had in this
                      hand. Someone has scratched this portrait by Hals after he completed it. There
                      are zigzagging scratches in Descartes’ face. Probably this was done by someone
                      who did not agree with some of the revolutionary ideas of Descartes.
                    </Typography>
                    <Typography paragraph>
                      In 1648, while Descartes lives in the Dutch Republic, Queen Christina of Sweden
                      invites René Descartes to Sweden. Descartes accepts the invitation but does not
                      move right away to Sweden. One of Descartes’ Dutch friends is the Catholic priest
                      Augustijn Bloemaert. He is afraid that he may never see his friend again and invites
                      Descartes to Haarlem where he lives.
​                      Being familiar with Frans Hals, Bloemaert commissions Hals to paint a portrait of
                      Descartes. However, Descartes does not have much time to sit, and Hals needs to
                      paint the portrait quicker than he usually does. He decides to use a small wooden
                      panel of 5.5 x 7.5 inch (14 x 19 cm). It is the smallest painting he created during
                      his life that was not on a copper background.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            {/* 4th element*/}
            <Grid item xs={4}>
              <Card className={classes.root} style={{backgroundColor: "#8da6f0"}}>
                <CardHeader
                  title="The Entombment of Christ"
                />
                <Grid item xs={12} container >
                  <Grid item xs={5}>
                    <Box pl={2} pt={2}>
                      <CardMedia
                        className={classes.media2}
                        image="https://i.imgur.com/itQJiX6.jpg"
                        title="The Entombment of Christ"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={5}>
                  <CardContent>
                    <Typography variant="h6" color="textPrimary" component="p">Artist: Titian</Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Year: 1523-1526 </Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Type: Oil on Canvas</Typography>
                  </CardContent>
                  </Grid>
                </Grid>
                <CardActions disableSpacing>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded3,
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
                    One of Titian's most significant contributions to painting was his style of brushwork.
                    Titian broke from the tradition of meticulously painting every minute detail from life,
                    instead using expressive bold strokes and dots of color to create illusions, which
                    captured reality.  His technique revolutionized painting in the 16th century.  Another
                    thing he was known for were his sophisticated mathematical compositions within his works,
                    breaking from earlier more symmetrical paintings.
                    </Typography>
                    <Typography paragraph>
                    The Entombment of Christ was a work which embodied the new harmony of the Renaissance.
                    In this composition the figures are placed with a mathematical precision forming two
                    isosceles triangles within the painting.  The curving shapes of several others then
                    enhance these triangular shapes. This emphasizes the harmonious proportions that were
                    used in ancient Greek art and revived in the Renaissance.  His use of mathematics within
                    the work draws the eye of the viewer into the action taking place.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            {/* 5th element*/}
            <Grid item xs={4}>
              <Card className={classes.root}>
                <CardHeader
                  title="Raft of Medusa"
                />
                <Grid item xs={12} container >
                  <Grid item xs={5}>
                    <Box pl={2} pt={2}>
                      <CardMedia
                        className={classes.media2}
                        image="https://i.imgur.com/a5xwdnB.jpg"
                        title="Raft of Medusa"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={7}>
                  <CardContent>
                    <Typography variant="h6" color="textPrimary" component="p">Artist: Théodore Géricault</Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Year: 1819 </Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Type: Oil on Canvas</Typography>
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
                      The French Revolution greatly stimulated interest in the depiction of contemporary
                      events, but, after the fall of Napoleon in 1815, few artists were disposed to depict
                      such subjects. Géricault was something of an exception, but he was separated from his
                      immediate predecessors both by temperament and by the sincerity of his approach.
                      Individual suffering rather than collective drama is vividly portrayed in The Raft of
                      the Medusa. The large painting (13.75 × 23.5 feet [4.91 × 7.16 metres]) depicts the aftermath
                      of the 1816 wreck of the French Royal Navy frigate the Medusa, which ran aground off the coast
                      of Senegal. Because of a shortage of lifeboats, some 150 survivors embarked on a raft and were
                      decimated by starvation during a 13-day ordeal, which descended into murder and cannibalism.
                      Only a handful remained when they were rescued at sea.
                    </Typography>
                    <Typography paragraph>
                      The shipwreck had scandalous political implications in France—the incompetent captain,
                      who had gained the position because of connections to the Bourbon Restoration government,
                      fought to save himself and senior officers while leaving the lower ranks to die—and so
                      Géricault’s picture of the raft and its inhabitants was greeted with hostility by the
                      government. The work’s macabre realism, its treatment of the raft incident as epic-heroic
                      tragedy, and the virtuosity of its drawing and tonalities combine to give the painting great
                      dignity and carry it far beyond mere contemporary reportage. The portrayal of the dead and dying,
                      developed within a dramatic, carefully constructed composition, addressed a contemporary subject
                      with remarkable and unprecedented passion.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            {/* 6th element*/}
            <Grid item xs={4}>
              <Card className={classes.root}>
                <CardHeader
                  title="Coronation of Napoleon"
                />
                <Grid item xs={12} container >
                  <Grid item xs={5}>
                    <Box pl={2} pt={2}>
                      <CardMedia
                        className={classes.media3}
                        image="https://i.imgur.com/n07Knl0.jpg"
                        title="Coronation of Napoleon"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={7}>
                  <CardContent>
                    <Typography variant="h6" color="textPrimary" component="p">Artist: Jacques-Louis David</Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Year: 1805 </Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Type: Oil Painting</Typography>
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
                      “The Coronation of Napoleon” by Jacques-Louis David shows all eyes turned towards Napoleon and
                      the crown. He is the central subject of this composition. Napoleon is standing, dressed in coronation
                      robes similar to those of Roman emperors. The coronation of Napoleon as Emperor that took place on Sunday,
                      December 2, 1804, was a masterful act of propaganda. This painting, which is a large imposing painting at
                      almost 10 meters (33 ft) wide by 6 meters (20 ft) tall, was part of the propaganda effort.
                      Napoleon wanted to establish the legitimacy of his imperial reign and new nobility. With this objective,
                      he designed a ceremony, unlike that of any other in the history of coronations.
                      Napoleon was a ceremony created by Napoleon and held in the magnificent cathedral of Notre Dame de Paris in
                      the presence of Pope Pius VII. The Pope initially did not want to travel to Paris without an excellent religious
                      reason. However, in order not to jeopardize the new balance between Church and State, the Pope accepted the request
                      to attend the coronation. However, at the moment, the Pope was to crown Napoleon. The Emporer took the crown from
                      the Pope and put it on his head. This act was seen as a public humiliation of the Pope.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            {/* 7th element*/}
            <Grid item xs={4}>
              <Card className={classes.root}>
                <CardHeader
                  title="The Penitent Saint Jerome"
                />
                <Grid item xs={12} container >
                  <Grid item xs={3}>
                    <Box pl={2} pt={2}>
                      <CardMedia
                        className={classes.media1}
                        image="https://i.imgur.com/3EZFTOS.jpg"
                        title="The Penitent Saint Jerome"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={8}>
                  <CardContent>
                    <Typography variant="h6" color="textPrimary" component="p">Artist: Titian</Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Year: 1575 </Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Type: Oil on Canvas</Typography>
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
                      Titian depicted Saint Jerome on various occasions, one of the earliest examples of which is now
                      in the Musée du Louvre, Paris. In that horizontal composition of around 1530 the kneeling saint
                      occupies the centre of the canvas in a clearing in a leafy landscape. Titian conceives the present
                      version as a nocturnal scene in which the moon is hidden behind some thick tree trunks but still
                      illuminates the sky with a great glow. The landscape that envelops the saint has been considered
                      one of the artist’s finest and most poetic. Another version now in the Brera in Milan of around
                      the mid-1550s was originally painted for Santa Maria Nuova in Venice and is considered the prototype
                      for the present painting. It now has an arched top that was added in the 18th century. In the Brera
                      version Titian included symbols that refer to meditation and the ascetic life such as the skull,
                      hourglass, books and ivy twining over the rocks that form the saint’s altar.
                    </Typography>
                    <Typography paragraph>
                      In the present version, executed twenty years after the Brera composition, Titian omitted these
                      elements and here focuses on the figure, which takes on a more important physical presence in the
                      centre of the canvas. Jerome is enveloped in a wild landscape to which the colour range and
                      brushstroke give a sense of unity. The artist emphasised the idea of penitence through the saint’s
                      hands and gaze. Thus he holds a stone in his right hand for beating his breast, while his left hand
                      rests on the book on which he meditates as he looks towards the crucifix supported on a long branch.
                      At Jerome’s feet is a rustic flail made of branches leaning against the rock by his left knee, while
                      the lion occupies the lower right corner, its head lost in the background. The colour range is narrow,
                      almost monochrome, with highly subtle modulations of earth tones. Titian used these modulations to create
                      a freely-painted area of landscape through which the bare canvas can be seen. The only strong patch of
                      colour is in Jerome’s red tunic and in a small area of red in the sky. The use of red, which is
                      particularly rapidly painted on the saint’s left leg, functions as another way of emphasising the principal
                      motif of the composition.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            {/*8th element*/}
            <Grid item xs={4}>
              <Card className={classes.root}>
                <CardHeader
                  title="A Calm Sea"
                />
                <Grid item xs={12} container >
                  <Grid item xs={5}>
                    <Box pl={2} pt={2}>
                      <CardMedia
                        className={classes.media2}
                        image="https://i.imgur.com/2RqbN5p.jpg"
                        title="A Calm Sea"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={7}>
                  <CardContent>
                    <Typography variant="h6" color="textPrimary" component="p">Artist: Claude-Joseph Vernet</Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Year: 1748 </Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Type: Oil on Canvas</Typography>
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
                      Claude-Joseph Vernet was famous for his marine views and was the French artist
                      most admired in this sub-genre around the mid-18th century. Vernet first trained
                      with his father, a local painter in Avignon, then continued his studies with
                      Philippe Suavan and later in Aix-en-Provence with Jacques Viali whose output
                      included landscapes and marine views. Sponsored by the Marquis de Caumont, in
                      1734 Vernet travelled to Rome where he lived for almost twenty years. There he
                      made contact with the French Academy and completed his studies with Adrien Manglard,
                      an artist from Lyon. In addition he studied Claude, Salvator Rosa and Gaspar Dughet,
                      whose works contributed to his choice of specialisation. Vernet achieved his first
                      successes in the 1740s, producing paintings for aristocratic visitors making the
                      Grand Tour, most of whom were French and English. During that period he began to
                      exhibit regularly in the Salon where he first participated in 1746 and was praised
                      by Diderot. He became a member of the French Academy in Paris in 1753 and sent works
                      to the Salon from Italy, as a result of which his fame extended to his own country.
                      In 1751 the Marquis de Marigny tried to pursuade Vernet to return to France, albeit
                      without success at that date.
                    </Typography>
                    <Typography paragraph>
                      Vernet’s repertoire included views of picturesque locations, topographical views
                      and imaginary landscapes. It was however, his marine views that were most appreciated
                      and which gained him an international reputation. These views were particularly
                      inspired by the Italian coastline and were constructed with a series of elements
                      that would make them highly prized by collectors of the day. One of Vernet’s
                      specialities was the production of pairs of paintings depicting a calm and a stormy
                      sea, as well as series that depicted the coast at different times of day and under
                      different lighting conditions. Vernet’s coastal paintings reflect his study of the
                      work of Claude Lorraine although in many ways they are considerably less idealised.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            {/*9th element*/}
            <Grid item xs={4}>
              <Card className={classes.root}>
                <CardHeader
                  title="The Wedding Feast at Cana"
                />
                <Grid item xs={12} container >
                  <Grid item xs={5}>
                    <Box pl={2} pt={2}>
                      <CardMedia
                        className={classes.media2}
                        image="https://i.imgur.com/iVRyl3M.jpg"
                        title="The Wedding Feast at Cana"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={7}>
                  <CardContent>
                    <Typography variant="h6" color="textPrimary" component="p">Artist: Paolo Veronese</Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Year: 1563 </Typography>
                    <Typography variant="h6" color="textPrimary" component="p">Type: Oil Painting</Typography>
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
                      Ranked among the leading Old Masters of Mannerist painting, Paolo Veronese is noted in
                      particular for his enormous banquet-scenes, such as: Supper in Emmaus (1560), Wedding
                      Feast at Cana (1563), Feast in the House of Simon (1570-2, Sabauda Gallery, Turin),
                      Supper in the House of Gregory the Great (1572, Monte Berico, Vicenza), and Feast in
                      the House of Levi (1573). These large decorative paintings - modern versions of the old
                      "telero" or "scuola" paintings - gave Veronese ample opportunity to demonstrate his virtuoso
                      figure painting and use of colour and established him as one of the great contributors to
                      Venetian painting of the 16th century. During his mature period he managed to combine the
                      colourism of Titian with the monumental forms used in Rome, to create a sumptuous style of
                      painting decorated with dazzling costumes and colour. See also: Titian and Venetian colour
                      painting (1500-76). The Wedding at Cana is his great masterpiece of Biblical art and arguably
                      one of the most 'modern' religious paintings of the cinquecento. The huge work (roughly 22 X
                      32 feet) was commissioned in 1562 for the refectory, designed by Andrea Palladio (1508-80),
                      in the Benedictine monastery on the island of San Giorgio Maggiore, Venice. The artist's fee
                      was 324 ducats, plus board and lodging plus a barrel of wine. Helped by his brother, Benedetto
                      Caliari (1538-98), Veronese completed the huge painting in fifteen months.
                    </Typography>
                    <Typography paragraph>
                      The theme of the painting is based on the Bible story told in St John's Gospel (John 2:1-11),
                      concerning a marriage held at Cana, Galilee, attended by Mary, Jesus and his disciples. Towards
                      the end of the wedding feast, as the wine begins to run out, Jesus asks that stone jars be filled
                      with water which he then turns into wine. This episode - the first of the seven signs in the Gospel
                      of John which attests to Jesus's divine status - is a precursor of the Eucharist. It was a popular
                      theme during the Italian Renaissance and during the Mannerist era: famous versions of the subject
                      include: "Marriage at Cana" (1305, Scrovegni Chapel) by Giotto; "Wedding at Cana" (1561, Basilica
                      di Santa Maria della Salute) by Tintoretto; "Marriage at Cana" (1566, Museum of Fine Arts, Budapest)
                      by Giorgio Vasari. However, unlike most conventional interpretations, Veronese transposed the Bible
                      story to the more modern setting of a typically extravagant Venetian wedding.
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

export default Louvre;
