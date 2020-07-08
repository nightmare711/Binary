import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookMessenger,faInstagramSquare} from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container} style={{transform:"translate(1000px, 0px)"}}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.netlify.com">
                <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg" alt="Deploys by Netlify" />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.facebook.com/messages/t/kudokun0711"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon style={{fontSize:"30px", transform:"translate(20px,5px)"}} className="icon" icon={faFacebookMessenger} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.instagram.com/?hl=vi"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon style={{fontSize:"30px", transform:"translate(20px,5px)"}} className="icon" icon={faInstagramSquare} />
              </a>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
