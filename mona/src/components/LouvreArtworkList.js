import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid, withStyles} from "@material-ui/core";

import ArtworkCard from "./ArtworkCard";

// Specialized Typography with the Roboto font
const CustomTypography = withStyles({
  root: {
    //color: "#FFFFFF", can be used to change color
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
      //boxShadow: "5px 5px 10px #000000"
    },
    // Used as margins for artwork images
    // Standard portrait shape
    media1: {
      height: 150,
      width: 100,
    },
    // Used as margins for artwork images
    // Standard landscape shape
    media2: {
      height: 150,
      width: 187.5,
    },
    // Used as margins for artwork images
    // Larger landscape shape
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
    // Collection of Artwork Items at the Louvre. 
    // Each element is its own card with specialized information
    <Grid item xs={12} container spacing={3}>

      {/*Element 1*/}
      <ArtworkCard
        classes={classes}
        media={classes.media1}
        title={"Mona Lisa"}
        imageSrc={"https://i.imgur.com/lmJy0b5.jpg"}
        artist={"Leonardo Da Vinci"}
        year={1503}
        type={"Oil Painting"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
            This is the most famous portrait in the world. It
            shows Lisa Gherardini, wife of the Florentine silk
            merchant Francesco del Giocondo ??? hence her Italian
            name La Gioconda and her French name La Joconde.
            Painted against a distant landscape, she stares out
            at us with her famously enigmatic smile...but another
            aspect of the painting that makes it so special is
            Leonardo da Vinci???s sfumato technique, based on the
            use of glazes to create a ???smoky??? effect with subtle
            contours and contrasts. Leonardo captured the sitter
            turning towards the viewer in a natural movement that
            brings the painting to life.
            </CustomTypography>
            <CustomTypography paragraph align={"justify"}>
            On 21 August 1911, panic broke out at the Louvre???the
            Mona Lisa had disappeared! The news spread like wildfire
            and generous rewards were promised for her return ??? but
            all in vain. Nothing was heard of the painting for over
            two years. Then one day, Vincenzo Peruggia, a glazier who
            had worked at the Louvre, tried to sell the world???s most
            famous painting to an Italian art dealer...who alerted the
            authorities. So the Mona Lisa was recovered ??? and her fame
            was all the greater.
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 2*/}
      <ArtworkCard
        classes={classes}
        media={classes.media2}
        title={"Liberty Leading the People"}
        imageSrc={"https://i.imgur.com/KEZnomN.jpg"}
        artist={"Eug??ne Delacroix"}
        year={1830}
        type={"Oil on Canvas"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
              Delacroix is best known today for this painting. It was inspired
              by the ???Three Glorious Days??? of the July 1830 Revolution when the
              people of Paris rose up against King Charles X.
            </CustomTypography>
            <CustomTypography paragraph align={"justify"}>
              The Parisians are depicted breaking through a barricade. The
              female figure at the top of the composition ??? part classical
              goddess, part woman of the people ??? urges the crowd forward and
              waves the tricolour flag. She is presented as a symbol of Liberty.
              Delacroix deliberately used the colours blue, white and red in
              combination several times in his painting: the French flag, a
              symbol of the 1789 Revolution then of the Empire, was banned
              when the Monarchy returned to power between 1815 and 1830.
              This famous allegorical/historical painting, often referenced
              in art and advertising, stands as a symbol of liberty and freedom
              fights.
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 3*/}
      <ArtworkCard
        classes={classes}
        media={classes.media1}
        title={"Portrait of Ren?? Descartes"}
        imageSrc={"https://i.imgur.com/CTbtiOB.jpg"}
        artist={"Frans Hals"}
        year={1649}
        type={"Oil on Canvas"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
              A portrait of the 17th-century French philosopher Ren?? Descartes.
              Hals paints him in three-quarters view. Descartes looks at the viewer
              with a confident, thoughtful, and inquisitive expression. The fingers
              of his left hand are visible in the bottom right. He holds his had in this
              hand. Someone has scratched this portrait by Hals after he completed it. There
              are zigzagging scratches in Descartes??? face. Probably this was done by someone
              who did not agree with some of the revolutionary ideas of Descartes.
            </CustomTypography>
            <CustomTypography paragraph align={"justify"}>
              In 1648, while Descartes lives in the Dutch Republic, Queen Christina of Sweden
              invites Ren?? Descartes to Sweden. Descartes accepts the invitation but does not
              move right away to Sweden. One of Descartes??? Dutch friends is the Catholic priest
              Augustijn Bloemaert. He is afraid that he may never see his friend again and invites
              Descartes to Haarlem where he lives.
  ???            Being familiar with Frans Hals, Bloemaert commissions Hals to paint a portrait of
              Descartes. However, Descartes does not have much time to sit, and Hals needs to
              paint the portrait quicker than he usually does. He decides to use a small wooden
              panel of 5.5 x 7.5 inch (14 x 19 cm). It is the smallest painting he created during
              his life that was not on a copper background.
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 4*/}
      <ArtworkCard
        classes={classes}
        media={classes.media2}
        title={"The Entombment of Christ"}
        imageSrc={"https://i.imgur.com/itQJiX6.jpg"}
        artist={"Titian"}
        year={"1523-1526"}
        type={"Oil on Canvas"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
              One of Titian's most significant contributions to painting was his style of brushwork.
              Titian broke from the tradition of meticulously painting every minute detail from life,
              instead using expressive bold strokes and dots of color to create illusions, which
              captured reality.  His technique revolutionized painting in the 16th century.  Another
              thing he was known for were his sophisticated mathematical compositions within his works,
              breaking from earlier more symmetrical paintings.
            </CustomTypography>
            <CustomTypography paragraph align={"justify"}>
              The Entombment of Christ was a work which embodied the new harmony of the Renaissance.
              In this composition the figures are placed with a mathematical precision forming two
              isosceles triangles within the painting.  The curving shapes of several others then
              enhance these triangular shapes. This emphasizes the harmonious proportions that were
              used in ancient Greek art and revived in the Renaissance.  His use of mathematics within
              the work draws the eye of the viewer into the action taking place.
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 5*/}
      <ArtworkCard
        classes={classes}
        media={classes.media2}
        title={"Raft of Medusa"}
        imageSrc={"https://i.imgur.com/a5xwdnB.jpg"}
        artist={"Th??odore G??ricault"}
        year={1819}
        type={"Oil on Canvas"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
              The French Revolution greatly stimulated interest in the depiction of contemporary
              events, but, after the fall of Napoleon in 1815, few artists were disposed to depict
              such subjects. G??ricault was something of an exception, but he was separated from his
              immediate predecessors both by temperament and by the sincerity of his approach.
              Individual suffering rather than collective drama is vividly portrayed in The Raft of
              the Medusa. The large painting (13.75 ?? 23.5 feet [4.91 ?? 7.16 metres]) depicts the aftermath
              of the 1816 wreck of the French Royal Navy frigate the Medusa, which ran aground off the coast
              of Senegal. Because of a shortage of lifeboats, some 150 survivors embarked on a raft and were
              decimated by starvation during a 13-day ordeal, which descended into murder and cannibalism.
              Only a handful remained when they were rescued at sea.
            </CustomTypography>
            <CustomTypography paragraph align={"justify"}>
              The shipwreck had scandalous political implications in France???the incompetent captain,
              who had gained the position because of connections to the Bourbon Restoration government,
              fought to save himself and senior officers while leaving the lower ranks to die???and so
              G??ricault???s picture of the raft and its inhabitants was greeted with hostility by the
              government. The work???s macabre realism, its treatment of the raft incident as epic-heroic
              tragedy, and the virtuosity of its drawing and tonalities combine to give the painting great
              dignity and carry it far beyond mere contemporary reportage. The portrayal of the dead and dying,
              developed within a dramatic, carefully constructed composition, addressed a contemporary subject
              with remarkable and unprecedented passion.
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 6*/}
      <ArtworkCard
        classes={classes}
        media={classes.media2}
        title={"Coronation of Napoleon"}
        imageSrc={"https://i.imgur.com/n07Knl0.jpg"}
        artist={"Jacques-Louis David"}
        year={1805}
        type={"Oil Painting"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
              ???The Coronation of Napoleon??? by Jacques-Louis David shows all eyes turned towards Napoleon and
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
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 7*/}
      <ArtworkCard
        classes={classes}
        media={classes.media1}
        title={"The Penitent Saint Jerome"}
        imageSrc={"https://i.imgur.com/3EZFTOS.jpg"}
        artist={"Titian"}
        year={1575}
        type={"Oil on Canvas"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
              Titian depicted Saint Jerome on various occasions, one of the earliest examples of which is now
              in the Mus??e du Louvre, Paris. In that horizontal composition of around 1530 the kneeling saint
              occupies the centre of the canvas in a clearing in a leafy landscape. Titian conceives the present
              version as a nocturnal scene in which the moon is hidden behind some thick tree trunks but still
              illuminates the sky with a great glow. The landscape that envelops the saint has been considered
              one of the artist???s finest and most poetic. Another version now in the Brera in Milan of around
              the mid-1550s was originally painted for Santa Maria Nuova in Venice and is considered the prototype
              for the present painting. It now has an arched top that was added in the 18th century. In the Brera
              version Titian included symbols that refer to meditation and the ascetic life such as the skull,
              hourglass, books and ivy twining over the rocks that form the saint???s altar.
            </CustomTypography>
            <CustomTypography paragraph align={"justify"}>
              In the present version, executed twenty years after the Brera composition, Titian omitted these
              elements and here focuses on the figure, which takes on a more important physical presence in the
              centre of the canvas. Jerome is enveloped in a wild landscape to which the colour range and
              brushstroke give a sense of unity. The artist emphasised the idea of penitence through the saint???s
              hands and gaze. Thus he holds a stone in his right hand for beating his breast, while his left hand
              rests on the book on which he meditates as he looks towards the crucifix supported on a long branch.
              At Jerome???s feet is a rustic flail made of branches leaning against the rock by his left knee, while
              the lion occupies the lower right corner, its head lost in the background. The colour range is narrow,
              almost monochrome, with highly subtle modulations of earth tones. Titian used these modulations to create
              a freely-painted area of landscape through which the bare canvas can be seen. The only strong patch of
              colour is in Jerome???s red tunic and in a small area of red in the sky. The use of red, which is
              particularly rapidly painted on the saint???s left leg, functions as another way of emphasising the principal
              motif of the composition.
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 8*/}
      <ArtworkCard
        classes={classes}
        media={classes.media2}
        title={"A Calm Sea"}
        imageSrc={"https://i.imgur.com/2RqbN5p.jpg"}
        artist={"Claude-Joseph Vernet"}
        year={1748}
        type={"Oil on Canvas"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
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
            </CustomTypography>
            <CustomTypography paragraph align={"justify"}>
              Vernet???s repertoire included views of picturesque locations, topographical views
              and imaginary landscapes. It was however, his marine views that were most appreciated
              and which gained him an international reputation. These views were particularly
              inspired by the Italian coastline and were constructed with a series of elements
              that would make them highly prized by collectors of the day. One of Vernet???s
              specialities was the production of pairs of paintings depicting a calm and a stormy
              sea, as well as series that depicted the coast at different times of day and under
              different lighting conditions. Vernet???s coastal paintings reflect his study of the
              work of Claude Lorraine although in many ways they are considerably less idealised.
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>

      {/*Element 9*/}
      <ArtworkCard
        classes={classes}
        media={classes.media2}
        title={"The Wedding Feast at Cana"}
        imageSrc={"https://i.imgur.com/iVRyl3M.jpg"}
        artist={"Paolo Veronese"}
        year={1563}
        type={"Oil Painting"}
        content={
          <div>
            <CustomTypography paragraph align={"justify"}>
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
            </CustomTypography>
            <CustomTypography paragraph align={"justify"}>
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
            </CustomTypography>
          </div>
        }
      >
      </ArtworkCard>



    </Grid>

  );
}

export default LouvreArtworkList;
