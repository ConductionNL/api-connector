import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React from "react";
import Footer from "../../components/common/footer";
import Head from "next/head";
import Header from "../../components/common/header";
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import ProductTable from "../../components/products/table";
import ProductCard from "../../components/products/card";
import PaperCard from "../../components/common/paperCard";
import Chip from "@material-ui/core/Chip";
import CheckIcon from "@material-ui/icons/Check";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Index() {

  const title = 'Producten en diensten'
  const description = 'Omschrijving over producten'
  const categories = [
    {
      id: 1,
      name: "Diensten",
      description: "product omschrijving"
    },
    {
      id: 2,
      name: "Vergunningen",
      description: "product omschrijving 2"
    },
    {
      id: 2,
      name: "Regelingen",
      description: "product omschrijving 2"
    }];

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container >
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title} />
          <Box paddingTop={2} paddingBottom={2}>
            <p>{description}</p>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={6}>
              <PaperCard
                title="Producten"
                description="De Tijdelijke Ondersteuning Noodzakelijke Kosten (TONK) is een tijdelijke eenmalige financiële ondersteuning voor als u een aanzienlijke inkomensterugval heeft als gevolg van de coronamaatregelen. En als u hierdoor problemen heeft met het betalen van uw woonkosten. Het gaat dan om de huur of hypotheek en de kosten van elektriciteit, gas en water en eventuele servicekosten."
                link="/claims"
                linkText="Lees meer "
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <PaperCard
                title="Diensten"
                description="De uitkering volgens de Participatiewet (bijstand) is een geldbedrag per maand dat u krijgt van de gemeente, om in uw levensonderhoud te kunnen voorzien. Voor mensen met een inkomen onder 110% van het minimumloon en weinig of geen vermogen. "
                link="/documents"
                linkText="Lees meer of vraag aan"
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <PaperCard
                title="Verguningen"
                description="Een bedrag dat u ieder jaar krijgt bovenop uw minimuminkomen. Voor mensen die minimaal 5 jaar een minimum inkomen hebben (uitkering of werk). "
                link="/processes"
                linkText="Lees meer of vraag aan"
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <PaperCard
                title="Regelingen"
                description="Zelfstandigen kunnen in (tijdelijke) financiële problemen komen die het voortbestaan van hun bedrijf bedreigen. In bepaalde gevallen kunnen zij dan een beroep doen op het Besluit bijstandverlening zelfstandigen (Bbz). "
                link="/authorizations"
                linkText="Lees meer of vraag aan"
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <PaperCard
                title="Melding"
                description="Zelfstandigen kunnen in (tijdelijke) financiële problemen komen die het voortbestaan van hun bedrijf bedreigen. In bepaalde gevallen kunnen zij dan een beroep doen op het Besluit bijstandverlening zelfstandigen (Bbz). "
                link="/authorizations"
                linkText="Lees meer of vraag aan"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
