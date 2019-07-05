import React from 'react';
import gql from 'graphql-tag';
import {Query} from "react-apollo";
import {Typography} from "@material-ui/core";
import TechInfo from "./TechInfo";

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_date_local
            launch_success
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
            links {
                article_link
            }
        }
    }
`;

const Launch = (props) => {
  const flight_number = parseInt(props.match.params.flight_number);
  return (
    <Query query={LAUNCH_QUERY} variables={{flight_number}}>
      {
        ({loading, error, data}) => {
          if (loading) return <Typography variant={'h4'} component={'h4'}>Loading...</Typography>;
          if (error) console.log(error);
          console.log(data);
          const {
            flight_number,
            mission_name,
            launch_year,
            launch_date_local,
            launch_success,
            links
          } = data.launch;
          return (
            <>
              <Typography variant={'h4'} component={'h1'} gutterBottom>
                {mission_name}
              </Typography>
              <TechInfo data={{flight_number, mission_name, launch_year, launch_success, launch_date_local, links}}/>
            </>
          )
        }
      }
    </Query>
  );
};

export default Launch;
