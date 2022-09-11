import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import styles from "./Select.module.scss";

const Select = ({ id, options }) => {
  return (
    <div className={styles.wrapper}>
      <select id={id} className={styles.select}>
        {options.map(({ value, label }, index) => (
          <option
            disabled={index === 0}
            selected={index === 0}
            value={value}
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
};

Select.defaultProps = {};

export default Select;
