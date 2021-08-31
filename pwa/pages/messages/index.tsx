import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import MessagesCard from "../../components/messages/card";
import MessagesTable from "../../components/messages/table";

function Index() {

  const title = 'Mijn berichten';

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
          <MessagesCard/>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
