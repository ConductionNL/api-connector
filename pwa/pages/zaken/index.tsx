import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React from "react";
import Footer from "../../components/common/footer";
import Head from "next/head";
import Header from "../../components/common/header";
import Link from 'next/link'
import Layout from "../../components/common/layout";

function Index() {

  const zakenHref = '/zaken/' + Math.floor(Math.random() * 10);

  return <>
    <Layout title="Zaken index" description="waar kan ik deze description zien">
      <p>Zaken
        <Button color="primary">
          <Link href={zakenHref}>
            Naar random zaak
          </Link>
        </Button>
      </p>
      <p>
        Naar
        <Button color="primary">
          <Link href="/">
            home
          </Link>
        </Button>
      </p>
    </Layout>
  </>
}

export default Index
