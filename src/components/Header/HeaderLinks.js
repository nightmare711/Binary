/*eslint-disable*/
import React,{useContext} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import Data from '../../data/context'
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const data = useContext(Data);
  const logOut = () => {
    data.setLogin(false);
  }
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/visualize" className={classes.link}>
          <Tooltip
            id="About"
            title="Visualize"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Visualize
          </Button>
          </Tooltip>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/playground" className={classes.link}>
          <Tooltip
            id="Get-started"
            title="Get Started"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Playground
          </Button>
          </Tooltip>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/about" className={classes.link}>
          <Tooltip
            id="About"
            title="Get to know me!"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            About
          </Button>
          </Tooltip>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="github"
          title="Checkout my GitHub"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://github.com/HoangTran711/Binary"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
      {
        (!data.isLogin)? <ListItem className={classes.listItem}>
        <Link to="/login" className={classes.link}>
          <Tooltip
            id="Get-started"
            title="Login"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Login
          </Button>
          </Tooltip>
        </Link>
      </ListItem> : <ListItem className={classes.listItem}>
        <Link to="/login" className={classes.link}>
          <Tooltip
            id="Get-started"
            title="Logout"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
            onClick={logOut}
          >
            {
              data.account.email
            }
          </Button>
          </Tooltip>
        </Link>
      </ListItem>
      }
    </List>
  );
}
