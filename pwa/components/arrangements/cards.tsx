import React from 'react';
import Grid from "@material-ui/core/Grid";
import StandardCard from "../../components/common/card";

let posts = [
  {
    name: 'Een regeling',
    description: 'Lorem ipsum'
  },
  {
    name: 'Een regeling 2',
    description: 'Lorem ipsum'
  },
  {
    name: 'Een regeling 3',
    description: 'Lorem ipsum'
  }
]

export default function ArrangementsCards() {

  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={4}>
          <StandardCard
            smallUpperTitle={"Woord van de dag"}
            title={post.name}
            secondaryTitle="12-04-2020"
            description={post.description}
            link="/arrangements/1"
          />
        </Grid>
      ))}
    </Grid>
  );
}
