import "./RouteList.css";
import Checkbox from "./Checkbox";

const Route = ({
  route,
  addToSelectedRouteList,
  removeFromSelectedRouteList,
  showLayer,
  hideLayer
}) => {

  const displayRouteDistance = route.distance !== 0 ?
     <>{(route.distance/1609).toFixed(2)}</>
 : <>loading...</>

  return (
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
      <td>Bob</td>
      {/* <td>{(route.distance/1609).toFixed(2)}</td> */}
      <td>{displayRouteDistance}</td>
      <td>3 hours</td>
      <td>{route.orders.length}</td>
    </tr>
  )
}
export default Route;