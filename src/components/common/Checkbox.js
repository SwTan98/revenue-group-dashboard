import React from "react";
import PropTypes from "prop-types";

import styles from "./Checkbox.module.scss";

const Checkbox = ({ id, label, value, checked, onChange }) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={id}
        name={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  id: undefined,
  text: "",
  value: "",
  checked: undefined,
  onChange: () => {},
};

export default Checkbox;
