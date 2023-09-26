import SelectedRoute from "./SelectedRoute";

const SelectedRouteList = ({ selectedRoutes }) => {
  const selectedRouteComponents = selectedRoutes.map((route) => {
    return <SelectedRoute key={route.id} selectedRoute={route} />;
  });
  return <div id="selected-route-list">{selectedRouteComponents}</div>;
};

export default SelectedRouteList;
