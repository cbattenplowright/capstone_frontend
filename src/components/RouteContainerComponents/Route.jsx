import "./RouteList.css";
import RouteCheckbox from "./RouteCheckbox";

const Route = ({
  route,
  addToSelectedRouteList,
  removeFromSelectedRouteList,
  showLayer,
  hideLayer
}) => {
  // Fixes infinite loop problem when generating route
  const displayRouteDistance =
    route.distance !== 0 ? <>{(route.distance / 1609).toFixed(2)}</> : <>TBC</>;

  return (
    <tr>
      <td>
        <RouteCheckbox
          route={route}
          routeLength={route.orders.length}
          addToSelectedRouteList={addToSelectedRouteList}
          removeFromSelectedRouteList={removeFromSelectedRouteList}
          showLayer={showLayer}
          hideLayer={hideLayer}
        />
      </td>
      <td>{route.routeName}</td>
      <td>Bob</td>
      <td>{displayRouteDistance}</td>
      <td>3 hours</td>
      <td>{route.orders.length}</td>
    </tr>
  );
};
export default Route;
