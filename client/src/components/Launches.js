import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from "react-apollo";
import {Typography} from "@material-ui/core";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }`;

class Launches extends Component {
  render() {
    return (
      <div>
        <Typography variant={'h3'} component={'h3'}>
          Past Launches
        </Typography>
        <MissionKey />
        <Query query={LAUNCHES_QUERY}>
          {
            ({loading, error, data}) => {
              if (loading) return <Typography variant={'h4'} component={'h4'}>Loading...</Typography>;
              if (error) console.log(error);
              return <>
                {data.launches.map((launch) => (
                  <LaunchItem key={launch.flight_number} launch={launch}/>
                ))}
              </>
            }
          }
        </Query>
      </div>
    );
  }
}

export default Launches;