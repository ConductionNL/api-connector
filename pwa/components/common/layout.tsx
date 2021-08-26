import Head from "next/head";
import Container from "@material-ui/core/Container";
import React from "react";

import Header from "./header";
import Footer from "./footer";

const Layout = ({children, title="Welcome to Demodam!", description="default-description"}) => {

    return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <Container>
        {children}
      </Container>

      <Footer />
    </>
  );

}
export default Layout;
