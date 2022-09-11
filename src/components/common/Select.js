import React from "react";
import Image from "next/image";
import cx from "classnames";
import PropTypes from "prop-types";

import styles from "./Select.module.scss";

const Select = ({ id, options, className, onChange, value }) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <select
        id={id}
        className={styles.select}
        defaultValue=""
        value={value}
        onChange={onChange}
      >
        {options.map(({ value: optionValue, label }, index) => (
          <option
            disabled={index === 0}
            value={optionValue}
            key={`select-${id}-option-${index}`}
          >
            {label}
          </option>
        ))}
      </select>
      <div className={styles.icon}>
        <Image src="/icons/unfold_more.svg" alt="" width={12} height={12} />
      </div>
    </div>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Select.defaultProps = {
  className: undefined,
  onChange: () => {},
  value: undefined,
};

export default Select;
