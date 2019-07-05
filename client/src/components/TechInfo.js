import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  card: {
    width: 400,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TechInfo = (props) => {
  const classes = useStyles();
  const {flight_number, launch_success, launch_date_local, links} = props.data;
  return (
    <div>
      <Card className={classes.card} elevation={2}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Launched: {launch_date_local}
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Technical Data
          </Typography>
          <Typography color="textSecondary">
            Launch: {launch_success ? 'SUCCESS': 'FAILED'}
          </Typography>
          <Typography variant="body2" component="p">
            Flight Number: {flight_number}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={links.article_link} target={'_blank'} rel={'noopener'}>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default TechInfo;
