import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";
import {BrowserRouter, Route} from "react-router-dom";
import logo from './assets/images/spacex-logo-black-and-white.png'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from "@material-ui/core/Container";
import {blue} from '@material-ui/core/colors'
import {makeStyles} from '@material-ui/core/styles';
import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: '/graphql'
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[100]
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
      marginBottom: theme.spacing(4),
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: theme.spacing(8),
      width: '100%'
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
            <img src={logo} alt={'SpaceX Logo'} className={classes.logo} />
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
