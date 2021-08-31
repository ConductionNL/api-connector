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
import CasesTable from "../../components/cases/table";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MessagesTable from "../../components/messages/table";
import CollapsibleTable from "../../components/messages/collapsibleTable";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function Index() {
  const classes = useStyles();
  const title = 'Lopende zaken';
  const zakenHref = '/products/' + Math.floor(Math.random() * 10);

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      <Grid container >
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card className={classes.root}>
                <CardContent>
                  <CasesTable/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card className={classes.root}>
                  <CardContent>
                    <CollapsibleTable/>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
