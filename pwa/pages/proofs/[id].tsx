import {useRouter} from 'next/router'
import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'

import Header from "../../components/common/header";
import Container from "@material-ui/core/Container";
import Footer from "../../components/common/footer";
import Typography from '@material-ui/core/Typography';
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import ProofsTestData from "../../components/data/proofs";

const rows = ProofsTestData()

const Proof = () => {
  const router = useRouter()
  const query = router.query
  const item = rows.filter(function (item) {
    return item.reference == parseInt(query.id as string, 10);
  });
  if (typeof item[0] != "undefined") {
    const title = item[0]['name'] + " | " + query.id

    return <>
      <Layout title={title} description="waar kan ik deze description zien">

        <Grid container>
          <Hidden smDown>
            <Grid item md={2}>
              <ActionMenu/>
            </Grid>
          </Hidden>

          <Grid item xs={12} md={10}>
            <PageHeader title={title}/>

            <Box paddingTop={2} paddingBottom={2}>
              <p>Beschrijving...</p>
            </Box>

          </Grid>
        </Grid>
      </Layout>
    </>
  }
  return <></>
}

export default Proof
