import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Moment from "react-moment";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  paper: {
    borderBottom: '2px solid transparent',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2)
  },
  failed: {
    borderColor: 'red'
  },
  success: {
    borderColor: 'green'
  }
}));

const CollisionLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/getting-started/installation/" {...props} />
));

const LaunchItem = (props) => {
  const classes = useStyles();
  const {flight_number, mission_name, launch_date_local, launch_success} = props.launch;

  return (
    <Paper className={`${classes.paper} ${launch_success && classes.success} ${!launch_success && classes.failed}`} elevation={3}>
      <Grid container>
        <Grid item xs={9}>
          <Typography variant="h5" component="h6">
            {mission_name}
          </Typography>
          <Typography variant="body1" component="p">
            <Moment format={'YYYY-MM-DD HH:mm'}>
              {launch_date_local}
            </Moment>
          </Typography>
          <Typography variant="body1" component="span">
            Flight Number: {flight_number}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button color={'primary'} component={CollisionLink} to={`/launch/${flight_number}`}>
            Open Launch
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LaunchItem;
