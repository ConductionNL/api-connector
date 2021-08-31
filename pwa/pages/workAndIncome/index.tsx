import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import React from "react";
import Footer from "../../components/common/footer";
import Head from "next/head";
import Header from "../../components/common/header";
import PageHeader from "../../components/common/pageheader";
import Typography from '@material-ui/core/Typography';

import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import ActionMenu from "../../components/common/actionmenu";
import ArrangementsCards from "../../components/arrangements/cards";
import {makeStyles} from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import {Link} from "@material-ui/core";
import PaperCard from "../../components/common/paperCard";

const useStyles = makeStyles({
  marginTop: {
    marginTop: 20,
  },
});

function Index() {
  const classes = useStyles();
  const title = 'Werk en Inkomen';

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu/>
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title}/>
          <Box paddingTop={3} paddingBottom={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Werk"
                  secondaryTitle="Bron: uwv"
                  description="todo"
                  link="https://www.uwv.nl/particulieren/index.aspx"
                  linkText="Bekijk werk"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Inkomen"
                  description="todo"
                  link="/income/1"
                  linkText="Bekijk inkomen"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Regelingen"
                  description="Een regeling is een gemeentelijk product waar je recht op kan hebben of recht voor kunt aanvragen bij de overheid."
                  link="/arrangements"
                  linkText="Bekijk regelingen"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
