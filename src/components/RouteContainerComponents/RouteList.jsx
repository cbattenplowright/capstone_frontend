import Route from "./Route";

const RouteList = ({
  routes,
  addToSelectedRouteList,
  removeFromSelectedRouteList,
}) => {
  const routeComponents = routes.map((route) => {
    return (
      <Route
        key={route.id}
        route={route}
        addToSelectedRouteList={addToSelectedRouteList}
        removeFromSelectedRouteList={removeFromSelectedRouteList}
      />
    );
  });

  return <div id="route-list">{routeComponents}</div>;
};

export default RouteList;
