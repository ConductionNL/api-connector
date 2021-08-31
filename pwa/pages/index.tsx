import React from 'react';
import Grid from '@material-ui/core/Grid';

import ActionMenu from 'components/common/actionmenu';
import { RestfulProvider } from "restful-react";

import Layout from 'components/common/layout';
import {setCookie} from "../components/utility/CookieHandler";
import {useRouter} from "next/router";

const handleLogin = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    let url = new URL(window.location.href);

    if (url.searchParams.get('bsn')) {
      setCookie('bsn', url.searchParams.get('bsn'), 5);
    }

    if (url.searchParams.get('name')) {
      setCookie('name', url.searchParams.get('name'), 5);
      router.push('/user');
    }

  }
}

const Welcome = () => (
  <>
    <Layout title="Welkom op Open-Inwoner!" description="waar kan ik deze description zien">
      {
        handleLogin()
      }
      <Grid container>
        <Grid item xs={12}>
          Nieuws hier
        </Grid>
        <Grid item xs={12} >
          Regelingen hier
        </Grid>
      </Grid>
    </Layout>
  </>
);

export default Welcome;

