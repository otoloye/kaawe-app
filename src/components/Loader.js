import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}));

export default function Loader({ loading, query }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {loading && (
        <div>
          <CircularProgress />
          <p>Fetching books for {query}</p>
        </div>
      )}
    </div>
  );
}
