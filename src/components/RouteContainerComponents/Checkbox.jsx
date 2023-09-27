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
        showLayer("Stop" + JSON.stringify(i+1));
        showLayer("Stop" + JSON.stringify(i+1)+ "-label");
      }
      showLayer("route");
    } else {
      removeFromSelectedRouteList(route);
      for(let i = 0; i<routeLength; i++){
        hideLayer("Stop" + JSON.stringify(i+1));
        hideLayer("Stop" + JSON.stringify(i+1)+ "-label");
      }
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
