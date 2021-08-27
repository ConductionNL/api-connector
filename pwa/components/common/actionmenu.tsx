import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ActionMenu() {
  const classes = useStyles();
  const router = useRouter()

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">

        <ListItem button onClick={() => router.push('/user')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>

        <ListItem button onClick={() => router.push('/data')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Data" />
        </ListItem>

        <ListItem button onClick={() => router.push('/plans')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Plans" />
        </ListItem>

        <ListItem button onClick={() => router.push('/messages')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>

        <ListItem button onClick={() => router.push('/tasks')}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>

        <ListItem button onClick={() => router.push('/cases')}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Cases" />
        </ListItem>

        <ListItem button onClick={() => router.push('/vault')}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Vault" />
        </ListItem>

        <ListItem button onClick={() => router.push('/logging')}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Logging" />
        </ListItem>

        <ListItem button onClick={() => router.push('/')}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>

      </List>
    </div>
  );
}
