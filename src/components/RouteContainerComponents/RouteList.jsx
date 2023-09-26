import Route from "./Route";

const RouteList = ({ routes }) => {
  const routeComponents = routes.map((route) => {
    return <Route key={route.id} route={route} />;
  });

  return <div id="route-list">{routeComponents}</div>;
};

export default RouteList;
