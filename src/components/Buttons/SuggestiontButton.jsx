import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons/faFlag";

export const SuggestionButton = ({ className, children, ...rest }) => {
  const cName = `${prefix}-button--attachment`;

  return (
    <Button
      {...rest}
      className={classNames(cName, className)}
      icon={<FontAwesomeIcon icon={faFlag} />}
    >
      {children}
    </Button>
  );
};

SuggestionButton.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

SuggestionButton.defaultProps = {
  className: "",
};

export default SuggestionButton;
