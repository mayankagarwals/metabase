/* eslint-disable react/prop-types */
import Icon from "metabase/components/Icon";

const NightModeIcon = ({ isNightMode, ...props }) => (
  <Icon name={isNightMode ? "sun" : "moon"} {...props} />
);

export default NightModeIcon;
