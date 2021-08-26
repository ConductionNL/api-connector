import {useRouter} from 'next/router'
import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Header from "../../components/common/header";
import Container from "@material-ui/core/Container";
import Footer from "../../components/common/footer";

const Zaak = () => {
  const router = useRouter()
  const {id} = router.query

  return <>

    <Header/>

    <Container>
      <Button color="primary">
        <Link href="/zaken">
          Terug
        </Link>
      </Button>
      <p>Zaak id: {id}</p>
    </Container>

    <Footer/>
  </>
}

export default Zaak
