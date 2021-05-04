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
import { Grid, Box, withStyles } from "@material-ui/core";

import ArtworkCard from "./ArtworkCard";

const CustomTypography = withStyles({
  root: {
    //color: "#FFFFFF",
    fontFamily: 'Roboto'
  }
})(Typography);

const LouvreArtworkList = props => {

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 645,
      backgroundColor: "#a3baff",
      border: '3px solid',
      borderColor: "#003fff",
      boxShadow: "5px 5px 10px #000000"
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

  const classes = useStyles();

  return (
    <Grid item xs={12} container spacing={3}>

      {/*Element 1*/}
      <ArtworkCard
        classes={classes}
        media={classes.media2}
        title={"Electronic Superhighway"}
        imageSrc={"https://i.imgur.com/j4Uesox.jpg"}
        artist={"Nam June Paik"}
        year={1995}
        type={"Abstract"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
                When Nam June Paik came to the United States in 1964, 
                the interstate highway system was only nine years old, 
                and superhighways offered everyone the freedom to ​“see 
                the U.S.A. in your Chevrolet.” Walking along the entire 
                length of this installation suggests the enormous scale 
                of the nation that confronted the young Korean artist when 
                he arrived. Neon outlines the monitors, recalling the 
                multicolored maps and glowing enticements of motels and 
                restaurants that beckoned Americans to the open road. The 
                different colors remind us that individual states still 
                have distinct identities and cultures, even in today’s 
                information age.
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 2*/}
      <ArtworkCard
        classes={classes}
        media={classes.media2}
        title={"Among the Sierra Nevada Mountains, California"}
        imageSrc={"https://i.imgur.com/LgOBJoB.jpg"}
        artist={"Albert Bierstadt"}
        year={1868}
        type={"Oil Paint"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
                Among the Sierra Nevada, California (also known as Among the 
                Sierra Nevada Mountains) is an 1868 oil-on-canvas painting by 
                German-American artist Albert Bierstadt which depicts a landscape 
                scene of the Sierra Nevada mountain range in California. Created 
                at his studio in Rome, the painting was exhibited throughout Europe, 
                creating interest in immigration to the United States. Measuring 72 
                by 120 1⁄8 inches (1.83 by 3.05 m), the painting is a centerpiece of 
                the 19th-century landscape collection at the Smithsonian American Art 
                Museum in Washington, D.C.
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 3*/}
      <ArtworkCard
        classes={classes}
        media={classes.media2}
        title={"A Visit from the Old Mistress"}
        imageSrc={"https://i.imgur.com/2eOJm2x.jpg"}
        artist={"Winslow Homer"}
        year={1876}
        type={"Oil Paint"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
            A Visit from the Old Mistress is an 1876 painting by American artist Winslow 
            Homer. It was one of several works that Homer created during a mid-1870s visit 
            to Virginia, where he had served as a war correspondent during the Civil War. 
            Scholars have noted that the painting's composition is taken from Homer's earlier 
            painting Prisoners from the Front, which depicts a group of captive Confederate 
            soldiers defiantly regarding a Union officer. It, along with Homer's other paintings 
            of black southern life from this period, have been praised as an "invaluable record 
            of an important segment of life in Virginia during the Reconstruction 
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 4*/}
      <ArtworkCard
        classes={classes}
        media={classes.media2}
        title={"Moon Masque"}
        imageSrc={"https://i.imgur.com/1cc0ifw.jpg"}
        artist={"Lois Mailou Jones"}
        year={"1971"}
        type={"Oil Paint"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
                At the center of Moon Masque is a papier-mâché replica of a heart-shaped white Kwele 
                mask from Zaire surrounded by masklike profiles and designs drawn from Ethiopian 
                textiles. Though stylized, the faces resemble actual individuals whose profiles are 
                juxtaposed with tears falling from the eyes of the mask. It is tempting to speculate 
                that the mask, representing heritage and tradition, weeps for the situation of 
                contemporary African peoples.
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 5*/}
      <ArtworkCard
        classes={classes}
        media={classes.media1}
        title={"Initiation, Liberia"}
        imageSrc={"https://i.imgur.com/uwDLzAh.jpg"}
        artist={"Lois Mailou Jones"}
        year={1983}
        type={"Acrylic on Canvas"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
                Jones was especially sensitive to the rights and roles of women. For many years she 
                felt forced to ship rather than deliver her work in person to exhibitions so museums 
                would not reject them because they had been done by a black female artist. In Initiation, 
                Liberia, she interpreted the Sande society initiation ritual. The swath of white paint 
                across the young woman’s eyes indicates her role as an initiate. The mask partly obscures 
                her distinctive personality but combined with the receding profiles at the left of her head, 
                suggests continuity over generations that is implied by the ritual ceremony.
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 6*/}
      <ArtworkCard
        classes={classes}
        media={classes.media1}
        title={"Washington Sea Eagle"}
        imageSrc={"https://i.imgur.com/vDbfESJ.jpg"}
        artist={"John James Audubon"}
        year={1836-1839}
        type={"Oil Paint"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
                In 1814 artist and ornithologist John James Audubon first saw the elusive gigantic eagle he called 
                ​“The Bird of Washington” flying along the bluffs of the upper Mississippi river, near the Great Lakes. 
                Audubon documented four more sightings of this bird before finally acquiring a specimen. Larger than 
                any known species of eagle found anywhere in the world, the eagle Audubon shot measured almost four feet 
                tall, with a wingspan over ten feet wide. Due to its impressive size, Audubon immediately named it falco 
                Washingtonii, or Washington’s Eagle, and declared it to be a new species native to North America. Specimens 
                of the ​“Bird of Washington” graced museum collections in Philadelphia, Boston, and London during the 19th 
                century. 
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 7*/}
      <ArtworkCard
        classes={classes}
        media={classes.media2}
        title={"Can Fire in the Park"}
        imageSrc={"https://i.imgur.com/t6glCdt.jpg"}
        artist={"Beauford Delaney"}
        year={1946}
        type={"Oil Paint"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
                Can Fire in the Park is as much a swirling vignette of thickly applied paint as it is an image of a place. 
                Delaney developed a vocabulary of signs — streetlights, fire hydrants, manhole covers, and zigzagging fire 
                escapes — that became emblematic riffs on city life. In Can Fire, the bright yellow orbs of streetlamps and 
                the glow of the moon against a cloud-filled night sky and hear from the fire embrace the men with waves of color 
                and light. Delaney struggled financially for most of his life, so this empathetic scene may also represent a 
                night he once spent on a park bench and the amity he shared with other homeless men.   
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 8*/}
      <ArtworkCard
        classes={classes}
        media={classes.media2}
        title={"The Last Race, Mandan O-kee-pa Ceremony"}
        imageSrc={"https://i.imgur.com/toOTHu9.jpg"}
        artist={"George Catlin"}
        year={1832}
        type={"Oil Paint"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
                The O kee-pa ceremony, which George Catlin witnessed on his travels along the Upper Missouri in 1832, was the 
                centerpiece of the Mandan religious calendar. The annual enactment of the O kee-pa was a four-day ritual that 
                included the painful initiation of the most promising young men of the tribe. Catlin documented the ceremony 
                in a series of paintings that were among the most important of his scenes of Native American rituals. The O 
                kee-pa began with the men sequestered inside a medicine lodge, where the initiates underwent a four-day fast 
                and feats of endurance that required them to be suspended from the roof of the lodge by chords anchored in 
                their chests and shoulders. Outside the lodge, members of the Mandan tribe wearing buffalo robes performed the 
                Bull Dance, to petition the Great Spirit for fertility and abundant bison. The final part of the ceremony, 
                shown here, was called the last race. The men were ushered out of the medicine lodge (“pale and ghastly from 
                abstinence” as Catlin later wrote), and in one last test of their strength and courage, ran (or were dragged 
                by the wrists) around the “Big Canoe,” shown here in the center of the circle.  
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 9*/}
      <ArtworkCard
        classes={classes}
        media={classes.media2}
        title={"Old Arrow Maker"}
        imageSrc={"https://i.imgur.com/p53s3jZ.jpg"}
        artist={"Edmonia Lewis"}
        year={1866-1872}
        type={"Carved Marble"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
                Edmonia Lewis’s Old Arrow Maker illustrates an excerpt from the Song of Hiawatha by Henry 
                Wadsworth Longfellow, in which the character Minnehaha plaits ​“mats of flags and rushes” 
                while her father makes ​“arrow-heads of jasper.” They both look up to greet Hiawatha, whose 
                presence is implied by the deer he brought as a token of marriage. Lewis often created 
                sculptures of Native Americans, and possibly chose the character of Hiawatha because he 
                was from the Ojibwa tribe, like her mother. The coming together of the Ojibwa and Dakota 
                tribes may refer to Lewis’s hopes for reconciliation between the North and South after the 
                Civil War. In the story, Hiawatha later marries Minnehaha with the wish that “… old feuds 
                might be forgotten/​And old wounds be healed forever.
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>



    </Grid>

  );
}

export default LouvreArtworkList;
