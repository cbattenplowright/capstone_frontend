import { useState } from "react";

const Checkbox = ({
  route,
  routeLength,
  addToSelectedRouteList,
  removeFromSelectedRouteList,
  showLayer,
  hideLayer
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    if (!isChecked) {
      addToSelectedRouteList(route);
      for(let i = 0; i<routeLength; i++){
        showLayer(`route-${route.id}-stop-${i+1}`);
        showLayer(`route-${route.id}-stop-${i+1}`+ "-label");
      }
      showLayer(`route-${route.id}`);
    } else {
      removeFromSelectedRouteList(route);
      for(let i = 0; i<routeLength; i++){
        hideLayer(`route-${route.id}-stop-${i+1}`);
        hideLayer(`route-${route.id}-stop-${i+1}`+ "-label");
      }
      hideLayer(`route-${route.id}`);
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
