import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./TextArea.module.scss";

const TextArea = ({
  id,
  label,
  placeholder,
  rows,
  maxLength,
  onChange,
  value,
}) => {
  const [count, setCount] = useState(0);

  const countCharacters = (e) => {
    const currentCount = e.target.value.length;
    if (!currentCount) {
      setCount(0);
      return;
    }
    setCount(currentCount);
  };

  const handleChange = (e) => {
    onChange(e);
    countCharacters(e);
  };

  return (
    <div className={styles.textArea}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      {maxLength && (
        <span className={styles.input} char-count={`${count} / ${maxLength}`}>
          <textarea
            id={id}
            placeholder={placeholder}
            rows={rows}
            maxLength={maxLength}
            onChange={handleChange}
            value={value}
          />
        </span>
      )}
    </div>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.node,
};

TextArea.defaultProps = {
  label: "",
  placeholder: "",
  rows: undefined,
  maxLength: undefined,
  onChange: () => {},
  value: undefined,
};

export default TextArea;
