import "./RouteList.css";
import Checkbox from "./Checkbox";

const Route = ({
  route,
  addToSelectedRouteList,
  removeFromSelectedRouteList,
}) => {
  return (
<table>
  <caption>List of Routes</caption>
  <thead>
    <tr>
      <th></th>
      <th>Route Name</th>
      <th>Driver Name</th>
      <th>Distance</th>
      <th>Time</th>
      <th>Deliveries</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <Checkbox
          route={route}
          addToSelectedRouteList={addToSelectedRouteList}
          removeFromSelectedRouteList={removeFromSelectedRouteList}
        />
      </td>
      <td>{route.routeName}</td>
      <td>{route.van.driverName}</td>
      <td>{route.distance}</td>
      <td>3 hours</td>
      <td>{route.orders.length}</td>
    </tr>
  </tbody>
</table>
  )
}
export default Route;