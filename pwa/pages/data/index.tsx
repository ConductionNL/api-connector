import Button from "@material-ui/core/Button";
import React, {ReactNode} from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import {Tab, Tabs, Typography, Box} from "@material-ui/core";
import classes from "*.module.css";
import {Theme} from "@material-ui/core/styles";
import {makeStyles} from "@material-ui/core/styles";
import PersonalInfo from "../../components/data/personal_info";
import ChildrenInfo from "../../components/data/children_info";
import ParentsInfo from "../../components/data/parents_info";


function Index() {

  const title = 'Mijn gegevens';

  const person = {
    bsn: "1907asd1293",
    naam: {
      aanschrijfwijze: "H.W. baron van den Aedel"
    },
    geboorte: {
      plaats: "Nederland"
    },
    verblijfplaats: {
      woonplaats: 'Amsterdam',
      adresregel1: "Appelstraat 1",
      adresregel2: "1234 AB Amsterdam",
      adresregel3: "Nederland"
    }
  };

  const children = [
    {
    bsn: "1907asd1293",
    naam: {
      aanschrijfwijze: "A.S. van den Aedel"
    },
    geboorte: {
      plaats: "Nederland"
    },
    verblijfplaats: {
      woonplaats: 'Amsterdam',
      adresregel1: "Appelstraat 1",
      adresregel2: "1234 AB Amsterdam",
      adresregel3: "Nederland"
    }
    },
    {
    bsn: "215415asd12",
    naam: {
      aanschrijfwijze: "S.B. van den Aedel"
    },
    geboorte: {
      plaats: "Nederland"
    },
    verblijfplaats: {
      woonplaats: 'Amsterdam',
      adresregel1: "Appelstraat 1",
      adresregel2: "1234 AB Amsterdam",
      adresregel3: "Nederland"
    }
    },
  ];

  const parents = [
    {
    bsn: "sdsga1241zdf",
    naam: {
      aanschrijfwijze: "E.D. van den Aedel"
    },
    geboorte: {
      plaats: "Nederland"
    },
    verblijfplaats: {
      woonplaats: 'Amsterdam',
      adresregel1: "Appelstraat 1",
      adresregel2: "1234 AB Amsterdam",
      adresregel3: "Nederland"
    }
    },
    {
    bsn: "12412afgdsg",
    naam: {
      aanschrijfwijze: "B.B. Doe"
    },
    geboorte: {
      plaats: "Nederland"
    },
    verblijfplaats: {
      woonplaats: 'Amsterdam',
      adresregel1: "Appelstraat 1",
      adresregel2: "1234 AB Amsterdam",
      adresregel3: "Nederland"
    }
    },
  ];

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu/>
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title}/>
          <Box paddingTop={3} paddingBottom={2}>
            <PersonalInfo person={person}/>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <ChildrenInfo children={children}/>
              </Grid>
              <Grid item sm={6}>
                <ParentsInfo parents={parents}/>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

    </Layout>
  </>
}

export default Index
