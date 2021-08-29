import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React from "react";
import Footer from "../../components/common/footer";
import Head from "next/head";
import Header from "../../components/common/header";
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";

function Index() {

  const title = 'Products'

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

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
