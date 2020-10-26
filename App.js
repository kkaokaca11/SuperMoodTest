import React, {useEffect, useState} from 'react';
import './App.css';
import Velib from './Velib';

//for the grid
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
//end grid

const App = () => {

  //place for the state for the array of velibs
  const [velibs, setVelibs] = useState([]);

  const iframe = <iframe
  width="600"
  height="450"
  frameBorder="0" style="border:0"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBKMu9iVDlu5kEXNkATG5XX8_07yQC_7qY&q=Space+Needle,Seattle+WA"
  allowFullScreen>
  </iframe>;


  //function for mounting
  useEffect(() => {
    getVelibs();
  }, []);

  const getVelibs = async () => {
    const response = await fetch ('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&rows=20&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes');
    const data = await response.json();
    setVelibs(data.records);
    console.log(data.records);
  }

  //for the grid
  const classes = useStyles();
  //

  return (
    <div className="App">
      <form className="table-form">

      {/* <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>station name</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>24/50</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <a href="">
              details
            </a>
          </Paper>
        </Grid>

      </Grid>
      </div> */}


        {/* <div className="container">
          <div className="row">
            <div className="col-sm-4">place name</div>
            <div className="col-sm-4">24/50</div>
            <a className="col-sm-4" href=''>details</a>
          </div>
        </div> */}

      </form>


      {velibs.slice(0,20).map(velib=>(
        <Velib

        station = {velib.fields.name}
        numAvailable = {velib.fields.numbikesavailable}
        numTotal = {velib.fields.capacity}
        
        
        />
      ))}


    </div>
  );
}

export default App;
