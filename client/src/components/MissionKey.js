import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  detailInfo: {
    display: 'inline-block',
    padding: '3px 10px',
    verticalAlign: 'middle'
  },
  success: {
    backgroundColor: 'green'
  },
  failed: {
    backgroundColor: 'red'
  }
}));

const MissionKey = () => {
  const classes = useStyles();
  return (
    <>
      <p>
        <span className={`${classes.detailInfo} ${classes.success}`}/> SUCCESS
      </p>
      <p>
        <span className={`${classes.detailInfo} ${classes.failed}`}/> FAIL
      </p>
    </>
  );
};

export default MissionKey;
