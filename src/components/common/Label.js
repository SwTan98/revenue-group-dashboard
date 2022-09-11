import React from "react";
import PropTypes from "prop-types";

import styles from "./Label.module.scss";

const Label = ({ text }) => {
  return <span className={styles.label}>{text}</span>;
};

Label.propTypes = {
  text: PropTypes.string,
};

Label.defaultProps = {
  text: "",
};

export default Label;
