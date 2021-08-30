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
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import ProductTable from "../../components/products/table";
import ProductCards from "../../components/products/card";

function Index() {

  const title = 'Producten'
  const description = 'Omschrijving over producten'
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "product omschrijving"
    },
    {
      id: 2,
      name: "Product 2",
      description: "product omschrijving 2"
    }];

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container >
        <Hidden smDown>
          <Grid item md={2}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={10}>
          <PageHeader title={title} />
          <Box paddingTop={2} paddingBottom={2}>
            <p>{description}</p>
          </Box>

          <ProductCards products={products}/>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
