import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./Container.module.scss";

const Container = ({ variant, children, className }) => {
  return (
    <div className={cx(styles.container, styles[variant], className)}>
      {children}
    </div>
  );
};

Container.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node,
  className: PropTypes.string,
};

Container.defaultProps = {
  variant: "primary",
  children: null,
  className: undefined,
};

export default Container;
