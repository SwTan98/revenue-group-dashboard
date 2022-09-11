import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import styles from "./TextField.module.scss";

const TextField = ({
  id,
  label,
  placeholder,
  type,
  prepend,
  append,
  onChange,
  value,
  className,
}) => {
  return (
    <div className={cx(styles.textField, className)}>
      {label && (
        <label className={styles.label} htmlFor={id}>
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
          onChange={onChange}
          value={value}
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
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
};

TextField.defaultProps = {
  label: "",
  placeholder: "",
  type: "text",
  prepend: null,
  append: null,
  onChange: () => {},
  value: undefined,
  className: undefined,
};

export default TextField;
