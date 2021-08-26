import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React from "react";
import Footer from "../../components/common/footer";
import Head from "next/head";
import Header from "../../components/common/header";
import PageHeader from "../../components/common/pageheader";
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import CasesTable from "../../components/cases/table";

function Index() {

  const title = 'Cases';
  const zakenHref = '/products/' + Math.floor(Math.random() * 10);

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Grid item xs={2}>
          <ActionMenu />
        </Grid>
        <Grid item xs={10} >
          <PageHeader title={title}/>
          Zaken zijn stom
          <CasesTable />
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
