import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import React from "react";
import Footer from "../../components/common/footer";
import Head from "next/head";
import Header from "../../components/common/header";
import PageHeader from "../../components/common/pageheader";
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import ActionMenu from "../../components/common/actionmenu";
import ArrangementsTable from "../../components/arrangements/table";
import StandardCard from "../../components/common/card";
import {makeStyles} from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

import jsondata from '../../public/testdata.json';

const useStyles = makeStyles({
  marginTop: {
    marginTop: 20,
  },
});

function Index({posts}) {
  const classes = useStyles();

  const title = 'Arrangements';
  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={2}>
            <ActionMenu/>
          </Grid>
        </Hidden>

        <Grid item xs={12} md={10} spacing={6}>
          <PageHeader title={title}/>

          <Box paddingTop={2} paddingBottom={2}>
            <p>Description about arrangements</p>
          </Box>

          {
            posts != undefined && posts != null &&
            <Grid container spacing={2}>
              {posts.map((post) => (
                <Grid item xs={4}>
                  <StandardCard
                    smallUpperTitle={"Word of the day"}
                    title={post.name}
                    secondaryTitle="12-04-2020"
                    description={post.description}
                  />
                </Grid>
              ))}
            </Grid>
          }


          <Box className={classes.marginTop}>
            <ArrangementsTable/>
          </Box>

        </Grid>
      </Grid>
    </Layout>
  </>
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  let posts = [
    {
    name: 'An arrangement',
    description: 'Lorem ipsum'
    },
    {
    name: 'An arrangement 2',
    description: 'Lorem ipsum'
    },
    {
    name: 'An arrangement 3',
    description: 'Lorem ipsum'
    }
  ]

  // By returning { props: { posts } }, this page
  // will receive `posts` as a prop at build time
  return {props: {posts}};

}

export default Index
