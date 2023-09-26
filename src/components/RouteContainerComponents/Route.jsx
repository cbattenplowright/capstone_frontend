import Checkbox from "./Checkbox";

const Route = ({
  route,
  addToSelectedRouteList,
  removeFromSelectedRouteList,
}) => {
  return (
    <div id="route">
      <Checkbox
        addToSelectedRouteList={addToSelectedRouteList}
        removeFromSelectedRouteList={removeFromSelectedRouteList}
      />
      <p> {route.routeName} </p>
      <p> {route.distance} </p>
      <p> 3 hours </p>
      <p> {route.orders.length} </p>
    </div>
  );
};

export default Route;
