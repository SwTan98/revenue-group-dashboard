import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./Container.module.scss";

const Container = ({ variant, children }) => {
  return (
    <div className={cx(styles.container, styles[variant])}>{children}</div>
  );
};

Container.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node,
};

Container.defaultProps = {
  variant: "primary",
  children: null,
};

export default Container;
