import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import PlansTable from "../../components/plans/table";

function Index() {

  const title = 'My plans';

  return <>
    <Layout title={title} description="waar kan ik deze description zien"  >
      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={2}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={10}>
          <PageHeader title={title} />
          <Box paddingTop={2} paddingBottom={2}>
            <p>Your personal plans</p>
          </Box>
          <PlansTable />
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
