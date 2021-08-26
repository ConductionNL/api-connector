import {useRouter} from 'next/router'
import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'

import Header from "../../components/common/header";
import Container from "@material-ui/core/Container";
import Footer from "../../components/common/footer";
import Typography from '@material-ui/core/Typography';
import Layout from "../../components/common/layout";

const Product = () => {
  const router = useRouter()
  const {id} = router.query

  return <>
    <Layout title="Zaken index" description="waar kan ik deze description zien">

      <Typography variant="h1">
        Product
      </Typography>


      <Button color="primary">
        <Link href="/products">
          Terug
        </Link>
      </Button>
      <p>Product id: {id}</p>


    </Layout>
  </>
}

export default Product
