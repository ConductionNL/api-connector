import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function MessagesList({messages = null, showDesc = false}) {
  const classes = useStyles();

  return <List className={classes.root}>
    {
      messages !== null &&
      messages.map((message) => (
        <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={message.sender} src="/static/images/avatar/1.jpg"/>
              </ListItemAvatar>
              <ListItemText
                primary={message.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {message.sender}
                    </Typography>
                    {
                      showDesc == true &&
                      message.description
                    }
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <Button variant="outlined" color="primary">
                  <Link href={"/messages/" + message.id}>
                    Bekijken
                  </Link>
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          <Divider variant="inset" component="li"/>
        </>
      ))
    }
  </List>
}

