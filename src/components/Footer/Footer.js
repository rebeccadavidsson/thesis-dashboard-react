/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/thesisproject/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              Master Thesis Computational Science 2021 (UvA & Avanade)
            </ListItem>

          </List>
        </div>
        <p className={classes.right}>
          <a target="_blank" href="https://www.linkedin.com/in/rebecca-davidsson-7a8931127/">Rebecca Davidsson</a>
        </p>
      </div>
    </footer>
  );
}
