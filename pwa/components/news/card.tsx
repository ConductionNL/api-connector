import React from 'react';
import Grid from "@material-ui/core/Grid";
import StandardCard from "../../components/common/card";

export default function NewsCards({news = null}) {

  return (
    <Grid container spacing={2}>
      {
        news !== null &&
        news.map((post) => (
        <Grid item xs={4}>
          <StandardCard
            smallUpperTitle={post.title}
            title={post.name}
            secondaryTitle="12-04-2020"
            description={post.description}
            link={"/news/"+post.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}
