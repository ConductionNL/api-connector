import Head from "next/head";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import React from "react";

import Header from "./header";
import Footer from "./footer";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  containerRuben: {
    paddingTop: theme.spacing(24, 24, 24, 24),
    backgroundColor: '#F5F5F5',
  }
}));


const Layout = ({children, title="Welcome to Demodam!", h1 =null, description="default-description"}) => {

  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header/>

      <Container>
        <Box paddingTop={2} paddingBottom={2}>
        {children}
        </Box>
      </Container>

      <Footer />
    </>
  );

}

export default Layout;
