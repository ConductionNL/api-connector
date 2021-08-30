import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import TaskList from "../../components/tasks/list";
import Messages from "../../components/messages/list";
import Typography from "@material-ui/core/Typography";
import ArrangementsTable from "../../components/arrangements/table";
import {makeStyles} from "@material-ui/core";

function Index() {

  const useStyles = makeStyles({
    marginTop: {
      marginTop: 20,
    },
  });

  const title = 'Overview';
  const classes = useStyles();
  const messages = [
    {
      id: "19203841",
      name: "Welkom bij Open Inwoner",
      sender: "Gemeente Demodam",
      description: " — U bent succesvol geregistreerd bij Open Inwoner",
      dateCreated: "30-08-2021"
    }];


  return <>
    <Layout title={title} description="waar kan ik deze description zien" >

      <Grid container >
        <Hidden smDown>
          <Grid item md={2}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={10}>
          <PageHeader title={title} />
          <Box paddingTop={2} paddingBottom={2}>
            <p>Your personal page</p>
            </Box>
          <Grid className={classes.marginTop} item xs container direction="row" spacing={2}>
            <Grid item xs={12} >
              <Typography variant="h6">Regelingen</Typography>
              <ArrangementsTable />
            </Grid>
            <Grid item xs={6} >
              <Typography variant="h6">Berichten</Typography>
              <Messages messages={messages} />
            </Grid>
            <Grid item xs={6} >
              <Typography variant="h6">Taken</Typography>
              <TaskList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
