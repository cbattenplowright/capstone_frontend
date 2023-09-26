const SelectedRoute = ({ selectedRoute }) => {
  const orders = selectedRoute.orders;
  const mappedOrders = orders.map((order) => {
    return <li>stop: {order.id}</li>;
  });
  return (
    <div id="selected-route">
      <h4>{selectedRoute.routeName}</h4>
      <ul>{mappedOrders}</ul>
    </div>
  );
};

export default SelectedRoute;
