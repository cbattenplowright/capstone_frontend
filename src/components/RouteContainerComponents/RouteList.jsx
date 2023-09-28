import Route from "./Route";

const RouteList = ({
  routes,
  addToSelectedRouteList,
  removeFromSelectedRouteList,
  showLayer,
  hideLayer
}) => {
  const routeComponents = routes.map((route) => {
    return (
      <Route
        key={route.id}
        route={route}
        addToSelectedRouteList={addToSelectedRouteList}
        removeFromSelectedRouteList={removeFromSelectedRouteList}
        showLayer={showLayer}
        hideLayer={hideLayer}
      />
    );
  });

  return <div id="route-list">
    <table>
  <caption id="list-caption">List of Routes</caption>
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
  <tbody>{routeComponents}
  </tbody>
</table>
</div>;
};

export default RouteList;
