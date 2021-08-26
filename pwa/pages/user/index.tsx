import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";

function Index() {

  const title = 'My data';

  return <>
    <Layout title={title} description="waar kan ik deze description zien" >
      <Grid container>
        <Grid item xs={4}>
          <ActionMenu />
        </Grid>
        <Grid item xs={8} >

        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
