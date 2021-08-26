import Head from "next/head";
import Header from "./header";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Footer from "./footer";
import React from "react";

const Layout = ({
                  children,
                  title="Welcome to Open-Inwoner!",
                  description="default-description",
                  headerTitle="Demodam"
}) => {
    return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header headerTitle={headerTitle}  />

      <Container>
        {children}
      </Container>

      <Footer />
    </>
  );

}
export default Layout;
