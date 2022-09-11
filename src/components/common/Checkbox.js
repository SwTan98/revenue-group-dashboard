import React from "react";
import PropTypes from "prop-types";

import styles from "./Checkbox.module.scss";

const Checkbox = ({ id, label, value }) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" id={id} name={id} value={value} />
      <label className={styles.label} for={id}>
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  text: PropTypes.string,
};

Checkbox.defaultProps = {
  text: "",
};

export default Checkbox;
