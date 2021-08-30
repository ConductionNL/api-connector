import React from 'react';
import Grid from "@material-ui/core/Grid";
import StandardCard from "../../components/common/card";

export default function ProductCards({products = null}) {

  return (
    <Grid container spacing={2}>
      {
        products !== null &&
        products.map((post) => (
        <Grid item xs={4}>
          <StandardCard
            smallUpperTitle={post.title}
            title={post.name}
            secondaryTitle="12-04-2020"
            description={post.description}
            link={"/products/"+post.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}
