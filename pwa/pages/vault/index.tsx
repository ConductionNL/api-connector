import Button from "@material-ui/core/Button";
import React from "react";
import Link from 'next/link'
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import {Tab, Tabs, Typography} from "@material-ui/core";
import ProofTable from "../../components/vault/proofs";
import DocumentTable from "../../components/vault/documents";
import {makeStyles, Theme} from "@material-ui/core/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Index() {


  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));

  const title = 'Mijn datakluis';

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      <Grid container>
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu/>
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title}/>
          <Box paddingTop={2} paddingBottom={2}>
            <p>Uw kluis is een plaats waar u persoonsinformatie kunt opslaan en optioneel kunt delen, dit kunnen
              bewijzen zijn of claims (bijv. bewijs van verblijf) of documenten die nodig zijn voor een bepaalde
              regeling.</p>
          </Box>
          <Grid container>
            <Grid item xs={12}>
              <Tabs
                orientation="horizontal"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                <Tab label="Bewijzen" {...a11yProps(0)} />
                <Tab label="Documenten" {...a11yProps(1)} />
              </Tabs>
            </Grid>
            <Grid item xs={9}>
              <TabPanel value={value} index={0}>
              </TabPanel>
              <TabPanel value={value} index={1}>
              </TabPanel>
            </Grid>
          </Grid>
          {/*<Grid container spacing={2}>*/}
          {/*  <Grid item sm={6}>*/}
          {/*    <ChildrenInfo/>*/}
          {/*  </Grid>*/}
          {/*  <Grid item sm={6}>*/}
          {/*    <ParentsInfo/>*/}
          {/*  </Grid>*/}
          {/*</Grid>*/}
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
