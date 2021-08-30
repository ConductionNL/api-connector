import {useRouter} from 'next/router'
import React from "react";

import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import {TextField, Icon} from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';

import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
  const title = "Brunch this weekend?";
  const description = " — I'll be in your neighborhood doing errands this…";
  const classes = useStyles();

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container>
        <Hidden smDown>
          <Grid item md={2}>
            <ActionMenu/>
          </Grid>
        </Hidden>

        <Grid item xs={12} md={10}>
          <PageHeader title={title}/>

          <Box paddingTop={2} paddingBottom={2}>
            <p>{description}</p>
          </Box>

          <Box paddingTop={2} paddingBottom={2}>
            <FormControl fullWidth>
              <TextField
                id="messageTextField"
                label="Respond here"
                multiline
                rows={4}
                variant="filled"
              />
            </FormControl>
          </Box>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >Send
          </Button>

        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Message
