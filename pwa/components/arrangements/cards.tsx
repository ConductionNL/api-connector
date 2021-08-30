import React from 'react';
import Grid from "@material-ui/core/Grid";
import StandardCard from "../../components/common/card";

let posts = [
  {
    id: 1,
    name: 'Parkeervergunning Amsterdam',
    description: 'Lorem ipsum',
    status: 'Hier heeft u recht op'
  },
  {
    id: 2,
    name: 'Recht om zonnepanelen te plaatsen',
    description: 'Lorem ipsum',
    status: 'Recht nog niet bevestigd'
  },
  {
    id: 3,
    name: 'Parkeervergunning Utrecht',
    description: 'Lorem ipsum',
    status: 'Hier heeft u geen recht op'
  }
]

export default function ArrangementsCards() {

  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={4}>
          <StandardCard
            title={post.name}
            secondaryTitle={"Status: " + post.status}
            description={post.description}
            link={"/arrangements/" + post.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}
