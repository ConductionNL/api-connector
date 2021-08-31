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
import PaperCard from "../../components/common/paperCard";


function Index() {

  const title = 'Mijn gegevens';

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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Persoonsgegevens"
                  secondaryTitle="Bron: Basisregistratie Personen"
                  description="In de Basisregistratie Personen (BRP) zijn persoonsgegevens geregistreerd, zoals gegevens over geboorte, verhuizing, huwelijk en vertrek naar het buitenland."
                  link="/data/999995935"
                  linkText="Bekijk persoonsgegevens"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Verwerkingen"
                  description="todo"
                  link="/cases/1"
                  linkText="Bekijk verwerkingen"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Claims"
                  description="Een claim is een uitspraak die jij doet."
                  link="/cases/1"
                  linkText="Bekijk claims"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

    </Layout>
  </>
}

export default Index
