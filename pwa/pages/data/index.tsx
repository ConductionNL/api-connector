import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";

function Index() {

  const title = 'My data';

  return <>
    <Layout title={title} description="waar kan ik deze description zien" >

      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={2}>
            <ActionMenu/>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={10}>
          <PageHeader title={title}/>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
