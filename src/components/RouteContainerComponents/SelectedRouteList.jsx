import Route from "./Route";

const SelectedRouteList = ({}) => {
  const selectedRouteComponents = selectedRoutes.map((route) => {
    return <SelectedRoute key={route.id} route={route} />;
  });
};
