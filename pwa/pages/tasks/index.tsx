import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
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
import TasksTable from "../../components/tasks/table";

function Index() {

  const title = 'Mijn taken'

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
            <p>Your personal tasks</p>
          </Box>

          <TaskTable />
        </Grid>
      </Grid>
    </Layout >
  </>
}

export default Index
