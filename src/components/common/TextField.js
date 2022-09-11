import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./TextField.module.scss";

const TextField = ({ id, label, placeholder, type, prepend, append }) => {
  return (
    <div className={styles.textField}>
      {label && (
        <label className={styles.label} for={id}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {prepend && <span className={styles.node}>{prepend}</span>}
        <input
          className={styles.input}
          type={type}
          id={id}
          placeholder={placeholder}
        />
        {append && <span className={styles.node}>{append}</span>}
      </div>
    </div>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  prepend: PropTypes.node,
  append: PropTypes.node,
};

TextField.defaultProps = {
  label: "",
  placeholder: "",
  type: "text",
  prepend: null,
  append: null,
};

export default TextField;
