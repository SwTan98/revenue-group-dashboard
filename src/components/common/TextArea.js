import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./TextArea.module.scss";

const TextArea = ({ id, label, placeholder, rows, maxLength }) => {
  const [count, setCount] = useState(0);

  const countCharacters = (e) => {
    const currentCount = e.target.value.length;
    if (!currentCount) {
      setCount(0);
      return;
    }
    setCount(currentCount);
  };

  return (
    <div className={styles.textArea}>
      {label && (
        <label className={styles.label} for={id}>
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
            onChange={countCharacters}
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
};

TextArea.defaultProps = {
  label: "",
  placeholder: "",
  rows: undefined,
  maxLength: undefined,
};

export default TextArea;
