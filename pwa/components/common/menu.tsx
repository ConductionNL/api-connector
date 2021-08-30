import React from 'react';
import {alpha, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Box from "@material-ui/core/Box";

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';

import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Link from "next/link";
import Drawer from '@material-ui/core/Drawer';
import {useRouter} from 'next/router';


import ActionMenu from "../../components/common/actionmenu";
import DrawerMenu from "../../components/common/drawermenu";
import PageHeader from "./pageheader";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
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
  list: {
    width: 250,
  },
}));

export default function MainMenu() {

  const router = useRouter()
  const classes = useStyles();

  const [state, setState] = React.useState({
    displayMenuDrawer: false,
    displayUserDrawer: false,
    loggedIn: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const loginUser = (status) => {


    setState({...state, ['loggedIn']: status});
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Container>
          <Toolbar>

            <div className={classes.sectionDesktop}>
              <Box paddingRight={2}>
                <Typography variant="h6" color="inherit">
                  <Link href="/news" >
                    <span style={{color: 'white'}}>
                    Nieuws
                    </span>
                  </Link>
                </Typography>
              </Box>
              <Box paddingRight={2}>
                <Typography variant="h6" color="inherit">
                  <Link href="/products" >
                    <span style={{color: 'white'}}>
                    Producten
                    </span>
                  </Link>
                </Typography>
              </Box>
            </div>

            <div className={classes.sectionMobile}>
              <IconButton aria-label="show 17 new notifications" color="inherit"
                          onClick={toggleDrawer('displayMenuDrawer', true)}>
                <MenuIcon/>
              </IconButton>
              <Drawer anchor={'left'} open={state['displayMenuDrawer']}
                      onClose={toggleDrawer('displayMenuDrawer', false)}>
                <div
                  className={classes.list}
                  role="presentation"
                  onClick={toggleDrawer('displayMenuDrawer', false)}
                  onKeyDown={toggleDrawer('displayMenuDrawer', false)}
                >
                  <DrawerMenu/>
                </div>
              </Drawer>
            </div>

            <div className={classes.grow}/>

            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit" onClick={() => router.push('/messages')}>
                <Badge badgeContent={4} color="secondary">
                  <MailIcon/>
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit" onClick={() => router.push('/tasks')}>
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon/>
                </Badge>
              </IconButton>

              <IconButton aria-label="show 17 new notifications" color="inherit" onClick={() => router.push('/user')}>
                <PersonIcon/>
              </IconButton>

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={() => router.push('/user')}
                color="inherit"
              >
                <Typography variant="h5">
                  Inloggen
                </Typography>
              </IconButton>
            </div>

            <div className={classes.sectionMobile}>

              <IconButton aria-label="show 17 new notifications" color="inherit"
                          onClick={toggleDrawer('displayUserDrawer', true)}>
                <PersonIcon/>
              </IconButton>
              <Drawer anchor={'right'} open={state['displayUserDrawer']}
                      onClose={toggleDrawer('displayUserDrawer', false)}>
                <div
                  className={classes.list}
                  role="presentation"
                  onClick={toggleDrawer('displayUserDrawer', false)}
                  onKeyDown={toggleDrawer('displayUserDrawer', false)}
                >
                  <ActionMenu/>
                </div>
              </Drawer>

              <Typography variant="h5">
                Inloggen
              </Typography>

            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
