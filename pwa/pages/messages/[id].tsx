import {useRouter} from 'next/router'
import React from "react";

import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import {TextField, Icon, Typography, Link} from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

function Message() {
  const router = useRouter();
  const {id} = router.query;
  const classes = useStyles();
  const message =
    {
      id: "19203841",
      name: "Welkom bij Open Iwoner",
      sender: "Gemeente Demodam",
      description: "U bent succesvol geregistreerd bij Open Inwoner",
      dateCreated: "30-08-2021"
    };

  return <>
    <Layout title={message.name} description="waar kan ik deze description zien">

      <Grid container>
        <Hidden smDown>
          <Grid item md={2}>
            <ActionMenu/>
          </Grid>
        </Hidden>

        <Grid item xs={12} md={10}>
          <PageHeader title={message.name}/>

          <Box paddingTop={2} paddingBottom={2}>
            <Typography><b>Afzender: </b>{message.sender}</Typography>
            <Typography><b>Datum: </b>{message.dateCreated}</Typography>
          </Box>
          <Box paddingBottom={2}>
            <Divider/>
          </Box>
          <Box paddingBottom={2}>
            <p>{message.description}</p>
          </Box>

          {/*<Box paddingTop={2} paddingBottom={2}>*/}
          {/*  <FormControl fullWidth>*/}
          {/*    <TextField*/}
          {/*      id="messageTextField"*/}
          {/*      label="Respond here"*/}
          {/*      multiline*/}
          {/*      rows={4}*/}
          {/*      variant="filled"*/}
          {/*    />*/}
          {/*  </FormControl>*/}
          {/*</Box>*/}

          <div>
            <Link href="/messages">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<ArrowBackIcon/>}
              >
                Terug
              </Button>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon/>}
            >
              Naar prullenbak
            </Button>
          </div>

        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Message
