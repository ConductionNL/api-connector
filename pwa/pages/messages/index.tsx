import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import MessagesList from "../../components/tasks/messages";
import Box from "@material-ui/core/Box";

function Index() {

  const title = 'My messages';

  return <>
    <Layout title={title} description="waar kan ik deze description zien"  >
      <Grid container >
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title} />
          <Box paddingTop={2} paddingBottom={2}>
            <p>Message description</p>
          </Box>
          <MessagesList/>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
