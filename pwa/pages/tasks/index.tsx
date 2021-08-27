import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React from "react";
import Footer from "../../components/common/footer";
import Head from "next/head";
import Header from "../../components/common/header";
import TaskTable from "../../components/tasks/table";
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";

function Index() {

  const zakenHref = '/products/' + Math.floor(Math.random() * 10);
  const title = 'My tasks'

  return <>
    <Layout title="Zaken index" description="waar kan ik deze description zien">
      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={2}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={10}>
          <PageHeader title={title} />
        </Grid>
      </Grid>
    </Layout >
  </>
}

export default Index
