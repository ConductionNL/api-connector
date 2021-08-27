import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';

import {makeStyles} from "@material-ui/core/styles";
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  const router = useRouter()

  const [state, setState] = React.useState({
    bottumNavigation: 0,
  });

  const handleChange = (event, newValue) => {
    if(newValue == 'displayUserDrawer'){
      setState({ ...state, ['displayUserDrawer']: true });
    }
    else {
      router.push('/' + newValue)
    }
    setState({ ...state, ['bottumNavigation']: newValue });
  };


  return (
    <footer>
      <BottomNavigation
        value={state['bottumNavigation']} onChange={handleChange}
        showLabels
        className={classes.sectionMobile}
      >
        <BottomNavigationAction label="Messages" value="messages" icon={<MailIcon />} />
        <BottomNavigationAction label="Tasks" value="tasks" icon={<NotificationsIcon />} />
        <BottomNavigationAction label="User" value="displayUserDrawer" icon={<PersonIcon />} />
      </BottomNavigation>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#757575"
        color="white"
        className={classes.sectionDesktop}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Messages</Box>
              <Box>
                <Link href="/" color="inherit">
                  Backup
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Roll
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Conduction &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
