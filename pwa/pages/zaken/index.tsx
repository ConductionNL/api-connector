import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React from "react";
import Footer from "../../components/common/footer";
import Head from "next/head";
import Header from "../../components/common/header";
import Link from 'next/link'

function Index() {

  const zakenHref = '/zaken/' + Math.floor(Math.random() * 10);

  return <div>

    <Header/>

    <Container>
      Zaken
      <Button color="primary">
        <Link href={zakenHref}>
        Naar random zaak
        </Link>
      </Button>
    </Container>

    <Footer/>
  </div>
}

export default Index
