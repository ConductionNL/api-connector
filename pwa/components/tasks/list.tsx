import React from 'react';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

function createData(name, description, status) {
  return {name, description, status};
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

export default function TaskList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Taak 1"  secondary="Jan 9, 2014"/>
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Taak 2"  secondary="Jan 9, 2014"/>
        </ListItemLink>
      </List>
    </div>
  );
}
