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
  const description = 'Jouw persoonlijke taken'
  const tasks = [
    {
      id: 1,
      name: "Taak 1",
      description: "Omschrijving van taak 1"
    },
    {
      id: 2,
      name: "Taak 2",
      description: "Omschrijving van taak 2"
    }];

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
          <Box paddingTop={2} paddingBottom={2}>
            <p>{description}</p>
          </Box>

          <TaskTable tasks={tasks}/>
        </Grid>
      </Grid>
    </Layout >
  </>
}

export default Index
