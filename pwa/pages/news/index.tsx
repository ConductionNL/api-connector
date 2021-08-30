import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import NewsTable from "../../components/news/table";
import NewsCard from "../../components/news/card";

function Index() {

  const title = 'Nieuws';

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container >
        <Hidden smDown>
          <Grid item md={2}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={10}>
          <PageHeader title={title} />
          <Box paddingTop={2} paddingBottom={2}>
            <p>Omschrijving van nieuws</p>
          </Box>

          <NewsCard/>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
