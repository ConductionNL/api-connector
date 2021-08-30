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

let posts = [
  {
    id: 1,
    name: 'Parkeervergunning Amsterdam',
    description: 'Lorem ipsum',
    status: 'Hier heeft u recht op'
  },
  {
    id: 2,
    name: 'Recht om zonnepanelen te plaatsen',
    description: 'Lorem ipsum',
    status: 'Recht nog niet bevestigd'
  },
  {
    id: 3,
    name: 'Parkeervergunning Utrecht',
    description: 'Lorem ipsum',
    status: 'Hier heeft u geen recht op'
  }
]

const Product = () => {
  const router = useRouter()
  const query = router.query
  const item = posts.filter(function (item) {
    return item.id == parseInt(query.id as string, 10);
  });
  if (typeof item[0] != "undefined") {
    const title = item[0]['name']

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
              <p>{"Status: " + item[0]['status']}</p>
              <p>{item[0]['description']}</p>
            </Box>

          </Grid>
        </Grid>
      </Layout>
    </>
  } else {
    return <></>
  }
}

export default Product
