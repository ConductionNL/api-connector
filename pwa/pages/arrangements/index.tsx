import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import React from "react";
import Footer from "../../components/common/footer";
import Head from "next/head";
import Header from "../../components/common/header";
import PageHeader from "../../components/common/pageheader";
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import ActionMenu from "../../components/common/actionmenu";
import ArrangementsCards from "../../components/arrangements/cards";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  marginTop: {
    marginTop: 20,
  },
});

function Index() {
  const classes = useStyles();
  const title = 'Regelingen';

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={2}>
            <ActionMenu/>
          </Grid>
        </Hidden>

        <Grid item xs={12} md={10} spacing={6}>
          <PageHeader title={title}/>

          <Box paddingTop={2} paddingBottom={2}>
            <p>Beschrijving over regelingen</p>
          </Box>

          <ArrangementsCards/>

        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
