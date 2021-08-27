import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import ProductTable from "../../components/products/table";
import TaskTable from "../../components/tasks/table";
import Messages from "../../components/common/messages";
import Typography from "@material-ui/core/Typography";

function Index() {

  const title = 'Overview';

  return <>
    <Layout title={title} description="waar kan ik deze description zien" >

      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={2}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={10}>
          <PageHeader title={title} />
          <Grid item xs container direction="row" spacing={2}>
            <Grid item xs={12} >
              <Typography variant="h6">Producten</Typography>
              <ProductTable />
            </Grid>
            <Grid item xs={6} >
              <Typography variant="h6">Berichten</Typography>
              <Messages />
            </Grid>
            <Grid item xs={6} >
              <Typography variant="h6">Taken</Typography>
              <TaskTable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
