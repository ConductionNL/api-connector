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
import {useGet, Poll, Get, RestfulProvider} from "restful-react";

const Product = () => {
  let title = ""
  const router = useRouter()
  const {id} = router.query

  const { data: zaak } = useGet({
    path: "http://localhost/api/gateways/zaken/zaken/" + id,
  });

  console.log(zaak);

  if (zaak !== null) {
    title = zaak.identificatie
  }

  return <>
      <Layout title={title} description="waar kan ik deze description zien">

        <Grid container>
          <Hidden smDown>
            <Grid item md={3}>
              <ActionMenu/>
            </Grid>
          </Hidden>

          <Grid item xs={12} md={9}>
            <PageHeader title={title}/>

            <Box paddingTop={2} paddingBottom={2}>
              <p>Description about ...</p>
            </Box>

          </Grid>
        </Grid>
      </Layout>
  </>
}

export default Product
