/* eslint-disable react/prop-types */
import cx from "classnames";

import Icon from "metabase/components/Icon";

const Clearable = ({ onClear, children, className }) => (
  <span className={cx("flex align-center", className)}>
    {children}
    {onClear && (
      <a
        className="text-light no-decoration pr1 flex align-center"
        onClick={onClear}
      >
        <Icon name="close" size={14} />
      </a>
    )}
  </span>
);

export default Clearable;
