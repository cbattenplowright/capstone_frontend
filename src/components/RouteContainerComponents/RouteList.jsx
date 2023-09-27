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

  return <div id="route-list">{routeComponents}</div>;
};

export default RouteList;
