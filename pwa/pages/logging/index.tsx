import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import LoggingTable from "../../components/logging/table";
import Box from "@material-ui/core/Box";

function Index() {

  const title = 'Mijn verwerkingen';

  return <>
    <Layout title={title} description="waar kan ik deze description zien" >
      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={2}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={10}>
          <PageHeader title={title} />
          <Box paddingTop={2} paddingBottom={2}>
            <p>De nederlandse overheid kan uw gegevens voor meerdere doeleinden verwerken, bijvoorbeeld voor het berekenen belasting toeslagen of uitgeven van paspoorten. Met het verwerken bedoelen we het gebruiken, vervanderen of bekijken van uw persoonlijke gegeven. Als gemeente proberen we u zo veel mogenlijk inzicht te geven in wie uw gegevens waarvoor heeft gebruikt. Hier onder treft u een lijst me alle verwerkingen die wij hebbengeregistreerd </p>
          </Box>
          <LoggingTable />
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
