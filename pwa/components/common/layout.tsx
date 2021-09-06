import Head from "next/head";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import React from "react";

import Header from "./header";
import Footer from "./footer";
import {makeStyles} from "@material-ui/core/styles";
import { RestfulProvider } from "restful-react";


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
      <RestfulProvider
        base="http://localhost/api"
        requestOptions={(url, method, requestBody) => ({ headers: { Accept: 'application/json' } })}>
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
      </RestfulProvider>
    </>
  );

}

export default Layout;
