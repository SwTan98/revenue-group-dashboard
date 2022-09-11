import React from "react";
import dynamic from "next/dynamic";
import cx from "classnames";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Image = dynamic(() => import("next/image"));

const Button = ({ variant, icon, label, onClick, type, rounded }) => {
  return (
    <button
      className={cx(styles.button, styles[variant], {
        [styles.rounded]: rounded,
        [styles.iconOnly]: icon && !label,
      })}
      type={type}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt="" width={16} height={16} />}
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  icon: PropTypes.string,
  label: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  rounded: PropTypes.bool,
};

Button.defaultProps = {
  variant: "primary",
  icon: "",
  label: "",
  onClick: () => {},
  type: "button",
  rounded: false,
};

export default Button;
