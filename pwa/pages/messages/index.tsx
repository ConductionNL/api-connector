import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import MessagesList from "../../components/messages/list";
import Box from "@material-ui/core/Box";

function Index() {

  const title = 'Mijn berichten';
  const description = 'Hier ziet u een overzicht van berichten die naar u verzonden zijn.';
  const messages = [
    {
      id: "19203841",
      name: "Welkom bij Open Inwoner",
      sender: "Gemeente Demodam",
      description: " — U bent succesvol geregistreerd bij Open Inwoner",
      dateCreated: "30-08-2021"
    }];

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      <Grid container>
        <Hidden smDown>
          <Grid item md={2}>
            <ActionMenu/>
          </Grid>
        </Hidden>
        <Grid item sm={12} md={10}>
          <PageHeader title={title}/>
          <Box paddingTop={2} paddingBottom={2}>
            <p>{description}</p>
          </Box>
          <MessagesList messages={messages} showDesc={true} />
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
