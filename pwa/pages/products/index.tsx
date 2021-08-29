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
import CasesTable from "../../components/arrangements/table";

function Index() {

  const zakenHref = '/products/' + Math.floor(Math.random() * 10);

  return <>
    <Layout title="Zaken index" description="waar kan ik deze description zien">

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
