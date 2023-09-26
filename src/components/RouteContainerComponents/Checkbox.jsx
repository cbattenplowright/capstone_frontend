import { useState } from "react";

const Checkbox = ({
  route,
  addToSelectedRouteList,
  removeFromSelectedRouteList,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    if (!isChecked) {
      addToSelectedRouteList(route);
    } else {
      removeFromSelectedRouteList(route);
    }
    setIsChecked(!isChecked);
  };
  return (
    <div id="checkbox">
      <input
        type="checkbox"
        id="selectedRoute"
        name="selectedRoute"
        checked={isChecked}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Checkbox;
