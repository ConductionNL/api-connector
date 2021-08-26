import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React from "react";
import Footer from "../../components/common/footer";
import Head from "next/head";
import Header from "../../components/common/header";
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

function Index() {

  const zakenHref = '/products/' + Math.floor(Math.random() * 10);

  return <div>

    <Header/>

    <Container>
      <Typography variant="h1">
        Products
      </Typography>

      Hier kan je de algemene producten vinden van deze gemeente

      <Button color="primary">
        <Link href={zakenHref}>
        Naar product
        </Link>
      </Button>
    </Container>

    <Footer/>
  </div>
}

export default Index
