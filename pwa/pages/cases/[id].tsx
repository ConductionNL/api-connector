import {useRouter} from 'next/router'
import React from "react";

import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";

const Product = () => {
  const title = "Trouwen | 95128942"
  const router = useRouter()
  const {id} = router.query

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
            <p>Description about ...</p>
          </Box>

        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Product
