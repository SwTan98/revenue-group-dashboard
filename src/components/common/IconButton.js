import React from "react";
import Image from "next/image";
import cx from "classnames";
import PropTypes from "prop-types";

import styles from "./IconButton.module.scss";

const Button = ({ variant, icon, onClick, type }) => {
  return (
    <button
      className={cx(styles.iconButton, styles[variant])}
      type={type}
      onClick={onClick}
    >
      <Image src={icon} alt="" width={16} height={16} />
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  icon: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  icon: "",
  onClick: () => {},
  type: "button",
};

export default Button;
