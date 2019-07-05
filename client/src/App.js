import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";
import {BrowserRouter, Route} from "react-router-dom";
import logo from './assets/images/spacex-logo-black-and-white.png'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from "@material-ui/core/Container";
import {deepOrange} from '@material-ui/core/colors'
import {makeStyles} from '@material-ui/core/styles';
import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: '/graphql'
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[400]
    },
    type: 'dark'
  }
});

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: theme.spacing(8),
      maxWidth: '450px'
    }
  }
});

function App() {

  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <React.Fragment>
          <CssBaseline/>
          <Container>
            <img src={logo} alt={'SpaceX Logo'} className={classes.logo}/>
            <BrowserRouter>
              <Route exact path={'/'} component={Launches}/>
              <Route exact path={'/launch/:flight_number'} component={Launch}/>
            </BrowserRouter>
          </Container>
        </React.Fragment>
      </ApolloProvider>
    </MuiThemeProvider>
  );
}

export default App;
