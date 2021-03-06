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

//ArworkCard class for creating ArtworkCard objects and stylizing them//
const ArtworkCard = props => {

  //Declare Hooks
  const [expanded, setExpanded] = React.useState(false);
  const [BoxShadow, setBoxShadow] = React.useState("0px 0px 0px #000000");

  //Action listener for clicking a card
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //Action Listener for mouse entering the inside a card
  const handleOnMouseEnter = () => {
    setBoxShadow("10px 10px 10px #000000");
  };

  //Action Listener for mouse leaving the inside of a card
  const handleOnMouseLeave = () => {
    setBoxShadow("0px 0px 0px #000000");
  };

  return (
    <Grid item xs={4}>
        <Card
          className={props.classes.root}
          style={{ backgroundColor: "#A3BAFF", boxShadow: BoxShadow, cursor:'pointer' }}
          onClick={handleExpandClick}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          <CardHeader
            title={props.title}
          />
          <Grid item xs={12} container >
            <Grid item xs={0}>
              <Box width={props.media.width} height={props.media.height} pl={0} pt={0} border={3} borderColor={"#fff"} boxShadow={"2px 2px 8px #000"} marginTop={"21px"} marginLeft={"15px"}>
                <CardMedia
                  className={props.media}
                  image={props.imageSrc}
                  title={props.title}
                />
              </Box>
            </Grid>
            <Grid item xs={0}>
              <CardContent>
                <Typography variant="h6" color="textPrimary" component="p">Artist: {props.artist}</Typography>
                <Typography variant="h6" color="textPrimary" component="p">Year: {props.year}</Typography>
                <Typography variant="h6" color="textPrimary" component="p">Type: {props.type}</Typography>
              </CardContent>
            </Grid>
          </Grid>
          <CardActions disableSpacing>
            <IconButton
              className={clsx(props.classes.expand, {
                [props.classes.expandOpen]: expanded,
              })}
              onClick={
                handleExpandClick
              }
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {props.content}
            </CardContent>
          </Collapse>
      </Card>
    </Grid>
  );
}

export default ArtworkCard;
