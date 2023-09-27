import "./RouteList.css";
import Checkbox from "./Checkbox";

const Route = ({
  route,
  addToSelectedRouteList,
  removeFromSelectedRouteList,
  showLayer,
  hideLayer
}) => {
  return (
<table>
  <caption>List of Routes</caption>
  <thead>
    <tr>
      <th></th>
      <th>Route Name</th>
      <th>Driver Name</th>
      <th>Distance (Miles)</th>
      <th>Time</th>
      <th>Deliveries</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <Checkbox
          route={route}
          routeLength = {route.orders.length}
          addToSelectedRouteList={addToSelectedRouteList}
          removeFromSelectedRouteList={removeFromSelectedRouteList}
          showLayer={showLayer}
          hideLayer={hideLayer}
        />
      </td>
      <td>{route.routeName}</td>
      <td>{route.van.driverName}</td>
      <td>{(route.distance/1609).toFixed(2)}</td>
      <td>3 hours</td>
      <td>{route.orders.length}</td>
    </tr>
  </tbody>
</table>
  )
}
export default Route;