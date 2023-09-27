import { useState } from "react";

const Checkbox = ({
  route,
  addToSelectedRouteList,
  removeFromSelectedRouteList,
  showLayer,
  hideLayer
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    if (!isChecked) {
      addToSelectedRouteList(route);
      showLayer("route");
    } else {
      removeFromSelectedRouteList(route);
      hideLayer("route");
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
